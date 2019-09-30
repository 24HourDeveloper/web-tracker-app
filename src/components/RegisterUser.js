import React, { useState } from "react";
import firebase from "firebase";
import img from "../images/login-image.jpg";

export default function RegisterUser() {
  const [input, setInput] = useState({ name: "", email: "", password: "" });
  const [uid, setUid] = useState("");
  const [error, setError] = useState("");

  const registerUser = async e => {
    e.preventDefault();

    const { email, password } = input;

    try {
      const userObject = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      setInput({ name: "", email: "", password: "" });
      setUid(userObject.user.uid);
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setError(err.message);
      }

      if (err.code === "auth/invalid-email") {
        setError(err.message);
      }
      console.log(process.env.REACT_APP_API_KEY);
    }
  };

  return (
    <div
      style={{ display: "flex", height: "100vh", backgroundColor: "#F8F8F8" }}
    >
      <img src={img} alt="he road." />
      <div style={{ width: "100%", margin: "auto auto" }}>
        {error ? <p>{error}</p> : null}
        <h1>Register an account</h1>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            width: "60%",
            marginLeft: "20%"
          }}
        >
          <input
            type="text"
            style={styles.inputStyle}
            placeholder="Enter Name"
            value={input.name}
            onChange={e => {
              setInput({ ...input, name: e.target.value });
            }}
          />
          <input
            type="email"
            style={styles.inputStyle}
            placeholder="Enter Email"
            value={input.email}
            onChange={e => {
              setInput({ ...input, email: e.target.value });
            }}
          />
          <input
            type="password"
            style={styles.inputStyle}
            placeholder="Enter Password"
            value={input.password}
            onChange={e => {
              setInput({ ...input, password: e.target.value });
            }}
          />
          <button style={styles.buttonStyle} onClick={registerUser}>
            Submit
          </button>
          <p>
            Have an account already? <strong>Sign In</strong>
          </p>
        </form>
      </div>
    </div>
  );
}

const styles = {
  inputStyle: {
    padding: 18,
    borderRadius: 5,
    borderColor: "#E0E0E0",
    borderWidth: 1,
    fontSize: 16,
    margin: 10,
    backgroundColor: "#F8F8F8"
  },
  buttonStyle: {
    padding: 18,
    borderRadius: 5,
    borderColor: "#E0E0E0",
    borderWidth: 1,
    fontSize: 16,
    margin: 10,
    backgroundColor: "#E0E0E0",
    color: "#808080"
  }
};
