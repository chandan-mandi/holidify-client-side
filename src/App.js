import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './shared/Header/Header';
import Home from './pages/Home/Home/Home';
import Events from './pages/Events/Events';
import Blog from './pages/Blog/Blog';
import Register from './pages/Register/Register';
import Services from './pages/Services/Services';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PlaceDetails from './pages/PlaceDetails/PlaceDetails';
import AuthProvider from './Context/AuthProvider';
import Booking from './pages/Booking/Booking';
import Hotes from './pages/Hotels/Hotels';
import Hotels from './pages/Hotels/Hotels';
import MyOrders from './MyOrders/MyOrders';
import AdminDashboard from './components/Admin/AdminDashboard/AdminDashboard';
import Footer from './shared/Footer/Footer';
import Contact from './pages/Contact/Contact';
import Update from './components/Admin/Update/Update';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <PrivateRoute exact path="/place/:id">
            <PlaceDetails></PlaceDetails>
          </PrivateRoute>
          <PrivateRoute exact path="/hotels">
            <Hotels></Hotels>
          </PrivateRoute>
          <PrivateRoute path="/booking/:id">
            <Booking></Booking>
          </PrivateRoute>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <PrivateRoute path="/orders">
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute path="/update/:id">
            <Update></Update>
          </PrivateRoute>
          <PrivateRoute path="/adminDashboard">
            <AdminDashboard></AdminDashboard>
          </PrivateRoute>
          <Route path="/register">
            <Register></Register>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </AuthProvider>
  );
}

export default App;
