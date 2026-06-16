/** @type {import('tailwindcss').Config} */

// 生成 24 列栅格系统所需的所有宽度百分比
const gridSpans = Array.from({ length: 24 }, (_, i) => {
  const percent = ((i + 1) / 24) * 100
  // 使用 4 位小数精度，与 grid-utils.ts 保持一致
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
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
        primary: {
          50: '#e6f0ff',
          100: '#b3d1ff',
          200: '#80b3ff',
          300: '#4d94ff',
          400: '#2986f7',
          500: '#1677FF',
          600: '#1265d9',
          700: '#0e53b3',
          800: '#0a418c',
          900: '#062f66',
        },
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        danger: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
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
        // 语义化色彩 token（映射到灰阶色板，用于组件中的中性色）
        muted: {
          DEFAULT: '#F2F3F5',   // gray-100
          foreground: '#86909C', // gray-400
        },
        foreground: '#1D2129',   // gray-900
        background: '#ffffff',
        border: '#E5E6EB',       // gray-200
        ring: '#1677FF',         // primary-500
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
