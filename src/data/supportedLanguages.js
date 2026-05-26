export const supportedLanguages = [
  { value: 'javascript', label: 'JavaScript', aliases: ['javascript', 'js'] },
  { value: 'typescript', label: 'TypeScript', aliases: ['typescript', 'ts'] },
  { value: 'python', label: 'Python', aliases: ['python', 'py'] },
  { value: 'java', label: 'Java', aliases: ['java'] },
  { value: 'csharp', label: 'C#', aliases: ['c#', 'csharp', 'c-sharp'] },
  { value: 'cpp', label: 'C++', aliases: ['c++', 'cpp'] },
  { value: 'c', label: 'C', aliases: [' c ', 'c language'] },
  { value: 'rust', label: 'Rust', aliases: ['rust'] },
  { value: 'go', label: 'Go', aliases: ['golang', 'go'] },
  { value: 'php', label: 'PHP', aliases: ['php'] },
  { value: 'ruby', label: 'Ruby', aliases: ['ruby'] },
  { value: 'swift', label: 'Swift', aliases: ['swift'] },
  { value: 'kotlin', label: 'Kotlin', aliases: ['kotlin'] },
  { value: 'dart', label: 'Dart', aliases: ['dart'] },
  { value: 'scala', label: 'Scala', aliases: ['scala'] },
  { value: 'html', label: 'HTML', aliases: ['html'] },
  { value: 'css', label: 'CSS', aliases: ['css'] },
  { value: 'sql', label: 'SQL', aliases: ['sql'] },
  { value: 'r', label: 'R', aliases: [' r ', 'r language'] },
  { value: 'matlab', label: 'MATLAB', aliases: ['matlab'] },
  { value: 'perl', label: 'Perl', aliases: ['perl'] },
  { value: 'lua', label: 'Lua', aliases: ['lua'] },
  { value: 'bash', label: 'Bash/Shell', aliases: ['bash', 'shell', 'sh'] },
  { value: 'powershell', label: 'PowerShell', aliases: ['powershell', 'pwsh'] },
  { value: 'yaml', label: 'YAML', aliases: ['yaml', 'yml'] },
  { value: 'json', label: 'JSON', aliases: ['json'] },
  { value: 'xml', label: 'XML', aliases: ['xml'] },
  { value: 'markdown', label: 'Markdown', aliases: ['markdown', 'md'] },
  { value: 'objective-c', label: 'Objective-C', aliases: ['objective-c', 'objc'] },
  { value: 'solidity', label: 'Solidity', aliases: ['solidity'] },
  { value: 'elixir', label: 'Elixir', aliases: ['elixir'] },
  { value: 'erlang', label: 'Erlang', aliases: ['erlang'] },
  { value: 'haskell', label: 'Haskell', aliases: ['haskell'] },
  { value: 'clojure', label: 'Clojure', aliases: ['clojure'] },
  { value: 'fsharp', label: 'F#', aliases: ['f#', 'fsharp'] },
  { value: 'visual-basic', label: 'Visual Basic', aliases: ['visual basic', 'vb.net', 'vb'] },
  { value: 'delphi', label: 'Delphi/Object Pascal', aliases: ['delphi', 'object pascal', 'pascal'] },
  { value: 'fortran', label: 'Fortran', aliases: ['fortran'] },
  { value: 'cobol', label: 'COBOL', aliases: ['cobol'] },
  { value: 'julia', label: 'Julia', aliases: ['julia'] },
  { value: 'nim', label: 'Nim', aliases: ['nim'] },
  { value: 'zig', label: 'Zig', aliases: ['zig'] },
  { value: 'crystal', label: 'Crystal', aliases: ['crystal'] },
  { value: 'ocaml', label: 'OCaml', aliases: ['ocaml'] },
  { value: 'elm', label: 'Elm', aliases: ['elm'] },
  { value: 'reason', label: 'ReasonML', aliases: ['reasonml', 'reason'] },
  { value: 'rescript', label: 'ReScript', aliases: ['rescript'] },
  { value: 'groovy', label: 'Groovy', aliases: ['groovy'] },
  { value: 'gradle', label: 'Gradle', aliases: ['gradle'] },
  { value: 'makefile', label: 'Makefile', aliases: ['makefile'] },
  { value: 'dockerfile', label: 'Dockerfile', aliases: ['dockerfile', 'docker'] },
  { value: 'terraform', label: 'Terraform/HCL', aliases: ['terraform', 'hcl'] },
  { value: 'graphql', label: 'GraphQL', aliases: ['graphql'] },
  { value: 'apex', label: 'Apex', aliases: ['apex'] },
  { value: 'abap', label: 'ABAP', aliases: ['abap'] },
  { value: 'sas', label: 'SAS', aliases: ['sas'] },
  { value: 'stata', label: 'Stata', aliases: ['stata'] },
  { value: 'prolog', label: 'Prolog', aliases: ['prolog'] },
  { value: 'smalltalk', label: 'Smalltalk', aliases: ['smalltalk'] },
  { value: 'scheme', label: 'Scheme', aliases: ['scheme'] },
  { value: 'lisp', label: 'Lisp', aliases: ['lisp'] }
]

