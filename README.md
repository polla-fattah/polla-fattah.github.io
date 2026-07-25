# Dr. Polla Fattah - Personal Website

A comprehensive personal website showcasing the academic and professional journey of Dr. Polla Fattah, featuring his work in artificial intelligence, computer science education, and technology innovation.

## About

This Jekyll-powered website serves as a digital portfolio and academic hub for Dr. Polla Fattah, highlighting his contributions to:

- **Artificial Intelligence Research** - Cutting-edge work in AI and machine learning
- **Academic Excellence** - Teaching and research in computer science
- **Technology Innovation** - Projects bridging academia and industry
- **Kurdish Language Technology** - Pioneering AI solutions for Kurdish language preservation

## Website Structure

### Main Sections
- **Home** - Overview and latest updates
- **About** - Personal and professional background
- **Academy** - Academic achievements, research, publications, and lectures
- **Business** - Professional projects and industry collaborations
- **Developer** - Technical skills and development work
- **Contact** - Multiple contact methods and social profiles

### Content Collections
- **Awards** - Academic and professional recognitions
- **Projects** - Business and technical projects
- **Research** - Academic research work
- **Publications** - Scholarly articles and papers
- **Lectures** - Teaching materials and course content
- **Education** - Academic background and qualifications
- **Jobs** - Professional experience
- **Posts** - Blog articles and announcements

## Getting Started

### Prerequisites
- Ruby (2.7 or higher)
- Bundler gem
- Jekyll

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   bundle install
   ```

### Running Locally
To start the development server with live reload:

```bash
bundle exec jekyll serve --livereload
```

The website will be available at `http://localhost:4000`

### Building for Production
```bash
bundle exec jekyll build
```

## Technical Features

- **Responsive Design** - Optimized for all devices
- **Modern UI/UX** - Clean, professional interface
- **SEO Optimized** - Structured data and meta tags
- **Fast Loading** - Optimized assets and performance
- **Accessibility** - WCAG compliant design
- **Multi-language Support** - Content in multiple languages
- **Interactive Elements** - Dynamic galleries and timelines

## Key Directories

- `_includes/` - Reusable HTML components
- `_layouts/` - Page templates
- `_posts/` - Blog posts and articles
- `_data/` - Structured data files
- `pages/` - Static pages
- `img/` - Images and media assets
- `assets/` - CSS, JavaScript, and other assets

## Customization

The website uses:
- **Jekyll** as the static site generator
- **Bootstrap** for responsive grid and components
- **Custom SCSS** for styling
- **Font Awesome** for icons
- **Google Fonts** for typography

## Contact

- **Email**: polla.fattah@gmail.com
- **LinkedIn**: [polla-fattah-57617b23](https://linkedin.com/in/polla-fattah-57617b23)
- **GitHub**: [polla-fattah](https://github.com/polla-fattah)
- **Twitter**: [@FattahPolla](https://twitter.com/FattahPolla)
- **ResearchGate**: [Polla-Fattah](https://researchgate.net/profile/Polla-Fattah)

## Content Management

### Cross-Reference System

This website uses a cross-reference system to link students, research projects, and publications. When making changes, follow these guidelines:

#### When You Make Changes:

**Adding a student to a project:**
- Add student ID to research file's `students: []`
- Add project ID to student file's `research_projects: []`
- The helpful comments remind you what to do!

**Publishing a paper:**
- Add student IDs to publication file's `students: []`
- Add publication ID to student files' `publications: []`
- Add publication ID to research files' `publications: []`

The system is now self-documenting and maintainable! 🎉

#### ID Naming Convention:
- **Student IDs**: lowercase, no spaces (e.g., `"aveen"`, `"bnar"`)
- **Research IDs**: filename without extension (e.g., `"2023-02-10-autism-detection"`)
- **Publication IDs**: filename without extension (e.g., `"2024-01-15-tokenisation-free-machine-translation-kurdish-byt5"`)

#### Maintenance Tips:
- Use the helpful comments in front matter as reminders
- Check the generated site after making changes
- Keep IDs consistent across all files
- Update relationships immediately when changes occur
- Use the cross-references include in templates for automatic linking

For detailed maintenance procedures, see `MAINTENANCE_CHECKLIST.md`.

## Styling Architecture

All CSS lives in `_sass/` and compiles into a single stylesheet (`assets/main.css`, entry point `assets/main.scss`). **Never add `<style>` blocks or extra `<link rel="stylesheet">` tags to HTML files.**

```
_sass/
├── styles.scss           # Master import file (order matters)
├── base/
│   ├── _variables.scss   # Design tokens: colors, fonts, radii, shadows, breakpoints
│   └── _typography.scss  # Global type rules (Inter everywhere)
├── components/           # Reusable pieces: hero, cards, buttons, sections,
│                         # navbar, footer, timeline, gallery, media, …
├── layouts/              # _entry.scss (all detail pages), _related.scss,
│                         # _contact-card.scss (vCard pages), _home.scss
└── pages/                # Page-specific leftovers (about, business, cv, …)
```

Key conventions:
- **Change colors/fonts once** in `_sass/base/_variables.scss` (navy ink + gold accent palette).
- **Heroes**: `<div class="hero has-art" style="--hero-image: url('/img/heroes/<name>.svg')">`. One class, one size — every hero shares the same min-height and centered layout; portraits/badges inside use `.profile-image` (150px everywhere). The branded SVG artworks and circular badges live in `img/heroes/`; a detail page's `background:` front matter still overrides with a photo (`has-image`).
- **Detail layouts** (post, publication, job, …) share `.entry-content` / `.entry-navigation` styles and the `entry-navigation.html` / `author-credit.html` / `author-list.html` includes.
- **Cards**: use `.card-item` (+ `--link`, `--accent`), `.mini-card`, `.pub-card`, `.panel` — don't invent new one-off card styles.
- **Grids**: `.grid-layout rows-2|rows-3|rows-4|rows-auto` (collapse to one column on mobile).
- **Buttons**: `.btn-pill` (+ `--secondary`, `--ghost`, `--accent`).

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

*Built with using Jekyll and hosted on GitHub Pages*
