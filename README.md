## 🚀 ExamNotesAI – AI Powered Exam Notes Generator (SaaS)

A **production-ready AI-powered SaaS platform** that generates **exam-oriented notes, diagrams, graphs, and revision material in just ONE CLICK** using Artificial Intelligence.

Built with the **MERN Stack**, integrated with **Google Gemini AI**, **Stripe payments**, and **dual authentication (JWT + Firebase)**. Fully deployed on **Render**.

---

## ✨ Key Features

### 🎓 For Students
- 🤖 **AI-Based Notes Generation** – Instantly generate structured exam notes  
- 📊 **Auto-Generated Diagrams, Graphs & Charts** – Visual learning made easy  
- 📝 **Revision Mode** – Short, crisp notes for last-minute prep  
- 📚 **Class-wise & Subject-wise Questions** – Auto-generated exam questions  
- 📥 **Downloadable Notes** – Export notes for offline study  
- 📱 **Fully Responsive UI** – Works seamlessly on desktop & mobile  

---

### 💳 SaaS & Monetization System
- 💰 **Credit-Based Usage System** – Each generation consumes credits  
- 💳 **Stripe Payment Integration** – Secure credit purchase  
- 📦 **Pricing Plans** – Flexible usage tiers  
- 🔄 **Stripe Webhooks** – Real-time credit updates after payment  

---

### 🔐 Authentication & Security
- 🔐 **JWT Authentication** – Secure backend authorization  
- 🔥 **Firebase Authentication** – Client-side authentication  
- 🛡 **Protected API Routes** – Token-based access control  
- ⚙️ **Environment-Based Configuration** – Secure production setup  
- 🌍 **Live Deployment** – Hosted on Render  

---

## 🛠️ Technology Stack

| Category | Technology | Description |
|--------|-----------|------------|
| Frontend | ⚛️ React.js (Vite) | Fast modern UI |
| Backend | 🚀 Node.js & Express.js | REST API & business logic |
| Database | 🗄️ MongoDB & Mongoose | Data persistence |
| AI Engine | 🤖 Google Gemini AI | AI-powered content generation |
| Payments | 💳 Stripe | Secure payments |
| Authentication | 🔐 JWT + Firebase Auth | Dual authentication |
| Deployment | 🌍 Render | Cloud hosting |

---

## 🚀 Quick Start Guide

### ✅ Prerequisites
- Node.js >= 16  
- MongoDB  
- Stripe Account  
- Google Gemini API Key  
- Firebase Project  

---

### 📦 Installation


git clone https://github.com/suryachittem/ExamNotesAI.git
cd ExamNotesAI

# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
cd ..


### 🌐 Live Application

🚀 Try ExamNotesAI live:
👉 https://ai-notes-generatorclient-hvbq.onrender.com

🔧 Environment Variables
Server (.env)
PORT=8080
MONGO_URI=mongodb://localhost:27017/examnotesai
JWT_SECRET=your_secure_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_webhook_secret
CLIENT_URL=http://localhost:5173
Client (client/.env)
VITE_FIREBASE_API_KEY=your_firebase_api_key
📚 API Overview

Base Route: /api/v1

🔓 Public Routes

Register

Login

Pricing

🔒 Protected Routes

Generate Notes

Get User Credits

Purchase Credits

Download Notes

Stripe Webhook

🧠 Why This Project Stands Out?

❌ Not a basic CRUD app
❌ Not a dummy academic project

✅ Real-world AI SaaS application
✅ Stripe-based monetization
✅ Dual authentication (JWT + Firebase)
✅ Production-ready architecture
✅ Resume & portfolio worthy

👨‍💻 Author

Surya Chittem
🔗 GitHub: https://github.com/suryachittem

🌍 Live App: https://ai-notes-generatorclient-hvbq.onrender.com
