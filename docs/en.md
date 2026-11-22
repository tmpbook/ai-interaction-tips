---
layout: default
title: AI Interaction Tips
lang: en
---

[中文](index.md) · **English**

# AI Interaction Tips

AI interaction tips from Xiaohongshu, with reusable examples and notes on what worked.

- [Conversation Management](#context)
- [Project Collaboration](#workflow)
- [Refining Responses](#output)

## Conversation Management {#context}

### Summarize long conversations and prepare a handoff for the next chat

- Start a new chat for unrelated tasks. When a chat runs long, ask the AI to summarize what has been decided, what remains open, and what comes next.
- To continue the same task in a new chat, save a local `HANDOFF.md` and include it in the new conversation. Capture the necessary context and output format, the goal, progress, decisions and their rationale, pitfalls, what was verified, open issues, and the order of next steps.
- **Copyable prompt:** “Summarize the current task in HANDOFF.md. Include the goal, output requirements, progress, decisions and why we made them, what was verified, and what remains open. End with next steps in priority order.”
- **Source:** Xiaohongshu’s Daily AI Tips for November 22, 2026, summarizing a tip shared by Jeremy Utley. Original link pending.

## Project Collaboration {#workflow}

### Agree on a plan, then deliver one feature at a time

- Discuss the plan with a lightweight model first. For a complex project, sketch the architecture and agree on it before handing implementation to an agent.
- Give each feature its own conversation in a large project. Check the result before moving on.
- Specify the simplest implementation for small tasks. For UI work, provide a reference image, describe the intended result, and define checkable acceptance criteria.
- **Copyable prompt:** “Implement only this feature. First propose the simplest implementation and the acceptance criteria, then wait for my confirmation.”
- **Source:** Xiaohongshu’s Daily AI Tips for November 22, 2026, featuring do同学’s post on four AI productivity tips. Original link pending. The headline’s 80% improvement claim is unverified.

## Refining Responses {#output}

### Ask for three sentences when a reply is too long

- Extract the points that matter most for your decision, then ask about anything important that is missing. This helps when you already have a full answer and the main point is hard to find.
- **Copyable prompt:** “If you could keep only three sentences, which three would you keep?”
- **Source:** Xiaohongshu’s Daily AI Tips for November 22, 2026. Original author and link pending.

### Ask the AI to clarify an underspecified request

- **Copyable prompt:** “Ask me up to three questions that could change the outcome. Wait for my answers before proposing a solution.”
- **Source:** Repository example. Testing pending.

## Entry Format

For each tip, record when to use it, a copyable prompt or steps, test results, and the source. For Xiaohongshu tips, include a verifiable author and original post link when available.
