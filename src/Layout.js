import React from "react";
import {Link, Outlet} from "react-router-dom";

function layout() {
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">

        <ul>

        <li>
            <Link to={"/"} id="home" >Home</Link>
        </li>

        <li>
           <Link to={"/signin"} id="signin" >Sign In</Link> 
        </li>

        <li>
            <Link to={"/signup"} id="signup" >Sign Up</Link>
        </li>

        </ul>

        <Outlet />

  </div>
</nav>
    )
}

export default layout;