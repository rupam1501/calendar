import React from "react";
import "./calendar.css";

const Calendar = ({ date }) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const curDate = date.getDate();
  // Create an array of dates for the month and year
  const dates = [];
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  for (let i = 1; i <= daysInMonth; i++) {
    dates.push(new Date(year, month, i));
  }

  // Define an array of weekday names
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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
    "December",
  ];
  const monthName = months[date.getMonth()];

  // Group the dates by week
  const weeks = [];
  let currentWeek = [];
  dates.forEach((date) => {
    currentWeek.push(date);
    if (date.getDay() === 6) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  });
  if (currentWeek.length > 0) {
    weeks.push(currentWeek);
  }

  return (
    <table className="calendar">
      <thead>
        <tr>
          <th colSpan="7" className="month-year">
            {` ${monthName} ${year}`}
          </th>
        </tr>
        <tr>
          {weekdays.map((weekday) => (
            <th key={weekday}>{weekday}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* Render each week in a new row */}
        {weeks.map((week, index) => (
          <tr key={index}>
            {weekdays.map((weekday, index) => {
              const date = week.find((date) => date.getDay() === index);
              const isCurDate = date && date.getDate() === curDate;
              return (
                <td key={weekday} className={`${isCurDate ? "highlight" : ""}`}>
                  {date ? date.getDate() : ""}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Calendar;
