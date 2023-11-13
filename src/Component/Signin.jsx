import React from "react";

function Signin() {
    return(
        <form>
            <label>Email</label>
            <input type="Email" />
            <hr />

            <label>Password</label>
            <input type="Password" />

            <p>Forgot<a href="#">Password?</a></p>

            <button type="submit">Sign In</button>
        </form>
    )
}

export default Signin;