# simplUI

simplUI 是一个面向 PC 桌面端的 copy-paste React 组件库。组件源码以 TypeScript、Tailwind CSS 和 class-variance-authority 编写，CLI 会把所需组件复制到你的项目中，方便直接修改和二次封装。

## 特性

- **桌面端单一目标**：只保留 PC 组件与桌面交互，不再维护 mobile/all 平台分支。
- **复制式使用**：通过 CLI 将组件源码复制到 `src/components/ui`，项目拥有完整源码。
- **类型友好**：组件源码、变体和工具函数均使用 TypeScript。
- **样式可覆盖**：默认 class 通过 `cn()`（`clsx` + `tailwind-merge`）合并，用户 `className` 最后覆盖。
- **模板可再生成**：`component.json` 是组件元数据源，CLI 模板由 `pnpm sync:templates` 生成。

## 快速开始

在 React 18+ 项目中执行：

```bash
npx simplui init
npx simplui add button input table
pnpm install
```

使用复制后的组件：

```tsx
import { Button, Input } from '@/components/ui'

export function SearchForm() {
  return (
    <form className="flex gap-2">
      <Input placeholder="输入关键词" allowClear />
      <Button variant="primary" htmlType="submit">
        搜索
      </Button>
    </form>
  )
}
```

> CLI 会写入 `src/components/ui/lib/utils.ts`，并把组件依赖合并到目标项目 `package.json`。Tailwind 配置需在你的项目中按实际路径启用组件目录扫描。

## CLI 命令

| 命令 | 说明 |
| --- | --- |
| `simplui init` | 创建 `src/components/ui/index.ts` 和 `src/components/ui/lib/utils.ts`，补充基础依赖 |
| `simplui add <name...>` | 复制一个或多个组件源码，追加导出，并合并组件依赖 |
| `simplui list` | 列出当前可安装组件，并标记本地已安装项 |
| `simplui info` | 输出 Node、pnpm、React、Tailwind 等环境信息 |

## 保留组件

当前保留 74 个 PC 组件：

- **基础与布局**：button、input、layout、grid、typography、form、space、divider、flex、splitter、config-provider、icon
- **导航**：menu、breadcrumb、pagination、steps、anchor、dropdown、tabs、back-top
- **数据录入**：input-number、select、switch、checkbox、radio、date-picker、time-picker、upload、slider、rate、auto-complete、cascader、tree-select、color-picker、mentions、tag-input、search-input、pro-form
- **数据展示**：table、pro-table、card、descriptions、tag、badge、avatar、avatar-group、tree、timeline、calendar、statistic、collapse、carousel、image、list、tooltip、popover、empty、infinite-scroll
- **反馈与操作**：modal、drawer、message、notification、alert、progress、result、skeleton、spin、popconfirm、float-button、copy-button、batch-operation

## 本地开发

```bash
pnpm install --frozen-lockfile
pnpm typecheck
pnpm lint
pnpm build
```

常用脚本：

| 脚本 | 说明 |
| --- | --- |
| `pnpm typecheck` | 检查 `packages/ui` 组件类型 |
| `pnpm lint` | 运行 ESLint |
| `pnpm sync:templates` | 校验所有 `component.json` 并重建 CLI 模板 |
| `pnpm build` | 先同步模板，再构建 CLI |
| `pnpm docs:dev` | 启动 dumi 文档站，浏览器里看组件总览和实时示例 |
| `pnpm docs:build` | 构建文档站静态文件到 `packages/docs/dist` |

本仓库当前没有测试脚本；新增行为性改动时建议补充组件级测试或交互示例。

## 项目结构

```text
simplui/
├── packages/
│   ├── ui/
│   │   └── src/
│   │       ├── button/
│   │       │   ├── component.json
│   │       │   ├── index.tsx
│   │       │   ├── button-variants.ts
│   │       │   └── types.ts
│   │       ├── ...
│   │       └── lib/utils.ts
│   └── cli/
│       ├── bin/simplui.js
│       └── src/
│           ├── commands/
│           ├── utils/
│           └── index.ts
├── scripts/sync-templates.ts
├── tailwind.config.js
└── package.json
```

## 组件元数据

每个组件目录必须包含 `component.json`：

```json
{
  "name": "button",
  "version": "1.0.0",
  "dependencies": ["@radix-ui/react-slot", "class-variance-authority", "lucide-react"],
  "description": "Button component with 5 variants and loading state"
}
```

`platform` 字段已移除；simplUI 现在只有 PC 桌面端组件集合。

## Class 组装策略

```tsx
className={cn(
  buttonVariants({ variant, size }),
  loading && 'pointer-events-none',
  className,
)}
```

约定：

1. CVA 变体负责稳定默认样式。
2. 内部状态 class 放在第二层。
3. 用户传入的 `className` 永远最后合并，便于覆盖默认值。

## 主题与 Tailwind

组件使用语义化 Tailwind token（例如 `bg-primary-500`、`text-muted-foreground`、`border-border`）。如果在业务项目中使用 CLI 复制组件，请确保 Tailwind `content` 包含组件目录，并按项目需要配置颜色 token。

仓库根目录的 `tailwind.config.js` 可作为主题和 safelist 参考，尤其是 Grid 组件使用的动态宽度类。

## 许可证

MIT

## 组件文档站

文档站在 `packages/docs`，用 dumi 直接引用 `packages/ui` 源码，不复制组件。

```bash
pnpm docs:dev
```

浏览器打开终端里打印的本地地址。首页是组件总览，Button、Input、Tag 有可交互示例。
