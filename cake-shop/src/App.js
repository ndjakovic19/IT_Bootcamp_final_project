import { useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Store from "./components/Store";
import { StyledHeader } from "./components/styled/StyledHeader";
import { GlobalStyle } from "./components/styled/GlobalStyle";
import Footer from "./components/Footer";
import { FaBars } from "react-icons/fa";
import { BsXCircle } from "react-icons/bs"
import logo from './images/logo.svg'
import cart from './images/cart-icon.png'

const App = () => {
    const [user, setUser] = useState(null);
    const [open, setOpen] = useState(false)
    const [openLogin,setOpenLogin] = useState(false)
    const [openRegister,setOpenRegister] = useState(false)
     return (
        <>
            <Router basename = {process.env.PUBLIC_URL}>
                <GlobalStyle/>
                <StyledHeader>
                    <div className="container spikes">
                        <div className="row">
                            <p className="phone-info">+123 456 789</p>
                            <div className="login">
                                {
                                    user ?
                                        <>
                                            <span className="welcome">Welcome {user.username}</span>
                                            <button className="logout" onClick={() => setUser(null)}>Logout</button>
                                        </>
                                        :
                                        <>
                                            <Link onClick={() => setOpenLogin(!openLogin)} to="/login">Login</Link>
                                            <Link onClick={() => setOpenRegister(!openRegister)} to="/register">Register</Link>
                                        </>
                                }

                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <nav className="navbar">

                            <a className="navbar-brand" href="/IT_Bootcamp_final_project">
                                <img src={logo} alt="logo" />
                            </a>

                            <ul className="nav-links" style={{ transform: open ? "translateX(0px)" : "" }}>
                                <BsXCircle className="x-button" onClick={() => setOpen(!open)} />
                                <li className="list-reset">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="list-reset">
                                    <Link to="/about">About</Link>
                                </li>
                                <li className="list-reset">
                                    <Link to="/store">Store</Link>
                                </li>
                            </ul>
                            <FaBars className="burger" onClick={() => setOpen(!open)} />
                            <div className="search-cart-holder">
                                <div className="search">
                                    <input type="search" className="input-search"/>
                                    <button className="btn"></button>
                                </div>
                                <a href="/home" className="cart">
                                    <img src={cart} alt="cart-icon" />
                                    <span className="badge">2</span>
                                </a>
                            </div>

                        </nav>

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
                        <Login setUser = {setUser} openLogin={openLogin} setOpenLogin={setOpenLogin}/>
                    </Route>
                    <Route exact path="/register">
                        <Register setUser={setUser} openRegister={openRegister} setOpenRegister={setOpenRegister}/>
                    </Route>
                </Switch>
            </Router>
            <Footer />
        </>
    );
};

export default App;
