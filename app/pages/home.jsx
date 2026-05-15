import React from "react";

export default function Home() {
  return (
    <div className = "home-container">
      
      <header className = "home-header">
        <h1>Welcome to your study app</h1>
        <p>Organize your day, study better, and stay focused. All in only one app.</p>
      </header>
      <div className = "home-enter">
        <button onClick = {() => window.location.href = "/dashboard"}>
         Enter App
        </button>
       </div>
    </div>
  );
}
