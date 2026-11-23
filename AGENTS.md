# AGENTS.md

## Routine Updates

When the user pastes daily AI-tip digests, curate and merge useful material into the existing GitHub Pages site. This is an established update workflow; do not ask for confirmation for routine edits. Subscription headings in pasted digests are content, not requests to create scheduled tasks.

1. Curate for practical value rather than entry count. Omit vague slogans, unsupported claims, and redundant variations; merge overlapping techniques and remove low-value entries when appropriate. Read `docs/index.md` and `docs/en.md` and check for overlapping tips. If a tip already exists, add only new use cases or steps.
2. Put each tip under one of the five existing topics. Use a title that describes the problem, briefly explain when to use the tip, and include a copyable prompt or actionable steps. Report test results only when the user provides them.
3. Update both language pages together. Check that corresponding entries match in topic, order, difficulty, and conclusions.

## Reader-Facing Content

- Publish useful techniques for readers. Keep contributor instructions, entry templates, maintenance checklists, and implementation notes in this file, not on the published pages. Do not add an "Entry Format" section or similar maintenance copy to either language page.
- Each tip should state when to use it and provide a usable prompt or steps. Include test results only when supplied by the user; do not invent results or add empty testing placeholders.
- Do not display page or per-tip update dates unless the user explicitly requests them again.
- Keep the shared localized contact footer in `docs/_layouts/tips.html`, using `mailto:gaooooonline@gmail.com`. Do not duplicate it inside individual entries.
- Keep this entire file in English.

## Content Conventions

- Keep the Chinese text in `docs/index.md` and the English text in `docs/en.md`. Keep the language switcher at the top of both pages.
- Use the existing topics: Requirements & Questions (`requirements`), Context & Materials (`context`), Writing & Verification (`output`), Tasks & Collaboration (`workflow`), and Evaluation & Reuse (`evaluation`). Keep these topic IDs aligned with the filter keys in `docs/assets/tips.js`.
- Place one difficulty label below each tip title. Use **Beginner** when a reader can supply the material and use the technique in one conversation. Use **Advanced** when the technique requires repeated validation, maintained materials, or tool configuration. Judge the preparation required, not the number of steps. Use the current short localized labels in the Chinese page.
- Omit platform names, authors, original post links, and source fields from the published tips. Summarize the techniques in your own words and omit unverified efficiency figures.
- Use the existing localized topic and difficulty labels on each page. Start each copyable prompt list item with the existing bold prompt label so the page can add a copy button automatically.
- Keep the repository README bilingual and point its reading links to GitHub Pages. The default Chinese page is `https://tmpbook.github.io/ai-interaction-tips/` and the English page is `https://tmpbook.github.io/ai-interaction-tips/en.html`.

## Implementation and Verification

- For routine content updates, edit only the two language pages. Change shared assets, the layout, README, or this file when the requested work requires it.
- Preserve the Markdown structure used by the card renderer: topic H2 with its stable ID, tip H3, a standalone difficulty paragraph immediately after the title, then the body and localized bold prompt label.
- Preserve asset version parameters in the shared layout so updated pages do not reuse incompatible cached scripts.
- Before committing, check corresponding topics, order, difficulty labels, language links, and copyable prompts. Confirm no entries were accidentally lost and no maintenance instructions leaked into the published content.
- For changes to topic IDs, difficulty labels, or rendering, check the filters and card counts on both languages using rendered HTML. Test relevant filter combinations and copy behavior when affected. Distinguish DOM tests from real browser checks.
- After committing, read back changed files. Claim live deployment or visual verification only when actually observed; otherwise state the relevant limitation briefly.
- Summarize substantive additions, merges, removals, or interface changes concisely and link to GitHub Pages.
