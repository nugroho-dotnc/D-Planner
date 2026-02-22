# D-Planner 🚀

**D-Planner** is a futuristic, AI-powered personal productivity application designed to help you manage schedules, tasks, and notes with ease. Leveraging the power of Google Gemini AI, D-Planner transforms your natural language intents into actionable plans, all wrapped in a premium, ultra-modern UI.

![Premium UI Preview](https://img.shields.io/badge/UI-Liquidmorphism-blueviolet?style=flat-square)
![Tech Stack](https://img.shields.io/badge/Tech-MERN_Stack-blue?style=flat-square)
![AI-Powered](https://img.shields.io/badge/AI-Gemini-orange?style=flat-square)

---

## ✨ Key Features

### 🤖 1. AI ChatPlanner

Don't waste time manual-typing every detail. Just chat with the built-in AI to:

- Generate daily schedules from simple sentences.
- Automatically detect tasks vs. schedule activities.
- Multi-item generation and instant saving to your database.

### 📊 2. Dynamic Dashboard

- **Productivity Stats**: Track your Focus Time and Tasks Done progress with interactive circular indicators.
- **Time Filters**: Filter your entire dashboard (Today, 7 Days, 1 Month) to stay focused on what matters now.
- **Quick Links**: Every card is interactive, allowing you to jump straight into activity details or task management.

### 📝 3. Smart Task & Activity Management

- **Task Sorting**: Automatic sorting that keeps your "Pending" tasks at the top.
- **Advanced Filtering**: Filter tasks by Priority, Status, and Time Range.
- **Timeline View**: A clean, chronological view of your daily schedule.

### 📓 4. Interactive Notes

- futuristic detail view for reading and editing notes.
- **Pinning System**: Keep your most important thoughts at the top.
- **Instant Sync**: Changes are persisted and updated across the app using SWR.

### 🎨 5. Premium Design (Liquidmorphism)

- **Floating Island Navbar**: A detached, glassmorphic bottom navigation bar.
- **Liquid Active Indicator**: Smooth, pill-based animations as you switch tabs.
- **Micro-interactions**: Scale-up effects, spring animations, and backdrop blurs for a high-end feel.

---

## 🛠️ Technology Stack

### Frontend

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Data Fetching**: [SWR](https://swr.vercel.app/)
- **Icons**: [Lucide React](https://lucide.dev/)

### Backend

- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **AI Engine**: [Google Generative AI (Gemini)](https://ai.google.dev/)
- **Auth**: JWT (JSON Web Tokens) & Bcrypt.js

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- MySQL or PostgreSQL database
- Google AI (Gemini) API Key

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/nugroho-dotnc/D-Planner.git
   cd D-Planner
   ```

2. **Setup Backend**

   ```bash
   cd BACKEND
   npm install
   ```

   Create a `.env` file in the `BACKEND` directory:

   ```env
   PORT=5000
   DATABASE_URL="mysql://user:password@localhost:3306/d_planner"
   JWT_SECRET="your_jwt_secret"
   GEMINI_API_KEY="your_gemini_api_key"
   FRONTEND_URL="http://localhost:5173"
   ```

   Initialize Prisma:

   ```bash
   npx prisma generate
   npx prisma db push
   ```

3. **Setup Frontend**
   ```bash
   cd ../FRONTEND
   npm install
   ```
   Create a `.env` file in the `FRONTEND` directory:
   ```env
   VITE_API_BASE_URL="http://localhost:5000"
   ```

### Running the App

1. **Start Backend**

   ```bash
   # From BACKEND directory
   npm run dev
   ```

2. **Start Frontend**
   ```bash
   # From FRONTEND directory
   npm run dev
   ```

---

## 📂 Project Structure

```text
D-Planner/
├── BACKEND/             # Express API & Prisma Schema
│   ├── prisma/          # Database definitions
│   └── src/             # Controller, Service, Routes
├── FRONTEND/            # Vite + React Application
│   ├── src/
│   │   ├── components/  # Reusable UI (Cards, Common, Nav)
│   │   ├── hooks/       # SWR & Custom logic
│   │   ├── pages/       # Dashboard, Task, Activity, Notes
│   │   └── services/    # API integration layer
└── walkthrough.md       # Detailed feature implementation log
```

---

## 🤝 Contributing

Feel free to open issues or submit pull requests to improve the UX or add more AI features!

## 📜 License

This project is licensed under the [ISC License](LICENSE).

---

Developed with ❤️ by [Nugroho](https://github.com/nugroho-dotnc)
