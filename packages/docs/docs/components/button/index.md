---
title: Button 按钮
toc: content
group:
  title: 通用
---

# Button 按钮

按钮用于触发一个即时操作。示例直接渲染 `packages/ui` 里的 `Button`。

## 代码演示

### 按钮类型

```tsx
import { Button } from '@simplui/ui';

export default () => (
  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
    <Button>默认按钮</Button>
    <Button variant="primary">主按钮</Button>
    <Button variant="dashed">虚线按钮</Button>
    <Button variant="text">文字按钮</Button>
    <Button variant="link">链接按钮</Button>
  </div>
);
```

### 加载和禁用

```tsx
import { Button } from '@simplui/ui';

export default () => (
  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
    <Button variant="primary" loading>
      加载中
    </Button>
    <Button disabled>禁用</Button>
  </div>
);
```
