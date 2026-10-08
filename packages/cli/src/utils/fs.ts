import fs from 'fs-extra'

export { default as fs } from 'fs-extra'

export function ensureDir(dir: string): void {
  fs.ensureDirSync(dir)
}

export function pathExists(p: string): boolean {
  return fs.existsSync(p)
}

export function copyDir(src: string, dest: string): void {
  fs.copySync(src, dest)
}
