import React from "react";
import ReactDOM from "react-dom/client";import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import "./style.css";

class App extends React.Component {
    render() {
        return(
            <BrowserRouter>
            <ul className="ms-5 pt-5" style={{display: "flex", gap: "50px"}}>
                <li style={{listStyle: "none"}}>
                <Link className="signinlink" to={"/signin"}>Sign in</Link>
                </li>
                <li style={{listStyle: "none"}}>
                <Link className="signuplink" to={"/signup"}>Sign up</Link>
                </li>
            </ul>
            <Routes>
            <Route path="/signin" Component={Signin} />
            <Route path="/signup" Component={Signup} />
            </Routes>
            </BrowserRouter>
        )
    }
}

var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);