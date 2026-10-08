---
title: Tag 标签
toc: content
group:
  title: 数据展示
---

# Tag 标签

用于标记和分类。示例直接渲染 `packages/ui` 里的 `Tag`。

## 代码演示

### 语义变体

```tsx
import { Tag } from '@simplui/ui';

export default () => (
  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
    <Tag>默认</Tag>
    <Tag variant="primary">主要</Tag>
    <Tag variant="success">成功</Tag>
    <Tag variant="warning">警告</Tag>
    <Tag variant="danger">危险</Tag>
  </div>
);
```
