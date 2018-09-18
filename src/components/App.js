import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import {getInitialData} from "../api/intiialData";

class App extends Component {

  componentDidMount()
  {

  }

  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
