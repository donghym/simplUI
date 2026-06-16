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
        // Ant Design 风格主色系
        primary: {
          50: '#e6f4ff',
          100: '#bae0ff',
          200: '#91caff',
          300: '#69b1ff',
          400: '#4096ff',
          500: '#1677ff',  // 主蓝
          600: '#0958d9',
          700: '#003eb3',
          800: '#002c8c',
          900: '#001d66',
        },
        success: {
          50: '#e8f9e8',
          100: '#d1f2d1',
          200: '#b8e8b8',
          300: '#95de95',
          400: '#6ed46e',
          500: '#00b42a',  // 成功绿
          600: '#009629',
          700: '#007827',
          800: '#005a23',
          900: '#003c19',
        },
        warning: {
          50: '#fff7e8',
          100: '#ffe7ba',
          200: '#ffd591',
          300: '#ffba4d',
          400: '#ff9c2e',
          500: '#ff7d00',  // 警告橙
          600: '#d95a00',
          700: '#b33d00',
          800: '#8c2600',
          900: '#661000',
        },
        danger: {
          50: '#fff1f0',
          100: '#ffccc7',
          200: '#ffa39e',
          300: '#ff7875',
          400: '#ff4d4f',
          500: '#f53f3f',  // 错误红
          600: '#cf1322',
          700: '#a8071a',
          800: '#820014',
          900: '#5c0011',
        },
        // Ant Design 中性灰
        gray: {
          50: '#ffffff',   // gray-1
          100: '#fafafa',
          200: '#f5f5f5',
          300: '#f0f0f0',
          400: '#d9d9d9',
          500: '#bfbfbf',
          600: '#8c8c8c',
          700: '#595959',
          800: '#434343',
          900: '#1d2129',  // gray-5
        },
        muted: {
          DEFAULT: '#f5f5f5',
          foreground: '#8c8c8c',
        },
        foreground: '#1d2129',
        background: '#ffffff',
        border: '#d9d9d9',
        ring: '#1677ff',
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
