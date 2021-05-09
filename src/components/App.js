import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Detail from "../routes/Detail";
import Home from "../routes/Home";

function App() {
  // exact : 주어진 경로가 정확해야지만 페이지를 보여준다.
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={Detail} />
    </Router>
  );
}

export default App;
