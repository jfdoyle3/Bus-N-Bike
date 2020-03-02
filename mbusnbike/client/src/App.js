import React from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom";


import Navbar from "./components/navbar.component"
import Sidebar from "./components/sidebar.component";
import Test from "./components/test.component";
import Page from "./components/pagelayout.component";

function App() {
  return (

 
  <Router>
    <div className="container">
    <Page />
    </div>
  </Router>
 
  );
}

export default App;