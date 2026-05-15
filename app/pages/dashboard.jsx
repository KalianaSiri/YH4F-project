import React from "react";

export default function Dashboard() {
  return (
    <div className = "dashboard-container">

      {/* HEADER */}
      <header className = "dashboard-header">
      <h1>DASHBOARD</h1>
      <p>Your study control center</p>
      </header>

      {/* MAIN GRID */}
      <section className = "dashboard-grid">
        
        <div className = "dashboard-card">
          <h2>POMODORO</h2>
          <p>Start a focused study session</p>
          <button onClick = {() => window.location.href = "/pomodoro"}>
           START Pomodoro
          </button>
        </div>

        <div className = "dashboard-card">
          <h2>CALENDAR</h2>
          <p>Track exams, homework, and events</p>
          <button onClick = {() => window.location.href = "/calendar"}>
           Open calendar
          </button>
        </div>

        <div className = "dashboard-card">
          <h2>NOTES</h2>
          <p>Create and organize yout notes</p>
          <button onClick = {() => window.location.href = "/notes"}>
           Go to notes
          </button>
        </div>

        <div className = "dashboard-card">
          <h2>TO-DO list</h2>
          <p>Manage your daily tasks</p>
          <button onClick = {() => window.location.href = "/todo"}>
           View tasks
          </button>
        </div>

        <div className = "dashboard-card">
          <h2>DICTIONARY</h2>
          <p>English words and meanings</p>
          <button onClick = {() => window.location.href = "/dictionary"}>
           Open dictionary
          </button>
       </div>

        <div className = "dashboard-card">
          <h2>TRANSLATOR</h2>
          <p>Translate any lenguage instantly</p>
          <button onClick = {() => window.location.href = "/translator"}>
           Go to translator 
          </button>
        </div>
        <div className = "dashboard-card">
          <h2>FLASHCARDS</h2>
          <p>Memorize words and concepts faster</p>
          <button onClick = {() => window.location.href = "/flashcards"}>
           Open flashcards
          </button>
        </div>

         <div className = "dashboard-card">
          <h2>GLOBAL GOALS</h2>
          <p>Learn and help improve the world</p>
          <button onClick = {() => window.location.href = "/global-goals"}>
           Open goals
          </button>
        </div>
      </section>
    </div>
  );
}
