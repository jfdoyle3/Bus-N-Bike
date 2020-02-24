import React from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component"
import Sidebar from "./components/sidebar.component";
import Test from "./components/test.component"

function App() {
  return (

 
  <Router>
    <div className="container">
     <Navbar />
     <Sidebar />
     <Test />
    </div>
  </Router>
 
  );
}

export default App;