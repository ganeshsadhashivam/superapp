import "./App.css";
import Entertainmentcategory from "./components/Entertainmentcategory";
import Loginpage from "./components/Loginpage";
import Userpage from "./components/Dashboard";
import Dashboard from "./components/Dashboard";
import DashTimerNotes from "./components/DashTimerNotes";

function App() {
  return (
    <div className="App">
      <Loginpage />
      <Entertainmentcategory />
      <Dashboard />
      <DashTimerNotes />
    </div>
  );
}

export default App;
