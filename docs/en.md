---
layout: tips
title: AI Interaction Tips
lang: en
---

[中文](index.md) · **English**

# AI Interaction Tips

AI interaction tips, with reusable examples and notes on what worked.

- [Requirements & Questions](#requirements)
- [Context & Materials](#context)
- [Writing & Verification](#output)
- [Tasks & Collaboration](#workflow)
- [Evaluation & Reuse](#evaluation)

## Requirements & Questions {#requirements}

### Provide background, goals, constraints, and acceptance criteria

**Beginner**

- Use this when responses are too generic. Explain why the task arose, the intended outcome, constraints such as time and budget, and how to judge success. Add original material and positive or negative examples as needed.
- For business tasks, describe the customers, how they find you, and why they choose you. Mark unknowns for confirmation instead of presenting guesses as customer facts.
- Add a role, steps, or output format when useful; small tasks do not need every field.
- Translate words such as “professional” or “concise” into checkable requirements, such as leading with a conclusion and staying within a word limit. Provide negative examples with a desired correction. For exploratory work, constrain the goal and essential boundaries, then refine through feedback instead of fixing every step upfront.
- Specify what may change, what must stay unchanged, and how to handle missing information. A role can describe tone or perspective, but acceptance still depends on task criteria and evidence.
- **Copyable prompt:** “Background: [why this arose]. Goal: [intended outcome]. Constraints: [time, budget, boundaries]. Acceptance criteria: [checkable conditions]. Materials and examples: [content]. Check for missing information that could affect the result, distinguish facts from assumptions, then complete [task] in [format].”

### Ask the AI to clarify an underspecified request

**Beginner**

- Use this for proposals, copy, or other tasks with unclear goals or several constraints. Restate the request, ask consequential questions one at a time, then confirm the goal and constraints. Simple tasks can proceed directly.
- Start with up to three key questions, allowing up to five when needed. Offer choices and an “Other” option where helpful; stop when there is enough information.
- Order questions by decision dependencies, starting with choices that affect later ones. Verify facts from supplied material or authorized tools first. Options may include a recommendation and rationale, while allowing disagreement and leaving the decision to you.
- End the interview when goals, constraints, and consequential gaps are resolved, rather than relying on the model's self-reported confidence percentage.
- **Copyable prompt:** “Before drafting, restate your understanding of the task in up to three sentences. Ask up to three questions that most affect the result, one at a time, without repeating questions already answered. Then summarize the goal, constraints, and deliverable requirements, and wait for my confirmation before drafting.”

### Define the intended outcome before choosing a deliverable

**Advanced**

- Use this when a request names a deliverable, such as a presentation or report, but leaves its purpose unclear. Specify who will use it and what they need to understand or decide, then choose the format.
- Check four things: missing essential steps, original material to start from, methods and tools to use, and external evidence that could verify the result. For a quarterly review, analyze changes, causes, and next steps before formatting slides.
- Select methods relevant to the goal, such as data analysis to check trends or interview questions to fill gaps. Examine original material before suggesting missing steps that affect the outcome. Confirm any expanded scope first.
- Before automating, identify the user's friction at a specific step and establish a baseline from existing data; leave unknown numbers unspecified. Compare the costs of simple rules, workflows, and model-based options. Define success criteria, failure signals, and a fallback. Test ambitious targets for feasibility before treating them as commitments.
- **Copyable prompt:** “I need [deliverable] for [audience] to help them [understand or act]. First help me define checkable success criteria, examine the available original material and gaps, then suggest relevant professional methods and any missing steps that affect the outcome. Explain the purpose and cost of each step and the evidence or tests that can independently verify the result, and wait for me to confirm the scope before executing.”

### Align expectations with input and output examples

**Beginner**

- Use this when classification, extraction, formatting, or writing style remains unclear. Supply one or two realistic input-to-ideal-output pairs covering different cases, followed by a new input.
- Explain the rules each example illustrates and what makes a negative example unacceptable. Do not carry names, numbers, or facts from examples into new material. Check understanding on a small case first.
- **Copyable prompt:** “Task: [requirements]. Example one input: [content]; ideal output: [content]. Example two input: [content]; ideal output: [content]. Follow the format and processing rules without reusing example facts or numbers. New input: [content]. Mark missing information for confirmation. If the examples conflict with the requirements, flag the conflict first.”

## Context & Materials {#context}

### Speak rough ideas first, then organize them

**Beginner**

- Use this when you struggle to start typing. If voice input is available, say the background, ideas, and concerns aloud, including corrections, then ask the AI to organize a task brief.
- Check names, numbers, and negations in the transcript before submitting. Review screenshots or app attachments too, sharing only what the task needs.
- Paste exact numbers and error messages separately. When correcting yourself, identify the statement to replace. For action planning, request up to five tasks and list uncertainties separately.
- **Copyable prompt:** “Organize these rough spoken notes into goals, known facts, constraints, and questions to resolve. Preserve uncertainty and list contradictions separately without making decisions for me. Notes: [paste transcript].”

### Map a long document before reading selected sections

**Beginner**

- Use this for long reports, proposals, or manuals. State your reading goal, ask the AI to map the document and identify relevant sections, then choose passages to examine.
- List the sections or pages actually read, unread parts, and uncertain coverage. Seeing the table of contents does not mean the body was read. Report totals only when verifiable, and check coverage of key sections before drawing conclusions.
- Distinguish the original table of contents from an inferred outline. Request section or paragraph references and flag information absent from the document.
- **Copyable prompt:** “My goal in reading this document is [goal]. First list sections or pages actually read, unread parts, and uncertain coverage. Then list the table of contents or structure, mark any inferred outline, and identify the relevant sections. Answer only from the parts read; seeing the contents does not establish full coverage. Wait for me to choose, then explain those passages with references to their location. Do not fill gaps with unsupported information.”

### Summarize long conversations and prepare a handoff for the next chat

**Advanced**

- Start a new chat for unrelated tasks. When a chat runs long, ask the AI to summarize what has been decided, what remains open, and what comes next.
- Bring only the context, conclusions, and action items relevant to the next step into the new chat. Review the summary before moving on and restore any missing constraints or open issues.
- To continue the same task in a new chat, save a local `HANDOFF.md` and include it in the new conversation. Capture the necessary context and output format, the goal, progress, decisions and their rationale, pitfalls, what was verified, open issues, and the order of next steps.
- For ongoing projects, index the background, current deliverables, and file locations with update dates. Reference only relevant material during handoff. Store reusable preferences separately from temporary status and update stale information.
- At milestones and before delivery, check requirements against the latest summary and list new assumptions or default decisions. Start a new conversation to separate tasks; saying “clear the context” is not evidence that records were erased.
- **Copyable prompt:** “Summarize the current task in HANDOFF.md. Include the goal, output requirements, progress, decisions and why we made them, what was verified, and what remains open. End with next steps in priority order.”

## Writing & Verification {#output}

### Ask for three sentences when a reply is too long

**Beginner**

- Extract the points that matter most for your decision, then ask about anything important that is missing. This helps when you already have a full answer and the main point is hard to find.
- **Copyable prompt:** “If you could keep only three sentences, which three would you keep?”

### Rewrite the answer for its intended reader

**Beginner**

- Use this to turn a technical explanation, analysis, or draft into something you can share directly. Lead with what readers need to know, use terminology they already recognize, and prefer active voice. Reorder the material around the reader’s needs, keeping process details where they help readers understand or act.
- For a weekly update, supply five factual work notes and combine them into three sentences organized around outcomes. Preserve supported results, impact, and unfinished work; do not turn activity into an invented achievement.
- Replace vague praise with concrete actions and facts: explain what changed and what happened instead of claiming something was “effectively improved.” Preserve qualifiers such as “expected” or “may” when accuracy depends on them; do not ban all adverbs or split paragraphs by arbitrary character counts.
- Supply relevant original material, the audience, and fixed fields, such as a notice's time, location, preparation, and contact. Use familiar words and one point per paragraph. Revise one specific issue at a time while preserving confirmed requirements.
- **Copyable prompt:** “Combine these five work notes into a three-sentence weekly update organized around outcomes. Preserve known results, impact, and unfinished work. Stay within [length limit]. Replace [phrases to avoid, such as ‘empowered the team’] with actions supported by the notes. Flag missing results for confirmation. Notes: [paste notes].”
- **Copyable prompt:** “Rewrite this for [audience]. Open with the conclusion they need most, use our existing terminology, and prefer active voice. Organize it in the order the reader needs, and keep process details that help them understand or act.”

### Preserve uncertainty when drafting meeting minutes

**Beginner**

- Use this when extracting decisions and action items from a transcript. Separate confirmed decisions, suggestions under discussion, and open issues.
- For quick follow-up, put action items in three columns: owner, confirmed action, and timing. Preserve relevant conditions and open issues.
- List only actions confirmed in the meeting. Mark unconfirmed owners or dates as pending confirmation, and preserve qualifiers such as “aim for” and “expected.”
- **Copyable prompt:** “First list information missing from the transcript, such as owners and dates. Then organize the minutes into confirmed decisions, suggestions under discussion, and open issues. List only confirmed action items and mark missing owners or dates as pending confirmation. Check each item against the transcript for suggestions recorded as decisions or target dates recorded as commitments. List follow-up questions separately.”

### Make factual claims traceable to the provided material

**Beginner**

- Use this for summaries, literature notes, and product copy. Limit the permitted material, attach locations or excerpts to factual claims, distinguish facts, inferences, and unverified points, then check each claim.
- State error-prone boundaries explicitly, such as marking features not confirmed as released as unreleased or unconfirmed. An unimplemented feature is not automatically available for customization.
- These constraints support verification but do not guarantee correctness. For long drafts, confirm an outline first.
- Prioritize checking amounts, dates, percentages, names, and places. For images requiring exact wording, create the background and editable text separately, then compare the final result with the approved copy.
- Ask for up to three consequential claims with the weakest support to prioritize checking. Unflagged claims are not thereby verified. For numerical forecasts, request the calculation, inputs, and assumptions.
- **Copyable prompt:** “Answer only from the material I provide. For every factual claim, cite the material name and section, page, or relevant excerpt. Mark unsupported points as unverified. Separate facts from inferences and do not invent references. Preserve the unconfirmed status of features, dates, and outcomes. Provide an outline for confirmation before drafting, then list items to verify. Material: [content].”

### Check assumptions before discussing solutions

**Advanced**

- Separate facts from your own hypotheses and remove leading claims such as “this is a great plan.” You can privately record your judgment before reading the AI's analysis to avoid simply adopting its framing.
- Use this to examine a judgment or proposal. Ask for up to three specific, checkable concerns, choose one to address with your reasoning or a counterexample, and compare the original and revised conclusions.
- Each concern should connect to your actual words and identify supporting evidence or a condition to test. Verify the grounds for the conclusion and pause the debate when objections are generic or their evidence cannot be checked.
- For a decision, choose the concern most likely to change it and design a small test you can complete this week. Define the method, observable results, and conditions for changing the plan before deciding from the results.
- Review from relevant perspectives such as customer, finance, or implementer, specifying each concern and merging duplicates. Simulated roles are viewpoints, not actual customer or expert opinions; consequential conclusions still need evidence.
- **Copyable prompt:** “Facts and constraints: [material]. Plan to evaluate: [plan]. Restate the strongest case for the plan in terms its supporters would recognize. Identify the assumption that case depends on. Separate facts, hypotheses, and gaps, then weigh the evidence for and against the plan. Suggest up to three testable reasons it might fail. Do not invent evidence to fill a list or create false balance. Choose the objection I am most likely to overlook that could change my decision, and design a low-cost test for this week. Specify the steps, observable measures, and results that would warrant changing the plan.”
- **Copyable prompt:** “Examine my judgment first and identify up to three concerns with specific reasons. Quote the relevant part of my statement and explain the evidence and conditions to test. Say so if you find no concerns. Wait for me to choose one and provide my reasoning, then reassess. Finally, place the original and revised conclusions side by side, identifying changes, reasons, and remaining uncertainties.”

### Derive writing style and judgment rules from your own work

**Advanced**

- Use this when drafts should reflect your own writing. Provide representative pieces and before-and-after edits. Ask for observations about wording, structure, and expressions to avoid, each backed by an excerpt, then review and save them.
- Capture judgment rules separately through questions about real choices. Record trade-offs and evidence requirements without treating one decision as a permanent belief.
- Save reviewed rules in project instructions where supported, or attach relevant portions to each task. Review and update them; one conversation does not make them permanently active.
- **Copyable prompt:** “From my writing and editing examples, extract expression habits, phrases to avoid, and alternatives, with an excerpt supporting each observation. Mark uncertain observations for confirmation. Then ask one question at a time about my real choices to capture judgment rules and their conditions of use. Wait for my review before saving writing rules and applying them to new drafts. Material: [content].”

## Tasks & Collaboration {#workflow}

### Agree on a plan, then deliver one feature at a time

**Advanced**

- Break work into steps with facts, constraints, examples, and acceptance criteria for each. Check facts and data before reasoning and goal completion. Save verified workflows and prompts as templates with their conditions of use.
- Choose a model appropriate to the complexity to discuss the plan. For a complex project, sketch the architecture and agree on it before handing implementation to an agent.
- Give each feature its own conversation in a large project. Check the result before moving on.
- Specify the simplest implementation for small tasks. For UI work, provide a reference image, describe the intended result, and define checkable acceptance criteria.
- Mark dependencies and priorities, completing prerequisites first. For writing, separate direction and structure, research, and drafting. Complete one concrete deliverable before adding tools. Before batch processing, deduplicate and filter with explicit rules, checking a sample for relevant material that was excluded.
- In content production, assign work by deliverable. For example, the researcher hands verified facts and open questions to the writer, who drafts from those notes. You approve the topic and final copy. Add a role when another stage will use its output.
- **Copyable prompt:** “Implement only this feature. First propose the simplest implementation and the acceptance criteria, then wait for my confirmation.”

### Ask the AI to keep going within the authorized scope

**Advanced**

- Use this for tasks with a clear goal and several steps. For low-risk, reversible details, state a reasonable assumption and proceed. Ask first about decisions that change the goal or scope or have irreversible consequences.
- **Copyable prompt:** “Once the goal and deliverables are clear, carry out the authorized steps through delivery. State your assumptions and proceed on small, reversible details. Ask me first about decisions that change the scope, require authorization, or are irreversible.”

### Clarify learning needs before teaching and practice

**Advanced**

- Use this to learn a new field or fill gaps in your foundations. Start with several rounds of questions about your goal, existing knowledge, scope, and available time. Turn the answers into a learning brief and confirm it before starting.
- Teach one concept and give one exercise per round. Wait for the learner's answer before correcting misunderstandings. End each stage with a case that checks application, then adjust what comes next.
- For presentation or negotiation practice, use realistic scenarios. After each answer, apply agreed criteria, quote specific issues, and repeat the same scenario to compare changes. Treat scores as practice feedback, not proof of competence.
- To explore relationships between variables, turn one concept into a simple interactive page with sliders and exercises. Check formulas, boundary values, and scoring against known answers before practicing. Offline use depends on whether external resources are required.
- **Copyable prompt:** “I want to learn [topic]. Ask me questions over several rounds to clarify my goal, existing knowledge, scope, and schedule. Summarize a learning brief for my confirmation. Then teach one concept and give one exercise per round, waiting for my answer before feedback. End each stage with a case to check understanding and adjust the next stage.”

### Specify deliverables, exceptions, and boundaries for unattended tasks

**Advanced**

- Use this when preparing scheduled or background work. Specify the time window and timezone, delivery location and format, data sources, decision criteria, and responses to missing or stale data and tool failures.
- Distinguish no change from failure to retrieve information. Define duplicate handling and allowed actions. Preserve unresolved questions when no one is available to answer, without expanding permissions.
- **Copyable prompt:** “Rewrite [task] as an unattended work order: schedule and timezone [fill in], data time window [fill in], permitted sources [fill in], and delivery location and format [fill in]. Include the run date and checkable evidence. Define separate outputs for no change, missing data, stale data, and tool failure, plus deduplication rules. Allow only [actions] and prohibit [actions]. Report missing prerequisites as blockers instead of guessing or acting without authorization. Output the work order only; do not schedule it.”

### Start an assistant with read-only access and expand permissions gradually

**Advanced**

- Use this when connecting an assistant to messages, email, or business tools. First restrict it to reading a specified scope and listing tasks. Check omissions, misclassifications, and evidence before allowing drafts and later granting explicit execution permissions.
- Separate reading, drafting, and sending permissions. Record recurring corrections and negative examples. Use supported account authorization rather than putting passwords in prompts or handoff files.
- **Copyable prompt:** “For this stage, read only [authorized scope] and list tasks, supporting evidence, and uncertainties. Do not send messages or change data. After I review omissions and misclassifications, summarize the rules to adjust. Later, draft only the items I explicitly specify; execution or sending requires separate authorization.”

### Distinguish actions taken, verified results, and unresolved status

**Advanced**

- Use this when an agent edits files, publishes content, or operates external systems. Define where success should be observable, then provide the result, system receipt, or freshly read state with the checked object and time.
- Sending a request does not prove success. Local caches, completion files, and the AI's own summary can help track work but cannot independently prove an external action succeeded. Mark insufficiently supported results as attempted or unconfirmed.
- Explain what tests covered and what they did not. UI messages must match actual capabilities and receipts: saving a draft is not publishing, and success should not appear before confirmation.
- **Copyable prompt:** “After [task], list actions taken, verified results, and unresolved items against the acceptance criteria. Attach a checkable file location, system receipt, or freshly read state for each, including the object and check time. Explain what the tests establish and what they do not cover. Do not claim completion without independent evidence or treat your own completion marker as proof.”

## Evaluation & Reuse {#evaluation}

### Choose reasoning effort for the task

**Advanced**

- Use this when your tool offers reasoning settings and you want to manage latency and usage. Try a lower setting for simple edits and corrections, and increase it for complex reasoning. Compare accuracy, time, and usage on tasks that represent your own work.
- Change the setting in the tool and decide what to keep from the results. Test the effect of each setting.
- **Copyable prompt:** “Design three test tasks with clear acceptance criteria for my usual [task type], so I can compare reasoning settings. Specify what to check for each task and where to record elapsed time and usage.”

### Compare models on real tasks and assign work by risk and cost

**Advanced**

- Use this when choosing among models or tools. Compare accuracy, response time, and cost on your own document reading, reasoning, and routine processing tasks, then choose a primary and a backup. Context capacity is only one factor in document tasks.
- Add independent verification when failure would be costly. After repeated failures, check whether information, tools, or capability are missing before switching. Periodically remove redundant or rarely used tools.
- **Copyable prompt:** “Design three representative tests and acceptance criteria for [task], recording accuracy, time, and cost. Based on the consequences of failure, specify which results require human or tool verification and when to add information, use a tool, or switch models.”

### Evaluate failure cases before revising a prompt

**Advanced**

- Use this when a prompt keeps growing while similar errors recur. Collect representative successes and failures, define passing criteria, and distinguish missing information, instruction problems, missing tools, and capability limits.
- Remove redundant or conflicting patches. Change one failure pattern at a time, compare versions on the same examples, and reserve fresh examples to check whether the changes generalize.
- Use available tools for calculations, retrieval, or code execution as needed and check their results. Mark tests that were not actually run.
- **Copyable prompt:** “Here are the current prompt, sample inputs, and actual outputs: [materials]. Identify failure patterns and checkable passing criteria for each, distinguishing missing information, conflicting instructions, missing tools, and capability limits. Propose minimal changes and compare versions on the original and held-out examples. Clearly mark checks that were not run; do not claim a successful fix without testing.”

### Turn a validated conversation into a reusable template

**Advanced**

- Use this when several revisions have produced a satisfactory result for a recurring task. Extract essential rules from the goal, materials, corrections, and final output, separating fixed requirements from variables supplied each time.
- A good example can describe output criteria but cannot reveal a unique original prompt. Try the template in a new conversation with different material before keeping it. Consider packaging a workflow as a skill only after it works reliably.
- **Copyable prompt:** “From this task's goal, feedback, and final deliverable, create a standalone prompt template. Specify when it applies, required variables, essential constraints, output format, and acceptance checks. Remove details unique to this instance and do not infer hidden instructions. Provide two different test inputs for fresh conversations and mark what remains unverified.”
