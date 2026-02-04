# Abdalbagi F. Alwsela - CV Website

Professional CV website for Abdalbagi Fadlalla Alwsela Osman - Telecommunications and Network Engineer based in Riyadh.

## Design Philosophy

**Technical Blueprint Aesthetic** - A sophisticated design inspired by Swiss Design and technical documentation, featuring:

- **Color Scheme**: Navy blue (#0A192F) with neon green (#64FFDA) accents
- **Typography**: JetBrains Mono for headings, Inter for body text
- **Visual Elements**: Circuit board patterns, hexagonal grids, glowing connection lines
- **Effects**: Glass morphism cards with backdrop blur, neon glow effects, smooth animations

## Features

- 📱 Fully responsive design
- 🎨 Modern technical aesthetic with glass morphism
- ⚡ Fast loading with optimized images
- 🔍 SEO optimized with JSON-LD schema
- 📊 Organized sections: About, Experience, Skills, Education, Contact
- 🎯 Smooth scrolling navigation with active section highlighting

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4
- **Build Tool**: Vite
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## Local Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Deployment to GitHub Pages

### Automatic Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/cv-abdalbagi-alwsela.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Build and deployment", select "GitHub Actions" as the source
   - The workflow will automatically build and deploy your site

3. **Access Your Site**:
   - Your site will be available at: `https://YOUR_USERNAME.github.io/cv-abdalbagi-alwsela/`

### Manual Deployment

If you prefer manual deployment:

```bash
# Build the project
pnpm build

# Deploy to gh-pages branch
pnpm dlx gh-pages -d dist/public
```

## Project Structure

```
cv-abdalbagi-alwsela/
├── client/
│   ├── public/
│   │   └── data/          # JSON data files
│   ├── src/
│   │   ├── components/
│   │   │   ├── sections/  # Page sections
│   │   │   ├── ui/        # shadcn/ui components
│   │   │   └── Navigation.tsx
│   │   ├── pages/
│   │   │   └── Home.tsx
│   │   ├── App.tsx
│   │   └── index.css      # Design system & styles
│   └── index.html
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions workflow
└── vite.config.ts         # Vite configuration with base path
```

## Data Management

Profile and content data are stored in JSON files:

- `/client/public/data/profile.json` - Personal information and contact details
- `/client/public/data/content.json` - Summary, experience, skills, and education

To update your information, simply edit these JSON files and rebuild the project.

## Design Tokens

The design system uses CSS custom properties defined in `client/src/index.css`:

- `--tech-navy`: Primary background color
- `--tech-neon`: Accent color for highlights and interactions
- `--tech-slate`: Secondary text color
- Glass card effects with `backdrop-blur` and semi-transparent backgrounds

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Contact

- **Email**: A.alwsela@Yahoo.com
- **Phone**: +(966)503442003
- **LinkedIn**: Abdalbagi Alwsela
- **GitHub**: One-5G
