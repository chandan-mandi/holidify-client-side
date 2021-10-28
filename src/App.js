import logo from './logo.svg';
import './App.css'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './shared/Header/Header';
import Home from './pages/Home/Home/Home';
import Donation from './pages/Donation/Donation';
import Events from './pages/Events/Events';
import Blog from './pages/Blog/Blog';
import Register from './pages/Register/Register';

function App() {
  return (
    <div className="App">
       <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/donation">
            <Donation></Donation>
          </Route>
          <Route path="/events">
            <Events></Events>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
