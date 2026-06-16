import { useMemo, type CSSProperties } from 'react'
import type { SVGProps } from 'react'
import type { IconProps } from './types'

/* ─── Two-tone color global ─── */

let globalTwoToneColor: string | undefined = '#1677FF'

export function setTwoToneColor(color: string): void {
  globalTwoToneColor = color
}

export function getTwoToneColor(): string {
  return globalTwoToneColor!
}

function resolveTwoToneColor(
  color: string | [string, string] | undefined,
): [string, string] {
  const c = color ?? globalTwoToneColor ?? '#1677FF'
  if (Array.isArray(c)) return c
  return [c, lighten(c, 0.6)]
}

function lighten(hex: string, factor: number): string {
  const num = parseInt(hex.replace('#', ''), 16)
  const r = Math.min(255, Math.round(((num >> 16) & 0xff) + (255 - ((num >> 16) & 0xff)) * factor))
  const g = Math.min(255, Math.round((((num >> 8) & 0xff) + (255 - ((num >> 8) & 0xff)) * factor)))
  const b = Math.min(255, Math.round(((num & 0xff) + (255 - (num & 0xff)) * factor)))
  return `rgb(${r},${g},${b})`
}

/* ─── Icon Wrapper ─── */

interface IconWrapperProps {
  className?: string
  style?: CSSProperties
  spin?: boolean
  rotate?: number
  onClick?: React.MouseEventHandler<HTMLSpanElement>
  children: React.ReactNode
}

function IconWrapper({ className, style, spin, rotate, onClick, children, ...rest }: IconWrapperProps & React.HTMLAttributes<HTMLSpanElement>) {
  const mergedStyle: CSSProperties = {
    ...(rotate ? { transform: `rotate(${rotate}deg)` } : {}),
    ...style,
  }
  return (
    <span
      className={['sui-icon', spin ? 'sui-icon-spin' : '', className].filter(Boolean).join(' ') || undefined}
      style={mergedStyle}
      onClick={onClick}
      {...rest}
    >
      {children}
    </span>
  )
}

/* ─── Icon Builders ─── */

type IconRenderer = (props: IconProps & { twoToneColors?: [string, string] }) => React.ReactNode

const iconCache = new Map<string, React.FC<IconProps>>()

function defineIcon(render: IconRenderer): React.FC<IconProps> {
  const key = render.toString()
  if (iconCache.has(key)) return iconCache.get(key)!
  const Comp: React.FC<IconProps> = (props) => {
    const { className, rotate, spin, style, twoToneColor, onClick, ...rest } = props
    const colors = useMemo(() => resolveTwoToneColor(twoToneColor), [twoToneColor])
    return (
      <IconWrapper className={className} style={style} spin={spin} rotate={rotate} onClick={onClick} {...rest}>
        {render({ twoToneColors: colors } as IconProps & { twoToneColors?: [string, string] })}
      </IconWrapper>
    )
  }
  iconCache.set(key, Comp)
  return Comp
}

/* ─── SVG path helper ─── */
function svg(children: React.ReactNode, extra?: SVGProps<SVGSVGElement>): React.ReactNode {
  return <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" {...extra}>{children}</svg>
}

function p(d: string) {
  return <path d={d} />
}

/* ═══════════════════════════════════════════════
   Icon Set (Ant Design Outlined Style)
   ═══════════════════════════════════════════════ */

export const ArrowLeftOutlined = defineIcon(() => svg(p('M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z')))

export const ArrowRightOutlined = defineIcon(() => svg(p('M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z')))

export const ArrowUpOutlined = defineIcon(() => svg(p('M868 545.5L536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z')))

export const ArrowDownOutlined = defineIcon(() => svg(p('M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0 0 48.3 0L868 478.5c4.5-5.1.8-13.2-6-13.2z')))

export const DoubleLeftOutlined = defineIcon(() => svg(p('M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 0 0 0 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 0 0 0 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z')))

export const DoubleRightOutlined = defineIcon(() => svg(p('M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1c-4.1 5.2-.4 12.9 6.3 12.9h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1c-4.1 5.2-.4 12.9 6.3 12.9h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z')))

export const DownOutlined = defineIcon(() => svg(p('M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z')))

export const UpOutlined = defineIcon(() => svg(p('M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 0 0 140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z')))

export const LeftOutlined = defineIcon(() => svg(p('M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z')))

export const RightOutlined = defineIcon(() => svg(p('M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z')))

export const MenuFoldOutlined = defineIcon(() => svg(p('M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-14L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3c0 7.4 8.5 11.5 14.4 6.9z')))

export const MenuUnfoldOutlined = defineIcon(() => svg(p('M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505c-5.8 4.6-5.8 9.3 0 13.9z')))

export const StepBackwardOutlined = defineIcon(() => svg(p('M347.6 528.95l383.2 319.2c36.25 30.11 93.2 4.48 93.2-40.83V216.68c0-45.31-56.95-70.94-93.2-40.83L347.6 495.05a30.18 30.18 0 0 0 0 45.9zm403.7 27.94L457.8 512l293.5-44.89v89.78zM160 160h48c8.8 0 16 7.2 16 16v672c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16z')))

