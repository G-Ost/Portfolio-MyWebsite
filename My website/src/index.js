import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Projects from "./Components/MenuOptions/Projects";
import CV from "./Components/MenuOptions//CV";
import About from "./Components/MenuOptions/About";
import Contact from "./Components/MenuOptions/Contact";
import { StylesContext } from "./Contexts/StylesContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StylesContext>
        <Switch>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Projects">
            <Projects />
          </Route>
          <Route path="/CV">
            <CV />
          </Route>
          <Route path="/*">
            <App />
          </Route>
        </Switch>
      </StylesContext>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
