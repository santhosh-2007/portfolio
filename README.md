# Santhosh S – Premium 3D Full Stack Developer Portfolio

A production-quality, responsive personal portfolio website built for **Santhosh S**, Full Stack Developer. Engineered with high-performance 3D graphics (Three.js & React Three Fiber), smooth physics-based animations (Framer Motion), and a futuristic dark cyber-aesthetic with electric purple and neon blue accents.

---

## 🌟 Key Features

- **Futuristic 3D Hero Scene**: Custom WebGL canvas featuring a multi-layered rotating cyber-core with orbiting rings, floating geometric meshes, an interactive particle starfield, and graceful mouse tilt.
- **Resilient Fallback Mode**: Automatic detection for non-WebGL environments or users with `prefers-reduced-motion`, falling back to an elegant CSS holographic avatar without breaking layout or performance.
- **Glassmorphism UI**: Built with custom Tailwind CSS utilities, soft neon glows, backdrop blur filters, and micro-interactions.
- **Interactive Technology Dashboard**: Curated strictly to confirmed technical stack: **Java, HTML, CSS, React, Tailwind CSS, Node, PostgreSQL, Git, and GitHub** with verified proficiency levels.
- **Interactive 3D Tilt Project Cards**: 5 comprehensive projects with 3D tilt responsiveness, technology badges, contribution breakdowns, and full-detail modals.
- **Career & Education Timeline**: Modern vertical timeline depicting B.E. Computer Science foundations (Batch 2024–2028, Pre-Final Year) and student developer activities at Rathinam Technical Campus.
- **Interactive Resume & Certifications**: Modal previews for verified credentials and direct download link for `resume.pdf`.
- **Functional Contact Engine**: Form with client-side validation, spam prevention (honeypot trap), confetti celebration trigger, and direct transmission to `santhosh2007sm@gmail.com`.
- **SEO & Accessibility Ready**: Open Graph meta tags, semantic HTML landmarks, responsive typography, sitemap, and robots.txt.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Frontend Framework** | React.js 18 with Vite 6 |
| **Styling & Design** | Tailwind CSS 3, Custom Glassmorphism, CSS Grids |
| **3D Graphics** | Three.js, React Three Fiber (`@react-three/fiber`), Drei (`@react-three/drei`) |
| **Animations** | Framer Motion |
| **Icons & Visuals** | Lucide React, Canvas Confetti |
| **Contact Form** | EmailJS (`@emailjs/browser`) |
| **Version Control & Deploy** | Git, GitHub, Vercel |

---

## 📂 Project Architecture

