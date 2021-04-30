import 'bootstrap';

import getUsers from "./routesApi"
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <div className="root-app">
      <Header />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
