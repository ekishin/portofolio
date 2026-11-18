/** Auto-generated from web_porto / PRD-project-detail. Do not hand-edit project copy here — re-run scripts/build-projects-data.mjs */
export const projects = [
  {
    "slug": "famspay",
    "title": "FamsPay",
    "date": "June 2026",
    "summary": "FamsPay is a cross-platform (Web and Android) family financial management application designed around a \"single family group without a shared wallet\" concept. Each family member maintains a private virtual wallet and personal savings goals, while the family administrator manages monthly spending limits and monitors aggregated financial analytics. Developed as a combined Project-Based Learning (PJBL) initiative across Web Programming, Mobile Programming, and Cloud Computing.",
    "role": "Backend Developer",
    "featured": true,
    "featuredOrder": 3,
    "hasDetailPage": true,
    "order": 1,
    "categories": [
      "website",
      "mobile",
      "campus project"
    ],
    "problem": "Many existing family finance applications either overlook individual financial privacy among family members or force a rigid shared-wallet system that does not fit real-world household dynamics.",
    "solution": [
      "Provide household spending transparency without sacrificing the personal financial privacy of individual members.",
      "Support seamless transaction logging, monthly spending limit enforcement, and private savings goals across both web and mobile platforms."
    ],
    "keyFeatures": [
      "Authentication: Login, registration, Google OAuth, and password recovery via email.",
      "Family Group Management: Create a group with a unique join code or join an existing one, with one user limited to a single family group.",
      "Admin & Member RBAC: Members see only personal transactions, while Admins access the aggregated family dashboard.",
      "Monthly Spending Limit: Visual progress bars with quick limit adjustments for Admins.",
      "Personal Wallet & Transactions: Nominal validation and low-balance or low-limit warning alerts.",
      "Private Savings Goals: Confidential targets logged as outgoing Savings transactions.",
      "Personal & Family Dashboards: Real-time Money Flow, budget allocation, and recent transactions."
    ],
    "techStack": [
      "Requirement System",
      "PHP",
      "Laravel",
      "CSS (Tailwind)",
      "MongoDB"
    ],
    "designSystemImage": "/images/famspay-design-system.png",
    "architectureImage": "/images/famspay-architecture.png",
    "flowImage": "/images/famspay-flow.png",
    "mockups": [
      "/images/famspay-mockup.png",
      "/images/famspay-preview.png",
      "/images/famspay-project.png"
    ],
    "results": "TODO",
    "demoUrl": "TODO",
    "repoUrl": "TODO"
  },
  {
    "slug": "roadasafe",
    "title": "RoadSafe",
    "date": "November 2026",
    "summary": "RoadSafe is an intelligent road damage reporting and assessment platform. Citizens, volunteers, and drivers report potholes through two distinct modes: a hands-free real-time HUD camera that captures frames automatically, or manual photo uploads. A YOLO11-seg model detects potholes along with their polygon masks, enabling the system to compute an objective Urgency Score (0–100) classified into Low, Medium, or High priority. All reports are spatially mapped using PostgreSQL + PostGIS so municipal officers (Dishub / Dinas PU) can verify reports, navigate to locations, and update repair statuses.",
    "role": "Machine Learning Engineer",
    "featured": true,
    "featuredOrder": 2,
    "hasDetailPage": true,
    "order": 2,
    "categories": [
      "website",
      "mobile",
      "campus project"
    ],
    "problem": "Manual pothole reporting makes it difficult for municipal agencies to determine exact coordinates, severity levels, and repair priorities. Duplicate reports on the same pothole frequently pile up without standardized visual evidence. Furthermore, recording long raw videos consumes excessive mobile data and storage, forcing officers to manually scrub through footage just to locate a single pothole.",
    "solution": [
      "Automatically detect and segment road potholes via smartphone cameras (hands-free) or citizen photo uploads.",
      "Calculate measurable, auditable urgency scores and categories based on four spatial-visual parameters: Area (L), Depth/Shape proxy (K), Lane Position (P), and Road Class (T).",
      "Equip municipal officers with an integrated GIS map, blurred privacy-compliant evidence photos, route navigation, and end-to-end repair status tracking.",
      "Maintain storage efficiency by storing only compressed evidence images (JPG/WEBP, max 400 KB) rather than raw video streams, while achieving model targets of mAP@0.5 ≥ 0.70, recall ≥ 0.75, and precision ≥ 0.80."
    ],
    "keyFeatures": [
      "Mode 1 (HUD Camera): Hands-free 4–5 FPS streaming with live GPS and mask overlays.",
      "Mode 2 (Upload): EXIF/GPS location with draggable map pin and L/K/P/T score preview.",
      "Smart Auto-Capture: Best-frame capture plus PostGIS deduplication within 10–15 m.",
      "Urgency Scoring: Final Score = 0.35L + 0.25K + 0.20P + 0.20T, with High safety override.",
      "Officer Dashboard: Verification queue, OSM map, CSV export, and repair status tracking."
    ],
    "techStack": [
      "Requirement System",
      "Python",
      "React",
      "Flutter",
      "YOLO11-seg",
      "OpenCV",
      "PostGIS",
      "Leaflet.js",
      "OpenStreetMap"
    ],
    "designSystemImage": "/images/roadasafe-design-system.png",
    "architectureImage": "/images/roadasafe-architecture.png",
    "flowImage": "/images/roadasafe-flow.png",
    "mockups": [
      "/images/roadasafe-mockup.png",
      "/images/roadasafe-preview.png",
      "/images/roadasafe-project.png"
    ],
    "results": "TODO",
    "demoUrl": "TODO",
    "repoUrl": "TODO"
  },
  {
    "slug": "technoplay",
    "title": "TechnoPlay",
    "date": "May 2026",
    "summary": "TechnoPlay is a mobile Augmented Reality (AR) learning application developed for the Virtual Technology coursework. Executed by a 3-person team over a disciplined 4-week timeline, the project delivers a stable, pedagogically clear marker-based AR application featuring three interactive learning challenges. The application's educational framework and interactive design successfully secured an official Intellectual Property Right (HAKI).",
    "role": "Unity Engine Programmer",
    "featured": true,
    "featuredOrder": 1,
    "hasDetailPage": true,
    "order": 3,
    "categories": [
      "game",
      "mobile",
      "campus project"
    ],
    "problem": "Fundamental multimedia concepts such as storyboarding, visual depth composition, and animation frame rates are abstract and difficult for students to grasp solely through static 2D textbook descriptions.",
    "solution": [
      "Deliver three interactive AR-based learning modules triggered by scanning physical book markers through a smartphone camera to render 3D objects in real time.",
      "Maintain a realistic, high-stability project scope within a strict 4-week schedule by enforcing a feature freeze after Week 2 and dedicating Weeks 3–4 to integration, testing, polish, and bug fixing."
    ],
    "keyFeatures": [
      "Challenge 1 (Storyboard): Arrange scene sequences by scanning AR markers in chronological order.",
      "Challenge 2 (Material Design): Explore depth by isolating Background, Middle Ground, and Foreground layers.",
      "Challenge 3 (Animation Basics): Compare the same 3D animation at 24, 30, and 60 FPS.",
      "Guided AR Overlay & Fallbacks: Splash, menu, hints, detection feedback, tracking fallbacks, and challenge summaries."
    ],
    "techStack": [
      "Requirement System",
      "User Flow",
      "Low-Fidelity Wireframes",
      "High-Fidelity Mockups",
      "3D Object",
      "C#"
    ],
    "designSystemImage": "/images/technoplay-design-system.png",
    "architectureImage": "/images/technoplay-architecture.png",
    "flowImage": "/images/technoplay-flow.png",
    "mockups": [
      "/images/technoplay-mockup.png",
      "/images/technoplay-preview.png",
      "/images/technoplay-project.png"
    ],
    "results": "TODO",
    "demoUrl": "https://drive.google.com/file/d/1XKyHhQLOGmlaBgUVuhtRawHjiEbDZCuJ/view",
    "repoUrl": "TODO"
  },
  {
    "slug": "boysan",
    "title": "Boysan Multimedia",
    "date": "November 2025",
    "summary": "Boysan Multimedia is an event organizer, multimedia, and entertainment company operating under the tagline \"Weaving Moments, Creating Memories.\" This web platform serves as an official public company profile while providing an internal Content Management System (CMS). The system supports three distinct actors: Visitors, Clients, and Admins, alongside external WhatsApp integration.",
    "role": "System Analyst",
    "featured": false,
    "featuredOrder": null,
    "hasDetailPage": true,
    "order": 4,
    "categories": [
      "website",
      "campus project",
      "real client"
    ],
    "problem": "Event management companies require an official online storefront so prospective clients can explore company credentials, service packages, and past portfolios before booking or consulting. Internally, non-technical staff need a self-service CMS to update website content without developer intervention, as well as a centralized database to log incoming service orders and moderate client testimonials.",
    "solution": [
      "Showcase company profile, services, portfolio, news, testimonials, FAQs, media partners, and contact channels within a single unified website.",
      "Streamline service bookings by saving client order details directly into the database prior to redirecting the conversation to the company's WhatsApp.",
      "Collect structured client feedback that undergoes administrative moderation before public display.",
      "Empower non-technical administrators with an intuitive dashboard and CMS to manage all website sections and booking records."
    ],
    "keyFeatures": [
      "Public Showcase Pages: Home, About, Services, and Portfolio without login.",
      "Fail-Safe Booking: Save order data to the database before WhatsApp redirect.",
      "Floating WhatsApp: Persistent chat button for quick consultation across pages.",
      "Moderated Feedback: Client reviews enter an admin approval queue before going public.",
      "Admin Dashboard & CMS: KPI overview plus CRUD for all website sections and bookings."
    ],
    "techStack": [
      "Requirement System",
      "SRS",
      "DPPL",
      "PHP",
      "Laravel",
      "HTML",
      "CSS (Blade)",
      "PostgreSQL"
    ],
    "designSystemImage": "/images/boysan-design-system.png",
    "architectureImage": "/images/boysan-architecture.png",
    "flowImage": "/images/boysan-flow.png",
    "mockups": [
      "/images/boysan-mockup.png",
      "/images/boysan-preview.png",
      "/images/boysan-project.png"
    ],
    "results": "TODO",
    "demoUrl": "https://boysanmultimedia.com/",
    "repoUrl": "TODO"
  },
  {
    "slug": "unravel",
    "title": "Unravel",
    "date": "July 2026",
    "summary": "Unravel is a web-based educational platform built to sharpen university students' problem-solving capabilities through interactive case studies. Complex cases are broken down into four structured analytical pillars, Objective, Stakeholder, Problem, and Solution guided by Web-Based Question Prompts and Question Chains. The project was developed for Pekan IT 2026, National IT Competition (NIC) in the Software Development (SoftDev) category.",
    "role": "UI/UX Designer",
    "featured": false,
    "featuredOrder": null,
    "hasDetailPage": true,
    "order": 5,
    "categories": [
      "website",
      "competition project"
    ],
    "problem": "Novice university students frequently experience high cognitive load and transformation errors when confronting complex, ill-structured problems. Meanwhile, conventional e-learning platforms remain uniform and lack adaptive, step-by-step cognitive scaffolding.",
    "solution": [
      "Build a functional web-based e-scaffolding platform that serves as an interactive cognitive aid.",
      "Design an engaging UI/UX centered around Question Prompts and Question Chains.",
      "Implement a structured 4-pillar input breakdown (Objective, Stakeholder, Problem, Solution) to deconstruct complex scenarios.",
      "Evaluate the platform's effectiveness in reducing student transformation errors."
    ],
    "keyFeatures": [
      "Learning Mode (Mode Belajar): Interactive Logic Canvas with drag-and-drop answer blocks across the four analytical pillars, automated answer validation, progressive level unlocking, points, ranks, daily streaks, and a competitive leaderboard.",
      "Discussion Mode (Mode Diskusi): Create and explore real-world case studies (with search, topic filters, latest, and popular sorting), fill out structured analysis worksheets, publish posts as Public or Private, and interact via upvotes, downvotes, replies, and bookmarks.",
      "Automated Identity Control: Seamless switching between Public and Anonymous user identities applied automatically to discussion responses.",
      "Custom Lottie Landing Page & Onboarding: Interactive landing page showcasing both learning modes, testimonials, FAQs, custom team-crafted Lottie animations, and dedicated onboarding flows."
    ],
    "techStack": [
      "Requirement System",
      "User Flow",
      "Low-Fidelity Wireframes",
      "High-Fidelity Mockups",
      "Next.js",
      "Golang",
      "PostgreSQL"
    ],
    "designSystemImage": "/images/unravel-design-system.png",
    "architectureImage": "/images/unravel-architecture.png",
    "flowImage": "/images/unravel-flow.png",
    "mockups": [
      "/images/unravel-mockup.png",
      "/images/unravel-preview.png",
      "/images/unravel-project.png"
    ],
    "results": "TODO",
    "demoUrl": "https://unravel-prod.vercel.app/",
    "repoUrl": "TODO"
  },
  {
    "slug": "simdik",
    "title": "SIMDIK",
    "date": "June 2026",
    "summary": "SIMDIK is a web-based management information system built to digitize educator data administration at Yayasan Ihsan Tauhid Bogor (Ciawi). Executed in collaboration with a real-world institutional partner, the project was comprehensively documented in a 90-page system analysis and implementation report for the Information Systems coursework.",
    "role": "System Analyst",
    "featured": false,
    "featuredOrder": null,
    "hasDetailPage": true,
    "order": 6,
    "categories": [
      "website",
      "campus project",
      "real client"
    ],
    "problem": "Based on field interviews and observations conducted on February 16, 2026, data collection across eight national academic accreditation standards was still performed manually: educators submitted physical documents (diplomas, CVs, decrees, certificates), administrative staff (Tata Usaha) validated and photocopied them, and physical bundles were sent to the head office to be retyped. This caused high risks of document loss or damage, difficult educational history tracking, slow verification turnarounds, and zero visibility for educators regarding their document status.",
    "solution": [
      "Centralize educator identity and educational history records within a single unified web platform.",
      "Replace physical document handovers with digital file uploads.",
      "Accelerate administrative verification workflows with real-time status tracking and automated notifications for incomplete files.",
      "Provide one-click profile and accreditation report exports in both PDF and Excel formats."
    ],
    "keyFeatures": [
      "Role-Based Authentication: Dedicated login portals for Educators (Pendidik) and Administrative Staff (Admin/TU).",
      "Validated Identity & Academic History: Structured forms for educator credentials and academic backgrounds.",
      "Digital Upload & Online TU Verification: Educators upload certificates and decrees while TU staff audit submissions and issue revisions or approvals.",
      "Automated Notifications & Status Tracking: Real-time alerts for incomplete documents or updated verification statuses.",
      "Master Data & Reporting: CRUD, search, and filtering for educator master data, plus a statistical dashboard and PDF/Excel export."
    ],
    "techStack": [
      "Requirement System",
      "SRS",
      "DPPL",
      "PHP",
      "Laravel",
      "React.js",
      "MySQL"
    ],
    "designSystemImage": "/images/simdik-design-system.png",
    "architectureImage": "/images/simdik-architecture.png",
    "flowImage": "/images/simdik-flow.png",
    "mockups": [
      "/images/simdik-mockup.png",
      "/images/simdik-preview.png",
      "/images/simdik-project.png"
    ],
    "results": "TODO",
    "demoUrl": "https://simdik-delta.vercel.app/",
    "repoUrl": "TODO"
  },
  {
    "slug": "furai",
    "title": "Furai",
    "date": "November 2026",
    "summary": "Furai is a real-time sitting posture reminder web application designed for students, carrying the playful bilingual tagline: \"A study buddy that catches you curling up like fried shrimp, right in your browser\" and \"Your slouch is showing\". Aligned with SDG 3 (Good Health and Well-Being) and SDG 4 (Quality Education), all webcam processing executes 100% locally on the user's device. Users can access full core functionality in Guest Mode (without an account) or log in to sync session summaries across devices.",
    "role": "Backend Developer",
    "featured": false,
    "featuredOrder": null,
    "hasDetailPage": true,
    "order": 7,
    "categories": [
      "website",
      "competition project"
    ],
    "problem": "Students spend hours studying in front of laptops with their heads leaning forward (tech-neck) without realizing it. Existing posture tools are either paid, heavy on low-spec laptops, or compromise user privacy by streaming webcam video to external servers.",
    "solution": [
      "Detect slouching posture in real time via webcam using in-browser MediaPipe Pose landmarks and calibration rules adapted from Google AI Edge.",
      "Transform posture alerts into healthy study habits through structured Pomodoro study sessions, guided stretch breaks, posture history analytics, and light gamification.",
      "Ensure inclusive accessibility: lightweight execution on low-spec laptops, zero cost, full guest-mode support, and strict privacy where no video, image, or body coordinate ever leaves the browser."
    ],
    "keyFeatures": [
      "Local Camera: Explicit privacy notice before camera activation, with skeletal landmarks extracted entirely in browser memory and zero network image requests.",
      "5-Second Baseline Calibration: Captures an upright sitting baseline, then classifies Slouching when ear-to-shoulder distance drops below 93% or shoulder width exceeds 108% across a 10-frame voting window (leaving the frame pauses the timer).",
      "Supportive Posture Alerts: Non-judgmental visual banner and gentle toggleable audio chime if slouching lasts more than 3 seconds.",
      "Pomodoro Timer & Guided Stretch Breaks: Default 25-minute focus / 5-minute break timer with illustrated countdowns for at least 3 guided stretches.",
      "Posture Analytics: End-of-session health scores, slouch count, interval charts, local storage, and optional summary syncing to a FastAPI backend."
    ],
    "techStack": [
      "Requirement System",
      "MediaPipe Pose",
      "Chart.js",
      "Next.js",
      "React",
      "Python (FastAPI)",
      "SQLite"
    ],
    "designSystemImage": "/images/furai-design-system.png",
    "architectureImage": "/images/furai-architecture.png",
    "flowImage": "/images/furai-flow.png",
    "mockups": [
      "/images/furai-mockup.png",
      "/images/furai-preview.png",
      "/images/furai-project.png"
    ],
    "results": "TODO",
    "demoUrl": "https://furai-green.vercel.app/",
    "repoUrl": "TODO"
  },
  {
    "slug": "green-portfolio-risk",
    "title": "Green Portfolio Risk",
    "date": "October 2026",
    "summary": "Green Portfolio Risk & Climate Disclosure is an interactive analytical dashboard built in Microsoft Excel for the Smart Data Analytics Competition (SDAC) 2026 in the Sustainability Accounting category. The dashboard bridges national forest and land fire (karhutla) burn areas, estimated economic damages, and quarterly stock returns of 17 sample issuers on the Indonesia Stock Exchange (IDX), complete with an interactive simulator for calculating the Green Portfolio Risk Score.",
    "role": "Data Analyst",
    "featured": false,
    "featuredOrder": null,
    "hasDetailPage": true,
    "order": 8,
    "categories": [
      "competition project"
    ],
    "problem": "Climate risks and forest fire disasters are rarely translated directly into quantifiable environmental liability exposures within corporate equity valuations. Investors and policymakers need an analytical tool to measure how severely each market sector is exposed and how targeted fire-reduction policies can lower environmental costs and portfolio risk scores.",
    "solution": [
      "Present a national executive summary of forest fire impacts (KPIs, multi-year trends, 38-province intensity tile map, and top affected provinces).",
      "Quantify sectoral environmental exposure by calculating the Environmental Liability Ratio (ELR) against market capitalization and stock returns.",
      "Provide an interactive scenario calculator simulating fire reduction targets (10%–50%), specific sectors, and climate conditions (Normal vs. El Niño) on portfolio risk recovery."
    ],
    "keyFeatures": [
      "Executive Summary: Year and province filters with national KPIs, a 38-province tile map, and top-province rankings.",
      "Financial Risk Analysis: ELR vs. stock return scatter, sectoral heatmaps, and issuer risk classifications.",
      "Risk Score Calculator: Simulate 10%–50% fire reductions under Normal vs. El Niño scenarios with a 0–100 risk gauge."
    ],
    "techStack": [
      "Requirement Analysis",
      "Data_Master",
      "Data_Markets",
      "Calc_Engine"
    ],
    "designSystemImage": "/images/green-dashboard-design-system.png",
    "architectureImage": "/images/green-dashboard-architecture.png",
    "flowImage": "/images/green-dashboard-flow.png",
    "mockups": [
      "/images/green-dashboard-mockup.png",
      "/images/green-dashboard-preview.png",
      "/images/green-dashboard-project.png"
    ],
    "results": "TODO",
    "demoUrl": "https://docs.google.com/spreadsheets/d/1E41UZ2qYpqTSORH3UF8GsqPN7X4qac0l/edit?usp=sharing&ouid=107096767134565903478&rtpof=true&sd=true",
    "repoUrl": "TODO"
  },
  {
    "slug": "heal",
    "title": "HEAL",
    "date": "December 2025",
    "summary": "HEAL (Holistic Ecosystem for AI-Driven Living) is a mobile application prototype created for the FSTIVAL 1.0 UI/UX Competition under the theme \"Beyond Design: Innovate. Impact. Inspire\". In this concept, AI functions as a Cognitive Food Analyst that detects nutritional content directly from food photographs, while blockchain technology secures tamper-proof Proof-of-Progress records and consistency rewards.",
    "role": "UI/UX Designer",
    "featured": false,
    "featuredOrder": null,
    "hasDetailPage": true,
    "order": 9,
    "categories": [
      "competition project"
    ],
    "problem": "The 2023 Indonesian Health Survey (SKI) recorded central obesity in adults approaching 36.8%, with 16.2% of adolescents aged 13–15 experiencing overweight or obesity. Furthermore, a May 2023 Jakpat survey revealed that 63% of respondents fail their diets due to difficulty resisting favorite foods, 54% due to hunger, and 22% due to lacking a reliable support system.",
    "solution": [
      "Develop a localized digital health solution to combat obesity across age groups (adolescents 13–21, productive adults 22–55, and seniors 55+).",
      "Craft an inclusive, human-centered interface including senior-friendly accessibility.",
      "Drive long-term healthy habit consistency through transparent blockchain Proof-of-Progress tracking and automated photo-based nutrition logging."
    ],
    "keyFeatures": [
      "Adaptive Onboarding: UI and calorie targets tailored to goals, weight, and activity frequency.",
      "AI Food Scanning: Photo-based calories, macros, and nutrition guidance without manual typing.",
      "Blockchain Proof-of-Progress: Tamper-proof milestone logging with real-time completion tracking.",
      "Consistency Rewards: Redeemable stars or points for streaks and goal milestones.",
      "Nutrition Education: Daily summaries and personalized lifestyle recommendations."
    ],
    "techStack": [
      "Requirement System",
      "User Flow",
      "Low-Fidelity Wireframes",
      "High-Fidelity Mockups",
      "Interactive Prototype"
    ],
    "designSystemImage": "/images/heal-design-system.png",
    "architectureImage": "/images/heal-architecture.png",
    "flowImage": "/images/heal-flow.png",
    "mockups": [
      "/images/heal-mockup.png",
      "/images/heal-preview.png",
      "/images/heal-project.png"
    ],
    "results": "TODO",
    "demoUrl": "https://www.figma.com/proto/083INmHuGULxqOXaF6RzQG/LOMBA-UI-UX-FSTIVAL-1.0?node-id=924-23382&p=f&t=BN8RopIGCbm5any9-1&scaling=scale-down&content-scaling=fixed&page-id=873%3A29893&starting-point-node-id=873%3A30263&show-proto-sidebar=1",
    "repoUrl": "TODO"
  },
  {
    "slug": "jagasenja",
    "title": "JagaSenja",
    "date": "September 2025",
    "summary": "JagaSenja is an elderly health reminder application designed around the theme \"Health for All\". The platform bridges two distinct user groups: Guardians (family members or caregivers) who configure health schedules remotely, and Seniors (Lansia) who interact with an ultra-simplified, high-accessibility interface.",
    "role": "UI/UX Designer & Mobile Dev",
    "featured": true,
    "featuredOrder": 4,
    "hasDetailPage": true,
    "order": 10,
    "categories": [
      "mobile",
      "competition project"
    ],
    "problem": "Many elderly individuals live alone and struggle to access timely healthcare, especially during sudden medical emergencies. Meanwhile, family caregivers living far away often remain unaware when a senior falls ill or misses critical medication due to technological barriers and fragmented emergency services.",
    "solution": [
      "Safeguard elderly health while providing peace of mind for remote family members.",
      "Monitor essential daily activities (medication intake, light exercise, and hospital checkups) in real time.",
      "Deliver equitable, inclusive, and adaptive healthcare access for vulnerable groups (seniors, people with disabilities, economically disadvantaged families, and low-connectivity rural areas)."
    ],
    "keyFeatures": [
      "Guardian Management Interface: Remotely configure medication, exercise, and hospital checkup schedules with dosage, doctor, location, and pill photo details.",
      "Zero-Registration Senior Interface: Oversized typography, high contrast, clear icons, linear navigation, and OTP login generated by the Guardian.",
      "Video Proof of Medication & Exercise: Seniors tap \"Sudah Minum\" and record a short video as visual verification for their Guardian.",
      "Live Checkup Route Tracking: Tracks travel from departure to hospital arrival and alerts the Guardian on delays.",
      "Automated Emergency Escalation: Alerts the Guardian after more than 2 missed reminders in a day, with one-tap call or medical hotline options."
    ],
    "techStack": [
      "Requirement System",
      "User Flow",
      "Low-Fidelity Wireframes",
      "High-Fidelity Mockups",
      "Next.js",
      "CSS (Tailwind)",
      "Supabase"
    ],
    "designSystemImage": "/images/jaga-senja-design-system.png",
    "architectureImage": "/images/jaga-senja-architecture.png",
    "flowImage": "/images/jaga-senja-flow.png",
    "mockups": [
      "/images/jaga-senja-mockup.png",
      "/images/jaga-senja-preview.png",
      "/images/jaga-senja-project.png"
    ],
    "results": "TODO",
    "demoUrl": "https://www.figma.com/proto/PACGthQTo4RZ5NVmywXmz9/LANSIA?node-id=119-143&p=f&t=jSoeLYlKbN4iFRax-1&scaling=min-zoom&content-scaling=fixed&page-id=22%3A2&starting-point-node-id=1069%3A2159&show-proto-sidebar=1",
    "repoUrl": "TODO"
  },
  {
    "slug": "oasis",
    "title": "Oasis",
    "date": "October 2025",
    "summary": "Oasis is a mobile application design that empowers smokers to quit while cultivating awareness of the environmental footprint of tobacco consumption. Built on an educational, empathetic, and sustainable UI/UX approach, the project is anchored in SDG 12, visualizing avoided cigarette waste, carbon footprint reduction, and financial savings.",
    "role": "UI/UX Designer",
    "featured": false,
    "featuredOrder": null,
    "hasDetailPage": true,
    "order": 11,
    "categories": [
      "competition project"
    ],
    "problem": "Indonesia ranks third globally in total smokers (approximately 70 million active smokers), with 34.5% of adults using tobacco (GATS 2021) and youth smoking (ages 10–18) reaching 7.4%. Beyond severe health impacts, tobacco production and cigarette butt litter drive deforestation, soil degradation, greenhouse gas emissions, and microplastic pollution.",
    "solution": [
      "Design a mobile UI that tangibly visualizes positive ecological impacts such as reduced cigarette butt waste and avoided carbon emissions.",
      "Craft an empathetic, interactive, community-driven UX that encourages sustainable behavioral change without guilt-tripping users.",
      "Integrate sustainability narratives across visual elements, milestone badges, and craving support tools."
    ],
    "keyFeatures": [
      "Smoke-Free Streak & Progress: Duration, challenges, and stats with an evolving Earth visual.",
      "Daily & Weekly Challenges: Behavioral targets rewarded with achievement badges.",
      "Impact Profile: Cigarettes avoided, money saved, and environmental recovery metrics.",
      "Craving Support & Community: Motivational prompts, distractions, and peer forums."
    ],
    "techStack": [
      "Requirement System",
      "User Flow",
      "Low-Fidelity Wireframes",
      "High-Fidelity Mockups",
      "Interactive Prototype"
    ],
    "designSystemImage": "/images/oasis-design-system.png",
    "architectureImage": "/images/oasis-architecture.png",
    "flowImage": "/images/oasis-flow.png",
    "mockups": [
      "/images/oasis-mockup.png",
      "/images/oasis-preview.png",
      "/images/oasis-project.png"
    ],
    "results": "TODO",
    "demoUrl": "https://www.figma.com/proto/psyfcAv6IwlPSlmduCAbly/Oasis?node-id=320-1498&p=f&t=cQf5nVVDo4Amthu1-1&scaling=min-zoom&content-scaling=fixed&page-id=320%3A717&starting-point-node-id=722%3A1147",
    "repoUrl": "TODO"
  },
  {
    "slug": "rintik",
    "title": "RINTIK",
    "date": "September 2026",
    "summary": "RINTIK (Ruang Informasi Titik Industri Kreatif) is a Web GIS for Kota Bogor MSMEs with two paths: public UMKM exploration and business-location research. The standout capability is spatial analysis—buffer, spatial query, and proximity—so owners can study candidate sites, not only browse a distribution map. No login or admin role is required; visitor vs. UMKM owner is defined by which feature path they choose. Results are decision-support information, not a guarantee of business success. Live site: https://webgis-rintik-kel8.vercel.app/",
    "role": "GIS Developer",
    "featured": false,
    "featuredOrder": null,
    "hasDetailPage": true,
    "order": 12,
    "categories": [
      "website",
      "campus project"
    ],
    "problem": "UMKM across Kota Bogor are easier to understand by location than by lists or tables. Visitors need a practical way to find businesses by place, category, and proximity. UMKM owners need early spatial context around a candidate site—similar businesses and supporting objects such as roads and schools—before committing. The team also needed one shared product definition so Data Analyst, GIS Developer, Backend, UI/Frontend, QA, and Project Manager were not working from different interpretations.",
    "solution": [
      "Ship an interactive Web GIS that answers where UMKM are and how users find a fit, plus what sits around a candidate business location.",
      "Offer two clear paths without accounts: Explore Local UMKM for visitors, and Business Location Research for UMKM owners using buffer → spatial query → proximity.",
      "Present analysis on the map with an explainable summary (counts, distances, parameters), and treat missing data as unavailable—never as zero or a suitability claim."
    ],
    "keyFeatures": [
      "Landing page: UMKM photo carousel, dual CTAs for Explore vs. Location Research, dataset stats (2,993 UMKM across 6 kecamatan), and a 3-step location-research guide.",
      "Explore Local UMKM: distribution map with markers/layers/stats, unified search and filters (name, category, kecamatan, kelurahan, radius), UMKM detail, nearby recommendations by distance, and routing guidance.",
      "Business Location Research: pick one of five categories (Kuliner, Jasa, Teknologi, Kerajinan, Fashion), set a candidate point, set buffer radius, then run buffer, same-category UMKM query, and proximity to supporting objects.",
      "Spatial pipeline: candidate point → radius → buffer (PostGIS) → spatial query → proximity → map + summary; users can change point or radius and recalculate.",
      "Clear empty/error states: unavailable attributes and failed routing stay secondary and never break the main map."
    ],
    "techStack": [
      "Requirement System",
      "PHP",
      "Laravel",
      "PostgreSQL",
      "PostGIS",
      "Leaflet",
      "QGIS",
      "OpenStreetMap",
      "GeoJSON",
      "REST API"
    ],
    "designSystemImage": "/images/rintik-design-system.png",
    "architectureImage": "/images/placeholder.svg",
    "flowImage": "/images/rintik-flow.png",
    "mockups": [
      "/images/rintik-mockup.jpg"
    ],
    "results": "TODO",
    "demoUrl": "https://webgis-rintik-kel8.vercel.app/",
    "repoUrl": "TODO"
  }
];
