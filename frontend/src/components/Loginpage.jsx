import React from "react";
import img from "../assets/image 13.png";
const Loginpage = () => {
  return (
    <div className="loginpage">
      <div>
        <img src={img} alt="concert" />
        <p id="textonconcert">Discover new things on Superapp</p>
      </div>
      <div className="login-inputs">
        <form action="">
          <div>
            <p id="superapp">superapp</p>
          </div>
          <div>
            <p>create your new Account</p>
          </div>
          <div>
            <label htmlFor="name">
              <input type="text" id="name" placeholder="name" />
            </label>
          </div>
          <div>
            <label htmlFor="username">
              <input type="text" id="username" placeholder="username" />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              <input type="text" id="email" placeholder="Email" />
            </label>
          </div>
          <div>
            <label htmlFor="mobileno">
              <input type="text" id="mobileno" placeholder="Mobile" />
            </label>
          </div>
          <div>
            <label
              htmlFor="registration
          "
            >
              <input
                type="checkbox"
                id="registration"
                name="registration"
                value=""
              />
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
          <div>
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
