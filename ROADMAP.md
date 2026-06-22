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
  every page's `<head>` with the real GA4 Measurement ID. *(~15 min)*
- ⬜ **Verify the contact form.** Submit a test through FormSubmit, complete its
  one-time email activation, and confirm the redirect to `thankyou.html` works.
  *(~20 min)*
- ⬜ **Compress images.** `hero-bg.png` (2.5 MB), `ventilation.png` (2.3 MB) and
  `logo.png` (1.3 MB) make the site slow on mobile. Convert to WebP/optimized
  JPEG and resize the logo to display size (target each file < 200 KB).
  *(~1 hr, biggest perceived-speed win)*
- ⬜ **Add a favicon file** (`favicon.ico` / sized PNG) instead of reusing the
  full logo. *(~15 min)*

## Phase 2 — Trust & conversion (next 2–3 weeks)

Turn visitors into phone calls and quote requests.

- ⬜ **Sticky / repeated call-to-action.** A persistent "Call 978-876-8558"
  button (especially on mobile) on every page, not just the hero.
- ⬜ **Customer reviews / testimonials section.** Pull Google reviews or add 3–5
  quotes with names and towns. Single biggest trust signal for local services.
- ⬜ **Real project photos** in the gallery, replacing the placeholder
  illustrations with actual jobs (before/after sells well).
- ⬜ **Service-area clarity.** List the specific towns served near Methuen
  (e.g. Lawrence, Andover, Haverhill) — strong local-SEO and trust signal.
- ⬜ **Hours, license # and "emergency service" availability** in the footer.

## Phase 3 — Maintainability (parallel, as time allows)

Reduce the cost of every future change.

- ⬜ **Eliminate duplicated markup.** The header/nav and footer are copy-pasted
  into 6 files; a single typo fix means six edits. Options: a tiny build step
  (e.g. `eleventy`) or a small JS include. *(Pick the lightest option.)*
- ⬜ **Move inline styles to `style.css`.** The footer link colors are inlined on
  every page; centralize them.
- ⬜ **Add a mobile nav.** The header nav can get cramped on small screens;
  add a simple hamburger toggle.
- ⬜ **Accessibility pass.** Color-contrast check, focus styles, a "skip to
  content" link, and meaningful `alt` text once real photos are in.

## Phase 4 — Growth (next quarter)

- ⬜ **Local SEO / Google Business Profile** linkage and `LocalBusiness`
  structured data (JSON-LD) for rich search results.
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
