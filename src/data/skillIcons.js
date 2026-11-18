/** Shared skill → icon paths for Tech Stack cards and the logo marquee. */
export const skillIconMap = {
  HTML: "/images/icons/html5.svg",
  HTML5: "/images/icons/html5.svg",
  CSS: "/images/icons/html5.svg",
  CSS3: "/images/icons/html5.svg",
  JavaScript: "/images/icons/javascript.svg",
  "React.js": "/images/icons/react.svg",
  React: "/images/icons/react.svg",
  "Next.js": "/images/icons/nextdotjs.svg",
  "Tailwind CSS": "/images/icons/tailwindcss.svg",
  PHP: "/images/icons/php.svg",
  Laravel: "/images/icons/laravel.svg",
  Python: "/images/icons/python.svg",
  FastAPI: "/images/icons/fastapi.svg",
  "REST API": "/images/icons/restapi.svg",
  MySQL: "/images/icons/mysql.svg",
  PostgreSQL: "/images/icons/postgresql.svg",
  MongoDB: "/images/icons/mongodb.svg",
  Supabase: "/images/icons/supabase.svg",
  Firebase: "/images/icons/firebase.svg",
  "VS Code": "/images/icons/vscode.svg",
  Git: "/images/icons/git.svg",
  Postman: "/images/icons/postman.svg",
  Figma: "/images/icons/figma.svg",
  Unity: "/images/icons/unity.svg",
  QGIS: "/images/icons/qgis.svg",
  Notion: "/images/icons/notion.svg",
  "Google Workspace": "/images/icons/google-workspace.svg",
  "Draw.io": "/images/icons/drawio.svg",
};

export function getSkillIcon(name) {
  return skillIconMap[name] || null;
}
