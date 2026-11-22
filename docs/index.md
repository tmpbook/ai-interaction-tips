---
layout: default
title: AI 交互技巧
lang: zh-CN
---

**中文** · [English](en.md)

# AI 交互技巧

整理来自小红书的 AI 交互技巧，记录可复制的用法和实际效果。

- [对话管理](#context)
- [项目协作](#workflow)
- [输出调整](#output)

## 对话管理 {#context}

### 给长对话做小结，给新对话留交接

- 不相关的任务另开对话。同一任务聊久了，先让 AI 总结已定事项、未完成事项和下一步。
- 要换对话继续同一件事时，把交接保存为本地 `HANDOFF.md`。记录必要的背景与输出格式、目标、进度、关键决定和原因、踩过的坑、验证结果、未解决的问题及下一步顺序。新对话带上这份文件。
- **可复制用法**：「把当前任务整理成 HANDOFF.md。写清目标、输出要求、进度、关键决定及原因、已验证和未解决的事项，最后按优先级列出下一步。」
- **来源**：2026-11-22 小红书「每日 AI 攻略精选」转述 Jeremy Utley 的分享。原帖链接待补。

### Summarize long conversations and prepare a handoff for the next chat

- Start a new chat for unrelated tasks. When a chat runs long, ask the AI to summarize what has been decided, what remains open, and what comes next.
- To continue the same task in a new chat, save a local `HANDOFF.md` and include it in the new conversation. Capture the necessary context and output format, the goal, progress, decisions and their rationale, pitfalls, what was verified, open issues, and the order of next steps.
- **Copyable prompt:** “Summarize the current task in HANDOFF.md. Include the goal, output requirements, progress, decisions and why we made them, what was verified, and what remains open. End with next steps in priority order.”
- **Source:** Xiaohongshu’s Daily AI Tips for November 22, 2026, summarizing a tip shared by Jeremy Utley. Original link pending.

## 项目协作 {#workflow}

### 先定方案，再按功能分步交付

- 先用轻量模型讨论方案。复杂项目可先画架构图，确认后再交给 Agent 实现。
- 大项目按功能分对话，每次处理一个功能，检查通过后再做下一个。
- 小任务直接指定最简实现。界面任务给参考图，并写清希望达到的具体效果和可检查的验收标准。
- **可复制用法**：「这次只实现这个功能。先给最简方案和验收标准，等我确认后再开始。」
- **来源**：2026-11-22 小红书「每日 AI 攻略精选」，do同学《4招技巧让你的ai效率提升80%》。原帖链接待补，标题中的效率数字待验证。

### Agree on a plan, then deliver one feature at a time

- Discuss the plan with a lightweight model first. For a complex project, sketch the architecture and agree on it before handing implementation to an agent.
- Give each feature its own conversation in a large project. Check the result before moving on.
- Specify the simplest implementation for small tasks. For UI work, provide a reference image, describe the intended result, and define checkable acceptance criteria.
- **Copyable prompt:** “Implement only this feature. First propose the simplest implementation and the acceptance criteria, then wait for my confirmation.”
- **Source:** Xiaohongshu’s Daily AI Tips for November 22, 2026, featuring do同学’s post on four AI productivity tips. Original link pending. The headline’s 80% improvement claim is unverified.

## 输出调整 {#output}

### 回答又长又绕时，先压缩到三句

- 先提炼最影响判断的内容，再针对遗漏的信息追问。这个方法适合已经有完整回答、但一时抓不住重点的场景。
- **可复制用法**：「如果只能说三句，你留哪三句？」
- **来源**：2026-11-22 小红书「每日 AI 攻略精选」。作者与原帖链接待补。

### Ask for three sentences when a reply is too long

- Extract the points that matter most for your decision, then ask about anything important that is missing. This helps when you already have a full answer and the main point is hard to find.
- **Copyable prompt:** “If you could keep only three sentences, which three would you keep?”
- **Source:** Xiaohongshu’s Daily AI Tips for November 22, 2026. Original author and link pending.

### 需求还没想清楚时，先请 AI 提问

- **可复制用法**：「先问我最多三个会影响结果的问题，等我回答后再给方案。」
- **来源**：本站示例。实测待补。

### Ask the AI to clarify an underspecified request

- **Copyable prompt:** “Ask me up to three questions that could change the outcome. Wait for my answers before proposing a solution.”
- **Source:** Repository example. Testing pending.

## 记录格式

每条记下适用场景、可复制用法、实测结果和来源。收录小红书笔记时，附上可核实的作者和原帖链接。
