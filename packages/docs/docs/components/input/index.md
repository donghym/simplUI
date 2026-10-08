---
title: Input 输入框
toc: content
group:
  title: 数据录入
---

# Input 输入框

通过鼠标或键盘输入内容。示例直接渲染 `packages/ui` 里的 `Input`。

## 代码演示

### 基础用法

```tsx
import { Input } from '@simplui/ui';

export default () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 320 }}>
    <Input placeholder="请输入内容" />
    <Input placeholder="可清空" allowClear defaultValue="simplUI" />
    <Input placeholder="禁用" disabled />
  </div>
);
```

### 状态

```tsx
import { Input } from '@simplui/ui';

export default () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 320 }}>
    <Input placeholder="错误状态" status="error" defaultValue="格式不正确" />
    <Input placeholder="警告状态" status="warning" />
  </div>
);
```
