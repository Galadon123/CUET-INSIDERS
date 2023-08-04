import { useContext, useState } from "react";
import { AuthContext } from "../Context/UserContext";
import { Link, useNavigate } from "react-router-dom";
const Signup = () => {
  const userPhoto = "";
  const isMentor = false;
  const deptName = "";
  const CurrentUniversity = "";
  const CurrentCompany = "";
  const Skills = "";
  const CurrentLocation = "";
  const [error, setError] = useState("");
  const [Currentuser, setCurrentuser] = useState({});
  const navigate = useNavigate();
  const { user, createUser, googleLogIn, emialverify, updateUser } =
    useContext(AuthContext);
  const signUpHandle = (e) => {
    const { name, email, password, confirmPassword } = Currentuser;
    if (name === undefined || email === undefined || password === undefined) {
      setError("fill up the form");
      return;
    }
    e.preventDefault();
    if (password.length < 6) {
      setError("Please type at least 6 character password");
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError("Please add 2 uppercase latin letter");
      return;
    }
    if (password === confirmPassword) {
      setError("");
      createUser(email, password)
        .then((result) => {
          updateUser(name)
            .then(() => {
              console.log("user updated");
            })
            .catch(() => {
              setError(error.message);
            });
          emialverify().then(() => {
            alert("Please check your Email  and verify");
          });
          //UserStore();
          navigate("/login");
        })
        .catch((error) => {
          setError(error.message);
        });
    } else {
      setError("Password Doesn't Match");
      return;
    }
  };
  const inputHandle = (e) => {
    const value = e.target.value;
    const field = e.target.name;
    const newUser = { ...Currentuser };
    newUser[field] = value;
    setCurrentuser(newUser);
  };
  const googlesignIn = () => {
    googleLogIn()
      .then((result) => {
        navigate("/temp");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <section className="bg-gray-200 ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
          >
            <img
              className="w-12 h-12 mr-2"
              src="./images/logo.png"
              alt="logo"
            />
            CUET-INSIDERS
          </a>
          <div className="w-full bg-white rounded-lg shadow-2xl  md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Create an account
              </h1>
              <form className="space-y-4 md:space-y-4" action="#">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-1 text-sm font-medium text-gray-900 "
                  >
                    Name
                  </label>
                  <input
                    onBlur={inputHandle}
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300  sm:text-sm rounded-2xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-1 text-sm font-medium text-gray-900 "
                  >
                    Your email
                  </label>
                  <input
                    onBlur={inputHandle}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300  sm:text-sm rounded-2xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Enter Your Email"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-1 text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <input
                    onBlur={inputHandle}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter Your Password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-2xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-1 text-sm font-medium text-gray-900"
                  >
                    Confirm password
                  </label>
                  <input
                    onChange={inputHandle}
                    type="password"
                    name="confirmPassword"
                    id="confirm-password"
                    placeholder="Re-enter Your Password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-2xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                  />
                </div>
                <h1 className="text-red-500">{error}</h1>
                <div className="flex  items-start"></div>
                <button
                  onClick={signUpHandle}
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Sign Up
                </button>
              </form>
              <div className="flex flex-wrap justify-center ">
                <span>SignUp with Google </span>{" "}
                <div>
                  <button onClick={googlesignIn} className="">
                    <img
                      src="https://i.ibb.co/S09q5cJ/google-icon.png"
                      alt=""
                      className="h-8 ml-2"
                    />
                  </button>
                </div>
              </div>
              <p className="text-md text-gray-900 ">
                Already have an account?{" "}
                <a
                  href="/Login"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Login here
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Signup;
