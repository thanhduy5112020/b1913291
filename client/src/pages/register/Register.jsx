import axios from "axios";
import { useRef } from "react";
import "./register.css";
import "../login/login.css";
import { useHistory, useNavigate } from "react-router";

export const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const city = useRef();
  const country = useRef();
  const phone = useRef();
  const navigate = useNavigate()
  //   const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
        city: city.current.value,
        country: country.current.value,
        phone: phone.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        navigate("/")
        // history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="llContainer">

        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              className="loginInput"
              type="password"
              // minLength="6"
            />
            <input
              placeholder="Password Again"
              required
              ref={passwordAgain}
              className="loginInput"
              type="password"
            />
            <input
              placeholder="City"
              required
              ref={city}
              className="loginInput"
            />
            <input
              placeholder="Country"
              required
              ref={country}
              className="loginInput"
            />
            <input
              placeholder="Phone"
              required
              ref={phone}
              className="loginInput"
            />
            <button className="loginButton" type="submit" onClick={handleClick}>
              Sign Up
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}