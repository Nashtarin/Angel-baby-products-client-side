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
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ProductDetail from './Pages/Home/ProductDetail/ProductDetail';
import Payment from './Pages/Payment/Payment';

function App() {
  return (
    <div className="App">
 <AuthProvider>
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
          <PrivateRoute path='/dashboard'>
            <DashBoard></DashBoard>
          </PrivateRoute>
          
          <Route path='/aboutus'>
            <Aboutus></Aboutus>
          </Route>
          <Route path='/payment/:id'>
            <Payment></Payment>
          </Route>
          <PrivateRoute path="/products/:productId">
              <ProductDetail></ProductDetail>
            </PrivateRoute>

          
          <Route path="*">
            <Notfound></Notfound>

          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
 </AuthProvider>
    
    </div>
  );
}

export default App;
