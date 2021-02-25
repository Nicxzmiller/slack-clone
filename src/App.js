import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header";
import './App.css';
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
        <Router>
            <>
                <Switch>
                    <Route path="/" exact>
                        <Header/>
                        <Sidebar />
                    </Route>
                </Switch>
            </>
        </Router>
    </div>
  );
}

export default App;
