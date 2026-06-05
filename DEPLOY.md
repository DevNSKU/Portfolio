# Deploy MyPortfolio (Nikil S Kumar)

## Local development

```bash
cd ~/Desktop/MyPortfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Replace your resume

1. Export your latest CV from LinkedIn or save your PDF.
2. Replace `public/files/Nikil-S-Kumar-Resume.pdf` (the current file is a template placeholder).
3. Update project screenshots and `data/projectsData.js` with your real work.

## Push to GitHub (`DevNSKU`)

1. Create a new empty repository on GitHub, e.g. `MyPortfolio`.
2. Point this folder at your repo (one time):

```bash
cd ~/Desktop/MyPortfolio
git remote remove origin
git remote add origin https://github.com/DevNSKU/MyPortfolio.git
git add .
git commit -m "Personalize portfolio for Nikil S Kumar"
git push -u origin main
```

## Hosting: Vercel vs Netlify

**Recommendation: use [Vercel](https://vercel.com)** for this project.

| | Vercel | Netlify |
|---|--------|---------|
| Next.js support | Built by the Next.js team; zero-config | Works, but more manual for SSR/API routes |
| Deploy steps | Import GitHub repo → Deploy | Import repo → set build `npm run build`, publish `.next` or use Next plugin |
| Free tier | Generous for personal portfolios | Generous |
| Custom domain | Yes | Yes |

### Deploy on Vercel

1. Sign in at [vercel.com](https://vercel.com) with GitHub (`DevNSKU`).
2. **Add New Project** → select `MyPortfolio`.
3. Framework preset: **Next.js** (auto-detected).
4. Build command: `npm run build` (default).
5. Deploy. Your site will be live at `https://my-portfolio-xxx.vercel.app`.
6. Optional: add a custom domain in Project Settings.

### Deploy on Netlify (alternative)

1. Sign in at [netlify.com](https://netlify.com) and connect GitHub.
2. New site from Git → choose `MyPortfolio`.
3. Build command: `npm run build`
4. Publish directory: `.next` is **not** correct for Next.js on Netlify without the [Next.js runtime plugin](https://docs.netlify.com/frameworks/next-js/overview/). Prefer Vercel unless you already use Netlify.

## Update LinkedIn

After the site is live:

1. LinkedIn → **Me** → **View profile** → **Add profile section** → **Recommended** → **Add link**.
2. Add your portfolio URL (Vercel/Netlify) with label **Portfolio** or **Personal website**.
3. In **About**, mention your stack: Odoo, Laravel, Python, AWS, Docker, CI/CD.
4. Pin or feature your GitHub: [github.com/DevNSKU](https://github.com/DevNSKU).

## Edit profile text in code

All personal details live in `data/profileData.js` and `data/aboutMeData.js`.
