---
title: Markdown Mermaid 示例
published: 2023-10-01
pinned: false
description: 一个包含 Mermaid 的 Markdown 博文示例。
tags: [Markdown, 博客, Mermaid]
category: 示例
draft: true
---
# Markdown + Mermaid 图表完整指南

本文演示如何在 Markdown 文档中使用 Mermaid 创建多种复杂图表，包括流程图、时序图、甘特图、类图与状态图。

## 流程图示例

流程图非常适合表示流程或算法步骤。




```mermaid
graph TD
    A[开始] --> B{条件检查}
    B -->|是| C[处理步骤 1]
    B -->|否| D[处理步骤 2]
    C --> E[子流程]
    D --> E
    subgraph E [子流程详情]
        E1[子步骤 1] --> E2[子步骤 2]
        E2 --> E3[子步骤 3]
    end
    E --> F{另一个判断}
    F -->|选项 1| G[结果 1]
    F -->|选项 2| H[结果 2]
    F -->|选项 3| I[结果 3]
    G --> J[结束]
    H --> J
    I --> J
```

## 时序图示例

时序图展示对象在时间维度上的交互过程。

```mermaid
sequenceDiagram
    participant User as 用户
    participant WebApp as Web 应用
    participant Server as 服务器
    participant Database as 数据库

    User->>WebApp: 提交登录请求
    WebApp->>Server: 发送认证请求
    Server->>Database: 查询用户凭据
    Database-->>Server: 返回用户数据
    Server-->>WebApp: 返回认证结果
    
    alt 认证成功
        WebApp->>User: 显示欢迎页
        WebApp->>Server: 请求用户数据
        Server->>Database: 获取用户偏好
        Database-->>Server: 返回偏好
        Server-->>WebApp: 返回用户数据
        WebApp->>User: 加载个性化界面
    else 认证失败
        WebApp->>User: 显示错误信息
        WebApp->>User: 提示重新输入
    end
```

## 甘特图示例

甘特图非常适合展示项目排期与时间线。

```mermaid
gantt
    title 网站开发项目时间线
    dateFormat  YYYY-MM-DD
    axisFormat  %m/%d
    
    section 设计阶段
    需求分析                  :a1, 2023-10-01, 7d
    界面设计                  :a2, after a1, 10d
    原型制作                  :a3, after a2, 5d
    
    section 开发阶段
    前端开发                  :b1, 2023-10-20, 15d
    后端开发                  :b2, after a2, 18d
    数据库设计                :b3, after a1, 12d
    
    section 测试阶段
    单元测试                  :c1, after b1, 8d
    集成测试                  :c2, after b2, 10d
    用户验收测试              :c3, after c2, 7d
    
    section 部署
    生产环境部署              :d1, after c3, 3d
    上线                      :milestone, after d1, 0d
```

## 类图示例

类图展示系统的静态结构，包括类、属性、方法以及它们之间的关系。

```mermaid
classDiagram
    class User {
        +String 用户名
        +String 密码
        +String 邮箱
        +Boolean 激活
        +登录()
        +退出()
        +更新资料()
    }
    
    class Article {
        +String 标题
        +String 内容
        +Date 发布日期
        +Boolean 已发布
        +发布()
        +编辑()
        +删除()
    }
    
    class Comment {
        +String 内容
        +Date 评论日期
        +添加评论()
        +删除评论()
    }
    
    class Category {
        +String 名称
        +String 描述
        +添加文章()
        +移除文章()
    }
    
    User "1" -- "*" Article : 撰写
    User "1" -- "*" Comment : 发布
    Article "1" -- "*" Comment : 包含
    Article "1" -- "*" Category : 属于
```

## 状态图示例

状态图展示对象在生命周期中经历的状态序列。

```mermaid
stateDiagram-v2
    state "草稿" as Draft
    state "审核中" as UnderReview
    state "已通过" as Approved
    state "已发布" as Published
    state "已归档" as Archived
    state "可见" as Active
    state "隐藏" as Hidden

    [*] --> Draft
    
    Draft --> UnderReview : 提交
    UnderReview --> Draft : 驳回
    UnderReview --> Approved : 通过
    Approved --> Published : 发布
    Published --> Archived : 归档
    Published --> Draft : 撤回
    
    state Published {
        [*] --> Active
        Active --> Hidden : 临时隐藏
        Hidden --> Active : 恢复
        Active --> [*]
        Hidden --> [*]
    }
    
    Archived --> [*]
```

## 饼图示例

饼图适合展示占比与百分比数据。

```mermaid
pie title 网站流量来源分析
    "搜索引擎" : 45.6
    "直接访问" : 30.1
    "社交媒体" : 15.3
    "引荐链接" : 6.4
    "其他来源" : 2.6
```

## 总结

Mermaid 是在 Markdown 文档中创建各类图表的强大工具。本文展示了如何使用流程图、时序图、甘特图、类图、状态图和饼图。这些图表能帮助你更清晰地表达复杂概念、流程和数据结构。

使用 Mermaid 时，只需在代码块中指定 `mermaid` 语言，并用简洁的文本语法描述图表，Mermaid 就会自动生成美观的可视化图形。

在下一篇技术博客或项目文档中试试 Mermaid 图表，它会让你的内容更专业、更易理解！
