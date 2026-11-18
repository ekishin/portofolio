/** Hide fields whose value is TODO (exact or TODO: …). */
export function isTodo(value) {
  if (value == null) return true;
  if (typeof value !== "string") return false;
  const trimmed = value.trim();
  return trimmed === "TODO" || trimmed.startsWith("TODO");
}

export function visibleText(value) {
  return isTodo(value) ? null : value;
}

export function visibleList(items = []) {
  return items.filter((item) => !isTodo(item));
}

export function visibleUrl(value) {
  const text = visibleText(value);
  if (!text || text === "#" || text === "/") return null;
  return text;
}

export function safeImageSrc(src) {
  if (!src || isTodo(src)) return "/images/placeholder.svg";
  return src;
}
