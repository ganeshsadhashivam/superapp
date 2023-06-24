import React from "react";
import img from "../assets/image 13.png";
import { useState } from "react";
const Loginpage = () => {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState(false);

  const validate = (e) => {
    e.preventDefault();
    if (name || username || email || mobile === "") {
      setError(true);
    }
  };

  const handleInput = (e) => {
    setName(e.target.value);
    setUserName(e.target.setUserName);
    setEmail(e.target.email);
    setMobile(e.target.mobile);
  };
  console.log(name);
  return (
    <div className="loginpage">
      <div>
        <img src={img} alt="concert" />
        <p id="textonconcert">Discover new things on Superapp</p>
      </div>
      <div className="login-inputs">
        <form action="" onSubmit={validate}>
          <div>
            <p id="superapp">superapp</p>
          </div>
          <div>
            <p>create your new Account</p>
          </div>
          <div>
            <label htmlFor="name">
              <input
                type="text"
                id="name"
                placeholder="name"
                value={name}
                onChange={handleInput}
              />
            </label>
            {error && name === "" ? (
              <span className="error">Field is Required</span>
            ) : (
              ""
            )}
          </div>
          <div>
            <label htmlFor="username">
              <input
                type="text"
                id="username"
                placeholder="username"
                value={username}
                onChange={handleInput}
              />
            </label>
            {error && username === "" ? (
              <span className="error">Field is Required</span>
            ) : (
              ""
            )}
          </div>
          <div>
            <label htmlFor="email">
              <input
                type="text"
                id="email"
                placeholder="Email"
                value={email}
                onChange={handleInput}
              />
            </label>
            {error && email === "" ? (
              <span className="error">Field is Required</span>
            ) : (
              ""
            )}
          </div>
          <div>
            <label htmlFor="mobileno">
              <input
                type="text"
                id="mobileno"
                placeholder="Mobile"
                value={mobile}
                onChange={handleInput}
              />
            </label>
            {error && mobile === "" ? (
              <span className="error">Field is Required</span>
            ) : (
              ""
            )}
          </div>
          <div>
            <label
              htmlFor="registration
          "
            >
              <input type="checkbox" id="registration" name="registration" />
            </label>
            Share my registration data with Superapp
            {/* <label for="vehicle1">
              Share my registration data with Superapp
            </label> */}
          </div>
          <div>
            <button>signup</button>
          </div>
          <div className="tc">
            <p>
              By clicking on Sign up. you agree to Superapp
              <span id="termandconditions"> Terms and Conditions of Use</span>
            </p>
          </div>
          <div className="tc">
            <p>
              To learn more about how Superapp collects, uses, shares and
              protects your personal data please head Superapp
              <span id="privacypolicy"> Privacy Policy</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Loginpage;
