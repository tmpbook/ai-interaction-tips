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

### Speak rough ideas first, then organize them

**Beginner**

- Use this when you struggle to start typing. If voice input is available, say the background, ideas, and concerns aloud, including corrections, then ask the AI to organize a task brief.
- Check names, numbers, and negations in the transcript before submitting. Review screenshots or app attachments too, sharing only what the task needs.
- **Copyable prompt:** “Organize these rough spoken notes into goals, known facts, constraints, and questions to resolve. Preserve uncertainty and list contradictions separately without making decisions for me. Notes: [paste transcript].”

### Provide background, goals, constraints, and acceptance criteria

**Beginner**

- Use this when responses are too generic. Explain why the task arose, the intended outcome, constraints such as time and budget, and how to judge success. Add original material and positive or negative examples as needed.
- For business tasks, describe the customers, how they find you, and why they choose you. Mark unknowns for confirmation instead of presenting guesses as customer facts.
- Add a role, steps, or output format when useful; small tasks do not need every field.
- **Copyable prompt:** “Background: [why this arose]. Goal: [intended outcome]. Constraints: [time, budget, boundaries]. Acceptance criteria: [checkable conditions]. Materials and examples: [content]. Check for missing information that could affect the result, distinguish facts from assumptions, then complete [task] in [format].”

### Compare models on real tasks and assign work by risk and cost

**Beginner**

- Use this when choosing among models or tools. Compare accuracy, response time, and cost on your own document reading, reasoning, and routine processing tasks, then choose a primary and a backup. Context capacity is only one factor in document tasks.
- Add independent verification when failure would be costly. After repeated failures, check whether information, tools, or capability are missing before switching. Periodically remove redundant or rarely used tools.
- **Copyable prompt:** “Design three representative tests and acceptance criteria for [task], recording accuracy, time, and cost. Based on the consequences of failure, specify which results require human or tool verification and when to add information, use a tool, or switch models.”

## Project Collaboration {#workflow}

### Define the intended outcome before choosing a deliverable

**Advanced**

- Use this when a request names a deliverable, such as a presentation or report, but leaves its purpose unclear. Specify who will use it and what they need to understand or decide, then choose the format.
- Check four things: missing essential steps, original material to start from, methods and tools to use, and external evidence that could verify the result. For a quarterly review, analyze changes, causes, and next steps before formatting slides.
- Select methods relevant to the goal, such as data analysis to check trends or interview questions to fill gaps. Examine original material before suggesting missing steps that affect the outcome. Confirm any expanded scope first.
- **Copyable prompt:** “I need [deliverable] for [audience] to help them [understand or act]. First help me define checkable success criteria, examine the available original material and gaps, then suggest relevant professional methods and any missing steps that affect the outcome. Explain the purpose and cost of each step and the evidence or tests that can independently verify the result, and wait for me to confirm the scope before executing.”

### Agree on a plan, then deliver one feature at a time

**Advanced**

- Break work into steps with facts, constraints, examples, and acceptance criteria for each. Check facts and data before reasoning and goal completion. Save verified workflows and prompts as templates with their conditions of use.
- Choose a model appropriate to the complexity to discuss the plan. For a complex project, sketch the architecture and agree on it before handing implementation to an agent.
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

### Evaluate failure cases before revising a prompt

**Advanced**

- Use this when a prompt keeps growing while similar errors recur. Collect representative successes and failures, define passing criteria, and distinguish missing information, instruction problems, missing tools, and capability limits.
- Remove redundant or conflicting patches. Change one failure pattern at a time, compare versions on the same examples, and reserve fresh examples to check whether the changes generalize.
- Use available tools for calculations, retrieval, or code execution as needed and check their results. Mark tests that were not actually run.
- **Copyable prompt:** “Here are the current prompt, sample inputs, and actual outputs: [materials]. Identify failure patterns and checkable passing criteria for each, distinguishing missing information, conflicting instructions, missing tools, and capability limits. Propose minimal changes and compare versions on the original and held-out examples. Clearly mark checks that were not run; do not claim a successful fix without testing.”

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

- Use this for proposals, copy, or other tasks with unclear goals or several constraints. Restate the request, ask consequential questions one at a time, then confirm the goal and constraints. Simple tasks can proceed directly.
- Start with up to three key questions, allowing up to five when needed. Offer choices and an “Other” option where helpful; stop when there is enough information.
- **Copyable prompt:** “Before drafting, restate your understanding of the task in up to three sentences. Ask up to three questions that most affect the result, one at a time, without repeating questions already answered. Then summarize the goal, constraints, and deliverable requirements, and wait for my confirmation before drafting.”

### Check assumptions before discussing solutions

**Advanced**

- Use this to examine a judgment or proposal. Ask for up to three specific, checkable concerns, choose one to address with your reasoning or a counterexample, and compare the original and revised conclusions.
- Each concern should connect to your actual words and identify supporting evidence or a condition to test. Verify the grounds for the conclusion and pause the debate when objections are generic or their evidence cannot be checked.
- For a decision, choose the concern most likely to change it and design a small test you can complete this week. Define the method, observable results, and conditions for changing the plan before deciding from the results.
- **Copyable prompt:** “My plan is [plan]. Identify up to five of the strongest objections, distinguishing established facts, inferences, and assumptions to test. Do not invent evidence to fill the list. Choose the objection I am most likely to overlook that could change my decision, and design a low-cost test for this week. Specify the steps, observable measures, and results that would warrant changing the plan.”
- **Copyable prompt:** “Examine my judgment first and identify up to three concerns with specific reasons. Quote the relevant part of my statement and explain the evidence and conditions to test. Say so if you find no concerns. Wait for me to choose one and provide my reasoning, then reassess. Finally, place the original and revised conclusions side by side, identifying changes, reasons, and remaining uncertainties.”

### Make factual claims traceable to the provided material

**Beginner**

- Use this for summaries, literature notes, and product copy. Limit the permitted material, attach locations or excerpts to factual claims, distinguish facts, inferences, and unverified points, then check each claim.
- State error-prone boundaries explicitly, such as marking features not confirmed as released as unreleased or unconfirmed. An unimplemented feature is not automatically available for customization.
- These constraints support verification but do not guarantee correctness. For long drafts, confirm an outline first.
- **Copyable prompt:** “Answer only from the material I provide. For every factual claim, cite the material name and section, page, or relevant excerpt. Mark unsupported points as unverified. Separate facts from inferences and do not invent references. Preserve the unconfirmed status of features, dates, and outcomes. Provide an outline for confirmation before drafting, then list items to verify. Material: [content].”

### Derive writing style and judgment rules from your own work

**Advanced**

- Use this when drafts should reflect your own writing. Provide representative pieces and before-and-after edits. Ask for observations about wording, structure, and expressions to avoid, each backed by an excerpt, then review and save them.
- Capture judgment rules separately through questions about real choices. Record trade-offs and evidence requirements without treating one decision as a permanent belief.
- Save reviewed rules in project instructions where supported, or attach relevant portions to each task. Review and update them; one conversation does not make them permanently active.
- **Copyable prompt:** “From my writing and editing examples, extract expression habits, phrases to avoid, and alternatives, with an excerpt supporting each observation. Mark uncertain observations for confirmation. Then ask one question at a time about my real choices to capture judgment rules and their conditions of use. Wait for my review before saving writing rules and applying them to new drafts. Material: [content].”

## Entry Format

For each tip, record when to use it, a copyable prompt or steps, and test results.
