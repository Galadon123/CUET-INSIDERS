import logo from "./logo.svg";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import About from "./Components/About/About";
import Signup from "./Components/Signup/Signup";
import Dashboard from "./Components/Dashboard/Dashboard";
import Services from "./Components/Services/Services";
import Footer from "./Components/Footer/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Post from "./Components/Post/Post";
import Events from "./Components/Events/Events";
import LoadEvent from "./Components/Events/LoadEvent";
import Temporay from "./Components/Login/Temporay";
import Mentors from "./Components/Mentors/Mentors";
import UserProfile from "./Components/UserDashboard/UserProfile";
import MyAppointments from "./Components/UserDashboard/MyAppointments";
import ReqAppointed from "./Components/UserDashboard/Appointment/ReqAppointed";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home></Home> },
    { path: "/home", element: <Home></Home> },
    { path: "/signup", element: <Signup></Signup> },
    { path: "/login", element: <Login></Login> },
    { path: "/post/dashboard/:id", element: <Dashboard></Dashboard> },
    { path: "/services", element: <Services></Services> },
    { path: "/post", element: <Post></Post> },
    { path: "/temp", element: <Temporay></Temporay> },
    { path: "/mentors", element: <Mentors></Mentors> },
    { path: "/userprofile", element: <UserProfile></UserProfile> },
    { path: "/myappointments", element: <MyAppointments></MyAppointments> },
    { path: "/reqappointed", element: <ReqAppointed></ReqAppointed> },
    {
      path: "/event",
      element: <Events></Events>,
    },
    {
      path: "/loadevent/:id",
      element: <LoadEvent></LoadEvent>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