export const detectSupportedLanguage = (prompt, fallback = 'html') => {
  const text = ` ${String(prompt || '').toLowerCase()} `
  const escapeRegex = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const match = supportedLanguages.find((language) =>
    language.aliases.some((alias) => {
      const normalizedAlias = alias.toLowerCase()
      if (normalizedAlias.trim() !== normalizedAlias) return text.includes(normalizedAlias)
      if (normalizedAlias.length <= 3 || /[+#.]/.test(normalizedAlias)) {
        return new RegExp(`\\b${escapeRegex(normalizedAlias)}\\b`).test(text)
      }
      return text.includes(normalizedAlias)
    })
  )

  return match?.value || fallback
}

export const languageFileExtensions = {
  javascript: 'js',
  typescript: 'ts',
  python: 'py',
  java: 'java',
  csharp: 'cs',
  cpp: 'cpp',
  c: 'c',
  rust: 'rs',
  go: 'go',
  php: 'php',
  ruby: 'rb',
  swift: 'swift',
  kotlin: 'kt',
  dart: 'dart',
  scala: 'scala',
  html: 'html',
  css: 'css',
  sql: 'sql',
  r: 'R',
  matlab: 'm',
  perl: 'pl',
  lua: 'lua',
  bash: 'sh',
  powershell: 'ps1',
  yaml: 'yml',
  json: 'json',
  xml: 'xml',
  markdown: 'md',
  'objective-c': 'm',
  solidity: 'sol',
  elixir: 'ex',
  erlang: 'erl',
  haskell: 'hs',
  clojure: 'clj',
  fsharp: 'fs',
  'visual-basic': 'vb',
  delphi: 'pas',
  fortran: 'f90',
  cobol: 'cob',
  julia: 'jl',
  nim: 'nim',
  zig: 'zig',
  crystal: 'cr',
  ocaml: 'ml',
  elm: 'elm',
  reason: 're',
  rescript: 'res',
  groovy: 'groovy',
  gradle: 'gradle',
  makefile: 'mk',
  dockerfile: 'Dockerfile',
  terraform: 'tf',
  graphql: 'graphql',
  apex: 'cls',
  abap: 'abap',
  sas: 'sas',
  stata: 'do',
  prolog: 'pl',
  smalltalk: 'st',
  scheme: 'scm',
  lisp: 'lisp'
}

export const getLanguageFileExtension = (languageValue) =>
  languageFileExtensions[languageValue] || 'txt'

export const getLanguageLabel = (languageValue) =>
  supportedLanguages.find((language) => language.value === languageValue)?.label || languageValue
