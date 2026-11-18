import fs from "fs";
import path from "path";

const root =
  "c:/Users/EKISHIN/OneDrive/ドキュメント/Ekishin/COLLEGE/Magang/Portofolio/web_porto/projects";
const slugs = [
  "famspay",
  "roadasafe",
  "technoplay",
  "boysan",
  "unravel",
  "simdik",
  "furai",
  "green-portfolio-risk",
  "heal",
  "jagasenja",
  "oasis",
  "rintik",
];

function decode(s) {
  return s
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function text(html, re) {
  const m = html.match(re);
  return m ? decode(m[1]) : "";
}

function listAfter(html, heading) {
  const i = html.indexOf(heading);
  if (i < 0) return [];
  const slice = html.slice(i, i + 5000);
  const ul = slice.match(/<ul[\s\S]*?<\/ul>/);
  if (!ul) return [];
  return [...ul[0].matchAll(/<li>([\s\S]*?)<\/li>/g)]
    .map((m) => decode(m[1]))
    .filter(Boolean);
}

function chips(html) {
  const m = html.match(/stack-chips[\s\S]*?<\/ul>/);
  if (!m) return [];
  return [...m[0].matchAll(/<li>([\s\S]*?)<\/li>/g)].map((x) =>
    decode(x[1]),
  );
}

function demo(html) {
  const m = html.match(/is-demo[^>]*href="([^"]+)"/);
  return m ? m[1].replace(/&amp;/g, "&") : null;
}

function role(html) {
  const m = html.match(/key-sticky role[\s\S]*?<p>([\s\S]*?)<\/p>/);
  return m ? decode(m[1]) : "";
}

function tags(html) {
  const m = html.match(/detail-tags[\s\S]*?<\/div>/);
  if (!m) return [];
  return [...m[0].matchAll(/<span>([\s\S]*?)<\/span>/g)].map((x) =>
    decode(x[1]).toLowerCase(),
  );
}

function problem(html) {
  const i = html.indexOf("Problem Statement");
  if (i < 0) return "";
  const s = html.slice(i, i + 2000);
  const p = s.match(/<p>([\s\S]*?)<\/p>/);
  return p ? decode(p[1]) : "";
}

const out = {};
for (const slug of slugs) {
  const html = fs.readFileSync(path.join(root, slug, "index.html"), "utf8");
  out[slug] = {
    title: text(html, /<h1 class="detail-title[^"]*">([\s\S]*?)<\/h1>/),
    date: text(html, /<p class="detail-date[^"]*">([\s\S]*?)<\/p>/),
    summary: text(html, /<p class="detail-lede[^"]*">([\s\S]*?)<\/p>/),
    role: role(html),
    categories: tags(html),
    problem: problem(html),
    solution: listAfter(html, "Objectives"),
    keyFeatures: listAfter(html, "Key features"),
    techStack: chips(html),
    demoUrl: demo(html),
  };
}

fs.writeFileSync(
  "webporto-projects.json",
  JSON.stringify(out, null, 2),
  "utf8",
);
console.log("wrote", Object.keys(out).length);
