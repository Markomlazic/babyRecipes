import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import PageOne from "./components/PageOne/PageOne";
import "bootstrap/dist/css/bootstrap.min.css";
import PageTwo from "./components/PageTwo/PageTwo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
