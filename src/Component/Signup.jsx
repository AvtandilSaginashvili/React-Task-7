import React from "react";

function Signup() {
    return(
        <form>
            <label>Name</label>
            <input type="text" />

            <label>Surname</label>
            <input type="text" />


            <label>Email</label>
            <input type="Email" />
            <hr />

            <label>Password</label>
            <input type="Password" />

            

            <button className="btn btn-warning" type="submit">Sign In</button>
        </form>
    )
}

export default Signup;