# New Generation HVAC — Website

Static marketing website for **New Generation HVAC**, a family-owned heating,
cooling and refrigeration company based in Methuen, Massachusetts.

🌐 **Live site:** https://newgenhvac.com
📞 **Phone:** 978-876-8558 · ✉️ **Email:** jc@newgenhvac.com

## Tech stack

- Plain **HTML5 + CSS3** (no build step, no framework)
- Hosted on **GitHub Pages** (custom domain via `CNAME`)
- Contact form handled by [FormSubmit](https://formsubmit.co/) (no backend)
- Instagram feed embedded via [Elfsight](https://elfsight.com/)
- Traffic measured with **Google Analytics** (GA4)

## Project structure

```
.
├── index.html        # Home
├── about.html        # About / company values
├── services.html     # Detailed service list
├── gallery.html      # Project gallery
├── contact.html      # Contact form + map
├── thankyou.html     # Post-submit confirmation (noindex)
├── style.css         # Shared styles
├── images/           # Logo, hero background, gallery images
├── robots.txt        # Crawler rules
├── sitemap.xml       # SEO sitemap
├── CNAME             # Custom domain for GitHub Pages
├── ROADMAP.md        # Prioritized, phased improvement plan
└── README.md
```

## Local development

No build tools are required. To preview locally:

```bash
# Python 3
python3 -m http.server 8000
# then open http://localhost:8000
```

Editing any `.html` or `style.css` file and refreshing the browser is the full
development loop.

## Deployment

Pushes to the `main` branch are published automatically by GitHub Pages.
The custom domain `newgenhvac.com` is configured through the `CNAME` file.

## Before going fully live — required configuration

- [ ] Replace the Google Analytics placeholder `G-XXXXXXXXXX` (in every `.html`
      `<head>`) with the real GA4 Measurement ID.
- [ ] Confirm the FormSubmit address in `contact.html` and complete FormSubmit's
      one-time email activation.

See **[ROADMAP.md](ROADMAP.md)** for the full prioritized improvement plan.
