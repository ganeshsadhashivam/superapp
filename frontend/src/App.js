import "./App.css";
import Entertainmentcategory from "./components/Entertainmentcategory";
import Loginpage from "./components/Loginpage";
import Userpage from "./components/Dashboard";
import Dashboard from "./components/Dashboard";
import DashTimerNotes from "./components/DashTimerNotes";
import MoviesList from "./components/MoviesList";

function App() {
  return (
    <div className="App">
      <Loginpage />
      <Entertainmentcategory />
      <Dashboard />
      <DashTimerNotes />
      <MoviesList />
    </div>
  );
}

export default App;
