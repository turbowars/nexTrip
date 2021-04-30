import 'bootstrap';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './About';

function App() {
  return (
    <Router>
      <div className="root-app">
        <Header />
        <div className="content">
          <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
