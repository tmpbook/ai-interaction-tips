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

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;

    const status = document.createElement("span");
    status.setAttribute("role", "status");
    line.append(" ", button, " ", status);

    button.addEventListener("click", async () => {
      status.textContent = "";
      try {
        await navigator.clipboard.writeText(prompt);
        status.textContent = copied;
      } catch {
        status.textContent = failed;
      }
    });
  }
})(document, navigator);
