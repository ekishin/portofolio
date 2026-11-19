/**
 * Free stand-in for Motion+ `splitText`.
 * Wraps text nodes in word spans (preserves nested markup).
 * Sets aria-label so screen readers still hear the full string.
 */

function collectTextNodes(root) {
  const nodes = [];
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) nodes.push(walker.currentNode);
  return nodes;
}

export function splitTextDom(element, { className = "split-word" } = {}) {
  if (!element || element.dataset.split === "done") {
    return {
      words: element
        ? Array.from(element.querySelectorAll(`.${className}`))
        : [],
    };
  }

  const original = element.textContent || "";
  if (original.trim()) {
    element.setAttribute("aria-label", original.trim());
  }

  const words = [];
  const textNodes = collectTextNodes(element);

  for (const node of textNodes) {
    const text = node.textContent;
    if (!text || !/\S/.test(text)) continue;

    const fragment = document.createDocumentFragment();
    const parts = text.split(/(\s+)/);

    for (const part of parts) {
      if (!part) continue;

      if (/^\s+$/.test(part)) {
        fragment.appendChild(document.createTextNode(part));
        continue;
      }

      const span = document.createElement("span");
      span.className = className;
      span.style.display = "inline-block";
      span.style.willChange = "transform, opacity";
      span.textContent = part;
      fragment.appendChild(span);
      words.push(span);
    }

    node.parentNode?.replaceChild(fragment, node);
  }

  element.dataset.split = "done";
  return { words };
}