```
santhosh-portfolio/
├── public/
│   ├── certificates/        # Certificate documents (PDF/images)
│   ├── favicon.svg          # Futuristic SVG monogram favicon
│   ├── resume.pdf           # Downloadable PDF resume
│   ├── robots.txt           # Search crawler directives
│   └── sitemap.xml          # XML sitemap for SEO
├── src/
│   ├── components/
│   │   ├── Button.jsx           # Reusable polymorphic button
│   │   ├── CertificateModal.jsx # Certificate inspection modal
│   │   ├── Footer.jsx           # Global footer with copyright & links
│   │   ├── LoadingScreen.jsx    # Futuristic initial loading screen
│   │   ├── Navbar.jsx           # Sticky glassmorphism nav with active tracker
│   │   ├── ProjectCard.jsx      # 3D tilt interactive card
│   │   ├── ProjectModal.jsx     # Deep-dive project specifications modal
│   │   ├── SectionTitle.jsx     # Section header with neon accents
│   │   └── SkillCard.jsx        # Technology card with level badge
│   ├── data/
│   │   ├── achievements.js   # Expo showcase, hardware innovation & honors
│   │   ├── certifications.js # Full Stack CSC, Typewriting distinction
│   │   ├── education.js      # B.E. CSE, Rathinam Technical Campus
│   │   ├── experience.js     # Frontend Developer & Designer (2024–Present)
│   │   ├── personal.js       # Bio, roles, social links & contact
│   │   ├── projects.js       # 5 core projects with architecture & details
│   │   └── skills.js         # Verified tech inventory by category
│   ├── sections/
│   │   ├── Hero.jsx             # 3D interactive hero with typing effect
│   │   ├── About.jsx            # Professional intro & philosophy cards
│   │   ├── Skills.jsx           # Interactive technology skill dashboard
│   │   ├── Projects.jsx         # Featured projects showcase
│   │   ├── Experience.jsx       # Student development timeline
│   │   ├── Education.jsx        # B.E. CSE academic degree card
│   │   ├── Certifications.jsx   # Accredited certificates grid
│   │   ├── Achievements.jsx     # Project expo & robotics showcase
│   │   ├── Resume.jsx           # Resume preview & download
│   │   └── Contact.jsx          # Validated contact form & direct info
│   ├── three/
│   │   ├── CyberCore.jsx        # Dual-layer rotating core & orbital rings
│   │   ├── FallbackHero3D.jsx   # Non-WebGL holographic CSS fallback
│   │   ├── FloatingObjects.jsx  # Floating 3D geometric polyhedra
│   │   ├── HeroScene.jsx        # R3F Canvas with camera & error boundary
│   │   └── ParticleField.jsx    # 3D additive particle starfield
│   ├── utils/
│   │   └── iconMap.js           # Tree-shaken icon mapper
│   ├── App.jsx                  # Main application composition
│   ├── index.css                # Tailwind directives & glass utilities
│   └── main.jsx                 # React root entry
├── .env.example
├── .gitignore
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

---

## 🚀 Local Development Setup

### 1. Prerequisites
Ensure you have **Node.js** (v18 or higher) and **npm** installed:
```bash
node -v
npm -v
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000`.

### 4. Create Production Build
```bash
npm run build
```
The optimized static build is emitted into the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## ✉️ EmailJS Contact Form Setup

The contact form is pre-configured to work in demo simulation mode out of the box, and directly transmits real emails when configured with free EmailJS credentials:

1. Create a free account at [emailjs.com](https://www.emailjs.com/).
2. Create an **Email Service** (e.g. connected to your Gmail).
3. Create an **Email Template** with variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{subject}}`
   - `{{message}}`
   - `{{to_name}}`
4. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
5. Fill in your keys:
   ```env
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=user_xxxxxxxxxxxx
   ```
6. Restart your dev server: `npm run dev`.

---

## 🌐 GitHub Upload Instructions

Run the following commands in your terminal to publish to GitHub:

```bash
# 1. Check git status
git status

# 2. Rename branch to main
git branch -M main

# 3. Create a new repository on GitHub (e.g., "santhosh-developer-portfolio")
# Then link your remote repository:
git remote add origin https://github.com/<your-username>/santhosh-developer-portfolio.git

# 4. Push your commits
git push -u origin main
```

---

## ⚡ Vercel Deployment Instructions

### Method A: Deploy via Vercel Web Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New..."** → **"Project"**.
3. Import your GitHub repository: `santhosh-developer-portfolio`.
4. Configure Build Settings (auto-detected):
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. (Optional) In the **Environment Variables** section, add your `VITE_EMAILJS_...` keys.
6. Click **Deploy**. Your site will be live on a global CDN URL (e.g. `https://santhosh-developer-portfolio.vercel.app`) in under 60 seconds!

### Method B: Deploy via Vercel CLI
```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy
vercel
```

---

## ✏️ Customization & Updating Content

All personal content is stored in modular, well-documented JavaScript files inside `src/data/`:

| What to Update | File to Edit |
|---|---|
| Name, Bio, Social links, Email | `src/data/personal.js` |
| Project titles, GitHub links, live demos, descriptions | `src/data/projects.js` |
| Skills, categories, proficiency tags | `src/data/skills.js` |
| Education details, CGPA, graduation batch | `src/data/education.js` |
| Experience roles, responsibilities, team details | `src/data/experience.js` |
| Certifications & diplomas | `src/data/certifications.js` |
| Awards, project expos, hardware projects | `src/data/achievements.js` |
| Physical PDF Resume | Replace `public/resume.pdf` |

---

## 📄 License
Designed and developed for **Santhosh S**. All rights reserved.
