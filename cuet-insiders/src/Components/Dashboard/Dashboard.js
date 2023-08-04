import React, { useContext, useEffect, useState } from "react";
import "./Dashboard.css";
import { AuthContext } from "../Context/UserContext";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBuilding,
  faEnvelope,
  faImage,
  faImages,
  faLink,
  faLocation,
  faLocationArrow,
  faLocationDot,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FaFacebookF, FaFacebookMessenger } from "react-icons/fa";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import PostContent from "../PostContent/PostContent";
import { Instagram, LinkedIn, WhatsApp } from "@mui/icons-material";
import { TextField } from "@mui/material";
export const Dashboard = () => {
  const stl = {
    width: "600px",
  };
  const [post, setPost] = useState([]);
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [PostUser, setPostUser] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/dashboard/${id}`)
      .then((res) => res.json())
      .then((data) =>
        //setPost(data)
        {
          setPost(data.posts);
          setPostUser(data.postuser);
        }
      );
  }, []);
  console.log(PostUser);
  const postHandle = (e) => {
    e.preventDefault();
    const post = e.target.post.value;
    const photo = user.photoURL;
    const PostuserName = user.displayName;

    const post_v = { post, PostuserName, photo };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post_v),
    })
      .then((res) => res.json())
      .then((data) => {})
      .catch((error) => console.error(error));

    e.target.reset();
  };
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      {/* <h1 className='text-4xl text-center font-bold mt-24'>Welcome {id} </h1> */}
      {/* dfgd */}
      <div className="flex flex-col">
        <div className="grid grid-cols-4 gap-4 ">
          <div className="flex flex-col  w-full gap-6 bg-gray-100/10  mt-4 rounded-3xl shadow-lg px-8 py-8">
            <div className="sticky top-40">
              <div className="flex flex-col items-center mb-12">
                <img
                  className="rounded-full w-36 h-36"
                  src={PostUser.userPhoto}
                  alt=""
                />
                <h1 className="mt-2 text-2xl font-semibold ml-4">
                  {PostUser.userName}
                </h1>
                <h1 className="text-lg ">inovative game UI design</h1>
              </div>
              <div className="text-xl">
                <div className="flex flex-row justify-between">
                  <p>
                    {" "}
                    <FontAwesomeIcon
                      className="mr-2"
                      icon={faLocationDot}
                    />{" "}
                    From
                  </p>
                  <p className="text-lg">{PostUser.CurrentLocation}</p>
                </div>
                <div className="flex flex-row justify-between mt-2 mb-2">
                  <p>
                    {" "}
                    <FontAwesomeIcon className="mr-2" icon={faBuilding} />{" "}
                    Department{" "}
                  </p>
                  <p className="text-lg">{PostUser.deptName}</p>
                </div>
                <div className="flex flex-row justify-between">
                  <p>
                    {" "}
                    <FontAwesomeIcon
                      className="mr-2"
                      icon={faMapLocationDot}
                    />{" "}
                    Company{" "}
                  </p>
                  <p className="text-lg">{PostUser.CurrentCompany}</p>
                </div>
                {/* <div className='flex flex-row justify-between'>
                     <p> <FontAwesomeIcon className='mr-2'
                        icon={faLocationDot}
                      /> Current Status </p>
                     <p className='text-lg'>Bangladesh</p>
                 </div> */}
                <div className="mt-10 text-center">
                  <h1>Contact Me</h1>
                  <div className="mt-4 flex flex-row gap-4 justify-center items-center">
                    <a
                      target="_blank"
                      href="https://www.facebook.com/profile.php?id=100008370614169"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/profile.php?id=100008370614169"
                    >
                      <WhatsApp />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/profile.php?id=100008370614169"
                    >
                      <FaFacebookMessenger />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/profile.php?id=100008370614169"
                    >
                      <Instagram />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/profile.php?id=100008370614169"
                    >
                      <LinkedIn />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" col-span-2">
            <div className="">
              {/* post writting */}
              <div className="bg-gray-50 py-16 rounded-3xl shadow-lg">
                <form onSubmit={postHandle}>
                  <div className="flex  items-center justify-center">
                    <img
                      className="rounded-full mr-4 h-12 w-12"
                      src={user.photoURL}
                      alt=""
                    />
                    <TextField
                      style={stl}
                      type="text"
                      name="post"
                      id="outlined-multiline-flexible"
                      label="Write your post"
                      multiline
                      maxRows={100}
                    />
                  </div>
                  <div className="text-lg flex items-center justify-center gap-12 mt-6">
                    <p>
                      {" "}
                      <FontAwesomeIcon
                        style={{ color: "blue" }}
                        icon={faLocationDot}
                      />{" "}
                      Location
                    </p>
                    <p>
                      <button>
                        <FontAwesomeIcon
                          style={{ color: "green" }}
                          icon={faImages}
                        />{" "}
                        Image
                      </button>
                    </p>
                    <p>
                      {" "}
                      <FontAwesomeIcon
                        style={{ color: "red" }}
                        icon={faLink}
                      />{" "}
                      Attachment
                    </p>
                  </div>

                  <div className="text-center mt-8">
                    <button
                      type="submit"
                      className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-64 rounded-full"
                    >
                      Post
                    </button>
                  </div>
                </form>
              </div>
              <div>
                {post.map((use) => (
                  <PostContent key={use.id} use={use}></PostContent>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gray-50 m-4 rounded-2xl shadow-lg mt-4">
            <div className="sticky top-40 mt-4 flex flex-row items-center gap-3 justify-center">
              {/* <FontAwesomeIcon
                className="text-2xl text-red-300"
                icon={faBell}
              /> */}
              <h1 className="text-center text-xl font-semibold text-blue-600 "></h1>
            </div>
          </div>
        </div>
      </div>

      {/* sdfopigesd */}
      {/* <Footer></Footer> */}
    </div>
  );
};
export default Dashboard;
