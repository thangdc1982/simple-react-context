import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Reviews from './components/Reviews';
import Checkout from './components/Checkout';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/reviews">
            <Reviews></Reviews>
          </Route>
          <Route path="/checkout">
            <Checkout></Checkout>
          </Route>
          <Route path="/">            
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
