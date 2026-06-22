# Roadmap — New Generation HVAC Website

A realistic, prioritized plan to take the site from "online but broken" to a
fast, trustworthy lead-generation tool. Tasks are small, concrete and ordered
by **impact ÷ effort** so the highest-value work happens first.

**Status legend:** ✅ done · 🔄 in progress · ⬜ not started

---

## Phase 0 — Critical fixes (make the site actually work)

These were silently breaking the live site. **Done in this update.**

- ✅ **Fix broken images.** Every page referenced `images/…` but the PNG files
  lived in the repo root, so the logo, hero background and gallery were all
  broken. Files moved into `images/`.
- ✅ **Fix malformed HTML.** Repaired invalid `</a loading="lazy>` tags on the
  logo across pages and the duplicated `<footer>` / stray `</section>` in
  `about.html`.
- ✅ **Add `loading="lazy"`** to gallery images (correctly, on the `<img>`).
- ✅ **Basic SEO scaffolding.** Descriptive `<title>`, `<meta name="description">`
  and canonical links per page; favicon; Open Graph tags on the home page;
  `robots.txt` and `sitemap.xml` added; `thankyou.html` set to `noindex`.

## Phase 1 — Launch readiness (this week)

Small config tasks that unblock measurement and lead capture.

- ⬜ **Activate Google Analytics.** Replace the `G-XXXXXXXXXX` placeholder in
  every page's `<head>` with the real GA4 Measurement ID. *(~15 min — owner
  action: needs the real ID)*
- ⬜ **Verify the contact form.** Submit a test through FormSubmit, complete its
  one-time email activation, and confirm the redirect to `thankyou.html` works.
  *(~20 min — owner action: needs the activation email)*
- ✅ **Compress images.** `hero-bg.png` (2.5 MB) → 71 KB WebP / 181 KB JPG;
  `ventilation.png` (2.3 MB) → 64 KB WebP; `logo.png` (1.3 MB) → 47 KB. Total
  image weight dropped from ~6 MB to ~0.5 MB. WebP served with JPG fallback via
  `<picture>` and CSS `image-set`.
- ✅ **Add a favicon file.** Generated `favicon.ico` and `images/favicon.png`
  (32px) instead of loading the full logo as the icon.

## Phase 2 — Trust & conversion (next 2–3 weeks)

Turn visitors into phone calls and quote requests.

- ✅ **Sticky / repeated call-to-action.** A persistent floating "☎ Call" button
  is injected on every page via `main.js`.
- 🔄 **Customer reviews / testimonials section.** Markup + styling are in place
  on the home page as a ready-to-fill template (commented out). *Owner action:
  paste 3–5 real Google reviews and uncomment — do not invent reviews.*
- ⬜ **Real project photos** in the gallery, replacing the placeholder
  illustrations with actual jobs (before/after sells well). *(Owner action:
  provide photos.)*
- ✅ **Service-area clarity.** Footer now names Methuen, Lawrence, Andover,
  North Andover and Haverhill — strengthens local SEO.
- ⬜ **Hours, license # and "emergency service" availability** in the footer.
  *(Owner action: provide real hours / license # — not fabricated.)*

## Phase 3 — Maintainability (parallel, as time allows)

Reduce the cost of every future change.

- ⬜ **Eliminate duplicated markup.** The header/nav and footer are copy-pasted
  into 6 files; a single typo fix means six edits. Options: a tiny build step
  (e.g. `eleventy`) or a small JS include. *(Pick the lightest option. Deferred
  intentionally: keeping plain static HTML is simplest for GitHub Pages until
  duplication genuinely hurts.)*
- ✅ **Move inline styles to `style.css`.** Footer link colors moved to a
  `footer a` rule; inline `style="color:…"` removed from every page.
- ✅ **Fix the mobile nav.** Browser testing revealed the nav overflowed
  off-screen on phones (Gallery/Contact were cut off). The header now stacks and
  the nav wraps and centers on small screens. *(A hamburger toggle remains a
  possible future enhancement.)*
- 🔄 **Accessibility pass.** Added keyboard focus-visible styles and a
  "skip to main content" link on every page. Still to do: color-contrast audit
  and meaningful `alt` text once real photos are in.

## Phase 4 — Growth (next quarter)

- 🔄 **Local SEO / Google Business Profile.** `LocalBusiness` (HVACBusiness)
  structured data (JSON-LD) added to the home page. Still to do: link/verify the
  Google Business Profile.
- ⬜ **Per-service landing pages** (e.g. "NFPA 96 Hood Cleaning in Methuen") to
  capture specific searches.
- ⬜ **Seasonal promotions** surfaced on the home page (tune-up specials).
- ⬜ **Blog / tips section** for SEO (optional, only if content can be sustained).

---

## How to measure success

| Metric | Why it matters |
| --- | --- |
| Images load on every page | Site no longer looks broken (Phase 0 ✅) |
| GA4 receiving traffic | We can see what visitors actually do |
| Mobile PageSpeed > 80 | Most local searches are on phones |
| Quote-form submissions / month | The real business outcome |
| Phone calls from the site | The real business outcome |

## Working principles

1. **Highest impact ÷ lowest effort first** — that's why phases are ordered this way.
2. **Ship small, ship often** — every item above is a single, reviewable change.
3. **Don't break what works** — the no-build static setup is a feature; keep it
   simple until duplication genuinely hurts (Phase 3).
