🚀 AI-Notes-Generator
AI-Powered Exam Notes SaaS Platform

AI-Notes-Generator is a production-ready AI SaaS platform that generates exam-oriented notes, diagrams, graphs, and revision material in one click using Artificial Intelligence.

Built using the MERN Stack, integrated with Google Gemini AI, Stripe payments, and dual authentication (JWT + Firebase). Fully deployed on Render.

🔗 Live App:
https://ai-notes-generator-client.onrender.com

🔗 GitHub Repository:
https://github.com/SHAIKHANIF2004/AI-NOTES-GENERATOR

✨ Key Features
🎓 Student-Focused Features

🤖 AI-Based Notes Generation – Instantly generate structured, exam-oriented notes

📊 Auto-Generated Diagrams, Graphs & Charts – Visual learning made easy

📝 Revision Mode – Short, crisp notes for last-minute preparation

📚 Class-wise & Subject-wise Question Generation

📥 Downloadable Notes – Export notes for offline study

📱 Fully Responsive UI – Optimized for desktop & mobile devices

💳 SaaS & Monetization System

💰 Credit-Based Usage System – AI usage consumes credits

💳 Stripe Payment Integration – Secure credit purchases

📦 Multiple Pricing Plans

🔄 Secure Stripe Webhooks – Real-time credit updates after payment

🔐 Authentication & Security

🔐 JWT Authentication – Backend token-based auth

🔥 Firebase Authentication – Secure client-side auth

🛡 Protected API Routes

⚙️ Environment-Based Configuration

🌍 Production Deployment on Render

🛠 Technology Stack
Category	Technology	Description
Frontend	⚛️ React.js (Vite)	Fast, modern UI
Backend	🚀 Node.js & Express.js	RESTful API
Database	🗄️ MongoDB & Mongoose	Data persistence
AI Engine	🤖 Google Gemini AI	AI content generation
Payments	💳 Stripe	Secure payments
Authentication	🔐 JWT + Firebase	Dual authentication
Deployment	🌍 Render	Cloud hosting
🚀 Quick Start Guide
Prerequisites

Node.js >= 16

MongoDB

Stripe Account

Gemini API Key

Firebase Project

Installation
git clone https://github.com/SHAIKHANIF2004/AI-NOTES-GENERATOR.git
cd AI-NOTES-GENERATOR

# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
cd ..
Run in Development Mode
# Start backend
npm run dev

# Start frontend
cd client
npm run dev
🔧 Environment Variables
Backend (.env)
PORT=8080
MONGO_URI=mongodb://localhost:27017/ai-notes
JWT_SECRET=your_secure_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_webhook_secret
CLIENT_URL=http://localhost:5173
Frontend (client/.env)
VITE_FIREBASE_API_KEY=your_firebase_api_key
📚 API Overview

Base Route: /api/v1

Public Endpoints

Register

Login

Pricing

Protected Endpoints

Generate Notes

Get User Credits

Purchase Credits

Download Notes

Stripe Webhook

🧠 Why This Project Stands Out?

❌ Not a basic CRUD app
❌ Not a dummy academic project

✅ Real-world AI SaaS product
✅ Stripe monetization
✅ Dual authentication system
✅ Production-grade architecture
✅ Deployed & live
✅ Resume-worthy full-stack project

👨‍💻 Author

Built with ❤️ by Abdul Hanif Shaik

GitHub: https://github.com/SHAIKHANIF2004

Live App: https://ai-notes-generator-client.onrender.com
