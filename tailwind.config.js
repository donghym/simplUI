/** @type {import('tailwindcss').Config} */

// 生成 24 列栅格系统所需的所有宽度百分比
const gridSpans = Array.from({ length: 24 }, (_, i) => {
  const percent = ((i + 1) / 24) * 100
  return `w-[${percent.toFixed(4)}%]`
})

// 生成所有偏移类名
const gridOffsets = Array.from({ length: 24 }, (_, i) => {
  const percent = ((i + 1) / 24) * 100
  return `ml-[${percent.toFixed(4)}%]`
})

// 响应式断点前缀
const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']

// 生成响应式宽度类名
const responsiveWidths = breakpoints.flatMap(bp =>
  Array.from({ length: 24 }, (_, i) => {
    const percent = ((i + 1) / 24) * 100
    return `${bp}:w-[${percent.toFixed(4)}%]`
  })
)

// 生成响应式偏移类名
const responsiveOffsets = breakpoints.flatMap(bp =>
  Array.from({ length: 24 }, (_, i) => {
    const percent = ((i + 1) / 24) * 100
    return `${bp}:ml-[${percent.toFixed(4)}%]`
  })
)

// gutter 相关的负 margin 类名（常用值）
const gutterValues = [4, 8, 12, 16, 20, 24, 32, 40, 48]
const gutterClasses = gutterValues.flatMap(v => [
  `-mx-[${v / 2}px]`,
  `-my-[${v / 2}px]`,
  `mx-[${v / 2}px]`,
  `my-[${v / 2}px]`,
])

export default {
  content: [
    "./packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    ...gridSpans,
    ...gridOffsets,
    ...responsiveWidths,
    ...responsiveOffsets,
    ...gutterClasses,
  ],
  theme: {
    extend: {
      colors: {
        // 主色系（含状态色）
        primary: {
          DEFAULT: '#002FA7',
          hover: '#0038C9',
          focus: '#002FA720',
          disabled: '#8097D3',
          50: '#e6f0ff',
          100: '#b3d1ff',
          200: '#80b3ff',
          300: '#4d94ff',
          400: '#2986f7',
          500: '#002FA7',
          600: '#00268a',
          700: '#001d66',
          800: '#00144d',
          900: '#000b33',
        },
        success: {
          DEFAULT: '#73AE50',
          hover: '#85C262',
          focus: '#73AE5020',
          disabled: '#B8D7A7',
          50: '#e8f5e8',
          100: '#d1ebd1',
          200: '#b8e0b8',
          300: '#95d495',
          400: '#6ec76e',
          500: '#73AE50',
          600: '#5f9243',
          700: '#4b7536',
          800: '#375829',
          900: '#233b1c',
        },
        warning: {
          DEFAULT: '#F8C91C',
          hover: '#FAD448',
          focus: '#F8C91C20',
          disabled: '#FCE48D',
          50: '#fffbe8',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#F8C91C',
          600: '#d4ab17',
          700: '#b08d12',
          800: '#8c6f0e',
          900: '#685109',
        },
        danger: {
          DEFAULT: '#D7000F',
          hover: '#E63240',
          focus: '#D7000F20',
          disabled: '#EB8087',
          50: '#fff1f0',
          100: '#ffccc7',
          200: '#ffa39e',
          300: '#ff7875',
          400: '#ff4d4f',
          500: '#D7000F',
          600: '#ba000d',
          700: '#9d000a',
          800: '#800008',
          900: '#630006',
        },
        // 中性灰
        gray: {
          50: '#FFFFFF',
          100: '#F2F3F5',
          200: '#E5E6EB',
          300: '#C9CDD4',
          400: '#86909C',
          500: '#6E7681',
          600: '#535A63',
          700: '#3D434D',
          800: '#2E333A',
          900: '#1D2129',
        },
        // 文本颜色
        text: {
          DEFAULT: '#121212',
          hover: '#2A2A2A',
          focus: '#12121220',
          disabled: '#8E8E8E',
        },
        muted: {
          DEFAULT: '#F2F3F5',
          foreground: '#86909C',
        },
        foreground: '#121212',
        background: '#FFFFFF',
        border: '#E5E6EB',
        ring: '#002FA7',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
      },
      spacing: {
        128: '32rem',
      },
      borderRadius: {
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
}
