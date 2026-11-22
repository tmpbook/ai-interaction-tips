(() => {
  const library = document.querySelector(".library");
  const chinese = document.documentElement.lang === "zh-CN";
  const labels = chinese ? {
    topic: "主题", level: "难度", allTopics: "全部主题", allLevels: "全部难度",
    beginner: "新手入门", advanced: "高手进阶", details: "查看用法",
    prompt: "可复制用法", copy: "复制提示词", copied: "已复制",
    failed: "复制失败，请选中提示词手动复制。",
    empty: "没有符合条件的技巧。试试调整筛选。",
    count: count => count + " 条技巧",
  } : {
    topic: "Topic", level: "Difficulty", allTopics: "All topics", allLevels: "All levels",
    beginner: "Beginner", advanced: "Advanced", details: "View instructions",
    prompt: "Copyable prompt:", copy: "Copy prompt", copied: "Copied",
    failed: "Copy failed. Select the prompt text to copy it manually.",
    empty: "No tips match. Try adjusting the filters.",
    count: count => count + (count === 1 ? " tip" : " tips"),
  };

  function element(tag, className, text) {
    const node = document.createElement(tag);
    node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function buildCard(heading, parts) {
    const [difficulty, ...body] = parts;
    const level = Object.keys(levels).find(key => levels[key] === difficulty?.textContent.trim());
    if (!level) return null;

    const items = body.flatMap(node => Array.from(node.querySelectorAll("li")));
    const promptItem = items.find(item => item.querySelector("strong")?.textContent.trim() === labels.prompt);
    const prompt = promptItem?.textContent.trim().slice(labels.prompt.length).trim()
      .replace(/^[:：]\s*/, "")
      .replace(/^(?:「(.*)」|“(.*)”)$/s, "$1$2");

    const card = element("article", "tip-card");
    card.dataset.level = level;
    card.append(element("span", "tip-tag", levels[level]), heading.cloneNode(true));

    const description = items.find(item => item !== promptItem && !item.querySelector("strong"));
    if (description) {
      const text = description.textContent.trim();
      const firstSentence = text.match(/^.+?(?:[。！？]|[.!?](?=\s|$))/)?.[0] ?? text;
      card.append(element("p", "tip-summary", firstSentence));
    }

    const details = element("details", "tip-details");
    details.append(element("summary", "", labels.details), ...body.map(node => node.cloneNode(true)));
    card.append(details);

    if (prompt) {
      const actions = element("div", "tip-actions");
      const button = element("button", "tip-copy");
      button.type = "button";
      const icon = element("span", "tip-copy-icon");
      icon.setAttribute("aria-hidden", "true");
      const buttonText = element("span", "", labels.copy);
      button.append(icon, buttonText);

      const status = element("span", "tip-status sr-only");
      status.setAttribute("role", "status");
      actions.append(button, status);
      card.append(actions);

      button.addEventListener("click", async () => {
        status.textContent = "";
        try {
          await navigator.clipboard.writeText(prompt);
          button.dataset.copied = "";
          buttonText.textContent = labels.copied;
          status.classList.add("sr-only");
          status.textContent = labels.copied;
        } catch {
          delete button.dataset.copied;
          buttonText.textContent = labels.copy;
          status.classList.remove("sr-only");
          status.textContent = labels.failed;
          details.open = true;
        }
      });
    }
    return card;
  }

  function buildTopic(heading) {
    const nodes = [heading];
    for (let node = heading.nextElementSibling; node && node.tagName !== "H2"; node = node.nextElementSibling) {
      nodes.push(node);
    }

    const grid = element("div", "tip-grid");
    const starts = nodes.flatMap((node, index) => node.tagName === "H3" ? [index] : []);
    if (starts[0] !== 1) return null;
    const cards = starts.map((start, index) => buildCard(nodes[start], nodes.slice(start + 1, starts[index + 1])));
    if (cards.some(card => !card)) return null;

    grid.append(...cards);
    const section = element("section", "tip-topic");
    section.append(heading.cloneNode(true), grid);
    return { heading, nodes, section, cards };
  }

  function addFilter(container, name, options) {
    const label = element("label", "", name);
    const select = element("select", "");
    for (const [value, title] of options) select.add(new Option(title, value));
    label.append(select);
    container.append(label);
    return select;
  }

  const levels = { beginner: labels.beginner, advanced: labels.advanced };
  const keys = ["context", "workflow", "output"];
  const headings = Array.from(library.querySelectorAll(":scope > h2")).filter(heading => keys.includes(heading.id));
  if (headings.length !== keys.length) return;
  const topics = headings.map(buildTopic);
  if (topics.some(topic => !topic)) return;

  const controls = element("div", "tip-filters");
  const topicFilter = addFilter(controls, labels.topic, [
    ["", labels.allTopics],
    ...headings.map(heading => [heading.id, heading.textContent.trim()]),
  ]);
  const levelFilter = addFilter(controls, labels.level, [["", labels.allLevels], ...Object.entries(levels)]);
  const results = element("p", "tip-results");
  results.setAttribute("role", "status");
  controls.append(results);

  const empty = element("p", "tip-empty", labels.empty);
  headings[0].before(controls, empty);
  const toc = controls.previousElementSibling;
  if (toc?.matches("ul") && Array.from(toc.querySelectorAll("a")).every(link => keys.includes(link.hash.slice(1)))) {
    toc.hidden = true;
  }
  for (const { heading, nodes, section } of topics) {
    heading.before(section);
    nodes.forEach(node => node.remove());
  }

  function filter() {
    let total = 0;
    for (const { heading, section, cards } of topics) {
      const matchesTopic = !topicFilter.value || topicFilter.value === heading.id;
      let visible = 0;
      for (const card of cards) {
        card.hidden = !(matchesTopic && (!levelFilter.value || levelFilter.value === card.dataset.level));
        if (!card.hidden) visible++;
      }
      section.hidden = !visible;
      total += visible;
    }
    results.textContent = labels.count(total);
    empty.hidden = !!total;
  }

  controls.addEventListener("change", filter);
  filter();
  const anchor = location.hash.slice(1);
  if (keys.includes(anchor)) document.getElementById(anchor).scrollIntoView();
})();