export const StepForwardOutlined = defineIcon(() => svg(p('M676.4 528.95L293.2 848.15c-36.25 30.11-93.2 4.48-93.2-40.83V216.68c0-45.31 56.95-70.94 93.2-40.83l383.2 319.2a30.18 30.18 0 0 1 0 45.9zM566.2 512L272.7 467.11v89.78L566.2 512zM864 160h-48c-8.8 0-16 7.2-16 16v672c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16V176c0-8.8 7.2-16 16-16z')))

export const FastBackwardOutlined = defineIcon(() => svg(p('M517.6 273.8L230.8 479.2a17.47 17.47 0 0 0 0 27.8l286.8 205.4c12.8 9.2 32.4-.8 32.4-15.3V289.1c0-14.5-19.6-24.5-32.4-15.3zM864 159.9l-286.8 205.4a17.44 17.44 0 0 0 0 27.8L864 598.5c12.8 9.2 32.4-.8 32.4-15.3V175.2c0-14.5-19.6-24.5-32.4-15.3zM192 160h-64c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32z')))

export const FastForwardOutlined = defineIcon(() => svg(p('M150.4 159.9L437.2 365.2a17.44 17.44 0 0 1 0 27.8L150.4 598.5c-12.8 9.2-32.4-.8-32.4-15.3V175.2c0-14.5 19.6-24.5 32.4-15.3zM896 160h-64c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zM506.4 273.8L793.2 479.2a17.47 17.47 0 0 1 0 27.8L506.4 712.4c-12.8 9.2-32.4-.8-32.4-15.3V289.1c0-14.5 19.6-24.5 32.4-15.3z')))

export const CaretUpOutlined = defineIcon(() => svg(p('M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-2.2 36 15.3 36h663.2c17.5 0 27.5-21.8 15.3-36z')))

export const CaretDownOutlined = defineIcon(() => svg(p('M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0l328.4-380.8c12.2-14.2 2.2-35-18.5-35z')))

export const CaretLeftOutlined = defineIcon(() => svg(p('M689 165.1L308.2 493.5c-10.9 9.4-10.9 27.5 0 37L689 858.9c14.2 12.2 36 2.2 36-15.3V180.4c0-17.5-21.8-27.5-36-15.3z')))

export const CaretRightOutlined = defineIcon(() => svg(p('M300 183.6v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.5 0-37L335 165.1c-14.2-12.2-35-2.2-35 18.5z')))

export const VerticalAlignTopOutlined = defineIcon(() => svg(p('M572 652h-120c-6.6 0-12-5.4-12-12V376h-92c-9.6 0-18.2-5.7-22-14.5-3.8-8.8-1.9-19.1 5-25.9l172-172c7.1-7.1 18.6-7.1 25.7 0l172 172c6.9 6.9 8.8 17.2 5 25.9-3.8 8.8-12.4 14.5-22 14.5h-92v264c0 6.6-5.4 12-12 12zM880 864H144c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32h736c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32z')))

export const VerticalAlignBottomOutlined = defineIcon(() => svg(p('M452 372h-92c-9.6 0-18.2-5.7-22-14.5-3.8-8.8-1.9-19.1 5-25.9l172-172c7.1-7.1 18.6-7.1 25.7 0l172 172c6.9 6.9 8.8 17.2 5 25.9-3.8 8.8-12.4 14.5-22 14.5h-92v264c0 6.6-5.4 12-12 12h-60c-6.6 0-12-5.4-12-12V372zM880 864H144c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32h736c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32z')))

export const ForwardOutlined = defineIcon(() => svg(p('M825.8 498L538.4 249.9c-10.7-9.2-26.4-.9-26.4 14v496.3c0 14.9 15.7 23.2 26.4 14L825.8 526c8.3-7.2 8.3-20.8 0-28zm-320 0L218.4 249.9c-10.7-9.2-26.4-.9-26.4 14v496.3c0 14.9 15.7 23.2 26.4 14L505.8 526c8.3-7.2 8.3-20.8 0-28z')))

export const BackwardOutlined = defineIcon(() => svg(p('M485.6 249.9L198.2 498c-8.3 7.1-8.3 20.8 0 27.9l287.4 248.2c10.7 9.2 26.4.9 26.4-14V263.9c0-14.9-15.7-23.2-26.4-14zm320 0L518.2 498a18.6 18.6 0 0 0-6.2 14c0 5.2 2.1 10.2 6.2 13.9l287.4 248.2c10.7 9.2 26.4.9 26.4-14V263.9c0-14.9-15.7-23.2-26.4-14z')))

export const LoginOutlined = defineIcon(() => svg(p('M520 136v60c0 6.6-5.4 12-12 12H216c-4.4 0-8 3.6-8 8v576c0 4.4 3.6 8 8 8h292c6.6 0 12 5.4 12 12v60c0 6.6-5.4 12-12 12H208c-26.5 0-48-21.5-48-48V172c0-26.5 21.5-48 48-48h300c6.6 0 12 5.4 12 12zm296.4 340H508c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h308.4l-76.2 74.9c-4.7 4.6-4.8 12.3-.2 17l39 39.7c4.7 4.7 12.3 4.8 17 .2l142.3-141.9c9.3-9.3 9.3-24.4 0-33.7L886.2 383.6c-4.7-4.7-12.3-4.8-17-.2l-39 39.7c-4.6 4.7-4.5 12.4.2 17l76.2 74.9z')))

export const HomeOutlined = defineIcon(() => svg(p('M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z')))