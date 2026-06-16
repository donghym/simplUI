import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentType, CSSProperties } from 'react'
import * as Icons from './index'

const iconGroups: Record<string, string[]> = {
  Directional: [
    'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight',
    'CaretUp', 'CaretDown', 'CaretLeft', 'CaretRight',
    'UpCircle', 'DownCircle', 'LeftCircle', 'RightCircle',
    'DoubleLeft', 'DoubleRight', 'Swap', 'Enter', 'Rollback',
    'StepForward', 'StepBackward', 'FastForward', 'FastBackward',
    'Shrink', 'ArrowsAlt', 'MenuFold', 'MenuUnfold',
    'Fullscreen', 'FullscreenExit', 'Expand', 'Compress',
    'VerticalAlignTop', 'VerticalAlignBottom', 'Login', 'Logout',
    'Download', 'UploadIcon',
  ],
  Suggestion: [
    'Question', 'QuestionCircle', 'Info', 'InfoCircle',
    'Exclamation', 'ExclamationCircle', 'Close', 'CloseCircle', 'CloseSquare',
    'Check', 'CheckCircle', 'CheckSquare', 'Plus', 'PlusCircle', 'Minus', 'MinusCircle',
    'PlusSquare', 'MinusSquare', 'Warning', 'Stop',
    'Star', 'Heart', 'ThumbUp', 'ThumbDown',
    'Smile', 'Frown', 'Crown', 'Fire',
  ],
  Editor: [
    'Edit', 'Copy', 'Delete', 'Snippets', 'Highlight',
    'AlignLeft', 'AlignCenter', 'AlignRight',
    'BgColors', 'FontColors', 'FontSize', 'LineHeight',
    'Strikethrough', 'Underline', 'Italic', 'Bold',
    'PaperClip', 'Link', 'UnorderedList', 'OrderedList',
    'Search', 'ZoomIn', 'ZoomOut',
    'Undo', 'Redo', 'Save', 'Code', 'Bug', 'Dashboard', 'Eraser',
  ],
  Data: [
    'AreaChart', 'PieChart', 'BarChart', 'DotChart', 'LineChart', 'RadarChart',
    'TableIcon', 'Filter', 'SortAscending', 'SortDescending',
    'FieldBinary', 'FieldNumber', 'FieldString', 'FieldTime',
    'Function', 'Database', 'Api',
  ],
  Application: [
    'Mail', 'MessageIcon', 'Phone', 'NotificationIcon', 'Bell',
    'User', 'Team', 'Setting', 'Home', 'CalendarIcon', 'Camera',
    'Folder', 'FolderOpen', 'File', 'FileText', 'Inbox',
    'Cloud', 'CloudUpload', 'CloudDownload',
    'Lock', 'Unlock', 'Eye', 'EyeOff', 'Flag', 'Gift',
    'Global', 'Key', 'MapPin', 'Poweroff', 'Printer',
    'Reload', 'ShareAlt', 'ShoppingCart', 'Sync', 'TagIcon', 'Trophy',
    'Book', 'BookOpen', 'CreditCard', 'Coffee', 'Wifi', 'Mobile', 'Laptop',
    'Translation', 'Bank', 'Experiment',
  ],
  Brand: [
    'Android', 'Apple', 'Windows', 'Chrome', 'Github', 'Gitlab', 'Html5',
  ],
}

const IconGrid = () => (
  <div style={{ padding: 24, background: 'var(--color-gray-100, #f3f4f6)', minHeight: '100vh' }}>
    {Object.entries(iconGroups).map(([category, names]) => (
      <div key={category} style={{ marginBottom: 40 }}>
        <h2 style={{
          fontSize: 16,
          fontWeight: 500,
          marginBottom: 16,
          color: '#333',
        }}>{category}</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          gap: 8,
        }}>
          {names.map((name) => {
            const IconComp = (Icons as unknown as Record<string, ComponentType<{ style?: CSSProperties }>>)[name]
            if (!IconComp) return null
            return (
              <div key={name} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                padding: '20px 8px',
                borderRadius: 4,
                border: '1px solid #e8e8e8',
                background: '#fff',
                cursor: 'pointer',
                transition: 'all 0.3s',
                height: 100,
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 8px rgba(0,0,0,0.08)'
                  e.currentTarget.style.borderColor = '#1890ff'
                  e.currentTarget.style.color = '#1890ff'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.borderColor = '#e8e8e8'
                  e.currentTarget.style.color = 'inherit'
                }}
              >
                <IconComp style={{ fontSize: 28, color: 'inherit' }} />
                <span style={{ fontSize: 12, color: 'var(--color-gray-500, #6b7280)', textAlign: 'center', wordBreak: 'break-all', lineHeight: 1.3 }}>{name}</span>
              </div>
            )
          })}
        </div>
      </div>
    ))}
  </div>
)

const meta: Meta = {
  title: '通用/Icon 图标',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '基于原生 SVG 的图标库，共 130+ 个图标，按类别组织。使用 `fill="currentColor"` 自动继承父级颜色。',
      },
    },
  },
}

export default meta

export const AllIcons: StoryObj = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => <IconGrid />,
}
