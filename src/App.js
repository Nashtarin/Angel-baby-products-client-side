import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Explore from './Pages/Explore/Explore';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Notfound from './Pages/Notfound/Notfound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Aboutus from './Pages/AboutUs/AboutUs';
import DashBoard from './Pages/DashBoard/DashBoard';

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
          <Route path='/login'>
            <Login></Login>

          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <Route path='/dashboard'>
            <DashBoard></DashBoard>
          </Route>
          
          <Route path='/aboutus'>
            <Aboutus></Aboutus>
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
