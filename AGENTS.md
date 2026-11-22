# AGENTS.md

## Routine Updates

When the user shares results from their Xiaohongshu task and asks for an update, use the material they provide to add reusable AI interaction tips to the existing GitHub Pages site.

1. Read `docs/index.md` and `docs/en.md` and check for overlapping tips. If a tip already exists, add only new use cases or steps.
2. Put each tip under one of the three existing topics. Use a title that describes the problem, briefly explain when to use the tip, and include a copyable prompt or actionable steps. Report test results only when the user provides them.
3. Update both language pages together. Check that corresponding entries match in topic, order, difficulty, and conclusions.

## Content Conventions

- Keep the Chinese text in `docs/index.md` and the English text in `docs/en.md`. Keep the language switcher at the top of both pages.
- Use the existing topics: Conversation Management (对话管理), Project Collaboration (项目协作), and Refining Responses (输出调整).
- Place one difficulty label below each tip title. Use **Beginner** (新手入门) for simple prompts readers can try in one conversation. Use **Advanced** (高手进阶) for cross-conversation handoffs, work done in stages, or multi-step collaboration.
- Omit platform names, authors, original post links, and source fields from the published tips. Summarize the techniques in your own words and omit unverified efficiency figures.
- Keep the repository README bilingual and point its reading links to GitHub Pages. The default Chinese page is `https://tmpbook.github.io/ai-interaction-tips/` and the English page is `https://tmpbook.github.io/ai-interaction-tips/en.html`.

For routine additions, update only the two language pages. After committing, verify the new entries and language switcher in both files. In your reply, summarize the tips you added or merged.
