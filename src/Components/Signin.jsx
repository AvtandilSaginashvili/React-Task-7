function Signin() {

   const sign = () => {
        var email = document.getElementById("emailInput").value;
        var password = document.getElementById("passwordInput").value;

        if (email === "") {
            window.alert("გთხოვთ შეიყვანოთ მონაცემები");
        }else if (password === "") {
            window.alert("გთხოვთ შეიყვანოთ მონაცემები");
        }else {
            window.alert("თქვენ შეხვედით სისტემაში");
        }
    }

    return(
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-6">
                    <form className="formin">
                        <div>
                        <label className="label1">შეიყვანეთ თქვენი ელ. ფოსტა</label>
                        <div className="w-100">
                        <input type="email" id="emailInput" placeholder="@email.com" className="emailInput" />
                        </div>
                        <label className="label1 mt-3">შეიყვანეთ თქვენი პაროლი</label>
                        <div className="w-100">
                        <input type="password" id="passwordInput" placeholder="Password" className="emailInput" />
                        </div>
                        <button className="btn btn-success w-100 mt-3" onClick={sign} type="button">შესვლა</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signin;