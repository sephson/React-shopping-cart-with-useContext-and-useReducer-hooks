import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Store from "./components/Store/Store";
import Cart from "./components/Cart/Cart";
import AppState from "./context/AppState";

function App() {
  return (
    <div className="App">
      <AppState>
        <Router>
          <nav className="navbar">
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/">Store</Link>
              </li>
              <li className="nav-item">
                <Link to="/Cart">Cart </Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/" component={Store} />
            <Route exact path="/Cart" component={Cart} />
          </Switch>
        </Router>
      </AppState>
    </div>
  );
}

export default App;
