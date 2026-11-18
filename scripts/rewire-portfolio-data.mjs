import fs from "fs";

const path = "src/data/portfolioData.js";
let source = fs.readFileSync(path, "utf8");

const start = source.indexOf("export const projects = [");
const end = source.indexOf("/** Convenience helpers */");
if (start < 0 || end < 0) {
  throw new Error(`markers missing: ${start}, ${end}`);
}

const head = source.slice(0, start).replace(/^\/\*[\s\S]*?\*\/\s*/, "");
let tail = source.slice(end);

tail = tail.replace(
  /featuredProjects = projects\n  \.filter\(\(project\) => project\.featured\)\n  \.sort\(\(a, b\) => a\.order - b\.order\);/,
  `featuredProjects = projects
  .filter((project) => project.featured)
  .sort(
    (a, b) =>
      (a.featuredOrder || a.order) - (b.featuredOrder || b.order),
  );`,
);

tail = tail.replace(
  /export function getDetailProjectBySlug\(slug\) \{\n  return detailProjects\.find\(\(project\) => project\.slug === slug\) \|\| null;\n\}/,
  `const slugAliases = {
  "green-dashboard": "green-portfolio-risk",
  "jaga-senja": "jagasenja",
};

export function getDetailProjectBySlug(slug) {
  const resolved = slugAliases[slug] || slug;
  return detailProjects.find((project) => project.slug === resolved) || null;
}`,
);

const out = `/**
 * Single source of truth for portfolio content.
 * Project detail copy is generated into projectsData.js from PRD / web_porto.
 */

import { projects as generatedProjects } from "./projectsData";

${head}export const projects = generatedProjects;

${tail}`;

fs.writeFileSync(path, out, "utf8");
console.log("rewired portfolioData.js");
