const FIXABLE_JS_ENDINGS = /(\)|\]|\}|['"`]|\w)$/
const JS_CONTROL_LINE = /^\s*(if|for|while|switch|catch|function|class|else|try|finally)\b/
const VOID_HTML_TAGS = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'])

const getLanguage = (filename) => {
  const lower = filename.toLowerCase()
  if (lower.endsWith('.js') || lower.endsWith('.jsx')) return 'javascript'
  if (lower.endsWith('.ts') || lower.endsWith('.tsx')) return 'typescript'
  if (lower.endsWith('.css')) return 'css'
  if (lower.endsWith('.html')) return 'html'
  if (lower.endsWith('.json')) return 'json'
  return 'text'
}

const createIssue = ({ file, line = 1, severity = 'warning', category, message, fixable = false, fixSummary = 'Manual review required' }) => ({
  id: `${file}:${line}:${category}:${message}`,
  file,
  line,
  severity,
  category,
  message,
  fixable,
  fixSummary
})

const shouldAddJavaScriptSemicolon = (line) => {
  const trimmed = line.trim()

  if (!trimmed) return false
  if (trimmed.startsWith('//') || trimmed.startsWith('*') || trimmed.startsWith('/*')) return false
  if (trimmed.endsWith(';') || trimmed.endsWith('{') || trimmed.endsWith('}') || trimmed.endsWith(',') || trimmed.endsWith(':')) return false
  if (trimmed.includes('<') || trimmed.includes('>')) return false
  if (JS_CONTROL_LINE.test(trimmed)) return false

  return FIXABLE_JS_ENDINGS.test(trimmed)
}

const scanJavaScript = (file, content, language) => {
  const issues = []
  const lines = content.split('\n')

  lines.forEach((line, index) => {
    const lineNumber = index + 1
    const trimmed = line.trim()

    if (shouldAddJavaScriptSemicolon(line)) {
      issues.push(createIssue({
        file,
        line: lineNumber,
        category: 'syntax-style',
        message: 'Statement may be missing a semicolon.',
        fixable: true,
        fixSummary: 'Add a semicolon to the statement.'
      }))
    }

    if (/console\.(log|debug)\(/.test(trimmed)) {
      issues.push(createIssue({
        file,
        line: lineNumber,
        severity: 'info',
        category: 'debug-cleanup',
        message: 'Debug logging found in generated code.',
        fixable: true,
        fixSummary: 'Comment out console.log/debug statements.'
      }))
    }

    if (language === 'typescript' && /\bany\b/.test(trimmed)) {
      issues.push(createIssue({
        file,
        line: lineNumber,
        severity: 'info',
        category: 'type-safety',
        message: 'Loose `any` type found.',
        fixable: false,
        fixSummary: 'Needs a human or AI review to choose the correct specific type.'
      }))
    }
  })

  return issues
}

const scanCss = (file, content) => {
  const issues = []

  content.split('\n').forEach((line, index) => {
    const trimmed = line.trim()
    if (
      trimmed.includes(':') &&
      !trimmed.endsWith(';') &&
      !trimmed.endsWith('{') &&
      !trimmed.endsWith('}') &&
      !trimmed.startsWith('@') &&
      !trimmed.includes('/*')
    ) {
      issues.push(createIssue({
        file,
        line: index + 1,
        category: 'css-syntax',
        message: 'CSS declaration may be missing a semicolon.',
        fixable: true,
        fixSummary: 'Add a semicolon to the CSS declaration.'
      }))
    }
  })

  return issues
}

const scanHtml = (file, content) => {
  const issues = []

  if (/<html(?![^>]*\blang=)/i.test(content)) {
    issues.push(createIssue({
      file,
      line: content.slice(0, content.search(/<html/i)).split('\n').length,
      severity: 'info',
      category: 'accessibility',
      message: 'HTML document is missing a language attribute.',
      fixable: true,
      fixSummary: 'Add lang="en" to the html element.'
    }))
  }

  const imgWithoutAltMatches = content.match(/<img\b(?![^>]*\balt=)[^>]*>/gi) || []
  imgWithoutAltMatches.forEach((match) => {
    issues.push(createIssue({
      file,
      line: content.slice(0, content.indexOf(match)).split('\n').length,
      severity: 'info',
      category: 'accessibility',
      message: 'Image is missing alt text.',
      fixable: true,
      fixSummary: 'Add an empty alt attribute so decorative images are explicit.'
    }))
  })

  const openTags = [...content.matchAll(/<([a-z][a-z0-9-]*)(?:\s[^>]*)?>/gi)]
    .map((match) => match[1].toLowerCase())
    .filter((tag) => !VOID_HTML_TAGS.has(tag))
  const closeTags = [...content.matchAll(/<\/([a-z][a-z0-9-]*)>/gi)].map((match) => match[1].toLowerCase())

  openTags.forEach((tag) => {
    const openCount = openTags.filter((item) => item === tag).length
    const closeCount = closeTags.filter((item) => item === tag).length
    if (openCount > closeCount) {
      issues.push(createIssue({
        file,
        category: 'html-structure',
        message: `Possible unclosed <${tag}> tag.`,
        fixable: false,
        fixSummary: 'Needs review because automatic tag placement can break layout.'
      }))
    }
  })

  return issues
}

const scanJson = (file, content) => {
  try {
    JSON.parse(content || '{}')
    return []
  } catch (error) {
    return [createIssue({
      file,
      severity: 'error',
      category: 'json-syntax',
      message: `Invalid JSON: ${error.message}`,
      fixable: false,
      fixSummary: 'Needs review because JSON intent cannot be inferred safely.'
    })]
  }
}

const repairFile = (filename, content, issues) => {
  const language = getLanguage(filename)
  const fixableIssues = issues.filter((issue) => issue.file === filename && issue.fixable)
  let nextContent = content

  if (language === 'javascript' || language === 'typescript') {
    nextContent = nextContent
      .split('\n')
      .map((line, index) => {
        const lineIssues = fixableIssues.filter((issue) => issue.line === index + 1)
        let nextLine = line

        if (lineIssues.some((issue) => issue.category === 'syntax-style') && shouldAddJavaScriptSemicolon(nextLine)) {
          nextLine = `${nextLine};`
        }

        if (lineIssues.some((issue) => issue.category === 'debug-cleanup') && /console\.(log|debug)\(/.test(nextLine.trim())) {
          nextLine = `${nextLine.replace(/^(\s*)/, '$1// ')}`
        }

        return nextLine
      })
      .join('\n')
  }

  if (language === 'css') {
    nextContent = nextContent
      .split('\n')
      .map((line, index) => {
        const shouldFix = fixableIssues.some((issue) => issue.line === index + 1 && issue.category === 'css-syntax')
        return shouldFix && !line.trim().endsWith(';') ? `${line};` : line
      })
      .join('\n')
  }

  if (language === 'html') {
    nextContent = nextContent
      .replace(/<html(?![^>]*\blang=)([^>]*)>/i, '<html lang="en"$1>')
      .replace(/<img\b(?![^>]*\balt=)([^>]*)>/gi, '<img alt=""$1>')
  }

  return nextContent
}

const selfRepairService = {
  scanProject(files = {}) {
    return Object.entries(files).flatMap(([filename, content = '']) => {
      const language = getLanguage(filename)

      if (!content.trim()) return []
      if (language === 'javascript' || language === 'typescript') return scanJavaScript(filename, content, language)
      if (language === 'css') return scanCss(filename, content)
      if (language === 'html') return scanHtml(filename, content)
      if (language === 'json') return scanJson(filename, content)
      return []
    })
  },

  attemptRepair(files = {}, issues = []) {
    const nextFiles = { ...files }
    const repairedIssues = issues.filter((issue) => issue.fixable)
    const unresolvedIssues = issues.filter((issue) => !issue.fixable)

    Object.entries(files).forEach(([filename, content = '']) => {
      nextFiles[filename] = repairFile(filename, content, issues)
    })

    return {
      files: nextFiles,
      repairedIssues,
      unresolvedIssues
    }
  }
}

export default selfRepairService
