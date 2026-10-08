# simplUI 项目分析与清理记录

## 结论概览

原项目已经具备 74 个桌面端组件的基础实现，但仓库混入了移动端平台分支、未接线组件、旧 Storybook/Vitest/部署脚本、macOS 元数据和失效文档。清理后项目收敛为 **PC 桌面端 copy-paste 组件库**：公共入口更直接，CLI 不再区分 `pc/mobile/all`，模板由组件元数据生成，`install/typecheck/lint/build` 均可通过。

## 主要弱点

### 架构与源码边界

- `packages/ui/src/index.ts` 是实际公共入口，但仓库同时存在 `index-pc.ts`、`index-mobile.ts`，形成三套入口语义。
- `packages/ui/src/app`、`chart`、`chat-bubble`、`hover-card` 无 `component.json`、未在公共入口导出，也没有被保留组件引用。
- `packages/cli/src/templates` 是构建产物且已被 `.gitignore` 忽略，但本地旧产物仍残留大量 examples 和已删除组件模板，容易误导维护者。
- 部分组件目录存在未接线的半成品文件，例如 `float-button` 的另一套实现、`splitter` 的折叠工具、`transfer-list`、`form-list`。

### API 一致性与易用性

- CLI 暴露 `--platform pc/mobile/all`，但组件元数据中没有 `mobile` 专用组件；`mobile` 模式实际只会筛到 `both` 组件，产品语义不成立。
- `component.json` 的 `platform` 字段让组件分类变复杂，但对当前桌面端库没有实际价值。
- 根包和 CLI 包都叫 `simplui`，对 `pnpm --filter simplui` 不友好；本次用路径过滤规避，后续可考虑给根包改名。
- README 中部分 CLI 行为描述不准确，例如 `init` 并不会自动配置 Tailwind。

### 构建与工具链

- 基线 `pnpm-lock.yaml` 与 `package.json` 不一致，`--frozen-lockfile` 无法安装。
- pnpm 12 需要显式允许 `esbuild` build script；已使用 `allowBuilds` 固化。
- 根 `package.json` 原来没有 `build` 脚本，无法一条命令完成模板同步和 CLI 构建。
- `postcss.config.js` 引用未安装的 `tailwindcss` 与 `autoprefixer`，但仓库没有 PostCSS 构建流程。

### 文档与测试

- `AGENTS.md`、`soul.md`、`tasks/todo.md` 是过程/代理规则或旧任务记录，不属于可交付组件库文档。
- `color.md`、`image.md` 是零散素材，未被源码或 README 引用。
- `WEBHOOK-SETUP.md`、`deploy.sh`、`webhook.js`、`webhook.service` 绑定个人服务器和旧 Storybook 部署，已经脱离当前库用途。
- `vitest.config.ts`、`test-setup.ts` 残留测试配置，但没有测试脚本和测试依赖。
- 当前仓库仍缺少自动化测试；本次只保证安装、类型检查、lint 和构建通过。

## 已移除内容

### 移动端/平台代码

- `packages/ui/src/index-mobile.ts`
- `packages/ui/src/index-pc.ts`
- CLI 的 `--platform` 参数、交互式平台选择、`.simplui.json` 平台配置读取/写入
- 所有 `component.json` 中的 `platform` 字段
- 模板 manifest 中的 `platform` 字段

> 说明：基线中没有 `platform: "mobile"` 的组件目录，因此没有移动端专用组件可删；本次删除的是无效的移动端产品线与平台分支。

### 死组件与未接线源码

- `packages/ui/src/app/`
- `packages/ui/src/chart/`
- `packages/ui/src/chat-bubble/`
- `packages/ui/src/hover-card/`
- `packages/ui/src/table/table-examples.tsx`
- `packages/ui/src/table/table-drag.ts`
- `packages/ui/src/table/table-tree.ts`
- `packages/ui/src/float-button/float-button.tsx`
- `packages/ui/src/float-button/float-button-group.tsx`
- `packages/ui/src/float-button/float-button-back-top.tsx`
- `packages/ui/src/form/form-list.tsx`
- `packages/ui/src/splitter/splitter-collapse.tsx`
- `packages/ui/src/splitter/splitter-sizes.ts`
- `packages/ui/src/splitter/splitter-utils.ts`
- `packages/ui/src/transfer/transfer-list.tsx`

### 旧工具、部署与文档

- `generate-stories.ts`
- `packages/ui/vitest.config.ts`
- `packages/ui/src/test-setup.ts`
- `postcss.config.js`
- `scripts/verify-cli-install.js`
- `deploy.sh`、`deploy/`
- `webhook.js`、`webhook.service`、`WEBHOOK-SETUP.md`
- `AGENTS.md`、`soul.md`、`tasks/`
- `color.md`、`image.md`、`icon.png`
- 所有已跟踪的 macOS `._*` AppleDouble 文件和 `.DS_Store`

## API 与 DX 简化

- CLI 只面向 PC 桌面端组件集合：
  - `simplui init`
  - `simplui add <name...>`
  - `simplui list`
  - `simplui info`
- `component.json` 只保留组件真实元数据：`name`、`version`、`dependencies`、`description`。
- 新增根脚本：`pnpm build` = `pnpm sync:templates && pnpm --filter ./packages/cli build`。
- README 重写为当前可运行流程，明确模板生成、CLI 行为和 Tailwind 注意事项。
- `.gitignore` 新增 `._*`，避免 macOS 元数据再次入库。

## 保留组件修复

- `calendar`：删除本地重复 `formatDate`，使用共享工具函数。
- `timeline`：补充状态归一化，修复增强 items 模式和 CVA 变体的类型不匹配。
- `float-button`、`form`、`splitter`、`transfer`：删除未导出的半成品文件，保留当前公共 API 行为。

## 破坏性变化

- CLI 删除 `--platform` 参数；旧命令如 `simplui init --platform mobile`、`simplui add button -p pc` 不再支持。
- CLI 不再写入或读取 `src/components/ui/.simplui.json`。
- `component.json` / manifest 不再包含 `platform` 字段；依赖该字段的外部脚本需要更新。
- 删除未导出的死组件目录：`app`、`chart`、`chat-bubble`、`hover-card`。如果外部曾通过深路径直接引用这些未公开目录，需要改为保留组件或重新引入。
- 删除 Storybook/Vitest/webhook/deploy 残留；相关私有部署流程不再存在。

## 验证结果

已通过：

```bash
pnpm install --frozen-lockfile
pnpm typecheck
pnpm lint
pnpm build
```

测试状态：仓库当前没有可运行的测试脚本。

## 后续建议

1. 为核心组件补最小测试集，优先覆盖 `button`、`input`、`select`、`table`、`modal`、`form`。
2. 给 CLI 增加端到端 fixture，验证 `init`、`add`、`list` 在真实 React 项目中的输出。
3. 评估根包名是否改为 `simplui-workspace`，避免和 CLI 包同名。
4. 检查 `grid` 的 `xs/sm/md/lg/xl/xxl` 断点与 Tailwind 配置是否完全匹配。
5. 为组件 API 制定命名规范，例如尺寸统一使用 `size` 还是 `componentSize`，状态统一使用 `status`。
6. 如果未来需要移动端组件，建议建立单独包或单独入口，而不是复用当前桌面端 CLI 平台字段。
