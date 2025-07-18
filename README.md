# 🚀 CONFERA - Real-Time Video Conferencing Web App

![MERN Stack](https://img.shields.io/badge/Stack-MERN-00D8FF?style=for-the-badge)
![WebRTC](https://img.shields.io/badge/WebRTC-333333?style=for-the-badge&logo=webrtc&logoColor=white)
![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?style=for-the-badge&logo=socketdotio&logoColor=white)

**CONFERA** is a lightweight, modular video conferencing platform with screen sharing and chat capabilities, built with modern web technologies.

[![Live Demo](https://img.shields.io/badge/Live_Demo-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white)](https://confera-live-demo.com)
[![GitHub Repo](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/abhishekpnaik05/confera)

## 🌟 Features

### Core Functionality
- 🔐 **Secure Authentication** (JWT)
- 🎥 **Peer-to-Peer Video Calls** (WebRTC)
- 🖥️ **Screen Sharing**
- 💬 **Real-Time Chat** (Socket.IO)

### User Experience
- 🎚️ **Device Controls** (Mic/Camera Toggle)
- 🏠 **Unique Room IDs**
- 📱 **Responsive Design**

### Technical Highlights
- ⚛️ React Functional Components
- 🪝 Hooks-Based Architecture
- 🚀 Optimized WebRTC Implementation

## 🛠 Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| React | UI Framework |
| SimplePeer | WebRTC Implementation |
| Socket.IO Client | Real-Time Communication |
| Material UI | UI Components |

### Backend
| Technology | Purpose |
|------------|---------|
| Node.js | Runtime Environment |
| Express | Web Framework |
| Socket.IO | WebSocket Communication |
| JWT | Authentication |

### Database
| Technology | Purpose |
|------------|---------|
| MongoDB | Primary Data Store |
| Mongoose | ODM |


## 🚀 Quick Start

### Prerequisites
- Node.js (v16+)
- MongoDB Atlas account

### Installation

# Clone repository
git clone https://github.com/abhishekpnaik05/confera.git
cd confera

# Install dependencies
cd client && npm install
cd ../server && npm install

# Configure environment variables
cp .env.example .env

# Start backend
cd backend && npm start

# Start frontend (in new terminal)
cd ../frontend && npm start

## 🌐 Deployment
The application is deployed using:

- **Frontend**: Vercel  
- **Backend**: Render  
- **Database**: MongoDB Atlas  

[![Deployed on Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)](https://render.com)

## 📅 Roadmap
- [x] Core Video Calling  
- [x] Screen Sharing  
- [x] Text Chat  
- [ ] Mobile Optimization  
- [ ] End-to-End Encryption  
- [ ] Meeting Analytics  

## 👨‍💻 Author
**Abhishek P**  
Full Stack Developer  

<div align="center" style="margin-top: 20px;">
  <a href="https://github.com/abhishekpnaik05" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
  <a href="https://www.linkedin.com/in/abhishekpnaik" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
  <a href="mailto:abhishekpnaik05@gmail.com" target="_blank">
    <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email">
  </a>
</div>

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
