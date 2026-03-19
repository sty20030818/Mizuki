---
title: "前端项目架构说明书"
published: 2026-03-019
description: "前端项目架构说明书"
tags: [前端, vue, 架构]
category: 前端
draft: false
pinned: true
comment: true
alias: "frontend-architecture"
author: "StoneFish"
---

> 本文档用于约束项目的前端目录结构、分层边界、依赖方向、模块职责与实现方式。
> 本规范的目标不是描述"可以怎么写"，而是明确：
> - **代码必须放在哪里**
> - **各层可以依赖什么**
> - **哪些实现方式被视为推荐或强制**
> - **哪些写法属于越界或反模式**
> 
> 本规范适用于基于 Vue 的前端项目，默认技术前提包括：
> - Vue
> - Vue Router
> - Pinia
> - 请求缓存层（推荐 Query 系方案；必要时可引入 Colada）
> 
> 本规范为项目的长期维护基线。新功能、新页面、迁移重构与目录调整，均应遵循本文档。

---

## 目录

- [1. 设计目标](https://chatgpt.com/g/g-p-69a67d641880819185b466eee136eb66/c/69a67dcb-b430-8323-81a9-0b8a38a6c3d7#1-%E8%AE%BE%E8%AE%A1%E7%9B%AE%E6%A0%87)
- [1. 设计目标](##1. 设计目标)
- [2. 总体分层](https://chatgpt.com/g/g-p-69a67d641880819185b466eee136eb66/c/69a67dcb-b430-8323-81a9-0b8a38a6c3d7#2-%E6%80%BB%E4%BD%93%E5%88%86%E5%B1%82)
- [3. 依赖方向与边界约束](https://chatgpt.com/g/g-p-69a67d641880819185b466eee136eb66/c/69a67dcb-b430-8323-81a9-0b8a38a6c3d7#3-%E4%BE%9D%E8%B5%96%E6%96%B9%E5%90%91%E4%B8%8E%E8%BE%B9%E7%95%8C%E7%BA%A6%E6%9D%9F)
- [4. 项目目录结构](https://chatgpt.com/g/g-p-69a67d641880819185b466eee136eb66/c/69a67dcb-b430-8323-81a9-0b8a38a6c3d7#4-%E9%A1%B9%E7%9B%AE%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84)
- [5. App 装配层规范](https://chatgpt.com/g/g-p-69a67d641880819185b466eee136eb66/c/69a67dcb-b430-8323-81a9-0b8a38a6c3d7#5-app-%E8%A3%85%E9%85%8D%E5%B1%82%E8%A7%84%E8%8C%83)
- [6. Router 与 Layout 规范](https://chatgpt.com/g/g-p-69a67d641880819185b466eee136eb66/c/69a67dcb-b430-8323-81a9-0b8a38a6c3d7#6-router-%E4%B8%8E-layout-%E8%A7%84%E8%8C%83)
- [7. Pages 层规范（扁平化路由页）](https://chatgpt.com/g/g-p-69a67d641880819185b466eee136eb66/c/69a67dcb-b430-8323-81a9-0b8a38a6c3d7#7-pages-%E5%B1%82%E8%A7%84%E8%8C%83%E6%89%81%E5%B9%B3%E5%8C%96%E8%B7%AF%E7%94%B1%E9%A1%B5)
- [8. Features 层规范（业务域）](https://chatgpt.com/g/g-p-69a67d641880819185b466eee136eb66/c/69a67dcb-b430-8323-81a9-0b8a38a6c3d7#8-features-%E5%B1%82%E8%A7%84%E8%8C%83%E4%B8%9A%E5%8A%A1%E5%9F%9F)
- [9. Feature UI 分层规范（pages / partials / components）](https://chatgpt.com/g/g-p-69a67d641880819185b466eee136eb66/c/69a67dcb-b430-8323-81a9-0b8a38a6c3d7#9-feature-ui-%E5%88%86%E5%B1%82%E8%A7%84%E8%8C%83pages--partials--components)
- [10. 数据访问与缓存规范](https://chatgpt.com/g/g-p-69a67d641880819185b466eee136eb66/c/69a67dcb-b430-8323-81a9-0b8a38a6c3d7#10-%E6%95%B0%E6%8D%AE%E8%AE%BF%E9%97%AE%E4%B8%8E%E7%BC%93%E5%AD%98%E8%A7%84%E8%8C%83)
- [11. Pinia / Colada 使用边界](https://chatgpt.com/g/g-p-69a67d641880819185b466eee136eb66/c/69a67dcb-b430-8323-81a9-0b8a38a6c3d7#11-pinia--colada-%E4%BD%BF%E7%94%A8%E8%BE%B9%E7%95%8C)
- [12. 共享层规范（base / shared / utils / config）](https://chatgpt.com/g/g-p-69a67d641880819185b466eee136eb66/c/69a67dcb-b430-8323-81a9-0b8a38a6c3d7#12-%E5%85%B1%E4%BA%AB%E5%B1%82%E8%A7%84%E8%8C%83base--shared--utils--config)
- [13. ESLint 架构防线建议](https://chatgpt.com/g/g-p-69a67d641880819185b466eee136eb66/c/69a67dcb-b430-8323-81a9-0b8a38a6c3d7#13-eslint-%E6%9E%B6%E6%9E%84%E9%98%B2%E7%BA%BF%E5%BB%BA%E8%AE%AE)
- [14. 命名规范](https://chatgpt.com/g/g-p-69a67d641880819185b466eee136eb66/c/69a67dcb-b430-8323-81a9-0b8a38a6c3d7#14-%E5%91%BD%E5%90%8D%E8%A7%84%E8%8C%83)
- [15. 标准落地流程](https://chatgpt.com/g/g-p-69a67d641880819185b466eee136eb66/c/69a67dcb-b430-8323-81a9-0b8a38a6c3d7#15-%E6%A0%87%E5%87%86%E8%90%BD%E5%9C%B0%E6%B5%81%E7%A8%8B)
- [16. 反模式清单](https://chatgpt.com/g/g-p-69a67d641880819185b466eee136eb66/c/69a67dcb-b430-8323-81a9-0b8a38a6c3d7#16-%E5%8F%8D%E6%A8%A1%E5%BC%8F%E6%B8%85%E5%8D%95)
- [17. 自检清单](https://chatgpt.com/g/g-p-69a67d641880819185b466eee136eb66/c/69a67dcb-b430-8323-81a9-0b8a38a6c3d7#17-%E8%87%AA%E6%A3%80%E6%B8%85%E5%8D%95)
- [18. 测试规范](https://chatgpt.com/g/g-p-69a67d641880819185b466eee136eb66/c/69a67dcb-b430-8323-81a9-0b8a38a6c3d7#18-%E6%B5%8B%E8%AF%95%E8%A7%84%E8%8C%83)
- [19. 后续增强项（P2）](https://chatgpt.com/g/g-p-69a67d641880819185b466eee136eb66/c/69a67dcb-b430-8323-81a9-0b8a38a6c3d7#19-%E5%90%8E%E7%BB%AD%E5%A2%9E%E5%BC%BA%E9%A1%B9p2)

---

## 1. 设计目标

本规范基于以下目标制定：

### 1.1 路由入口清晰

所有路由页面统一收敛在 `src/pages/*Page.vue`，保持目录扁平、入口清晰、可快速定位。

### 1.2 业务逻辑收敛

与业务域强相关的模型、查询、写入、UI、编排逻辑统一收敛在 `src/features/<domain>` 内，避免业务逻辑散落在页面、全局 store 或共享目录中。

### 1.3 应用装配与业务解耦

`src/main.ts` 与 `src/App.vue` 仅承担应用启动与根壳装配职责，不承载业务实现细节。

### 1.4 页面与布局解耦

Layout 作为页面外壳独立存在，通过路由元信息选择，不反向依赖具体业务域。

### 1.5 组件粒度明确

Feature 内部 UI 按页面级、区块级、组件级进行区分，减少目录语义混乱。

### 1.6 数据一致性可控

读取链路、写入链路、缓存键与刷新机制统一定义，避免刷新策略分散和 UI 数据不一致。

---

## 2. 总体分层

项目采用以下分层模型：

### 2.1 App 装配层

目录：

- `src/main.ts`
- `src/App.vue`
- `src/app/**`

职责：

- 应用启动
- 插件安装
- Provider 装配
- 根壳装配

### 2.2 Router / Layout 层

目录：

- `src/router/**`
- `src/layouts/**`

职责：

- 路由表定义
- 守卫与跳转
- Layout 选择与页面壳装配

### 2.3 Pages 层

目录：

- `src/pages/*Page.vue`

职责：

- 路由页入口
- 参数适配
- 组合 feature 暴露出的页面视图

### 2.4 Features 层

目录：

- `src/features/<domain>/**`

职责：

- 业务模型
- 数据读取与写入
- 页面级编排
- Feature 内部 UI

### 2.5 Services 层

目录：

- `src/services/api/**`

职责：

- HTTP / SDK / DTO / API 方法

### 2.6 Shared 层

目录：

- `src/components/base/**`
- `src/components/shared/**`
- `src/composables/base/**`
- `src/utils/**`
- `src/config/**`
- `src/directives/**`
- `src/types/**`
- `src/styles/**`

职责：

- 通用组件
- 通用 hooks
- 工具函数
- 配置
- 样式与类型补充

---

## 3. 依赖方向与边界约束

### 3.1 允许的依赖方向

```txt
App / Router / Layout
          ↓
        Pages
          ↓
       Features
          ↓
       Services

Shared 可被上层复用，但 Shared 不得反向依赖业务域
```

允许的导入关系：

- `pages -> features/<domain>`
- `pages -> features/<domain>/model`
- `features -> services/api`
- `所有层 -> shared`
- `App -> router / app / layouts`

### 3.2 禁止的依赖方向

禁止以下依赖：

- `pages -> services/api`
- `pages -> features/<domain>/内部实现路径`
- `features/A -> features/B/内部实现路径`
- `shared -> features`
- `layouts -> features`
- `services -> features`

### 3.3 公开接口规则

Feature 的公开接口统一通过以下入口导出：

- `@/features/<domain>`
- `@/features/<domain>/model`

外部模块不得绕过公开入口访问以下内部目录：

- `queries/*`
- `mutations/*`
- `composables/*`
- `ui/pages/*`
- `ui/partials/*`
- `ui/components/*`

该规则为本项目的基础边界规则。

### 3.4 规则等级说明

为保证本文档在评审、重构与协作中的可执行性，本文档中的规则分为以下三个等级：

#### MUST

必须遵守。

含义：

- 属于架构边界规则
- 违反后会直接导致依赖方向失控、职责混乱或维护成本上升
- Code Review 与重构评审中应视为硬性约束

典型场景：

- `pages` 不得直接依赖 `services/api`
- 外部不得绕过 Feature 公开入口访问内部实现
- Layout 不得依赖具体 Feature

#### SHOULD

强烈建议遵守。

含义：

- 属于高价值实践
- 一般情况下应执行
- 若因历史包袱、阶段性限制或技术约束无法完全满足，应在变更说明中明确原因

典型场景：

- 页面级复杂状态优先下沉到 Feature composables
- 页面主体优先下沉到 `features/*/ui/pages/*`
- 共享组件命名与分层语义保持一致

#### MAY

可选实践。

含义：

- 在不破坏分层边界的前提下可按需要采用
- 不作为强制审查项

典型场景：

- 某些中性组件是否进入 `components/shared`
- 是否为 Feature 局部区块继续细拆更小粒度组件

#### 使用原则

- 涉及分层、依赖方向、公开接口、数据访问边界的规则，原则上应定义为 **MUST**。
- 涉及组织方式优化、工程一致性提升的规则，原则上定义为 **SHOULD**。
- 涉及实现风格偏好但不破坏架构边界的内容，可定义为 **MAY**。

---

## 4. 项目目录结构

推荐项目目录结构如下：

```txt
src
├─ main.ts
├─ App.vue
│
├─ app
│  ├─ bootstrap
│  │  ├─ installApp.ts
│  │  ├─ installPlugins.ts
│  │  ├─ installDirectives.ts
│  │  └─ installErrorHandling.ts
│  ├─ providers
│  │  ├─ AppProviders.vue
│  │  ├─ ToastProvider.vue
│  │  └─ DialogProvider.vue
│  └─ shell
│     ├─ AppShell.vue
│     └─ AppRouterView.vue
│
├─ router
│  ├─ index.ts
│  ├─ routes.ts
│  └─ guards
│     ├─ auth.guard.ts
│     ├─ permission.guard.ts
│     └─ analytics.guard.ts
│
├─ layouts
│  ├─ index.ts
│  ├─ LayoutHost.vue
│  ├─ DefaultLayout.vue
│  ├─ EmptyLayout.vue
│  ├─ DashboardLayout.vue
│  └─ parts
│     ├─ AppHeader.vue
│     ├─ AppSidebar.vue
│     └─ AppBreadcrumb.vue
│
├─ pages
│  ├─ WorkspaceTasksPage.vue
│  ├─ WorkspaceOverviewPage.vue
│  ├─ ReviewListPage.vue
│  ├─ ReviewDetailPage.vue
│  ├─ InspectorProfilePage.vue
│  └─ LoginPage.vue
│
├─ features
│  ├─ workspace
│  │  ├─ index.ts
│  │  ├─ model
│  │  │  ├─ index.ts
│  │  │  ├─ types.ts
│  │  │  ├─ keys.ts
│  │  │  └─ constants.ts
│  │  ├─ queries
│  │  │  ├─ mappers.ts
│  │  │  ├─ useWorkspaceTasksQuery.ts
│  │  │  └─ useWorkspaceSummaryQuery.ts
│  │  ├─ mutations
│  │  │  ├─ useCreateTaskMutation.ts
│  │  │  └─ useUpdateTaskMutation.ts
│  │  ├─ composables
│  │  │  ├─ useWorkspaceTasksPage.ts
│  │  │  └─ useWorkspaceFilters.ts
│  │  └─ ui
│  │     ├─ pages
│  │     │  ├─ WorkspaceTasksPageView.vue
│  │     │  └─ WorkspaceOverviewPageView.vue
│  │     ├─ partials
│  │     │  ├─ WorkspaceTaskToolbar.vue
│  │     │  ├─ WorkspaceTaskFilters.vue
│  │     │  └─ WorkspaceSummaryPanel.vue
│  │     └─ components
│  │        ├─ WorkspaceTaskTable.vue
│  │        ├─ WorkspaceTaskCard.vue
│  │        └─ WorkspaceStatusTag.vue
│  ├─ review
│  │  └─ ...
│  └─ inspector
│     └─ ...
│
├─ services
│  └─ api
│     ├─ http.ts
│     ├─ auth.ts
│     ├─ workspace.tasks.ts
│     ├─ workspace.summary.ts
│     ├─ review.items.ts
│     └─ ...
│
├─ components
│  ├─ base
│  │  ├─ BaseButton.vue
│  │  ├─ BaseInput.vue
│  │  ├─ BaseModal.vue
│  │  └─ BaseTable.vue
│  └─ shared
│     ├─ ConfirmDialog.vue
│     ├─ EmptyState.vue
│     └─ LoadingBlock.vue
│
├─ composables
│  └─ base
│     ├─ useBoolean.ts
│     ├─ useDebounce.ts
│     ├─ useEventListener.ts
│     └─ usePagination.ts
│
├─ store
│  ├─ index.ts
│  ├─ app.store.ts
│  └─ auth.store.ts
│
├─ plugins
│  ├─ query.ts
│  ├─ i18n.ts
│  ├─ analytics.ts
│  └─ sentry.ts
│
├─ directives
│  ├─ v-focus.ts
│  └─ v-click-outside.ts
│
├─ utils
│  ├─ date.ts
│  ├─ format.ts
│  ├─ object.ts
│  └─ route.ts
│
├─ config
│  ├─ env.ts
│  ├─ constants.ts
│  └─ featureFlags.ts
│
├─ styles
│  ├─ index.css
│  ├─ reset.css
│  └─ tokens.css
│
├─ assets
│  ├─ icons
│  └─ images
│
└─ types
   ├─ env.d.ts
   └─ shims-vue.d.ts
```

---

## 5. App 装配层规范

### 5.1 `src/main.ts`

#### 职责

- 创建应用实例
- 调用统一安装方法
- 执行挂载

#### 约束

- 不直接编写长串插件安装逻辑
- 不编写业务初始化逻辑
- 不编写权限逻辑
- 不编写布局逻辑

#### 推荐写法

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { installApp } from './app/bootstrap/installApp'

const app = createApp(App)
installApp(app)
app.mount('#app')
```

### 5.2 `src/App.vue`

#### 职责

- 装配根级 Providers
- 装配根级 Shell

#### 约束

- 不直接引入具体业务 Feature
- 不直接编写页面逻辑
- 不直接请求业务数据

#### 推荐写法

```html
<template>
  <AppProviders>
    <AppShell />
  </AppProviders>
</template>

<script setup lang="ts">
import AppProviders from '@/app/providers/AppProviders.vue'
import AppShell from '@/app/shell/AppShell.vue'
</script>
```

### 5.3 `src/app/bootstrap/**`

#### 职责

- 集中安装插件、指令、错误处理
- 作为 `main.ts` 的负载转移层

#### 示例

```ts
import type { App } from 'vue'
import { router } from '@/router'
import { installPlugins } from './installPlugins'
import { installDirectives } from './installDirectives'

export function installApp(app: App) {
  app.use(router)
  installPlugins(app)
  installDirectives(app)
}
```

### 5.4 `src/app/providers/**`

#### 职责

- 组织全局 Provider 容器
- 收纳 Toast、Dialog、主题、Query 等根级容器

### 5.5 `src/app/shell/**`

#### 职责

- 组织应用根壳
- 承接根级 RouterView、LayoutHost、全局边界容器

---

## 6. Router 与 Layout 规范

### 6.1 Router 规范

#### Router 的职责

- 定义路由表
- 定义守卫
- 通过 `meta` 提供页面装配信息

#### Router 的强约束

- 路由组件必须指向 `src/pages/*Page.vue`
- 路由不得直接指向 `features/*/ui/pages/*`

#### 推荐示例

```ts
{
  path: '/workspace/tasks',
  component: () => import('@/pages/WorkspaceTasksPage.vue'),
  meta: { layout: 'dashboard', requiresAuth: true },
}
```

### 6.2 权限控制归属

权限控制统一放在 Router Guard 层处理。

#### 原则

- 未登录跳转
- 无权限跳转
- 路由级权限判断

应在 `router/guards/*` 中处理，而不应下沉到 Layout 或具体页面中。

#### 理由

- Router Guard 更接近路由访问入口
- Layout 的职责应保持为页面壳，而非访问控制
- 页面层不应承担系统级访问决策

### 6.3 Layout 规范

#### Layout 的定位

Layout 是页面外壳，用于控制：

- Header
- Sidebar
- Breadcrumb
- 内容区容器
- 页面整体壳结构

#### Layout 的禁止事项

- 不得直接导入 Feature
- 不得请求 Feature 数据
- 不得承载业务编排逻辑

### 6.4 Layout 选择方式

统一通过 `route.meta.layout` 选择布局。

#### 推荐结构

- `LayoutHost.vue`：读取 meta 并选择具体 Layout
- `DefaultLayout.vue`：通用布局
- `EmptyLayout.vue`：登录页、空白页
- `DashboardLayout.vue`：带导航和侧栏的后台布局
- `layouts/parts/*`：布局内部组成块

#### 示例

```html
<template>
  <component :is="layoutComponent">
    <router-view />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import DefaultLayout from './DefaultLayout.vue'
import EmptyLayout from './EmptyLayout.vue'
import DashboardLayout from './DashboardLayout.vue'

const route = useRoute()

const layoutMap = {
  default: DefaultLayout,
  empty: EmptyLayout,
  dashboard: DashboardLayout,
}

const layoutComponent = computed(() => {
  const key = (route.meta.layout as keyof typeof layoutMap) || 'default'
  return layoutMap[key] || DefaultLayout
})
</script>
```

---

## 7. Pages 层规范（扁平化路由页）

### 7.1 目录结构要求

`src/pages` 必须保持扁平化。

允许：

```txt
pages/
  WorkspaceTasksPage.vue
  ReviewDetailPage.vue
  LoginPage.vue
```

不允许：

```txt
pages/
  workspace/
    tasks/
      index.vue
```

### 7.2 Pages 的职责

每个 `*Page.vue` 仅承担以下职责：

- 作为路由页面入口
- 读取并适配 route params / query
- 组合一个或多个 Feature 暴露出的 page view
- 必要时透传参数给 Feature page view

### 7.3 Pages 的禁止事项

- 不直接导入 `services/api`
- 不直接编写 query / mutation
- 不承载复杂业务状态编排
- 不进行 DTO 到领域模型的转换
- 不直接导入 Feature 内部目录

### 7.4 推荐写法

#### 单 Feature 页面

```html
<template>
  <WorkspaceTasksPageView />
</template>

<script setup lang="ts">
import { WorkspaceTasksPageView } from '@/features/workspace'
</script>
```

#### 带路由适配的页面

```html
<template>
  <ReviewDetailPageView :review-id="reviewId" />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ReviewDetailPageView } from '@/features/review'

const route = useRoute()
const reviewId = String(route.params.reviewId)
</script>
```

### 7.5 路由页契约（Page Contract）

为保证 `src/pages/*Page.vue` 长期保持轻量化，Pages 与 Feature Page View 的交接边界必须明确。

#### Pages 允许承担的职责（MUST）

- 作为 Router 的直接页面入口
- 读取 `route.params` 与 `route.query`
- 进行最小限度的参数适配与类型归一
- 选择并组合一个或多个 Feature 暴露出的 page view
- 向 Feature page view 透传路由级参数

#### Pages 不得承担的职责（MUST）

- 不直接调用 `services/api`
- 不直接编写查询、写入逻辑
- 不承担复杂状态编排
- 不进行 DTO 到领域模型的转换
- 不处理页面核心业务规则

#### Feature Page View 的职责（MUST）

`features/*/ui/pages/*` 作为页面主体视图，负责：

- 承载页面主要内容结构
- 组织本 Feature 的 partials 与 components
- 调用本 Feature 的页面级 composable
- 处理页面级业务展示逻辑

#### 推荐边界理解（SHOULD）

可将两者关系理解为：

- `pages/*Page.vue` = 路由适配层
- `features/*/ui/pages/*` = 页面主体层

#### 推荐示例

```html
<template>
  <ReviewDetailPageView :review-id="reviewId" />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ReviewDetailPageView } from '@/features/review'

const route = useRoute()
const reviewId = String(route.params.reviewId)
</script>
```

在该模式下，路由页仅完成参数适配，具体页面主体由 Feature 负责。

---

## 8. Features 层规范（业务域）

### 8.1 Feature 的定义

Feature 是业务域的完整实现单元。Feature 可以是：

- 一个独立业务域
- 一个包含多个子域的一级业务域

当某个业务域规模较大时，允许在该域下继续按语义拆分为多个子域。此时：

- 一级域负责对外公开该域的能力边界
- 子域负责各自的具体实现
- 跨子域复用的内容统一收敛到一级域下的 `shared/`

一级域与子域的关系应理解为：

- 一级域 = 边界与聚合层
- 子域 = 具体能力实现层

### 8.2 推荐目录结构

#### A. 单一业务域

适用于规模中等、边界清晰、无需再拆分子域的 Feature。

```txt
features/<domain>/
  index.ts
  model/
  queries/
  mutations/
  composables/
  ui/
```

#### B. 大型业务域（带子域）

适用于一级域下包含多个稳定语义模块的场景。

```txt
features/<domain>/
  <subdomain-a>/
  <subdomain-b>/
  <subdomain-c>/
  shared/
  index.ts
  model/
```

其中：

- 子域承载各自的实现
- `shared/` 仅承载兄弟子域之间复用的内容
- `index.ts` 与 `model/` 仍作为一级域的对外公开边界

#### 子域结构规则

子域不强制必须同时具备 `model / queries / mutations / composables / ui` 五类子目录。

应根据复杂度采用渐进式组织方式。

##### 简单子域（SHOULD）

当子域规模较小、实现简单时，优先采用扁平文件结构：

```txt
<subdomain>/
  model.ts
  queries.ts
  mutations.ts
```

如有少量局部 UI 或编排需求，可按需增加：

```txt
<subdomain>/
  model.ts
  queries.ts
  mutations.ts
  composables/
  ui/
```

##### 复杂子域（SHOULD）

只有当子域明显变复杂时，才将其升级为完整分层目录，例如：

- 查询与写入逻辑已经显著增多
- 页面级编排明显增多
- 子域内 UI 已出现多层级结构
- 子域内部已形成独立维护边界

升级后可采用：

```txt
<subdomain>/
  model/
  queries/
  mutations/
  composables/
  ui/
```

#### 子域 Shared 规则

默认不设"子域自己的 `shared/`"。

原因如下：

- 子域内部共享通常尚不足以形成稳定的模块边界
- 过早引入多层 shared 容易导致结构膨胀
- 会削弱一级域 `shared/` 的收敛作用

仅当某个子域本身已经足够复杂，且其内部再次形成明确子模块边界时，才允许在该子域内继续分模块并引入更细粒度共享目录。

#### 一级域 `shared/` 的使用边界

一级域下的 `shared/` 仅用于承载"跨子域复用"的内容。

允许进入一级域 `shared/` 的内容包括：

- 跨子域复用的类型
- 跨子域复用的表单片段
- 跨子域复用的弹窗
- 跨子域复用的常量
- 跨子域复用的映射工具

禁止将以下内容放入一级域 `shared/`：

- 仅被单个子域使用的实现
- 尚未形成稳定复用关系的临时代码
- 本应留在子域内部的业务实现细节

#### 一级域与子域的组织原则

- 一级域负责聚合边界与公开接口。
- 子域负责自己的实现细节。
- 只有跨子域复用的内容才进入一级域 `shared/`。
- 小子域优先采用扁平文件。
- 复杂后再升级为完整分层目录。

### 8.3 `index.ts` 规范

#### 职责

- Feature 对外统一公开入口
- 白名单式导出允许外部使用的能力
- 当 Feature 为一级域时，负责聚合其子域对外能力

#### 强约束

外部模块只应从该入口使用 Feature 能力。

#### 推荐导出内容

- 页面级 page view
- 必要的编排 composable
- 少量需要跨页面复用的 UI 能力
- 一级域场景下，对外聚合后的子域能力

### 8.4 `model/` 规范

#### 职责

- 定义领域模型
- 定义 query keys
- 定义领域常量
- 提供稳定对外类型出口
- 在一级域场景下，承载该域统一对外的模型契约

#### 说明

当 Feature 为大型一级域时：

- 一级域下的 `model/` 负责对外稳定模型边界
- 子域内部可以保留各自局部模型文件或目录
- 只有需要对一级域外部稳定暴露的模型契约，才应收敛到一级域 `model/`

#### 示例

```ts
export type Task = {
  id: string
  title: string
  status: 'todo' | 'doing' | 'done'
  createdAt: Date
}
```

### 8.5 `queries/` 规范

#### 职责

- 封装读取链路
- 调用 `services/api`
- 将 DTO 映射为领域模型
- 管理缓存键与查询行为

### 8.6 `mutations/` 规范

#### 职责

- 封装写入链路
- 写入成功后执行 invalidation

### 8.7 `composables/` 规范

#### 职责

- 进行页面级或用例级状态编排
- 组合 queries、mutations 与局部 UI 状态

#### 典型用途

- 页面筛选条件
- 分页状态
- 页面行为封装
- Feature 页面 ViewModel

### 8.8 公开接口导出边界

虽然 Feature 对外统一通过 `index.ts` 与 `model/index.ts` 暴露能力，但公开入口的导出范围仍需受控。

#### `features/<domain>/index.ts` 推荐导出内容（SHOULD）

- 页面级 Page View
- 面向页面层的编排 composable
- 少量明确需要跨页面复用的 Feature UI
- 必要时导出少量中性帮助类型（如确有必要）
- 一级域场景下，聚合后的子域公开能力

#### `features/<domain>/index.ts` 禁止导出内容（MUST）

- `queries/*`
- `mutations/*`
- `mappers/*`
- 内部 helpers
- 仅供 Feature 内部使用的 partials
- 未明确声明为公开 API 的 components
- 子域内部未收敛的实现细节

#### `features/<domain>/model/index.ts` 推荐导出内容（SHOULD）

- 领域类型
- query keys
- 领域常量
- 明确需要对外稳定暴露的模型契约
- 一级域统一对外的模型边界

#### 导出控制原则

- Feature 入口应被视为该业务域的"公开 API 面"。
- 入口导出数量应保持克制，避免将整个内部目录结构等价公开。
- 内部实现一旦被公开，后续重构成本会显著上升，因此入口导出必须保持审慎。
- 在大型一级域场景下，应优先由一级域入口聚合子域公开能力，而不是让外部直接面向子域内部文件结构编程。

---

## 9. Feature UI 分层规范（pages / Partials / components）

Feature 内部 UI 统一分为三层：

```txt
ui/
  pages/
  partials/
  components/
```

### 9.1 `ui/pages/`

#### 定义

页面级业务视图。

#### 使用场景

- 对应某个路由页的主体内容
- 直接被 `src/pages/*Page.vue` 组合使用
- 可调用本 Feature 的页面级 composable

#### 示例

- `WorkspaceTasksPageView.vue`
- `ReviewDetailPageView.vue`

### 9.2 `ui/partials/`

#### 定义

页面中的区块级拼装单元。

#### 使用场景

- 工具栏
- 筛选区
- 摘要区
- 侧栏区块
- 表单区块
- 页面中的独立大板块

#### 示例

- `WorkspaceTaskToolbar.vue`
- `WorkspaceSummaryPanel.vue`
- `ReviewDetailSidebar.vue`

### 9.3 `ui/components/`

#### 定义

更小粒度的 Feature 内业务组件。

#### 使用场景

- 表格
- 卡片
- 标签
- 列表项
- 状态显示组件

#### 示例

- `WorkspaceTaskTable.vue`
- `WorkspaceStatusTag.vue`
- `ReviewBadge.vue`

### 9.4 区分规则

#### 放入 `ui/pages/`，如果该组件：

- 构成某个路由页的主要内容
- 直接被 `src/pages/*Page.vue` 使用
- 需要组织多个 partials 与 components

#### 放入 `ui/partials/`，如果该组件：

- 是页面中的一个大区块
- 自身已组合多个基础组件或业务组件
- 更像页面的一段区域，而不是单一控件

#### 放入 `ui/components/`，如果该组件：

- 粒度较小
- 聚焦于一个明确的业务 UI 单元
- 不承担页面区块组织职责

#### 子域下的 UI 组织原则

- 小型子域可以仅保留少量 `ui/` 目录，不强制继续拆分多层结构。
- 只有当子域 UI 已明显形成页面级、区块级、组件级三种不同粒度时，才建议按 `pages / partials / components` 继续分层。
- Feature UI 分层属于渐进式组织手段，不要求在所有子域中一次到位。

---

## 10. 数据访问与缓存规范

### 10.1 Services 层职责

`src/services/api/**` 仅负责：

- HTTP 客户端
- DTO 类型
- API 方法

不得承担：

- 领域模型定义
- 页面状态编排
- 缓存键定义
- 刷新策略定义

### 10.2 DTO 与领域模型分离

- DTO 只存在于 `services/api`
- 领域模型定义在 `features/<domain>/model`
- DTO 到领域模型的映射应放在 `features/<domain>/queries/mappers.ts`

### 10.3 Query Key 规范

统一骨架：

```ts
[domain, resource, scope, params]
```

示例：

```ts
['workspace', 'tasks', 'list', { page: 1, pageSize: 20 }]
['workspace', 'tasks', 'detail', { taskId: '123' }]
```

### 10.4 Mutation 刷新规则

写入成功后必须执行 invalidation。

推荐粒度：

- 新增：刷新 list
- 更新：刷新 detail + 相关 list
- 删除：刷新 list + 受影响 detail

禁止混用以下方式作为主要数据刷新手段：

- 事件广播刷新
- 页面局部手动 setState 刷新
- 各页面自行决定刷新逻辑

---

## 11. Pinia / Colada 使用边界

### 11.1 Pinia 的定位

Pinia 用于全局状态管理，但应保持边界明确。

#### 适合放入 Pinia 的状态

- 用户登录态
- 当前租户 / 工作区上下文
- 主题模式
- 当前语言
- 全局 feature flags
- 系统级偏好设置

#### 不建议放入 Pinia 的状态

- 列表数据
- 详情数据
- 页面筛选条件
- 页面临时交互态
- 由 query 层可自然管理的数据

上述数据优先放入：

- Feature queries
- Feature composables

### 11.2 Colada 的引入时机

必要时可引入 Colada，用于增强请求数据管理能力。

#### 推荐使用场景

- 需要更清晰的数据查询与缓存模型
- 需要替代散落的页面级请求状态管理
- 需要统一处理列表、详情、刷新、失效逻辑

#### 约束

即使引入 Colada，其使用边界仍应保持不变：

- 查询逻辑仍放在 `features/<domain>/queries`
- 写入逻辑仍放在 `features/<domain>/mutations`
- 页面层仍不得直接请求 API

换言之，Colada 改变的是实现工具，不改变分层归属。

### 11.3 状态归属矩阵

为避免状态落点混乱，项目中的状态按来源与生命周期分为三类，并分别归属不同层管理。

#### A. 全局系统状态 → Pinia（MUST）

适用于跨页面、跨业务域共享，且具有明显应用级意义的状态。

典型示例：

- 登录态
- 当前用户信息摘要
- 当前租户 / 工作区上下文
- 主题模式
- 当前语言
- 系统级偏好设置
- 全局 feature flags

#### B. 服务端异步数据 → Query / Colada（MUST）

适用于来源于服务端、需要缓存、刷新、失效管理的数据。

典型示例：

- 列表数据
- 详情数据
- 统计汇总数据
- 服务端分页数据
- 服务端筛选结果
- 与资源状态强绑定的数据视图

此类数据必须通过 Feature 内 `queries/` 管理，而不应直接进入页面或全局 store。

#### C. 页面/组件临时交互状态 → Feature Composables 或组件本地 state（MUST）

适用于生命周期较短、仅影响当前页面或局部交互的状态。

典型示例：

- 当前 tab
- 弹窗开关
- 当前展开项
- 输入框临时值
- 当前排序方式
- 页面内筛选面板的本地开关状态

#### 归属原则

- 只要数据来自服务端并需要与缓存、刷新联动，优先归属 Query / Colada。
- 只要状态具有全局共享属性，归属 Pinia。
- 只要状态仅服务当前页面或当前组件交互，归属 composables 或 local state。

#### 禁止事项（MUST）

- 不得将列表、详情、分页结果等服务端数据滥用 Pinia 承载。
- 不得将页面临时交互状态上提为全局 store，除非确有跨页面共享需求。
- 不得在页面层直接持有服务端数据管理职责而绕过 Feature 查询层。

### 11.4 异步状态规范

为统一页面与区块的异步交互表现，Feature 的读取与写入逻辑应显式处理以下状态：

- loading
- empty
- error
- retry
- submitting
- disabled

#### 首屏加载（SHOULD）

当页面主体首次加载时，应提供明确的加载态，而不是空白页面或结构闪烁。

#### 局部加载（SHOULD）

局部刷新或局部区块数据加载时，应优先使用区块级 loading，而非阻断整个页面。

#### 空态（SHOULD）

当请求成功但无数据时，应提供明确 empty state，而非仅显示空白区域。

#### 错误态（MUST）

当请求失败时，应至少提供：

- 错误反馈
- 可识别的失败状态
- 合理的重试入口（如适用）

#### 提交态（MUST）

写入过程中应显式暴露 submitting / pending 状态，用于控制：

- 按钮 disabled
- 防重复提交
- 提交中反馈

#### 乐观更新（MAY）

仅当业务一致性与回滚逻辑清晰时，允许采用乐观更新。若采用，必须明确失败回滚策略。

#### 统一原则

- 异步状态应优先在 Feature 层统一建模，再向 UI 暴露。
- 不应由页面层临时拼接异步状态方案。
- 相同类型的页面和区块应尽量保持一致的异步状态表达方式。

---

## 12. 共享层规范（base / Shared / Utils / config）

### 12.1 `components/base/*`

#### 定义

纯基础组件，无业务语义。

#### 示例

- `BaseButton.vue`
- `BaseInput.vue`
- `BaseModal.vue`
- `BaseTable.vue`

#### 强约束

基础组件命名不得出现业务词汇，如：

- task
- review
- workspace
- profile

### 12.2 `components/shared/*`

#### 定义

跨多个 Feature 复用的轻业务或中性 UI 壳组件。

#### 示例

- `ConfirmDialog.vue`
- `EmptyState.vue`
- `LoadingBlock.vue`

#### 约束

若组件已带明显业务语义，应回归对应 Feature，而不是继续放在 shared。

### 12.3 `composables/base/*`

#### 定义

通用 hooks，不带业务语义。

#### 示例

- `useBoolean.ts`
- `useDebounce.ts`
- `usePagination.ts`

### 12.4 `utils/*`

#### 定义

纯工具函数。

#### 约束

若工具函数名称或逻辑已明显依赖业务概念，应放回 Feature。

### 12.5 `config/*`

#### 定义

环境配置、系统常量、功能开关。

#### 约束

业务规则不应伪装成全局配置。

若某项常量属于领域规则，应放入 `features/<domain>/model/constants.ts`。

---

## 13. ESLint 架构防线建议

本项目建议通过 ESLint 建立基础防线，不追求过细，但应覆盖关键越界场景。

### 13.1 最低建议规则

#### 规则一：页面层禁止直接导入 API

禁止：

- `src/pages/** -> @/services/api/*`

#### 规则二：外部禁止导入 Feature 内部实现

禁止：

- `@/features/*/queries/*`
- `@/features/*/mutations/*`
- `@/features/*/composables/*`
- `@/features/*/ui/*`

#### 规则三：Shared 禁止依赖 Feature

禁止：

- `components/base -> features`
- `components/shared -> features`
- `composables/base -> features`
- `utils -> features`

### 13.2 规则目的

这些规则用于保障：

- 页面保持轻量
- Feature 公开入口不被绕过
- Shared 不被业务污染

### 13.3 示例配置（简化版）

```js
'no-restricted-imports': [
  'error',
  {
    patterns: [
      {
        group: ['@/services/api/*'],
        message: '页面层禁止直接访问 services/api，请通过 feature 公开能力使用。',
      },
      {
        group: [
          '@/features/*/queries/*',
          '@/features/*/mutations/*',
          '@/features/*/composables/*',
          '@/features/*/ui/*',
        ],
        message: '禁止直接依赖 feature 内部实现，请通过公开入口导入。',
      },
    ],
  },
]
```

---

## 14. 命名规范

### 14.1 Pages 命名

所有路由页统一命名为：

- `XxxPage.vue`

示例：

- `WorkspaceTasksPage.vue`
- `ReviewDetailPage.vue`
- `LoginPage.vue`

### 14.2 Feature Page View 命名

页面级业务视图统一命名为：

- `XxxPageView.vue`

示例：

- `WorkspaceTasksPageView.vue`
- `ReviewDetailPageView.vue`

### 14.3 Partials 命名

区块级组件建议使用能够体现区块语义的后缀：

- `Toolbar`
- `Panel`
- `Section`
- `Sidebar`
- `Filters`
- `Summary`

示例：

- `WorkspaceTaskToolbar.vue`
- `ReviewDetailSidebar.vue`
- `WorkspaceSummaryPanel.vue`

### 14.4 Components 命名

组件级单元建议使用能够体现组件角色的后缀：

- `Table`
- `Card`
- `Item`
- `Row`
- `Tag`
- `Badge`
- `Form`

示例：

- `WorkspaceTaskTable.vue`
- `WorkspaceTaskCard.vue`
- `ReviewStatusBadge.vue`

### 14.5 Query / Mutation / Composable 命名

- Query：`useXxxQuery.ts`
- Mutation：`useXxxMutation.ts`
- 页面级编排：`use<Domain><UseCase>Page.ts`
- 局部业务编排：`use<Domain><UseCase>.ts`

示例：

- `useWorkspaceTasksQuery.ts`
- `useCreateTaskMutation.ts`
- `useWorkspaceTasksPage.ts`

---

## 15. 标准落地流程

### 15.1 新建一个路由页

以 `WorkspaceTasksPage` 为例：

1. 在 `src/pages/` 创建 `WorkspaceTasksPage.vue`
2. 在 `features/workspace/ui/pages/` 创建 `WorkspaceTasksPageView.vue`
3. 在 `features/workspace/composables/` 创建 `useWorkspaceTasksPage.ts`
4. 在 `ui/partials/` 拆分工具栏、筛选区、摘要区等页面区块
5. 在 `ui/components/` 放表格、卡片、标签等组件级单元
6. 在 `features/workspace/index.ts` 统一导出 `WorkspaceTasksPageView`
7. 在 `router/routes.ts` 注册该 `pages/*Page.vue`

### 15.2 新建一个 Feature 区块

1. 判断其是否为完整页面主体
	- 是：放 `ui/pages/`
2. 否则判断其是否为页面中的区块
	- 是：放 `ui/partials/`
3. 否则放入 `ui/components/`

### 15.3 从旧页面迁移到 Feature

1. 在目标 Feature 中建立 `model / queries / mutations / composables / ui`
2. 将 API 直连逻辑下沉到 `queries / mutations`
3. 将页面状态编排下沉到 `composables`
4. 将页面主体下沉到 `ui/pages`
5. 将路由页改造为扁平 `pages/*Page.vue` 壳
6. 统一从 Feature 入口导出使用能力

---

## 16. 反模式清单

以下情况视为明显越界或反模式：

### 16.1 Pages 承载重业务

表现：

- 页面直接请求 API
- 页面管理复杂筛选/分页/写入逻辑
- 页面中充斥 DTO 处理

### 16.2 绕过 Feature 公开入口

表现：

- 直接导入 `queries/*`
- 直接导入 `ui/pages/*`
- 直接导入 `composables/*`

### 16.3 Layout 依赖 Feature

表现：

- Layout 中引入 Feature 页面组件
- Layout 中请求业务数据
- Layout 中写业务编排逻辑

### 16.4 Shared 被业务污染

表现：

- `components/shared` 下出现大量业务词组件
- `utils` 中出现明显业务规则工具
- `base` 目录依赖 Feature

### 16.5 Pinia 过度承载页面状态

表现：

- 列表数据进 Pinia
- 页面筛选条件进 Pinia
- 详情数据进 Pinia

### 16.6 App 装配层失控

表现：

- `main.ts` 中堆积大量安装逻辑
- `App.vue` 中开始出现业务页面逻辑

---

## 17. 自检清单

### 17.1 路由与页面

-  `pages/` 是否保持扁平，仅保留 `*Page.vue`
-  路由是否统一指向 `pages/*Page.vue`
-  页面是否仅负责路由适配与组合

### 17.2 Feature

-  是否统一通过 `features/<domain>` 或 `features/<domain>/model` 暴露公开接口
-  页面主体是否放在 `ui/pages/`
-  页面区块是否放在 `ui/partials/`
-  组件级单元是否放在 `ui/components/`
-  查询、写入、编排是否均在 Feature 内部完成

### 17.3 App / Layout

-  `main.ts` 是否仅负责启动与安装
-  `App.vue` 是否仅负责根壳装配
-  Layout 是否仅负责页面外壳
-  权限控制是否放在 Router Guard 层

### 17.4 数据与状态

-  DTO 是否未泄漏到页面层
-  mutation 成功后是否执行 invalidation
-  页面数据是否未被滥用 Pinia 承载
-  Query / Colada 是否仍然受 Feature 边界约束

### 17.5 共享层

-  `base` 是否无业务语义
-  `shared` 是否未演变为业务组件仓库
-  `utils` 与 `config` 是否未承载领域规则

---

## 18. 测试规范

测试规范单独列出，用于明确不同层级的测试落点与职责范围。

### 18.1 测试目标

测试的目标不是覆盖所有文件，而是覆盖最有价值的行为边界：

- 纯逻辑是否正确
- 数据映射是否正确
- 页面级编排是否正确
- 关键交互是否正确
- 路由与布局关键路径是否正确

### 18.2 分层测试建议

#### `utils/*`（SHOULD）

优先编写单元测试。

适合验证：

- 日期处理
- 字符串处理
- 对象转换
- 纯函数逻辑

#### `composables/base/*`（SHOULD）

优先编写单元测试。

适合验证：

- 状态切换
- debounce / pagination 等通用行为
- 副作用边界是否正确

#### `features/*/queries/*`（SHOULD）

建议编写逻辑测试或集成测试。

适合验证：

- API 返回与领域模型映射是否正确
- query key 是否符合预期
- 查询条件变化后的结果行为是否正确

#### `features/*/mutations/*`（SHOULD）

建议编写逻辑测试或集成测试。

适合验证：

- 写入参数是否正确
- 成功后 invalidation 是否被触发
- 失败路径反馈是否正确

#### `features/*/composables/*`（MUST，关键页面场景）

页面级编排逻辑应优先测试。

适合验证：

- 页面筛选、分页、排序状态流转
- 页面行为封装
- query / mutation 与页面状态组合是否正确

#### `features/*/ui/components/*` 与 `ui/partials/*`（SHOULD）

建议进行组件交互测试。

适合验证：

- props / emit 是否符合预期
- 关键交互路径是否可用
- loading / empty / error / disabled 状态是否正确展示

#### `features/*/ui/pages/*`（SHOULD）

建议进行页面主体视图测试。

适合验证：

- 页面主体是否正确组织 partials 与 components
- 页面级 ViewModel 是否正确接入
- 页面主要交互是否可达

#### `pages/*Page.vue`（MAY）

页面层通常较薄，测试优先级低于 Feature page view。

适合验证：

- 路由参数适配
- 多个 Feature page view 的组合关系

#### `router/*` 与 `layouts/*`（SHOULD）

建议覆盖关键路径测试。

适合验证：

- layout 选择是否正确
- 权限路由跳转是否正确
- 关键守卫逻辑是否正确

### 18.3 测试原则

- 测试应优先覆盖"逻辑边界"与"交互关键路径"，而非机械追求覆盖率。
- 页面层越薄，越应减少对 `pages/*Page.vue` 的重复测试，转而测试 Feature page view 与 composables。
- 数据映射、失效刷新、页面级编排是高价值测试点。

---

## 19. 后续增强项（P2）

以下内容不作为当前版本的强制主规范，但建议在后续版本逐步补充，用于完善工程一致性。

### 19.1 性能与拆包策略（MAY）

建议后续补充：

- 路由级懒加载约束
- Feature page view 的分包策略
- 大型图表或重模块的按需加载规则
- 避免基础组件无节制全局注册的约束

### 19.2 样式与设计令牌边界（MAY）

建议后续补充：

- 全局 tokens 的存放方式
- Feature 私有样式与共享样式的边界
- 业务样式是否允许进入 shared/base
- scoped 样式与全局样式的适用范围

### 19.3 可观测性规范（MAY）

建议后续补充：

- 页面访问埋点落点
- 业务事件埋点落点
- 全局错误上报位置
- 日志与监控信息的分层归属

---

## 结论

本规范的核心结构可概括为：

- **扁平 Pages 负责路由入口**
- **Features 负责业务实现闭环**
- **App 层负责启动与根壳装配**
- **Layout 负责页面外壳**
- **Services 负责数据访问**
- **Shared 只承载真正通用的基础能力**

所有新代码均应在此框架下组织。若需例外，应明确说明原因、范围与后续收敛计划。
