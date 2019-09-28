import React from "react";
import img from "../images/login-image.jpg";

export default function RegisterUser() {
  return (
    <div
      style={{ display: "flex", height: "100vh", backgroundColor: "#F8F8F8" }}
    >
      <img src={img} alt="he road." />
      <div style={{ width: "100%", margin: "auto auto" }}>
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
          />
          <input
            type="email"
            style={styles.inputStyle}
            placeholder="Enter Email"
          />
          <input
            type="password"
            style={styles.inputStyle}
            placeholder="Enter Password"
          />
          <button style={styles.buttonStyle}>Submit</button>
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
