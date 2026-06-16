import { useState } from 'react'
import { Table, ColumnType } from './index'
import { Button } from '../button'
import { Tag } from '../tag'

/**
 * 基础表格示例
 */
export function BasicTableExample() {
  interface DataType {
    key: string
    name: string
    age: number
    address: string
    tags: string[]
  }

  const columns: ColumnType<DataType>[] = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      sorter: true,
    },
    {
      title: '地址',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '标签',
      dataIndex: 'tags',
      key: 'tags',
      render: (tags) => (
        <div className="flex gap-1">
          {(tags as string[]).map((tag) => (
            <Tag key={tag} color="blue">
              {tag}
            </Tag>
          ))}
        </div>
      ),
    },
    {
      title: '操作',
      key: 'action',
      render: () => (
        <div className="flex gap-2">
          <Button variant="primary" className="text-xs px-2 py-1">
            编辑
          </Button>
          <Button variant="text" className="text-xs px-2 py-1">
            删除
          </Button>
        </div>
      ),
    },
  ]

  const dataSource: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ]

  return (
    <div className="p-4">
      <h3 className="text-lg font-medium mb-4">基础表格</h3>
      <Table<DataType>
        columns={columns}
        dataSource={dataSource}
        height={300}
        bordered
      />
    </div>
  )
}

/**
 * 带分页的表格示例
 */
export function PaginationTableExample() {
  interface DataType {
    key: string
    name: string
    age: number
    address: string
  }

  const columns: ColumnType<DataType>[] = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '地址',
      dataIndex: 'address',
      key: 'address',
    },
  ]

  // 生成 100 条数据
  const dataSource: DataType[] = Array.from({ length: 100 }, (_, i) => ({
    key: `${i + 1}`,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  }))

  return (
    <div className="p-4">
      <h3 className="text-lg font-medium mb-4">带分页的表格</h3>
      <Table<DataType>
        columns={columns}
        dataSource={dataSource}
        height={400}
        pagination={{
          defaultPageSize: 10,
          showTotal: true,
          showSizeChanger: true,
          pageSizeOptions: [10, 20, 50],
        }}
      />
    </div>
  )
}

/**
 * 带行选择的表格示例
 */
export function SelectionTableExample() {
  interface DataType {
    key: string
    name: string
    age: number
    address: string
  }

  const [selectedRowKeys, setSelectedRowKeys] = useState<(string | number)[]>([])

  const columns: ColumnType<DataType>[] = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '地址',
      dataIndex: 'address',
      key: 'address',
    },
  ]

  const dataSource: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ]

  const rowSelection = {
    selectedRowKeys,
    onChange: (keys: (string | number)[]) => {
      setSelectedRowKeys(keys)
      console.log('selectedRowKeys: ', keys)
    },
  }

  return (
    <div className="p-4">
      <h3 className="text-lg font-medium mb-4">带行选择的表格</h3>
      <div className="mb-4">
        已选择 {selectedRowKeys.length} 行
        {selectedRowKeys.length > 0 && (
          <Button variant="default" className="ml-4 text-xs px-2 py-1">
            清空选择
          </Button>
        )}
      </div>
      <Table<DataType>
        columns={columns}
        dataSource={dataSource}
        height={300}
        rowSelection={rowSelection}
      />
    </div>
  )
}

/**
 * 可展开行的表格示例
 */
export function ExpandableTableExample() {
  interface DataType {
    key: string
    name: string
    age: number
    address: string
    description: string
  }

  const columns: ColumnType<DataType>[] = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '地址',
      dataIndex: 'address',
      key: 'address',
    },
  ]

  const dataSource: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      description: 'John Brown 是一名优秀的工程师，擅长前端开发。',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      description: 'Jim Green 是一名资深设计师，拥有丰富的 UI 设计经验。',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      description: 'Joe Black 是一名全栈开发工程师，精通前后端技术。',
    },
  ]

  return (
    <div className="p-4">
      <h3 className="text-lg font-medium mb-4">可展开行的表格</h3>
      <Table<DataType>
        columns={columns}
        dataSource={dataSource}
        height={400}
        expandable={{
          expandedRowRender: (record) => (
            <div className="p-4 bg-muted">
              <p className="text-muted-foreground">{record.description}</p>
            </div>
          ),
          rowExpandable: (record) => record.name !== 'Not Expandable',
        }}
      />
    </div>
  )
}

/**
 * 固定列的表格示例
 */
export function FixedColumnsTableExample() {
  interface DataType {
    key: string
    name: string
    age: number
    address: string
  }

  const columns: ColumnType<DataType>[] = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
      width: 100,
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      width: 100,
    },
    {
      title: '列1',
      dataIndex: 'col1',
      key: 'col1',
      width: 100,
    },
    {
      title: '列2',
      dataIndex: 'col2',
      key: 'col2',
      width: 100,
    },
    {
      title: '列3',
      dataIndex: 'col3',
      key: 'col3',
      width: 100,
    },
    {
      title: '列4',
      dataIndex: 'col4',
      key: 'col4',
      width: 100,
    },
    {
      title: '列5',
      dataIndex: 'col5',
      key: 'col5',
      width: 100,
    },
    {
      title: '地址',
      dataIndex: 'address',
      key: 'address',
      fixed: 'right',
      width: 200,
    },
  ]

  const dataSource: DataType[] = Array.from({ length: 20 }, (_, i) => ({
    key: `${i + 1}`,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
    col1: '内容1',
    col2: '内容2',
    col3: '内容3',
    col4: '内容4',
    col5: '内容5',
  }))

  return (
    <div className="p-4">
      <h3 className="text-lg font-medium mb-4">固定列的表格</h3>
      <Table<DataType>
        columns={columns}
        dataSource={dataSource}
        height={400}
        width={600}
        bordered
      />
    </div>
  )
}

