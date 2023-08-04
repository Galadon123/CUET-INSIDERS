import "./Login.css";
import { useContext, useState } from "react";
import React from "react";
import { AuthContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { logUser, googleLogIn, forgetPassword } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const LoginHandle = (e) => {
    e.preventDefault();
    logUser(email, password)
      .then((result) => {
        navigate("/temp");
      })
      .catch((error) => setError(error.message));
  };
  const PasswordReset = () => {
    forgetPassword(email)
      .then(() => {
        setError("Password Reset Email is been sent");
      })
      .catch(() => {
        setError("Please Add a valid Email");
      });
  };
  const emailAdd = (e) => {
    setEmail(e.target.value);
  };
  const addpassword = (e) => {
    setPass(e.target.value);
  };
  const googlesignin = () => {
    googleLogIn()
      .then((result) => {
        navigate("/temp");
      })
      .catch((error) => console.error(error));
  };
  return (
    <section className="bg-gray-200">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
        >
          <img className="w-12 h-12 mr-2" src="./images/logo.png" alt="logo" />
          CUET-INSIDERS
        </a>
        <div className="w-full px-72 bg-white rounded-lg shadow-2xl  md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Login
            </h1>
            <form
              onSubmit={LoginHandle}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your email
                </label>
                <input
                  onBlur={emailAdd}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-2xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Enter Your Email"
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Password
                </label>
                <input
                  onBlur={addpassword}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Your Password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-2xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required=""
                />
              </div>
              <h1 className="text-red-500">{error}</h1>
              <br />
              <a href="#">
                <button onClick={PasswordReset}>Forgot Password?</button>
              </a>
              <div className="flex items-start"></div>
              <button
                onClick={LoginHandle}
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-2xl text-sm px-5 py-2.5 text-center"
              >
                <a href="#">Sign in</a>
              </button>
              </form>
              <div className="flex flex-wrap justify-center ">
                <span>SignUp with Google </span>{" "}
                <div>
                  <button onClick={googlesignin} className="">
                    <img
                      src="https://i.ibb.co/S09q5cJ/google-icon.png"
                      alt=""
                      className="h-8 ml-2"
                    />
                  </button>
                </div>
              </div>
              <p className="text-md text-gray-900 text-center">
                New user?{" "}
                <a
                  href="/signup"
                  className="font-medium text-blue-600 hover:underline "
                >
                  Sign Up here
                </a>
              </p>
           
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;
