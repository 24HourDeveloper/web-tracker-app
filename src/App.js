import React, { useEffect } from "react";
import firebase from "firebase";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import RegisterUser from "./components/RegisterUser";
import { API_KEY, AUTH_DOMAIN, DB_URL, PROJECT_ID } from "./config";
import Dashboard from "./components/Dashboard";

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
    <Router>
      <div className="App">
        <Route exact path="/" component={RegisterUser} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
