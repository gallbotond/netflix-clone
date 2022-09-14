import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./global-styles";
import { FirebaseContext } from "./context/firebase";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDepGjSU20-NvHD5m3KhCb0Y-wG50qh0bI",
  authDomain: "netflix-clone-backend-2ca70.firebaseapp.com",
  projectId: "netflix-clone-backend-2ca70",
  storageBucket: "netflix-clone-backend-2ca70.appspot.com",
  messagingSenderId: "218676938164",
  appId: "1:218676938164:web:b0d7924a7f08abe5261ee1",
  measurementId: "G-PFNT5F7B46",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FirebaseContext.Provider value={{ firebase: window.firebase }}>
        <GlobalStyles />
        <App />
      </FirebaseContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
