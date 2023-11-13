import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Layout from "./Layout";
import Signin from "./Component/Signin";
import Signup from "./Component/Signup";
import "./style.css";


class App extends React.Component {
    render () {
        return(

            
            <BrowserRouter>
            <Routes>
                <Route path="/" Element={<Layout />} />
                <Route path="signin" Element={<Signin />} />
                <Route path="/" Element={<Signup />} />
            </Routes>
            </BrowserRouter>

        )
    }
}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App/>);