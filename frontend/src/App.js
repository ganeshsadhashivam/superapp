import "./App.css";
import Entertainmentcategory from "./components/Entertainmentcategory";
import Loginpage from "./components/Loginpage";
import Userpage from "./components/Dashboard";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Loginpage />
      <Entertainmentcategory />
      <Dashboard />
    </div>
  );
}

export default App;
