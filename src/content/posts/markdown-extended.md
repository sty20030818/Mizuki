---
title: Markdown 扩展特性
published: 2024-05-01
updated: 2024-11-29
description: '了解 Mizuki 的 Markdown 功能'
image: ''
tags: [演示, 示例, Markdown, Mizuki]
category: '示例'
draft: false 
---

## GitHub 仓库卡片
你可以添加链接到 GitHub 仓库的动态卡片，页面加载时会从 GitHub API 拉取仓库信息。

::github{repo="matsuzaka-yuki/Mizuki"}

使用 `::github{repo="matsuzaka-yuki/Mizuki"}` 即可创建 GitHub 仓库卡片。

```markdown
::github{repo="matsuzaka-yuki/Mizuki"}
```

## 提示块

支持以下类型的提示块：`note` `tip` `important` `warning` `caution`

:::note
强调用户即使快速浏览也应注意的信息。
:::

:::tip
可选信息，帮助用户更顺利完成操作。
:::

:::important
用户成功所必需的关键信息。
:::

:::warning
因潜在风险而需要立即关注的关键信息。
:::

:::caution
某个操作可能带来的负面后果。
:::

### 基础语法

```markdown
:::note
强调用户即使快速浏览也应注意的信息。
:::

:::tip
可选信息，帮助用户更顺利完成操作。
:::
```

### 自定义标题

提示块的标题可以自定义。

:::note[MY CUSTOM TITLE]
这是一条自定义标题的提示。
:::

```markdown
:::note[MY CUSTOM TITLE]
这是一条自定义标题的提示。
:::
```

### GitHub 语法

> [!TIP]
> 同样支持 [GitHub 语法](https://github.com/orgs/community/discussions/16925)。

```
> [!NOTE]
> 同样支持 GitHub 语法。

> [!TIP]
> 同样支持 GitHub 语法。
```

### 折叠内容

你可以在文本中添加折叠内容，并且支持 **Markdown** 语法。

内容 :spoiler[已隐藏 **ayyy**]!

```markdown
内容 :spoiler[已隐藏 **ayyy**]!
