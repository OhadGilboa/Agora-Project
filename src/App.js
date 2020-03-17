import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { observer } from "mobx-react";

@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

//as a Function//

// import React, { Component } from 'react';
// import { observer } from 'mobx-react'
// import './App.css';
// import Item from './components/Item';

// const App = observer((props) => {
//    ...
//    ...

//    return (
//       <div className="App"><input onChange = {this.handleChange}/><button onClick = {this.addItem}>Add</button>
//         ...
//       </div>
//    )
// })

// In the example above, we:

// Created a variable called App which is the name of our component
// We assigned the invocation of the observer function to App
// We passed our functional component as an argument to the observer function
// This example is identical to the first example only here we can use hooks (because we are using a functional component)

// As of now, we still aren't seeing any data from our store - so let's add that data in.
