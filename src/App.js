import "./App.css";
import Calendar from "./components/calendar/Calendar";
function App() {
  const someDate = new Date(2022, 9, 3);
  return <Calendar date={someDate} />;
}

export default App;
