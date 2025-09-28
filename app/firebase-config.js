// Firebase Configuration
// These credentials are SAFE to be public for client-side Firebase apps
// Security is handled by Firestore rules, not by hiding these values
const firebaseConfig = {
  apiKey: "AIzaSyCbyiH76iBAXG7d96zdjbFxlF4kGgg_amg",
  authDomain: "wsl2-score-predictor.firebaseapp.com",
  projectId: "wsl2-score-predictor",
  storageBucket: "wsl2-score-predictor.firebasestorage.app",
  messagingSenderId: "312346786955",
  appId: "1:312346786955:web:641cd371e3ac935e34e88e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();

// Firebase Database Functions
const FirebaseDB = {
  // Save user predictions to Firestore
  async saveUserData(username, userData) {
    try {
      await db.collection('users').doc(username).set({
        ...userData,
        lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
      });
      console.log(`✅ Saved ${username}'s data to Firebase`);
    } catch (error) {
      console.error('❌ Error saving to Firebase:', error);
      // Fallback to localStorage if Firebase fails
      localStorage.setItem('wsl2_user_data', JSON.stringify(userData));
    }
  },

  // Load user predictions from Firestore
  async loadUserData(username) {
    try {
      const doc = await db.collection('users').doc(username).get();
      if (doc.exists) {
        const userData = doc.data();
        console.log(`✅ Loaded ${username}'s data from Firebase`);
        return userData;
      } else {
        console.log(`ℹ️  No Firebase data found for ${username}`);
        return null;
      }
    } catch (error) {
      console.error('❌ Error loading from Firebase:', error);
      // Fallback to localStorage if Firebase fails
      const localData = localStorage.getItem('wsl2_user_data');
      return localData ? JSON.parse(localData) : null;
    }
  },

  // Get all users for league table
  async getAllUsers() {
    try {
      const snapshot = await db.collection('users').get();
      const users = [];
      snapshot.forEach(doc => {
        users.push({ username: doc.id, ...doc.data() });
      });
      console.log(`✅ Loaded ${users.length} users from Firebase`);
      return users;
    } catch (error) {
      console.error('❌ Error loading all users from Firebase:', error);
      return [];
    }
  },

  // Save a single prediction (for real-time updates)
  async savePrediction(username, matchId, prediction) {
    try {
      await db.collection('users').doc(username).update({
        [`predictions.${matchId}`]: prediction,
        lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
      });
      console.log(`✅ Saved ${username}'s prediction for match ${matchId}`);
    } catch (error) {
      console.error('❌ Error saving prediction to Firebase:', error);
    }
  }
};

// Export for global use
window.FirebaseDB = FirebaseDB;