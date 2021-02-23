import { useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import About from './components/About'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Store from './components/Store'
import { StyledHeader } from './components/styled/StyledHeader'
import { GlobalStyle } from './components/styled/GlobalStyle'

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <>
      <Router>
        <GlobalStyle />
        <StyledHeader>
          <div className="container">
            <div className="row">
              <p className="phone-info">+123 456 789</p>
              <div className="login">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </div>
            </div>
          </div>
          <div className="container">
            <nav className="navbar">
              <a className="navbar-brand" href="/home"><img src="./img/logo.svg" alt="logo" /></a>
              <ul>
                <li className="list-reset"><Link to="/">Home</Link></li>
                <li className="list-reset"><Link to="/about">About</Link></li>
                <li className="list-reset"><Link to="/store">Store</Link></li>
              </ul>
            </nav>
          </div>

          <div className="search-cart-holder">
            <div className="search">
              <input type="text" className="form-control" />
              <button className="btn"></button>
            </div>
            <a href="/home" className="cart">
              <img src="./img/cart-icon.png" alt="cart-icon" />
              <span className="badge">2</span>
            </a>
          </div>
        </StyledHeader>
        <Switch>
          <Route exact path="/">
            <Home user={user} />
          </Route>
          <Route exact path="/about">
            <About user={user} />
          </Route>
          <Route exact path="/store">
            <Store user={user} />
          </Route>
          <Route exact path="/login">
            <Login setUser={setUser} />
          </Route>
          <Route exact path="/register">
            <Register setUser={setUser} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
