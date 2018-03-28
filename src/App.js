import React, { Component } from 'react';

import Footer from './components/Footer'
import AddTodo from './containers/Addtodo'
import VisibleTodoList from './containers/VisibleTodoList'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <div className="grid-x grid-margin-x">
       <div className="cell small-4">
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        </div>
        <div className="cell auto">This pending for</div>
       </div> 
      </div>
    );
  }
}

export default App;
