import React from "react-router-dom";

function Signup() {

    const up = () => {
        var namee = document.getElementById("nameInput").value;
        var surnamee = document.getElementById("surnameInput").value;
        var email2 = document.getElementById("emailInput").value;
        var pass = document.getElementById("passwordInput").value;

        if (namee === "") {
            window.alert("გთხოვთ შეიყვანოთ მონაცემები");
        }else if (surnamee === "") {
            window.alert("გთხოვთ შეიყვანოთ მონაცემები");
        }else if (email2 === "") {
            window.alert("გთხოვთ შეიყვანოთ მონაცემები");
        }else if (pass === "") {
            window.alert("გთხოვთ შეიყვანოთ მონაცემები");
        }else {
            window.alert("თქვენ წარმატებით გაიარეთ რეგისტრაცია");
        }
}

    return (
        <form className="formin">
                        <div>
                        <label className="label1">შეიყვანეთ თქვენი სახელი</label>
                        <div className="w-100">
                        <input type="text" id="nameInput" placeholder="სახელი" className="emailInput" />
                        </div>
                        <label className="label1">შეიყვანეთ თქვენი გვარი</label>
                        <div className="w-100">
                        <input type="text" id="surnameInput" placeholder="გვარი" className="emailInput" />
                        </div>
                        <label className="label1">შეიყვანეთ თქვენი ელ. ფოსტა</label>
                        <div className="w-100">
                        <input type="email" id="emailInput" placeholder="@email.com" className="emailInput" />
                        </div>
                        <label className="label1 mt-3">შეიყვანეთ თქვენი პაროლი</label>
                        <div className="w-100">
                        <input type="password" id="passwordInput" placeholder="Password" className="emailInput" />
                        </div>
                        <button className="btn btn-success w-100 mt-3" onClick={up} type="button">შესვლა</button>
                        </div>
                    </form>
    )
}

export default Signup;