---
title: 我的第一篇文章
published: 2026-01-08
pinned: true
description: 第一篇文章
tags: [Markdown, 文章]
category: Essays
licenseName: "CC BY-NC-ND 4.0"
author: 我叫石头鱼
sourceLink: "https://github.com/sty20030818"
draft: false
date: 2026-01-08
image: "./images/cover.webp"
pubDate: 2026-01-08
permalink: "my-first-blog"
---

# 我的第一篇文章
## 首先 一些测试
### 代码

```c++
#include <stdio.h>
int main() {
    printf("Hello, World!\n");
    return 0;
}
```

```python
print("Hello, World!")
```

### 图
![一张图](./images/1.png)

### 引言
> 一级引言段落1
> 一级引言段落2
>
> > 嵌套二级引言
>
> 回到一级引言，支持嵌套列表：
> 1. 引言内有序列表
> 2. 列表项2
>
> > ## 引言内标题
> > `引言内代码`

### 无序列表
- 无序列表项1
- 无序列表项2
  - 嵌套子项（缩进 3 空格或 1 tab）
  - 嵌套子项

## 特殊用法
### Github

::github{repo="sty20030818/StoneHub"}

### 提示框
:::note 
这是一个note提示框
:::

:::tip
这是一个tip提示框
:::

:::important
这是一个important提示框
::: 

:::warning
这是一个warning提示框
:::

:::caution
这是一个caution提示框
:::

### 折叠剧透

这是普通文本,剧透内容 :spoiler[**剧透内容**]