import React, { useEffect } from "react";
import firebase from "firebase";
import "./App.css";
import RegisterUser from "./components/RegisterUser";
import { API_KEY, AUTH_DOMAIN, DB_URL, PROJECT_ID } from "./config";

function App() {
  useEffect(() => {
    const init = {
      apiKey: API_KEY,
      authDomain: AUTH_DOMAIN,
      databaseURL: DB_URL,
      projectId: PROJECT_ID
    };

    firebase.initializeApp(init);
  }, []);
  return (
    <div className="App">
      <RegisterUser />
    </div>
  );
}

export default App;
