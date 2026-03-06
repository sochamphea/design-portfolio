# Sochamphea Mao — Portfolio

Personal portfolio website for Sochamphea Mao, UX/UI Designer.

## Structure

```
portfolio/
├── index.html          # Profile page
├── design.html         # Design projects grid
├── craft.html          # Photography & craft
├── contact.html        # Contact page
├── css/
│   └── styles.css      # All styles (shared across pages)
└── pages/
    ├── instagram-highlight.html
    ├── journey-map.html
    ├── design-centers.html
    ├── defense.html
    ├── laval-website.html
    ├── nocktail.html
    ├── government-website.html
    ├── service-blueprint.html
    ├── hive.html
    ├── government-app.html
    ├── liggo.html
    ├── financial-tool.html
    ├── operator-tool.html
    ├── marine-tool.html
    ├── elearning.html
    ├── ecommerce.html
    └── mexico.html
```

## How to use

1. Open `index.html` in your browser to preview locally
2. **Add your photo**: Replace the placeholder in `index.html` with:
   ```html
   <img src="images/profile.jpg" alt="Sochamphea" class="hero-photo">
   ```
3. **Add project images**: In each `pages/*.html`, replace the placeholder `<div>` blocks with:
   ```html
   <img src="../images/project-name.jpg" alt="Project name">
   ```
4. **Add your city photo**: In `index.html`, replace the placeholder div with:
   ```html
   <img src="images/montreal.jpg" alt="Montréal" class="city-photo">
   ```
5. **Update contact info**: Edit your email and LinkedIn URL in `contact.html`

## Deploy to GitHub Pages

1. Push this folder to a GitHub repository
2. Go to Settings → Pages
3. Set source to `main` branch, root folder
4. Your site will be live at `https://yourusername.github.io/repository-name`

## Tech Stack

- HTML5
- CSS3 (custom properties, flexbox, grid, animations)
- No JavaScript framework required
- Google Fonts: Cormorant Garamond + DM Sans
- Fully responsive (mobile, tablet, desktop)
