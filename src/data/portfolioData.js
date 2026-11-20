/**
 * Single source of truth for portfolio content.
 * Project detail copy is generated into projectsData.js from PRD / web_porto.
 */

import { projects as generatedProjects } from "./projectsData";

export const profile = {
  name: "Eki Shinta Maharani",
  headline: "Fullstack Web Developer",
  bio: "I build reliable APIs ✨, clear data dashboards, and modern web and mobile apps 🌐",
  photo: "/images/ekishin.png",
  aboutPhoto: "/images/ekishin-about-zinc.jpg",
  availability: {
    status: "Available for internship",
    period: "January 2027",
  },
  cvUrl: "/cv.pdf",
};

export const contacts = {
  email: "ekishintamaharani@gmail.com",
  instagram:
    "https://www.instagram.com/xishin_?mdxt=ZW5wdGpuejU3eG1v&utm_source=qr",
  linkedin: "https://www.linkedin.com/in/ekishinta/",
};

export const howIWork = [
  {
    title: "Understand",
    description:
      "Clarify goals, users, and system requirements before writing a single line of code.",
    icon: "understand",
  },
  {
    title: "Design",
    description:
      "Architect database schemas, MVC structures, and high-fidelity UI/UX prototypes.",
    icon: "design",
  },
  {
    title: "Build",
    description:
      "Execute clean, modular code under structured SDLC across web, mobile, and API systems.",
    icon: "build",
  },
  {
    title: "Deliver",
    description:
      "Verify quality through black-box and security testing, deploy to production, and maintain documentation.",
    icon: "deliver",
  },
];

export const about = {
  whoAmI:
    "Software Engineering Technology undergraduate at IPB University specializing in Full-Stack Web Development, supported by strong foundations in System Analysis and UI/UX Design. Proven ability to collaborate in teams alongside leadership and financial administration experience in campus organizations.",
  approach:
    "Proficient in translating complex business requirements into structured system documentation (SRS, UML, ERD), intuitive UI prototypes, and scalable web/mobile architectures.",
  lookingFor:
    "Currently focused on building high-impact digital products across 10+ technical projects while Available for internship a Web Developer role.",
  personalDetails: [
    { label: "Name", value: "Eki Shinta Maharani" },
    { label: "Education", value: "IPB University" },
    { label: "Email", value: "ekishintamaharani@gmail.com", href: "mailto:ekishintamaharani@gmail.com" },
    { label: "Location", value: "Bogor, Indonesia" },
    { label: "Focus", value: "Fullstack Web Developer" },
  ],
};

export const education = [
  {
    school: "IPB University - Bogor, Indonesia",
    period: "Aug 2024 - Jun 2028 (Expected)",
    degree: "Bachelor of Applied Science in Software Engineering, 3.55/4.00",
    details:
      "Relevant Coursework: Web Programming, Software Analysis & Design, Software Requirements Engineering, Database Systems, Data Structures & Algorithms, Virtual Technology, Data Mining, Geographic Information Systems.",
  },
];

export const languages = [];

