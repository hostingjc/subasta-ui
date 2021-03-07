
import { Switch, Route, Link } from "react-router-dom";
import './App.css';
import AddTutorial from "./AddTutorial";
import TutorialsList from "./TutorialList";


function App() {
  return (
    <div>
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <a href="/tutorials" className="navbar-brand">
        bezKoder
      </a>
      <div className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={"/tutorials"} className="nav-link">
            Tutorials
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/add"} className="nav-link">
            Add
          </Link>
        </li>
      </div>
    </nav>

    <div className="container mt-3">
    
      <Switch>
        <Route exact path={["/", "/sistema/tutorials"]} component={TutorialsList} />
        <Route exact path="/sistema/add" component={AddTutorial} />
      </Switch>
     
    </div>
  </div>
  );
}

export default App;
