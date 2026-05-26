import { useEffect, useMemo, useRef } from 'react'
import { useProject } from '../contexts/ProjectContext'
import selfRepairService from '../services/selfRepairService'

const getFilesSignature = (files = {}) => (
  Object.entries(files)
    .map(([filename, content = '']) => `${filename}:${String(content).length}:${String(content).slice(0, 24)}`)
    .join('|')
)

export default function BackgroundSelfRepair() {
  const { currentProject, replaceProjectFiles } = useProject()
  const lastAppliedSignature = useRef('')

  const filesSignature = useMemo(() => getFilesSignature(currentProject.files), [currentProject.files])

  useEffect(() => {
    if (!currentProject.files || Object.keys(currentProject.files).length === 0) return
    if (lastAppliedSignature.current === filesSignature) return

    const timer = window.setTimeout(() => {
      const issues = selfRepairService.scanProject(currentProject.files)
      const repairResult = selfRepairService.attemptRepair(currentProject.files, issues)

      if (repairResult.repairedIssues.length === 0) {
        window.dispatchEvent(new CustomEvent('dreambuild:self-repair-complete', {
          detail: {
            status: 'clean',
            repaired: 0,
            unresolved: repairResult.unresolvedIssues.length
          }
        }))
        return
      }

      const nextSignature = getFilesSignature(repairResult.files)
      lastAppliedSignature.current = nextSignature
      replaceProjectFiles(repairResult.files, currentProject.activeFile, {
        silent: true,
        reason: 'background-self-repair'
      })

      window.dispatchEvent(new CustomEvent('dreambuild:self-repair-complete', {
        detail: {
          status: 'repaired',
          repaired: repairResult.repairedIssues.length,
          unresolved: repairResult.unresolvedIssues.length
        }
      }))
    }, 700)

    return () => window.clearTimeout(timer)
  }, [currentProject.activeFile, currentProject.files, filesSignature, replaceProjectFiles])

  return null
}
