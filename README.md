# Sayed.Dev - React Native Developer Portfolio

A modern, dark-themed developer portfolio website built with React 18, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Dark, futuristic theme with neon accents
- **Responsive**: Fully responsive across all devices
- **Animations**: Smooth animations with Framer Motion
- **TypeScript**: Type-safe development
- **Performance**: Built with Vite for optimal performance
- **SEO Ready**: Optimized for search engines

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🎨 Customization

### Colors
Update the color theme in `tailwind.config.js`:
```js
colors: {
  dark: {
    bg: '#0E0E0E',
    card: '#1A1A1A',
    accent: '#3DCA73',
    glow: '#00FF9C',
    purple: '#8B5CF6',
  }
}
```

### Content
- Update personal information in components
- Replace placeholder images with actual project screenshots
- Modify social links in Header component
- Update contact information in Contact page

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── StatsSection.tsx
│   ├── CompaniesSection.tsx
│   ├── ProjectsSection.tsx
│   ├── Footer.tsx
│   └── Shared/
│       └── Button.tsx
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Resume.tsx
│   ├── Projects.tsx
│   └── Contact.tsx
├── styles/
│   └── tailwind.css
├── App.tsx
└── main.tsx
```

## 🚀 Deployment

### Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

Sayed Muhammed Aamir - [sayed@example.com](mailto:sayed@example.com)

Project Link: [https://github.com/sayedaamir/portfolio](https://github.com/sayedaamir/portfolio)