export const experience = [
  {
    role: "Secretary & Treasurer of Human Resource Development Division",
    org: "KMHD IPB University",
    orgShort: "KMHD IPB University",
    location: "Bogor",
    type: "Organization",
    year: "2026",
    period: "January 2025 – December 2026",
    logo: "/images/org/logo-kmhd-ipb.png",
    photo: "/images/org/kmhd-3.jpg",
    photos: [
      "/images/org/kmhd-3.jpg",
      "/images/org/kmhd-1.jpg",
      "/images/org/kmhd-2.jpg",
    ],
    certificateUrl: "/certificates/kmhd-psdm-certificate.pdf",
    description:
      "Managed administrative documentation, work proposals, and financial budgets for the cadre development division with 100% financial accountability, while coordinating key divisional programs including KMHD Mengajar, KMHD Ceria, and Suksesi.",
  },
  {
    role: "Event Division Staff",
    org: "KMHD Ceria Open House 63",
    orgShort: "KMHD Ceria Open House 63",
    location: "Bogor",
    type: "Organization",
    year: "2026",
    period: "August 2026",
    logo: "/images/org/logo-kmhd-ipb.png",
    photo: "/images/org/kmhd-ceria-oh-1.jpg",
    photos: [
      "/images/org/kmhd-ceria-oh-1.jpg",
      "/images/org/kmhd-ceria-oh-2.jpg",
      "/images/org/kmhd-ceria-oh-3.jpg",
    ],
    description:
      "Conceptualized the freshman welcoming program (Open House 63) under the KMHD Ceria initiative and coordinated on-site execution to ensure timely delivery.",
  },
  {
    role: "Event Division Staff",
    org: "Rakernas KMHDI XVI (National Working Meeting)",
    orgShort: "Rakernas KMHDI XVI",
    location: "Jakarta",
    type: "Event",
    year: "2026",
    period: "June – July 2026",
    logo: "/images/org/logo-kmhdi.png",
    photo: "/images/org/rakernas.jpeg",
    photos: ["/images/org/rakernas.jpeg"],
    description:
      "Conceptualized and executed end-to-end event rundowns and plenary session flows for a national-scale student conference attended by delegates across Indonesia.",
  },
  {
    role: "Secretary & Treasurer",
    org: "Social Project — Panti Asuhan Mizan Amanah",
    orgShort: "Social Project — Panti Asuhan Mizan Amanah",
    location: "Bogor",
    type: "Volunteering",
    year: "2026",
    period: "February – March 2026",
    logo: "/images/org/logo-tpl-sv-ipb.png",
    photo: "/images/org/mizan-1.jpg",
    photos: ["/images/org/mizan-1.jpg", "/images/org/mizan-2.jpg"],
    ctaUrl:
      "https://www.kompasiana.com/lopesmedia04487/6a04b41534777c6a6a28e552/mahasiswa-sekolah-vokasi-ipb-university-gelar-kegiatan-sosial-dan-edukasi-akidah-di-panti-asuhan-mizan-amanah-pandu-raya-bogor",
    ctaLabel: "Article",
    description:
      "Managed permit administration, donation tracking, and transparent financial reporting for social charity and child mentoring activities at Mizan Amanah Orphanage.",
  },
  {
    role: "Head of Public Relations Division",
    org: "SITE TPL SV IPB",
    orgShort: "SITE TPL SV IPB",
    location: "Bogor",
    type: "Organization",
    year: "2025",
    period: "August – November 2025",
    logo: "/images/org/logo-tpl-sv-ipb.png",
    photo: "/images/org/site.jpeg",
    photos: ["/images/org/site.jpeg"],
    description:
      "Directed creative content production and digital campaign strategies as Head of Public Relations, generating 5k+ views per post and driving a 150+ follower growth while maintaining a cohesive visual identity across departmental platforms. Directed communication timelines and participant onboarding information, achieving smooth cross-divisional coordination.",
  },
  {
    role: "Design, Decoration & Documentation Staff",
    org: "Karma KMHD IPB",
    orgShort: "Karma KMHD IPB",
    location: "Bogor",
    type: "Organization",
    year: "2025",
    period: "February – May 2025",
    logo: "/images/org/logo-karma-kmhd.jpg",
    photo: "/images/org/karma-2025.jpg",
    photos: [
      { src: "/images/org/karma-2025.jpg", position: "50% 68%" },
    ],
    description:
      "Designed the visual identity, promotional assets, venue decorations, and event documentation for the Karma 2025.",
  },
  {
    role: "Creative Division Staff",
    org: "IPB Goes to School",
    orgShort: "IPB Goes to School",
    location: "Karawang",
    type: "Organization",
    year: "2024–2025",
    period: "December 2024 – January 2025",
    logo: "/images/org/logo-igts.png",
    logoLarge: true,
    photo: "/images/org/igts-1.jpg",
    photos: [
      "/images/org/igts-1.jpg",
      "/images/org/igts-2.jpg",
      { src: "/images/org/igts-3.jpg", position: "50% 72%" },
    ],
    description:
      "Designed event posters, Instagram Story frames, Feeds Instagram, and countdown content highlighting the school visit schedule across Karawang, while producing on-site social media content with high school students and assisting with IPB University socialization sessions.",
  },
];

