import React from "react";
import { Routes, Route } from "react-router-dom";

// PAGES
import home from "./pages/home";
import dashboard from "./pages/dashboard";
import pomodoro from "./pages/pomodoro";
import calendar from "./pages/calendar";
import notes from "./pages/notes";
import todo from "./pages/Todo";
import dictionary from "./pages/dictionary";
import translator from "./pages/translator";
import flashcards from "./pages/flashcards";
import globalGoals from "./pages/globalGoals";

export default function App() {
  return (
    <Routes>

      {/* HOME */}
      <Route path="/" element={<Home />} />

      {/* DASHBOARD */}
      <Route path="/dashboard" element={<dashboard />} />

      {/* TOOLS */}
      <Route path="/pomodoro" element={<pomodoro />} />
      <Route path="/calendar" element={<calendar />} />
      <Route path="/notes" element={<notes />} />
      <Route path="/todo" element={<todo />} />
      <Route path="/dictionary" element={<dictionary />} />
      <Route path="/translator" element={<translator />} />
      <Route path="/flashcards" element={<flashcards />} />
      <Route path="/global-goals" element={<globalgoals />} />

    </Routes>
  );
}
