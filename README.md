# Amitabh. Portfolio 2026

A high-performance DevOps portfolio designed for technical authority and minimalist aesthetic. This project focuses on refined interactions, efficient performance, and clear communication of engineering expertise.

## Core Technologies
- **Framework**: Next.js 16 (App Router) for optimized rendering and routing.
- **Runtime**: React 19 using the latest concurrent features.
- **Styling**: Tailwind CSS 4 for utility-first design without runtime overhead.
- **Animation**: Framer Motion for hardware-accelerated transitions.
- **Scrolling**: Lenis for inertial scrolling experiences.

## Technical Highlights
### System Pulse
The portfolio features a real-time GitHub activity indicator. It polls the GitHub API every 60 seconds to provide accurate status updates. The implementation includes cache-busting and CORS management to ensure reliability across production environments.

### Modular Architecture
The codebase is structured for maintainability and performance:
- **UI Components**: Atomic, reusable elements located in `src/components/ui`.
- **Page Sections**: Modular sections in `src/components/sections`, utilizing dynamic imports to minimize the initial load time.

### User Experience
- **Interactive Elements**: Custom magnetic interactions, glass-morphism effects, and refined hover states.
- **Mobile Optimization**: Typography and spacing are specifically calibrated for small-screen devices.
- **Unified Scrolling**: Blends Lenis inertial scrolling with native CSS smooth behavior for a consistent feel.

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Amitabh-DevOps/Portfolio-2026.git
   cd Portfolio-2026
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env.local` file in the root directory and include the following:
   ```env
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=your_formspree_endpoint
   ```

4. **Launch Development Server**
   ```bash
   npm run dev
   ```

## Project Structure
```
src/
├── app/             # Application logic and global configuration
├── components/
│   ├── ui/          # Generic UI elements
│   └── sections/    # Principal page sections
├── lib/             # Shared utilities and animation definitions
└── public/          # Static assets and branding
```

## License
This project is licensed under the MIT License - see the LICENSE file for details.

---

Developed by Amitabh Soni | DevOps Engineer

Visit my portfolio at [amitabh.cloud](https://amitabh.cloud)
