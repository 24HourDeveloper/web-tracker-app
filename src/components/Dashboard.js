import React from "react";

import img from "../images/profile-pic.png";

export default function Dashboard() {
  return (
    <div style={{ display: "flex", width: "100%", height: "100vh" }}>
      <div
        style={{
          flexGrow: 1.5,
          borderColor: "blue",
          borderWidth: 2,
          borderStyle: "solid",
          padding: 15
        }}
      >
        <img src={img} width={100} />
        <h2>Susan Kirk</h2>
        <p>Front-end Developer</p>
        <hr />

        <p style={{ textAlign: "left", fontWeight: "bold" }}>Dashboard</p>
        <p style={{ textAlign: "left", fontWeight: "bold" }}>Users</p>
      </div>
      <div
        style={{
          flexGrow: 8.5,
          borderColor: "red",
          borderWidth: 2,
          borderStyle: "solid"
        }}
      >
        <h1>side 2</h1>
      </div>
    </div>
  );
}
