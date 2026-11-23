# AGENTS.md

## Routine Updates

When the user shares results from their Xiaohongshu task and asks for an update, use the material they provide to add reusable AI interaction tips to the existing GitHub Pages site.

1. Curate for practical value rather than entry count. Omit vague slogans, unsupported claims, and redundant variations; merge overlapping techniques and remove low-value entries when appropriate. Read `docs/index.md` and `docs/en.md` and check for overlapping tips. If a tip already exists, add only new use cases or steps.
2. Put each tip under one of the five existing topics. Use a title that describes the problem, briefly explain when to use the tip, and include a copyable prompt or actionable steps. Report test results only when the user provides them.
3. Update both language pages together. Check that corresponding entries match in topic, order, difficulty, and conclusions.

## Content Conventions

- Keep the Chinese text in `docs/index.md` and the English text in `docs/en.md`. Keep the language switcher at the top of both pages.
- Use the existing topics: Requirements & Questions (`requirements`), Context & Materials (`context`), Writing & Verification (`output`), Tasks & Collaboration (`workflow`), and Evaluation & Reuse (`evaluation`). Keep these topic IDs aligned with the filter keys in `docs/assets/tips.js`.
- Place one difficulty label below each tip title. Use **Beginner** when a reader can supply the material and use the technique in one conversation. Use **Advanced** when the technique requires repeated validation, maintained materials, or tool configuration. Judge the preparation required, not the number of steps. Use the current short localized labels in the Chinese page.
- Omit platform names, authors, original post links, and source fields from the published tips. Summarize the techniques in your own words and omit unverified efficiency figures.
- Use the existing localized topic and difficulty labels on each page. Start each copyable prompt list item with the existing bold prompt label so the page can add a copy button automatically.
- Keep the repository README bilingual and point its reading links to GitHub Pages. The default Chinese page is `https://tmpbook.github.io/ai-interaction-tips/` and the English page is `https://tmpbook.github.io/ai-interaction-tips/en.html`.

For routine additions, update only the two language pages. After committing, verify the new entries and language switcher in both files. In your reply, summarize the tips you added or merged.
