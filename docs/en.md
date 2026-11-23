---
layout: tips
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
- Bring only the context, conclusions, and action items relevant to the next step into the new chat. Review the summary before moving on and restore any missing constraints or open issues.
- To continue the same task in a new chat, save a local `HANDOFF.md` and include it in the new conversation. Capture the necessary context and output format, the goal, progress, decisions and their rationale, pitfalls, what was verified, open issues, and the order of next steps.
- **Copyable prompt:** “Summarize the current task in HANDOFF.md. Include the goal, output requirements, progress, decisions and why we made them, what was verified, and what remains open. End with next steps in priority order.”

### Choose reasoning effort for the task

**Beginner**

- Use this when your tool offers reasoning settings and you want to manage latency and usage. Try a lower setting for simple edits and corrections, and increase it for complex reasoning. Compare accuracy, time, and usage on tasks that represent your own work.
- Change the setting in the tool and decide what to keep from the results. Test the effect of each setting.
- **Copyable prompt:** “Design three test tasks with clear acceptance criteria for my usual [task type], so I can compare reasoning settings. Specify what to check for each task and where to record elapsed time and usage.”

### Map a long document before reading selected sections

**Beginner**

- Use this for long reports, proposals, or manuals. State your reading goal, ask the AI to map the document and identify relevant sections, then choose passages to examine.
- Distinguish the original table of contents from an inferred outline. Request section or paragraph references and flag information absent from the document.
- **Copyable prompt:** “My goal in reading this document is [goal]. First list its table of contents or structure, marking any outline you inferred, and identify the most relevant sections. Wait for me to choose, then explain those passages with references to their location. Do not fill gaps with unsupported information.”

## Project Collaboration {#workflow}

### Define the intended outcome before choosing a deliverable

**Advanced**

- Use this when a request names a deliverable, such as a presentation or report, but leaves its purpose unclear. Specify who will use it and what they need to understand or decide, then choose the format.
- Select methods relevant to the goal, such as data analysis to check trends or interview questions to fill gaps. Examine original material before suggesting missing steps that affect the outcome. Confirm any expanded scope first.
- **Copyable prompt:** “I need [deliverable] for [audience] to help them [understand or act]. First help me define checkable success criteria, examine the available original material and gaps, then suggest relevant professional methods and any missing steps that affect the outcome. Explain the purpose and cost of each step, and wait for me to confirm the scope before executing.”

### Agree on a plan, then deliver one feature at a time

**Advanced**

- Discuss the plan with a lightweight model first. For a complex project, sketch the architecture and agree on it before handing implementation to an agent.
- Give each feature its own conversation in a large project. Check the result before moving on.
- Specify the simplest implementation for small tasks. For UI work, provide a reference image, describe the intended result, and define checkable acceptance criteria.
- **Copyable prompt:** “Implement only this feature. First propose the simplest implementation and the acceptance criteria, then wait for my confirmation.”

### Preserve uncertainty when drafting meeting minutes

**Advanced**

- Use this when extracting decisions and action items from a transcript. Separate confirmed decisions, suggestions under discussion, and open issues.
- For quick follow-up, put action items in three columns: owner, confirmed action, and timing. Preserve relevant conditions and open issues.
- List only actions confirmed in the meeting. Mark unconfirmed owners or dates as pending confirmation, and preserve qualifiers such as “aim for” and “expected.”
- **Copyable prompt:** “Organize the minutes into confirmed decisions, suggestions under discussion, and open issues. List only confirmed action items and mark missing owners or dates as pending confirmation. Check each item against the transcript for suggestions recorded as decisions or target dates recorded as commitments. List follow-up questions separately.”

### Ask the AI to keep going within the authorized scope

**Advanced**

- Use this for tasks with a clear goal and several steps. For low-risk, reversible details, state a reasonable assumption and proceed. Ask first about decisions that change the goal or scope or have irreversible consequences.
- **Copyable prompt:** “Once the goal and deliverables are clear, carry out the authorized steps through delivery. State your assumptions and proceed on small, reversible details. Ask me first about decisions that change the scope, require authorization, or are irreversible.”

### Clarify learning needs before teaching and practice

**Advanced**

- Use this to learn a new field or fill gaps in your foundations. Start with several rounds of questions about your goal, existing knowledge, scope, and available time. Turn the answers into a learning brief and confirm it before starting.
- Teach one concept and give one exercise per round. Wait for the learner's answer before correcting misunderstandings. End each stage with a case that checks application, then adjust what comes next.
- **Copyable prompt:** “I want to learn [topic]. Ask me questions over several rounds to clarify my goal, existing knowledge, scope, and schedule. Summarize a learning brief for my confirmation. Then teach one concept and give one exercise per round, waiting for my answer before feedback. End each stage with a case to check understanding and adjust the next stage.”

## Refining Responses {#output}

### Ask for three sentences when a reply is too long

**Beginner**

- Extract the points that matter most for your decision, then ask about anything important that is missing. This helps when you already have a full answer and the main point is hard to find.
- **Copyable prompt:** “If you could keep only three sentences, which three would you keep?”

### Rewrite the answer for its intended reader

**Beginner**

- Use this to turn a technical explanation, analysis, or draft into something you can share directly. Lead with what readers need to know, use terminology they already recognize, and prefer active voice. Reorder the material around the reader’s needs, keeping process details where they help readers understand or act.
- For a weekly update, supply five factual work notes and combine them into three sentences organized around outcomes. Preserve supported results, impact, and unfinished work; do not turn activity into an invented achievement.
- **Copyable prompt:** “Combine these five work notes into a three-sentence weekly update organized around outcomes. Preserve known results, impact, and unfinished work. State when data or results are missing; do not invent improvements. Notes: [paste notes].”
- **Copyable prompt:** “Rewrite this for [audience]. Open with the conclusion they need most, use our existing terminology, and prefer active voice. Organize it in the order the reader needs, and keep process details that help them understand or act.”

### Ask the AI to clarify an underspecified request

**Beginner**

- **Copyable prompt:** “Ask me up to three questions that could change the outcome. Wait for my answers before proposing a solution.”
- If open-ended questions are hard to answer, ask the AI to offer a few choices and an “Other” option. For example: “Use multiple-choice questions where the options are clear, and let me add my own context.”
- **Testing:** Pending.

### Check assumptions before discussing solutions

**Advanced**

- Use this to examine a judgment or proposal. Ask for up to three specific, checkable concerns, choose one to address with your reasoning or a counterexample, and compare the original and revised conclusions.
- Each concern should connect to your actual words and identify supporting evidence or a condition to test. Verify the grounds for the conclusion and pause the debate when objections are generic or their evidence cannot be checked.
- For a decision, choose the concern most likely to change it and design a small test you can complete this week. Define the method, observable results, and conditions for changing the plan before deciding from the results.
- **Copyable prompt:** “My plan is [plan]. Identify up to five of the strongest objections, distinguishing established facts, inferences, and assumptions to test. Do not invent evidence to fill the list. Choose the objection I am most likely to overlook that could change my decision, and design a low-cost test for this week. Specify the steps, observable measures, and results that would warrant changing the plan.”
- **Copyable prompt:** “Examine my judgment first and identify up to three concerns with specific reasons. Quote the relevant part of my statement and explain the evidence and conditions to test. Say so if you find no concerns. Wait for me to choose one and provide my reasoning, then reassess. Finally, place the original and revised conclusions side by side, identifying changes, reasons, and remaining uncertainties.”

## Entry Format

For each tip, record when to use it, a copyable prompt or steps, and test results.