/**
 * 带标题和底部的表格示例
 */
export function TitleFooterTableExample() {
  interface DataType {
    key: string
    name: string
    age: number
    address: string
  }

  const columns: ColumnType<DataType>[] = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '地址',
      dataIndex: 'address',
      key: 'address',
    },
  ]

  const dataSource: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ]

  return (
    <div className="p-4">
      <h3 className="text-lg font-medium mb-4">带标题和底部的表格</h3>
      <Table<DataType>
        columns={columns}
        dataSource={dataSource}
        height={300}
        title="用户列表"
        footer="共 3 条数据"
        bordered
      />
    </div>
  )
}

/**
 * 加载状态的表格示例
 */
export function LoadingTableExample() {
  interface DataType {
    key: string
    name: string
    age: number
    address: string
  }

  const columns: ColumnType<DataType>[] = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '地址',
      dataIndex: 'address',
      key: 'address',
    },
  ]

  const dataSource: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
  ]

  return (
    <div className="p-4">
      <h3 className="text-lg font-medium mb-4">加载状态的表格</h3>
      <Table<DataType>
        columns={columns}
        dataSource={dataSource}
        height={300}
        loading
      />
    </div>
  )
}

/**
 * 不同尺寸的表格示例
 */
export function SizeTableExample() {
  interface DataType {
    key: string
    name: string
    age: number
    address: string
  }

  const columns: ColumnType<DataType>[] = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '地址',
      dataIndex: 'address',
      key: 'address',
    },
  ]

  const dataSource: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ]

  return (
    <div className="p-4 space-y-6">
      <h3 className="text-lg font-medium mb-4">不同尺寸的表格</h3>
      
      <div>
        <h4 className="text-sm font-medium mb-2">默认尺寸</h4>
        <Table<DataType>
          columns={columns}
          dataSource={dataSource}
          height={200}
          tableSize="default"
          bordered
        />
      </div>

      <div>
        <h4 className="text-sm font-medium mb-2">中等尺寸</h4>
        <Table<DataType>
          columns={columns}
          dataSource={dataSource}
          height={200}
          tableSize="middle"
          bordered
        />
      </div>

      <div>
        <h4 className="text-sm font-medium mb-2">小尺寸</h4>
        <Table<DataType>
          columns={columns}
          dataSource={dataSource}
          height={200}
          tableSize="small"
          bordered
        />
      </div>
    </div>
  )
}

/**
 * 完整功能示例
 */
export function CompleteTableExample() {
  interface DataType {
    key: string
    name: string
    age: number
    address: string
    tags: string[]
    description: string
  }

  const [selectedRowKeys, setSelectedRowKeys] = useState<(string | number)[]>([])
  const [loading, setLoading] = useState(false)

  const columns: ColumnType<DataType>[] = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
      width: 150,
      sorter: true,
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      width: 100,
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: '地址',
      dataIndex: 'address',
      key: 'address',
      width: 200,
      ellipsis: true,
    },
    {
      title: '标签',
      dataIndex: 'tags',
      key: 'tags',
      width: 150,
      render: (tags) => (
        <div className="flex gap-1">
          {(tags as string[]).map((tag) => (
            <Tag key={tag} color="blue">
              {tag}
            </Tag>
          ))}
        </div>
      ),
    },
    {
      title: '操作',
      key: 'action',
      fixed: 'right',
      width: 150,
      render: () => (
        <div className="flex gap-2">
          <Button variant="primary" className="text-xs px-2 py-1">
            编辑
          </Button>
          <Button variant="text" className="text-xs px-2 py-1">
            删除
          </Button>
        </div>
      ),
    },
  ]

  const dataSource: DataType[] = Array.from({ length: 50 }, (_, i) => ({
    key: `${i + 1}`,
    name: `Edward King ${i}`,
    age: Math.floor(Math.random() * 50) + 20,
    address: `London, Park Lane no. ${i}`,
    tags: ['nice', 'developer'],
    description: `这是 Edward King ${i} 的详细描述信息。`,
  }))

  const rowSelection = {
    selectedRowKeys,
    onChange: (keys: (string | number)[]) => setSelectedRowKeys(keys),
  }

  const handleReload = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <div className="p-4">
      <h3 className="text-lg font-medium mb-4">完整功能示例</h3>
      <div className="mb-4 flex gap-4">
        <Button onClick={handleReload}>重新加载</Button>
        <span>已选择 {selectedRowKeys.length} 行</span>
      </div>
      <Table<DataType>
        columns={columns}
        dataSource={dataSource}
        height={500}
        width={800}
        bordered
        loading={loading}
        title="用户管理"
        footer={`共 ${dataSource.length} 条数据`}
        rowSelection={rowSelection}
        pagination={{
          defaultPageSize: 10,
          showTotal: true,
          showSizeChanger: true,
          pageSizeOptions: [10, 20, 50],
        }}
        expandable={{
          expandedRowRender: (record) => (
            <div className="p-4 bg-muted">
              <p className="text-muted-foreground">{record.description}</p>
            </div>
          ),
        }}
        sorter={{
          onChange: (field, order) => console.log('Sort:', field, order),
        }}
      />
    </div>
  )
}