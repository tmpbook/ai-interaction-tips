(function addCopyButtons(document, navigator) {
  const chinese = document.currentScript.dataset.language === "zh-CN";
  const label = chinese ? "复制提示词" : "Copy prompt";
  const heading = chinese ? "可复制用法" : "Copyable prompt:";
  const copied = chinese ? "已复制" : "Copied";
  const failed = chinese ? "复制失败，请手动复制。" : "Copy failed. Please copy the prompt manually.";

  for (const marker of document.querySelectorAll("li > strong, li > p > strong")) {
    if (marker.textContent.trim() !== heading) continue;

    const line = marker.parentElement;
    const prompt = line.textContent.trim().slice(heading.length).trim()
      .replace(/^[:：]\s*/, "")
      .replace(/^(?:「(.*)」|“(.*)”)$/s, "$1$2");
    if (!prompt) continue;

    line.closest("li").classList.add("prompt-copy-item");
    line.classList.add("prompt-copy-card");

    const button = document.createElement("button");
    button.type = "button";
    button.className = "prompt-copy-button";
    button.title = label;
    button.setAttribute("aria-label", label);

    const icon = document.createElement("span");
    icon.className = "prompt-copy-icon";
    icon.setAttribute("aria-hidden", "true");
    button.append(icon);

    const status = document.createElement("span");
    status.className = "prompt-copy-status";
    status.setAttribute("role", "status");
    line.append(button, status);

    button.addEventListener("click", async () => {
      status.textContent = "";
      button.classList.remove("is-copied");
      try {
        await navigator.clipboard.writeText(prompt);
        button.classList.add("is-copied");
        status.textContent = copied;
      } catch {
        status.textContent = failed;
      }
    });
  }
})(document, navigator);
