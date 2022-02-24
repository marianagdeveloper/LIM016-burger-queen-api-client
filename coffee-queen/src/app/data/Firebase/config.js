import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js';
const firebaseConfig = {
    apiKey: "AIzaSyCR1PxY8iZP-TCrpGF0oHTXllHVvEmkhr8",
    authDomain: "coffee-queen-d014f.firebaseapp.com",
    projectId: "coffee-queen-d014f",
    storageBucket: "coffee-queen-d014f.appspot.com",
    messagingSenderId: "432009793542",
    appId: "1:432009793542:web:cf4f852b833d13f4d5b387"
};
import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
    uploadBytesResumable,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js";
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export {
    storage,
    ref,
    uploadBytes,
    getDownloadURL,
    uploadBytesResumable,
};