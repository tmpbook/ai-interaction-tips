---
layout: default
title: AI Interaction Tips
lang: en
---

[中文](index.md) · **English**

# AI Interaction Tips

AI interaction tips, with reusable examples and notes on what worked.

- [Conversation Management](#context)
- [Project Collaboration](#workflow)
- [Refining Responses](#output)

## Conversation Management {#context}

### Summarize long conversations and prepare a handoff for the next chat

**Advanced**

- Start a new chat for unrelated tasks. When a chat runs long, ask the AI to summarize what has been decided, what remains open, and what comes next.
- To continue the same task in a new chat, save a local `HANDOFF.md` and include it in the new conversation. Capture the necessary context and output format, the goal, progress, decisions and their rationale, pitfalls, what was verified, open issues, and the order of next steps.
- **Copyable prompt:** “Summarize the current task in HANDOFF.md. Include the goal, output requirements, progress, decisions and why we made them, what was verified, and what remains open. End with next steps in priority order.”

## Project Collaboration {#workflow}

### Agree on a plan, then deliver one feature at a time

**Advanced**

- Discuss the plan with a lightweight model first. For a complex project, sketch the architecture and agree on it before handing implementation to an agent.
- Give each feature its own conversation in a large project. Check the result before moving on.
- Specify the simplest implementation for small tasks. For UI work, provide a reference image, describe the intended result, and define checkable acceptance criteria.
- **Copyable prompt:** “Implement only this feature. First propose the simplest implementation and the acceptance criteria, then wait for my confirmation.”

### Preserve uncertainty when drafting meeting minutes

**Advanced**

- Use this when extracting decisions and action items from a transcript. Separate confirmed decisions, suggestions under discussion, and open issues.
- List only actions confirmed in the meeting. Mark unconfirmed owners or dates as pending confirmation, and preserve qualifiers such as “aim for” and “expected.”
- **Copyable prompt:** “Organize the minutes into confirmed decisions, suggestions under discussion, and open issues. List only confirmed action items and mark missing owners or dates as pending confirmation. Check each item against the transcript for suggestions recorded as decisions or target dates recorded as commitments. List follow-up questions separately.”

### Ask the AI to keep going within the authorized scope

**Advanced**

- Use this for tasks with a clear goal and several steps. For low-risk, reversible details, state a reasonable assumption and proceed. Ask first about decisions that change the goal or scope or have irreversible consequences.
- **Copyable prompt:** “Once the goal and deliverables are clear, carry out the authorized steps through delivery. State your assumptions and proceed on small, reversible details. Ask me first about decisions that change the scope, require authorization, or are irreversible.”

## Refining Responses {#output}

### Ask for three sentences when a reply is too long

**Beginner**

- Extract the points that matter most for your decision, then ask about anything important that is missing. This helps when you already have a full answer and the main point is hard to find.
- **Copyable prompt:** “If you could keep only three sentences, which three would you keep?”

### Rewrite the answer for its intended reader

**Beginner**

- Use this to turn a technical explanation, analysis, or draft into something you can share directly. Lead with what readers need to know, use terminology they already recognize, and prefer active voice. Reorder the material around the reader’s needs, keeping process details where they help readers understand or act.
- **Copyable prompt:** “Rewrite this for [audience]. Open with the conclusion they need most, use our existing terminology, and prefer active voice. Organize it in the order the reader needs, and keep process details that help them understand or act.”

### Ask the AI to clarify an underspecified request

**Beginner**

- **Copyable prompt:** “Ask me up to three questions that could change the outcome. Wait for my answers before proposing a solution.”
- If open-ended questions are hard to answer, ask the AI to offer a few choices and an “Other” option. For example: “Use multiple-choice questions where the options are clear, and let me add my own context.”
- **Testing:** Pending.

## Entry Format

For each tip, record when to use it, a copyable prompt or steps, and test results.

<script defer src="{{ '/assets/copy-prompt.js' | relative_url }}" data-language="en"></script>
