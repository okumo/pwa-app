import './App.css';
import { Navbar, Nav } from "react-bootstrap";
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom'
import {About, Home, Users} from './containers/index'
import { useEffect } from 'react';
import firebase from './firebase'

function App() {
  useEffect(() => {
    const msg = firebase.messaging();
    Notification.requestPermission().then(()=>{
      return msg.getToken();
    }).then((data)=>{
      console.warn("token", data)
    })
  }, [])
  return (
    <div className="App"> 
    <Router>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About</Link>
      <Link to="/users" className="nav-link">Users</Link>
    </Nav>
  </Navbar>
  <Switch>
  <Route path="/about" component={About}/>
  <Route path="/users" component={Users}/>
  <Route path="/" component={Home}/>

    </Switch>
    </Router>
    </div>

  );
}

export default App;
