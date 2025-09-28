# 🔥 Firebase Setup Instructions for WSL2 Score Predictor

## Step 1: Create Firebase Project
1. Go to: https://console.firebase.google.com/
2. Click "Create a project"
3. Project name: "WSL2-Score-Predictor" (or any name you prefer)
4. Disable Google Analytics (not needed)
5. Click "Create project"

## Step 2: Set up Firestore Database
1. In Firebase Console, click "Firestore Database" in left menu
2. Click "Create database"
3. **Important:** Choose "Start in test mode" 
4. Select your preferred location (choose closest to users)

## Step 3: Get Your Firebase Configuration
1. Click the gear icon ⚙️ → "Project settings"
2. Scroll down to "Your apps" section
3. Click the web icon `</>`
4. App nickname: "WSL2-Web-App"
5. **Copy the firebaseConfig object** - it looks like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "your-project-name.firebaseapp.com",
  projectId: "your-project-name",
  storageBucket: "your-project-name.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456"
};
```

## Step 4: Update Your Code
1. Copy `app/firebase-config.js` to `app/firebase-config-private.js`
2. **Edit the private file** with your actual Firebase config:
3. **Replace the placeholder config** in `firebase-config-private.js` with your real values
4. The private file is gitignored and won't be committed to your public repo

```javascript
// In firebase-config-private.js - Replace with your actual config
const firebaseConfig = {
  apiKey: "your-real-api-key-here",           // ← Your real values here
  authDomain: "your-real-project.firebaseapp.com", 
  projectId: "your-real-project-id",
  storageBucket: "your-real-project.appspot.com",
  messagingSenderId: "your-real-sender-id",
  appId: "your-real-app-id"
};
```

**Note:** Firebase client credentials are actually safe to be public, but this approach follows security best practices.

## Step 5: Deploy to GitHub Pages
1. Commit and push your changes to GitHub
2. Your predictions will now persist across devices and browsers!

## Step 6: (Optional) Secure Your Database
After testing, you can secure your Firestore with these rules:

```javascript
// Firestore Security Rules (optional)
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth == null; // Allow anyone for now
    }
  }
}
```

## ✅ Benefits After Setup:
- 🔄 **Real-time sync** across all devices
- 💾 **Permanent storage** - predictions never lost
- 🚀 **Cross-browser** - works on any device
- 🆓 **Free tier** - handles your league easily
- ⚡ **Instant saves** - no manual save needed

## 🚨 Important Notes:
- Keep your Firebase config **public** - it's safe for client-side apps
- The app will **fallback to localStorage** if Firebase is unavailable
- Current predictions will **automatically migrate** to Firebase
- No data will be lost during the transition

## 🆘 Need Help?
If you have issues:
1. Check browser console for error messages
2. Verify your Firebase config is correctly copied
3. Make sure Firestore is in "test mode"
4. Ensure your project has Firestore enabled

Your WSL2 Score Predictor will now have enterprise-grade data persistence! 🏆