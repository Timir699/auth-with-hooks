
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home'
import Login from './components/Login/Login';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import Shipping from './components/Shipping/Shipping';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Home">
              <Home></Home>
            </Route>
            <Route path="/Login">
              <Login></Login>
            </Route>
            <Route path="/Register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/Shipping">
              <Shipping></Shipping>
            </PrivateRoute>
            <PrivateRoute path="/PlaceOrder">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
