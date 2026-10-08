import path from 'node:path'
import fs from 'fs-extra'

export function findProjectRoot(startDir: string = process.cwd()): string | null {
  let current = startDir
  while (current !== path.dirname(current)) {
    if (fs.existsSync(path.join(current, 'package.json'))) {
      return current
    }
    current = path.dirname(current)
  }
  return null
}

export function readPackageJson(projectRoot: string): Record<string, unknown> | null {
  const pkgPath = path.join(projectRoot, 'package.json')
  if (!fs.existsSync(pkgPath)) {
    return null
  }
  return fs.readJsonSync(pkgPath)
}

export function writePackageJson(projectRoot: string, pkg: Record<string, unknown>): void {
  const pkgPath = path.join(projectRoot, 'package.json')
  fs.writeJsonSync(pkgPath, pkg, { spaces: 2 })
}

export function mergeDependencies(
  pkg: Record<string, unknown>,
  newDeps: Record<string, string>,
  field: 'dependencies' | 'devDependencies' = 'dependencies',
): Record<string, unknown> {
  const existing = (pkg[field] || {}) as Record<string, string>
  return {
    ...pkg,
    [field]: { ...existing, ...newDeps },
  }
}
