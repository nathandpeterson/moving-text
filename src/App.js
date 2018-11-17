import React, { Component } from 'react'
import Ozymandias from './components/samples/Ozymandias'
import Header from './components/Header'


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Ozymandias />
      </div>
    );
  }
}

export default App;