export const achievements = [
  {
    title: "Hak Atas Kekayaan Intelektual (HAKI) - TechnoPlay",
    issuer: "Ministry of Law of the Republic of Indonesia",
    year: "2026",
    proofImage: "/images/certificates/haki_cover.png",
    proofPdf: "/certificates/haki_sertifikat.pdf",
    proofPosition: "50% 50%",
    featured: true,
  },
  {
    title: "Gemini Certified Student",
    issuer: "Google for Education",
    year: "2026",
    proofImage: "/images/certificates/gemini_eki-shinta-maharani_page-0001.jpg",
    featured: true,
  },
  {
    title: "Finalist at Smart Data Analytics Competition",
    issuer: "Universitas Syiah Kuala",
    year: "2026",
    proofImage: "/images/placeholder.svg",
    featured: true,
  },
  {
    title: "7 Habits of Highly Effective New College Student",
    issuer: "FranklinCovey Education / Dunamis / IPB University",
    year: "2025",
    proofImage: "/images/certificates/7habits_eki-shinta-maharani.png",
    proofPdf: "/certificates/7habits_eki-shinta-maharani.pdf",
    featured: false,
  },
  {
    title: "Participant — National IT Competition PEKAN IT 2026",
    issuer: "HIMTIKA UNSIKA",
    year: "2026",
    proofImage: "/images/certificates/eki-shinta-maharani_pekan-it.png",
    featured: false,
  },
  {
    title: "Participant — DevFest Bogor 2025",
    issuer: "Google Developer Group Bogor",
    year: "2025",
    proofImage: "/images/certificates/gdg_eki-shinta-maharani.png",
    featured: false,
  },
  {
    title: "Participant UI/UX — FSTIVAL 2025",
    issuer: "Universitas Anwar Medika",
    year: "2025",
    proofImage: "/images/certificates/eki-shinta-maharani_fstival.jpeg",
    featured: false,
  },
  {
    title: "Participant UI/UX Competition — ISFEST 2025",
    issuer: "HIMSI Universitas Multimedia Nusantara",
    year: "2025",
    proofImage: "/images/certificates/eki-shinta_isfest.png",
    featured: false,
  },
  {
    title: "Participant UI/UX Competition — IT FAIR XIV",
    issuer: "HIMATIF UIN Sunan Gunung Djati",
    year: "2025",
    proofImage: "/images/certificates/eki-shinta-maharani_it-fair.png",
    featured: false,
  },
  {
    title: "Participant — Astronomy Design Competition (ASTREC 2025)",
    issuer: "ITS Astronomy Club",
    year: "2025",
    proofImage: "/images/certificates/eki-shinta-maharani_astrec.png",
    featured: false,
  },
  {
    title: "Participant — Infographic Journalism Competition (INCOM)",
    issuer: "HIMIKOM Universitas Bengkulu",
    year: "2025",
    proofImage: "/images/certificates/eki-shinta-maharani_incom.png",
    featured: false,
  },
  {
    title: "Participant — Infographic Competition Tani Sejiwa",
    issuer: "Universitas Islam Malang",
    year: "2025",
    proofImage: "/images/certificates/eki-shinta-maharani_tanse.jpg",
    featured: false,
  },
  {
    title: "Participant — Poster Competition HIMA RMIK ITARU",
    issuer: "Institut Tarumanagara",
    year: "2025",
    proofImage: "/images/certificates/eki-shinta-maharani_itaru.png",
    featured: false,
  },
  {
    title: "Participant — Lomba Poster Nasional 2025",
    issuer: "HIMAPA Universitas Slamet Riyadi",
    year: "2025",
    proofImage: "/images/certificates/eki-shinta-maharani_unsri.jpg",
    featured: false,
  },
  {
    title: "Certificate of Appreciation — Design Graphics and Motion Graphics Project",
    issuer: "LIA Bogor Jalan Baru and IPB Vocational School",
    year: "2025",
    proofImage: "/images/certificates/sertifikat-lia.jpg",
    featured: false,
  },
];

export const skills = {
  frontend: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Tailwind CSS"],
  backend: ["PHP", "Laravel", "Python", "FastAPI", "REST API"],
  database: ["MySQL", "PostgreSQL", "MongoDB", "Supabase", "Firebase"],
  tools: [
    "VS Code",
    "Git",
    "Postman",
    "Figma",
    "Unity",
    "QGIS",
    "Notion",
    "Google Workspace",
    "Draw.io",
  ],
};

export const projectCategories = [
  "website",
  "mobile",
  "game",
  "campus project",
  "competition project",
  "real client",
];

export const projects = generatedProjects;

/** Convenience helpers */
export const featuredProjects = projects
  .filter((project) => project.featured)
  .sort(
    (a, b) =>
      (a.featuredOrder || a.order) - (b.featuredOrder || b.order),
  );

export const detailProjects = projects
  .filter((project) => project.hasDetailPage)
  .sort((a, b) => a.order - b.order);

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug) || null;
}

const slugAliases = {
  "green-dashboard": "green-portfolio-risk",
  "jaga-senja": "jagasenja",
};

export function getDetailProjectBySlug(slug) {
  const resolved = slugAliases[slug] || slug;
  return detailProjects.find((project) => project.slug === resolved) || null;
}

export function getNextDetailProject(slug) {
  const resolved = slugAliases[slug] || slug;
  const index = detailProjects.findIndex((project) => project.slug === resolved);
  if (index === -1 || detailProjects.length === 0) return null;
  return detailProjects[(index + 1) % detailProjects.length];
}

export const sortedProjects = [...projects].sort((a, b) => {
  if (a.featured !== b.featured) return a.featured ? -1 : 1;
  return a.order - b.order;
});

export const featuredAchievements = achievements.filter(
  (item) => item.featured,
);

export const availabilityLabel = `${profile.availability.status} · ${profile.availability.period}`;
