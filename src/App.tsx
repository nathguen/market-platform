import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Header } from './components/header';
import { ShoppingCart } from './components/shopping-cart';
import { HomePage } from './components/home';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <div>
            <Route exact={true} path="/" component={HomePage}/>
            <Route path="/shopping-cart" component={ShoppingCart} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
