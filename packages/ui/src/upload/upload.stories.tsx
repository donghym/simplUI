import type { Meta, StoryObj } from '@storybook/react'
import { useState, useCallback } from 'react'
import { Upload } from './index'
import type { UploadFile } from './types'

const meta: Meta<typeof Upload> = {
  title: '数据录入/Upload 上传',
  component: Upload,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '上传组件用于将本地文件上传到服务器。适用于头像上传、附件提交、图片管理等场景，支持拖拽上传、进度展示、多文件列表和自定义触发区域。',
      },
    },
  },
  argTypes: {
    accept: {
      control: 'text',
      description: '接受的文件类型 MIME 或扩展名，如 image/* 或 .png,.jpg',
    },
    multiple: {
      control: 'boolean',
      description: '是否支持多选文件，默认 false',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用上传，true 时禁止点击和拖拽操作',
    },
    listType: {
      control: 'radio',
      options: ['text', 'picture', 'picture-card'],
      description: '文件列表展示类型：text 纯文本列表、picture 图文列表、picture-card 卡片列表',
    },
    maxCount: {
      control: 'number',
      description: '最大文件数量，超过后不再接受新文件',
    },
  },
}

export default meta
type Story = StoryObj<typeof Upload>

export const Basic: Story = {
  args: {},
}

export const WithDefault: Story = {
  args: {
    defaultFileList: [
      { uid: '1', name: 'design-spec.pdf', size: 102400, type: 'application/pdf', status: 'done' },
    ],
  },
}

export const PictureCard: Story = {
  parameters: {
    docs: {
      description: {
        story: '图片卡片样式展示上传列表，适用于相册管理、商品图片上传等需要预览图的场景。',
      },
    },
  },
  render: () => (
    <Upload
      listType="picture-card"
      defaultFileList={[
        { uid: '1', name: 'cat.png', size: 2048, type: 'image/png', status: 'done', thumbUrl: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'80\' height=\'80\' viewBox=\'0 0 80 80\'%3E%3Crect fill=\'%23f3f4f6\' width=\'80\' height=\'80\'/%3E%3Ctext fill=\'%239ca3af\' font-family=\'sans-serif\' font-size=\'12\' x=\'50%25\' y=\'50%25\' dominant-baseline=\'middle\' text-anchor=\'middle\'%3ECat%3C/text%3E%3C/svg%3E' },
        { uid: '2', name: 'dog.png', size: 2048, type: 'image/png', status: 'done', thumbUrl: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'80\' height=\'80\' viewBox=\'0 0 80 80\'%3E%3Crect fill=\'%23f3f4f6\' width=\'80\' height=\'80\'/%3E%3Ctext fill=\'%239ca3af\' font-family=\'sans-serif\' font-size=\'12\' x=\'50%25\' y=\'50%25\' dominant-baseline=\'middle\' text-anchor=\'middle\'%3EDog%3C/text%3E%3C/svg%3E' },
        { uid: '3', name: 'uploading.png', size: 2048, type: 'image/png', status: 'uploading', percent: 60 },
      ]}
    />
  ),
}

export const ImageOnly: Story = {
  args: {
    accept: 'image/*',
    listType: 'picture',
  },
}

export const Multiple: Story = {
  args: { multiple: true },
}

export const Disabled: Story = {
  args: { disabled: true },
}

export const WithControlledList: Story = {
  parameters: {
    docs: {
      description: {
        story: '受控文件列表示例，展示如何在外部管理上传文件列表状态。',
      },
    },
  },
  render: () => {
    const [list, setList] = useState<UploadFile[]>([
      { uid: '1', name: 'report.docx', size: 51200, type: 'application/msword', status: 'done' },
    ])
    return (
      <div className="flex flex-col gap-2 w-96">
        <Upload fileList={list} onChange={({ fileList }) => setList(fileList)} />
        <p className="text-xs text-gray-500">受控列表，共 {list.length} 个文件</p>
      </div>
    )
  },
}

export const DragUpload: Story = {
  render: () => (
    <Upload>
      <div className="flex flex-col items-center justify-center gap-2 py-8">
        <svg className="h-10 w-10 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
        <p className="text-sm text-muted-foreground">点击或拖拽文件到此区域上传</p>
        <p className="text-xs text-muted-foreground">支持单个或批量上传</p>
      </div>
    </Upload>
  ),
}

/** 头像上传 */
export const AvatarUpload: Story = {
  parameters: {
    docs: {
      description: {
        story: '圆形头像上传示例，限制单张图片并实时预览，适用于个人资料、用户头像设置等场景。',
      },
    },
  },
  render: () => {
    const [fileList, setFileList] = useState<UploadFile[]>([])
    const avatarUrl = fileList.length > 0 && fileList[0]?.thumbUrl
      ? fileList[0].thumbUrl
      : null

    return (
      <div className="flex flex-col items-center gap-4">
        <Upload
          accept="image/*"
          maxCount={1}
          fileList={fileList}
          onChange={({ fileList: newList }) => setFileList(newList.slice(0, 1))}
        >
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: '50%',
              border: '2px dashed #d9d9d9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              background: '#fafafa',
              cursor: 'pointer',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#1677ff' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#d9d9d9' }}
          >
            {avatarUrl ? (
              <img src={avatarUrl} alt="avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <svg className="h-8 w-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            )}
          </div>
        </Upload>
        <p className="text-xs text-muted-foreground">仅支持图片，单文件上传，点击圆形区域触发上传</p>
      </div>
    )
  },
}

/** 上传进度模拟 */
export const UploadProgress: Story = {
  parameters: {
    docs: {
      description: {
        story: '模拟上传进度条，每 300ms 增加 10%，适用于需要展示上传状态和进度的场景。',
      },
    },
  },
  render: () => {
    const [fileList, setFileList] = useState<UploadFile[]>([])

    const customRequest = useCallback(({ onProgress, onSuccess }: import('./upload-types').CustomRequestOptions) => {
      let percent = 0
      const interval = setInterval(() => {
        percent += 10
        if (percent >= 100) {
          clearInterval(interval)
          onProgress(100)
          onSuccess({})
        } else {
          onProgress(percent)
        }
      }, 300)
    }, [])

    return (
      <div className="flex flex-col gap-4 w-96">
        <Upload
          fileList={fileList}
          onChange={({ fileList: newList }) => setFileList(newList)}
          customRequest={customRequest}
        />
        {fileList.length > 0 && fileList.some((f) => f.status === 'uploading') && (
          <div className="flex flex-col gap-1">
            <div className="text-sm text-muted-foreground">
              上传中... {fileList.find((f) => f.status === 'uploading')?.percent ?? 0}%
            </div>
            <div style={{ width: '100%', height: 8, background: '#f0f0f0', borderRadius: 4, overflow: 'hidden' }}>
              <div
                style={{
                  width: `${fileList.find((f) => f.status === 'uploading')?.percent ?? 0}%`,
                  height: '100%',
                  background: '#1677ff',
                  borderRadius: 4,
                  transition: 'width 0.3s ease',
                }}
              />
            </div>
          </div>
        )}
        {fileList.length > 0 && fileList.every((f) => f.status === 'done') && (
          <p className="text-sm text-success-600">上传完成！</p>
        )}
        <p className="text-xs text-muted-foreground">模拟上传进度，每 300ms 增加 10%</p>
      </div>
    )
  },
}
