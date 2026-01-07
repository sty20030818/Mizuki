---
title: Mizuki 简明指南
published: 2024-04-01
description: "如何使用该博客模板。"
image: "./cover.png"
tags: ["Mizuki", "博客", "自定义"]
category: 指南
draft: false
---



该博客模板基于 [Astro](https://astro.build/) 构建。指南未提及的内容可在 [Astro 文档](https://docs.astro.build/) 中找到答案。

## 文章 Frontmatter

```yaml
---
title: 我的第一篇博客文章
published: 2023-09-09
description: 这是我新的 Astro 博客的第一篇文章。
image: ./cover.jpg
tags: [示例, 演示]
category: 前端
draft: false
---
```




| 字段     | 说明                                                                                                                                                                                                 |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `title`       | 文章标题。                                                                                                                                                                                      |
| `published`   | 文章发布时间。                                                                                                                                                                            |
| `pinned`      | 是否置顶到文章列表顶部。                                                                                                                                                   |
| `priority`    | 置顶文章的优先级，数值越小优先级越高（0、1、2...）。                                                                                                                          |
| `description` | 文章的简短描述，展示在索引页。                                                                                                                                                   |
| `image`       | 文章封面图路径。<br/>1. 以 `http://` 或 `https://` 开头：使用网络图片<br/>2. 以 `/` 开头：图片在 `public` 目录<br/>3. 无前缀：相对当前 Markdown 文件 |
| `tags`        | 文章标签。                                                                                                                                                                                       |
| `category`    | 文章分类。                                                                                                                                                                                   |
| `licenseName` | 文章内容的许可证名称。                                                                                                                                                                      |
| `author`      | 文章作者。                                                                                                                                                                                     |
| `sourceLink`  | 文章内容的来源链接或参考。                                                                                                                                                          |
| `draft`       | 若文章仍为草稿，则不会显示。                                                                                                                                                    |

## 文章文件放在哪里



文章文件应放在 `src/content/posts/` 目录中。你也可以创建子目录来更好地组织文章与资源。

```
src/content/posts/
├── post-1.md
└── post-2/
    ├── cover.png
    └── index.md
```
