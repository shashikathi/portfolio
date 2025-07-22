# K Shashi Preetham - Data Science Portfolio

A modern, interactive 3D portfolio website showcasing expertise in Data Science and Business Analytics. Built with React, TypeScript, and Three.js for an immersive user experience.

## 🌟 Live Demo

Visit the live portfolio: [https://infopreetham.netlify.app](https://infopreetham.netlify.app)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Sections](#sections)
- [Deployment](#deployment)
- [Contact](#contact)

## ✨ Features

- **Interactive 3D Scene**: Immersive Three.js background with floating geometric elements
- **Responsive Design**: Optimized for all device sizes and screen resolutions
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Glass Morphism UI**: Modern glassmorphism design with backdrop blur effects
- **Section-based Navigation**: Smooth scrolling between different portfolio sections
- **Dynamic Content**: Real-time updates and interactive elements
- **Performance Optimized**: Lazy loading and optimized asset delivery

## 🛠 Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework

### 3D Graphics & Animation
- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for react-three-fiber
- **Framer Motion** - Animation library for React

### UI & Icons
- **Lucide React** - Beautiful & consistent icon pack
- **Custom Glass Morphism** - Modern UI design patterns

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shashikathi/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 📁 Project Structure

```
src/
├── components/
│   ├── 3d/                    # Three.js components
│   │   ├── PortfolioScene.tsx # Main 3D scene
│   │   ├── FloatingGeometry.tsx
│   │   └── Scene.tsx
│   ├── layout/                # Layout components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/              # Portfolio sections
│   │   ├── Hero.tsx
│   │   ├── ExperienceAtrium.tsx
│   │   ├── ProjectGallery.tsx
│   │   ├── SkillsPavilion.tsx
│   │   ├── CertificationsWall.tsx
│   │   ├── EducationTower.tsx
│   │   ├── Resume.tsx
│   │   └── Contact.tsx
│   └── ui/                    # UI components
│       └── Loader.tsx
├── App.tsx                    # Main application component
├── main.tsx                   # Application entry point
├── index.css                  # Global styles
└── types.d.ts                 # TypeScript declarations
```

## 📖 Sections

### 🏠 Hero Section
- Professional introduction with profile image
- Key achievements and highlights
- Call-to-action buttons
- Social media links

### 💼 Experience Atrium
- **TransOrg Analytics** - Data Science Intern
- **Movidu** - Business Analyst
- Performance metrics and achievements

### 🚀 Project Gallery
- **Customer Churn Prediction** - ML model for telecom industry
- **Wine Quality Prediction** - Multi-model comparison for quality assessment
- **Cryptocurrency Dashboard** - Real-time crypto tracking
- **Poll-based Web Application** - Full-stack voting platform
- **Superstore Analytics** - Business intelligence insights

### 🛠 Skills Pavilion
- **Languages**: Python, SQL, Django
- **Technologies**: PyTorch, CrewAI, Google Gen AI, Transformers
- **Tools**: MySQL, OpenAI, LangChain, Power BI, Tableau
- **Data Analysis**: MS Excel, Statistical Analysis, Kaggle
- **Soft Skills**: Leadership, Design Thinking, Learning Agility

### 🏆 Certifications Wall
- Goldman Sachs - Excel Skills for Business
- Google - Computer Networking Fundamentals
- UC San Diego - Data Structures

### 🎓 Education Tower
- B.Tech Hons. CSE in Data Science - Lovely Professional University
- Higher Secondary - Narayana IIT Academy
- Secondary Education - Tejaswi High School

### 📄 Resume
- Direct link to downloadable resume
- Google Drive integration

### 📞 Contact
- Contact form with validation
- Professional contact information
- Social media links
- Location details

## 🌐 Deployment

This portfolio is deployed on Netlify with automatic deployments from the main branch.

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Deploy automatically on push to main branch

### Environment Variables

No environment variables are required for this static portfolio.

## 🎨 Customization

### Colors & Theming
- Primary colors defined in `tailwind.config.js`
- Glass morphism effects in `src/index.css`
- 3D scene colors in `PortfolioScene.tsx`

### Content Updates
- Personal information in respective section components
- Project data in `ProjectGallery.tsx`
- Skills and experience in corresponding components

### 3D Scene Customization
- Modify geometric shapes in `PortfolioScene.tsx`
- Adjust camera positions and animations
- Update lighting and materials

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile devices (< 640px)
- Tablets (640px - 1024px)
- Desktop (> 1024px)

## ⚡ Performance

- **Lazy Loading**: Components load as needed
- **Code Splitting**: Automatic code splitting with Vite
- **Asset Optimization**: Images optimized for web
- **3D Optimization**: Efficient Three.js rendering

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**K Shashi Preetham**
- Email: [shashikathi56@gmail.com](mailto:shashikathi56@gmail.com)
- Phone: +91 9966034362
- LinkedIn: [linkedin.com/in/shashikathi](https://www.linkedin.com/in/shashikathi/)
- GitHub: [github.com/shashikathi](https://github.com/shashikathi)
- Instagram: [@____shashikathi____](https://www.instagram.com/____shashikathi____)

---

⭐ **If you found this portfolio inspiring, please give it a star!**

Built with ❤️ using React, TypeScript, and Three.js