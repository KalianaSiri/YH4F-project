import React, { useState } from "react";

export default function Calendar() {

  // CURRENT DATE
  const currentDate = new Date();

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // STATES
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  // MONTHS
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  // DAYS IN CURRENT MONTH
  const daysInMonth = new Date(
    currentYear,
    currentMonth + 1,
    0
  ).getDate();

  // ADD EVENT
  const addEvent = () => {

    if (title === "" || date === "") {
      alert("Please fill all fields");
      return;
    }

    const newEvent = {
      title,
      date
    };

    setEvents([...events, newEvent]);

    // CLEAR INPUTS
    setTitle("");
    setDate("");
  };

  // GENERATE CALENDAR DAYS
  const days = [];

  for (let day = 1; day <= daysInMonth; day++) {

    // CREATE FULL DATE
    const fullDate = `${currentYear}-${String(
      currentMonth + 1
    ).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

    // FILTER EVENTS FOR THIS DAY
    const dayEvents = events.filter(
      (event) => event.date === fullDate
    );

    days.push(

      <div key={day}>

        <h3>{day}</h3>

        {/* EVENTS */}
        {dayEvents.map((event, index) => (
          <div key={index}>
            {event.title}
          </div>
        ))}

      </div>
    );
  }

  return (
    <div>

      {/* TITLE */}
      <h1>Calendar</h1>

      {/* MONTH */}
      <h2>
        {months[currentMonth]} {currentYear}
      </h2>

      {/* EVENT FORM */}
      <div>

        <input
          type="text"
          placeholder="Event title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button onClick={addEvent}>
          Add Event
        </button>

      </div>

      {/* CALENDAR */}
      <div>

        {days}

      </div>

    </div>
  );
}
