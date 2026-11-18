import fs from "fs";

const extracted = JSON.parse(fs.readFileSync("webporto-projects.json", "utf8"));

const catalog = [
  { slug: "famspay", featured: true, featuredOrder: 1, order: 1, aset: "05_famspay", prefix: "famspay" },
  { slug: "roadasafe", featured: false, order: 2, aset: "10_roadasafe", prefix: "roadasafe" },
  { slug: "technoplay", featured: true, featuredOrder: 3, order: 3, aset: "07_technoplay", prefix: "technoplay" },
  { slug: "boysan", featured: false, order: 4, aset: "01_boysan", prefix: "boysan" },
  { slug: "unravel", featured: false, order: 5, aset: "06_unravel", prefix: "unravel" },
  { slug: "simdik", featured: false, order: 6, aset: "08_simdik", prefix: "simdik" },
  { slug: "furai", featured: false, order: 7, aset: "09_furai", prefix: "furai" },
  { slug: "green-portfolio-risk", featured: true, featuredOrder: 2, order: 8, aset: "11_greenportofolio", prefix: "green-dashboard" },
  { slug: "heal", featured: false, order: 9, aset: "04_heal", prefix: "heal" },
  { slug: "jagasenja", featured: true, featuredOrder: 4, order: 10, aset: "02_jagasenja", prefix: "jaga-senja" },
  { slug: "oasis", featured: false, order: 11, aset: "03_oasis", prefix: "oasis" },
  { slug: "rintik", featured: false, order: 12, aset: null, prefix: "rintik" },
];

function normalizeCategories(tags = []) {
  return tags.map((tag) => {
    if (tag === "competition") return "competition project";
    if (tag === "campus") return "campus project";
    if (tag === "real client") return "real client";
    if (tag === "game") return "game";
    return tag;
  });
}

function media(prefix, hasAset) {
  if (!hasAset) {
    return {
      designSystemImage: "/images/placeholder.svg",
      architectureImage: "/images/placeholder.svg",
      flowImage: "/images/placeholder.svg",
      mockups: ["/images/placeholder.svg"],
    };
  }
  return {
    designSystemImage: `/images/${prefix}-design-system.png`,
    architectureImage: `/images/${prefix}-architecture.png`,
    flowImage: `/images/${prefix}-flow.png`,
    mockups: [
      `/images/${prefix}-mockup.png`,
      `/images/${prefix}-preview.png`,
      `/images/${prefix}-project.png`,
    ],
  };
}

const projects = catalog.map((meta) => {
  const src = extracted[meta.slug];
  const images = media(meta.prefix, Boolean(meta.aset));
  return {
    slug: meta.slug,
    title: src.title,
    date: src.date,
    summary: src.summary,
    role: src.role,
    featured: meta.featured,
    featuredOrder: meta.featuredOrder || null,
    hasDetailPage: true,
    order: meta.order,
    categories: normalizeCategories(src.categories),
    problem: src.problem || "TODO",
    solution: src.solution?.length ? src.solution : ["TODO"],
    keyFeatures: src.keyFeatures?.length ? src.keyFeatures : ["TODO"],
    techStack: src.techStack?.length ? src.techStack : ["TODO"],
    ...images,
    results: "TODO",
    demoUrl: src.demoUrl || "TODO",
    repoUrl: "TODO",
  };
});

const file = `/** Auto-generated from web_porto / PRD-project-detail. Do not hand-edit project copy here — re-run scripts/build-projects-data.mjs */
export const projects = ${JSON.stringify(projects, null, 2)};
`;

fs.writeFileSync("src/data/projectsData.js", file, "utf8");
console.log("projects:", projects.length);
console.log(projects.map((p) => `${p.order}. ${p.slug}`).join("\n"));
