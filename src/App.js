import React from 'react'
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"


// import Form from "./components/Form"
import Form02 from "./components/Form02"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true}>
          <Form02 />
          
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
