import React from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom";


import MatUI from "./components/matui.component";

function App() {
  return (
    <Router>
       <MatUI />
    </Router>


  );
}

export default App;