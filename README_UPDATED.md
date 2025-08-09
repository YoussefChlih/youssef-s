# Youssef CHLIH - AI Specialist Portfolio

A modern, interactive portfolio showcasing AI expertise, projects, and professional journey.

## 🚀 Features

- **Neural Landing Experience**: Interactive homepage with AI-themed animations
- **Skills Matrix Visualization**: Real-time competency mapping with certification tracking
- **AI Project Showcase**: Featured projects including 3D Object Recognition, Speech Emotion Detection, and more
- **Professional Identity Hub**: Cultural integration with technical excellence
- **Experience Timeline**: Interactive career journey visualization
- **Admin Command Center**: Firebase-powered dashboard for portfolio management

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, TailwindCSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **Analytics**: Firebase Analytics

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/YoussefChlih/youssef_chlih_portfolio.git
cd youssef_chlih_portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Configure Firebase:
   - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication, Firestore, and Analytics
   - Copy your Firebase configuration
   - Update `src/utils/firebase.js` with your configuration:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id",
  measurementId: "your-measurement-id"
};
```

4. Start the development server:
```bash
npm start
```

## 🎯 Key Projects Featured

### 3D Object Recognition System
- **Technology**: DGCNN (Dynamic Graph Convolutional Neural Network)
- **Dataset**: ModelNet10
- **Interface**: Streamlit for real-time classification
- **GitHub**: [3d-obj-rec](https://github.com/YoussefChlih/3d-obj-rec)

### Web Scraping Agent
- **Frontend**: React with real-time WebSocket communication
- **Backend**: FastAPI with Selenium integration
- **Features**: Multi-format export, automated HTML parsing
- **GitHub**: [web_scraping_agent](https://github.com/YoussefChlih/web_scraping_agent)

### Speech Emotion Detection
- **Architecture**: CNN-BiLSTM for voice analysis
- **Integration**: Web application compatibility
- **GitHub**: [Speech_emotion_detection](https://github.com/YoussefChlih/Speech_emotion_detection)

### HireGenius - AI Recruitment Platform
- **NLP**: CV analysis and ranking
- **Computer Vision**: YOLOv8 for facial expression analysis
- **Audio Processing**: CNN-BiLSTM for voice emotion detection
- **GitHub**: [Cv-Ranking](https://github.com/YoussefChlih/Cv-Ranking)

## 📊 Skills & Certifications

### AI & Machine Learning
- **Python**: 95% proficiency (Certified)
- **TensorFlow**: 90% proficiency (Certified)
- **PyTorch**: 88% proficiency (Certified)
- **OpenCV**: 85% proficiency (Certified)
- **Scikit-learn**: 92% proficiency

### Web Development
- **React**: 88% proficiency
- **FastAPI**: 92% proficiency
- **JavaScript**: 85% proficiency
- **HTML5/CSS3**: 90%/87% proficiency

### Data Engineering
- **PostgreSQL**: 90% proficiency
- **MongoDB**: 82% proficiency
- **Apache Spark**: 85% proficiency (Certified)
- **Redis**: 78% proficiency

### DevOps & Cloud
- **Docker**: 88% proficiency (Certified)
- **Kubernetes**: 82% proficiency (Certified)
- **Oracle Cloud**: 85% proficiency (Certified)
- **GitLab CI**: 80% proficiency

## 🎓 Education & Certifications

- **EST Nador** - DUT in Artificial Intelligence and Data Engineering (2023-2025)
- **Oracle Cloud Infrastructure 2024 Certified AI Foundations Associate**
- **Oracle Cloud Infrastructure 2025 Generative AI Professional**
- **Machine Learning Engineering for Production (MLOps) Level 2** - Coursera
- **The Machine Learning Process A-Z** - 365 Data Science

## 🌍 Professional Experience

### 3d Smart Factory - AI Developer Intern (Feb 2025 - Jun 2025)
- Developed 3D object classification system using DGCNN
- Implemented ModelNet10 dataset integration
- Created interactive Streamlit application

### HardTech Maroc - AI Development Intern (Aug 2024 - Sep 2024)
- Designed automated IT fault detection system
- Conducted comprehensive data analysis
- Developed predictive models for system failure anticipation

## 🔧 Firebase Setup Instructions

### 1. Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Google Analytics (optional)

### 2. Enable Services
1. **Authentication**: 
   - Go to Authentication > Sign-in method
   - Enable Email/Password provider
2. **Firestore Database**:
   - Create database in production mode
   - Set up security rules
3. **Analytics**:
   - Enable Google Analytics integration

### 3. Configure Security Rules
```javascript
// Firestore Security Rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow admin access for authenticated users
    match /analytics/{document} {
      allow read, write: if request.auth != null;
    }
    match /notifications/{document} {
      allow read, write: if request.auth != null;
    }
    match /contactForms/{document} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## 📝 Admin Dashboard Features

- **Authentication**: Secure Firebase login
- **Analytics**: Website performance tracking
- **Notifications**: Real-time update system
- **Content Management**: Portfolio updates
- **Settings**: Firebase configuration management

## 📱 Contact Information

- **Email**: youssefchlih.ai@gmail.com
- **LinkedIn**: [linkedin.com/in/youssef-chlih](https://linkedin.com/in/youssef-chlih)
- **GitHub**: [github.com/YoussefChlih](https://github.com/YoussefChlih)
- **Phone**: 0606544498

## 🌟 Languages

- **Arabic**: Native
- **French**: Fluent
- **English**: Fluent

## 📄 License

© 2025 Youssef CHLIH. All rights reserved.

---

*"Turning data into intelligence, one algorithm at a time."* 🚀
