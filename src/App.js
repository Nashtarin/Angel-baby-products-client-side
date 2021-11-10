import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Explore from './Pages/Explore/Explore';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Notfound from './Pages/Notfound/Notfound';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>

          </Route>
          <Route exact path='/home'>
            <Home></Home>

          </Route>
          <Route path='/explore'>
            <Explore></Explore>
          </Route>
          <Route path="*">
            <Notfound></Notfound>

          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
    
    </div>
  );
}

export default App;
