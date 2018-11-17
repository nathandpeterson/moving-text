import React, { Component } from 'react'
import Ozymandias from './components/Ozymandias'
import Header from './components/Header'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Ozymandias />
      </div>
    );
  }
}

export default App;
