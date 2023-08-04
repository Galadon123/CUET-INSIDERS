import React, { useContext } from "react";
import { Button } from "@material-tailwind/react";
import "./Header.css";
import { AuthContext } from "../Context/UserContext";
import { Link, Navigate, useNavigate } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
function Header() {
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);
  const logout = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch(() => {});
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const Custom = () => {
    navigate("/myappointments");
    handleMenuClose();
  };
  const Custom2 = () => {
    navigate("/reqappointed");
    handleMenuClose();
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={Custom}>My Appointments</MenuItem>
      <MenuItem onClick={Custom2}>Appointment Request</MenuItem>
    </Menu>
  );
  return (
    <div>
      <nav className="w-full z-20 top-0 left-0 border-b bg-gray-900 py-4">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/home" className="flex items-center">
            <img
              src="./images/logo.png"
              className="h-10 mr-3"
              alt="CUET-INSIDERS LOGO"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              CUET-INSIDERS
            </span>
          </a>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex p-4 md:p-0 mt-4 font-lg border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
              <li>
                <Link
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  to="/post"
                >
                  Posts
                </Link>
              </li>
              <li>
                <Link
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  to="/event"
                >
                  Events
                </Link>
              </li>
              <li>
                {
                  <Link
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    to="/mentors"
                  >
                    Mentors
                  </Link>
                }
              </li>
              {/* <li>
                {
                  <Link
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    to="/userprofile"
                  >
                    Dashboard
                  </Link>
                }
              </li> */}
              <li>
                <a
                  to="#"
                  className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ml-72"
                >
                  <div className="flex items-center justify-center">               
                      {user?.photoURL ? (
                        <img
                        onClick={handleProfileMenuOpen}
                          className="rounded-full w-8 h-8 mr-4"
                          src={user.photoURL}
                          alt="User"
                        />
                      ) : (
                        <h1><FontAwesomeIcon className="mr-4 " onClick={handleProfileMenuOpen} icon={faUser} /></h1>
                      )}
                    {renderMenu}
                    <div>
                      {user?.email ? (
                        <Button onClick={logout} size="sm">
                          Log out
                        </Button>
                      ) : (
                        <Button size="sm">
                          <Link to="/login">Log in</Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
