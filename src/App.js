import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/header';
import Home from  './components/home';
import BookDetail from  './components/book-detail';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Header />
        <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/:book_id" component={BookDetail} />
      </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
