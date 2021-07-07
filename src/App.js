
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import LeagueInfo from "./components/LeagueInfo/LeagueInfo";


function App() {
  return (
    <div>

      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/details/:info">
            <LeagueInfo></LeagueInfo>
          </Route>
        </Switch>

      </Router>
          
    </div>
  );
}

export default App;
