# Mudit Srivastava - Personal Website

A modern, crisp, and minimalist personal website built with React, TypeScript, and Tailwind CSS. Designed as a single-page application (SPA) showcasing professional experience, skills, and achievements.

## 🎯 Features

- **Single Page Application**: Smooth scrolling navigation between sections
- **Dark Theme**: Professional black background with clean typography
- **Responsive Design**: Mobile-first approach, works on all devices
- **Modular Architecture**: Easy to extend with backend services
- **Containerized**: Docker-ready for cloud deployment
- **Firebase Ready**: Pre-configured for Firebase Hosting

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Package Manager**: pnpm
- **Containerization**: Docker + docker-compose
- **Hosting**: Firebase Hosting

## 📋 Prerequisites

- Node.js 20+
- pnpm (installed globally)
- Docker (optional, for containerization)
- Firebase CLI (optional, for deployment)

## 🚀 Getting Started

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd meet-mudit
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```

   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production**
   ```bash
   pnpm build
   ```

5. **Preview production build**
   ```bash
   pnpm preview
   ```

## 🐳 Docker Deployment

### Build and run with Docker

```bash
# Build the Docker image
pnpm docker:build

# Run the container
pnpm docker:run
```

Access at [http://localhost:3000](http://localhost:3000)

### Using Docker Compose

```bash
# Start all services
pnpm docker:compose

# Stop all services
docker-compose down
```

## 🔥 Firebase Deployment

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase project**
   ```bash
   firebase init hosting
   ```

   - Select your Firebase project
   - Set public directory to `dist`
   - Configure as single-page app: Yes
   - Don't overwrite existing files

4. **Deploy to Firebase**
   ```bash
   pnpm deploy
   ```

## 📁 Project Structure

```
meet-mudit/
├── src/
│   ├── components/       # React components
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── Education.tsx
│   │   └── Contact.tsx
│   ├── data/            # Data files
│   │   └── resume.ts
│   ├── types/           # TypeScript types
│   │   └── index.ts
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose config
├── firebase.json        # Firebase Hosting config
├── nginx.conf           # Nginx configuration
├── tailwind.config.js   # Tailwind CSS config
├── vite.config.ts       # Vite configuration
└── package.json         # Dependencies & scripts
```

## 🎨 Customization

### Update Personal Information

Edit the file `src/data/resume.ts` to update:
- Personal details (name, contact, location)
- Work experience
- Education
- Skills
- Certifications
- Awards

### Add Your Photo

Replace the photo placeholder in `src/components/Hero.tsx`:

1. Add your image to `public/` folder (e.g., `public/profile.jpg`)
2. Update the Hero component:
   ```tsx
   <img
     src="/profile.jpg"
     alt="Mudit Srivastava"
     className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover"
   />
   ```

### Modify Color Theme

Update `tailwind.config.js` to change colors:
```js
colors: {
  dark: {
    DEFAULT: '#0a0a0a',     // Main background
    lighter: '#1a1a1a',      // Section backgrounds
    border: '#2a2a2a',       // Border color
  },
}
```

## 🔧 Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm lint` | Run ESLint |
| `pnpm deploy` | Build and deploy to Firebase |
| `pnpm docker:build` | Build Docker image |
| `pnpm docker:run` | Run Docker container |
| `pnpm docker:compose` | Start with docker-compose |

## 🚢 Future Enhancements

The project is architected to support future additions:

- **Backend Integration**: Add Express/NestJS backend
- **CMS**: Integrate headless CMS (Contentful, Sanity)
- **Blog**: Add blog functionality
- **Analytics**: Integrate Google Analytics
- **Contact Form**: Add EmailJS or backend API
- **Projects Gallery**: Showcase portfolio projects
- **Dark/Light Mode Toggle**: Add theme switcher

## 📝 Adding a Backend (Future)

The project structure supports adding a backend:

1. Create a `backend/` directory
2. Add backend service to `docker-compose.yml`
3. Update `src/services/` to call backend APIs
4. Deploy backend to Google Cloud Run or Kubernetes

Example docker-compose with backend:
```yaml
services:
  frontend:
    # ... existing config
  backend:
    build:
      context: ./backend
    ports:
      - "8080:8080"
    environment:
      - DATABASE_URL=${DATABASE_URL}
```

## 🌐 Deployment Options

### Firebase Hosting (Current)
- Static hosting
- Free tier available
- CDN included
- Custom domain support

### Google Cloud Run (Future with Backend)
- Containerized deployment
- Auto-scaling
- Pay per use
- Supports backend APIs

### Kubernetes (Enterprise)
- Full orchestration
- Multi-service support
- High availability
- Complex setup

## 📄 License

This is a personal project. Feel free to use it as inspiration for your own website.

## 👤 Author

**Mudit Srivastava**
- Email: muditsrivastava77@gmail.com
- LinkedIn: [linkedin.com/in/muditsriv](https://linkedin.com/in/muditsriv)
- Location: Dublin, Ireland

---

Built with ❤️ using React + TypeScript + Tailwind CSS
