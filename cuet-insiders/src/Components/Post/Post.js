import React, { useContext, useEffect, useRef, useState } from "react";
import "./Post.css";
import { AuthContext } from "../Context/UserContext";
import { Button } from "@material-tailwind/react";
import TextField from "@mui/material/TextField";
import PostContent from "../PostContent/PostContent";
import Header from "../Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faImage,
  faImages,
  faLink,
  faLocation,
  faLocationArrow,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  FaUserFriends,
  FaClipboardList,
  FaUserAlt,
  FaNoteSticky,
} from "react-icons/fa";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { colors } from "@mui/material";
import { Opacity } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Mentor from "../Mentors/Mentor";
import UnfollowMentor from "../Mentors/UnfollowMentor";
const Post = () => {
  const { user,customUserId } = useContext(AuthContext);
  const [posts, setUser] = useState([]);
  const [postimage, setImage] = useState("");
  const [posttext, setPosttext] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [mymentors, setMyMentors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, [posts]);
  posts.sort(function(a, b) {
    let keyA = new Date(a.postDate);
    let keyB = new Date(b.postDate);
    if (keyA > keyB) return -1;
    if (keyA < keyB) return 1;
    return 0;
      });
  const postText = (e) => {
    const posttext = e.target.value;
    setPosttext(posttext);
  };
  const postHandle = (e) => {
    const post = posttext;
    const photo = user.photoURL;
    const PostuserName = user.displayName;
    const email = user.email;
    const likes=0;
    const postDate=new Date();
    const val=document.getElementById("readPost");
    console.log(val);
    const post_v = { post, PostuserName, photo, email, postimage,postDate,likes };
    PostSendToDB(post_v);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/mentors/${customUserId}`)
      .then((res) => res.json())
      .then((data) => setMentors(data));
  }, [mentors]);
  useEffect(() => {
    fetch(`http://localhost:5000/users/${customUserId}`)
      .then((res) => res.json())
      .then((data) => setMyMentors(data));
  }, [mymentors]);
  //console.log(mymentors.length)
  function PostSendToDB(post_v) {
    fetch("http://localhost:5000/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post_v),
    })
      .then((res) => res.json())
      .then((data) => {})
      .catch((error) => console.error(error));
  }
  function covertBase64(e) {
    var fileReader = new FileReader();
    fileReader.readAsDataURL(e.target.files[0]);
    fileReader.onload = () => {
      setImage(fileReader.result);
    };
    fileReader.onerror = (error) => {
      console.log(error);
    };
  }
  return (
    <div>
      <div className="sticky top-0">
        <Header></Header>
      </div>
      <div className="flex flex-col">
        <div className="grid grid-cols-4 gap-4 ">
          <div className="flex flex-col  w-full gap-6 bg-gray-100/10  mt-4 rounded-3xl shadow-lg px-8 py-8">
            <div className="sticky top-40">
              <div className="flex flex-row items-center mb-12">
                <img
                  className="rounded-full w-16 h-16"
                  src={user.photoURL}
                  alt=""
                />
                <h1 className="text-xl font-semibold ml-4">
                  {user.displayName}
                </h1>
              </div>
              <div className="text-xl">
                <button className="flex flex-row items-center">
                  <FaUserFriends />
                  <p className="ml-6">Friends</p>{" "}
                </button>
                <br />
                <button className="flex flex-row items-center">
                  <FaClipboardList />
                  <Link to="/event">
                    <p className="ml-6">Events</p>
                  </Link>
                </button>
                <br />
                <button className="flex flex-row items-center">
                  <Link className="flex items-center" to="/mentors"><FaUserAlt />
                  <p className="ml-6">My Mentors {mymentors.length}</p></Link>
                </button>
              </div>
            </div>
          </div>

          <div className=" col-span-2 ">
            <div>
              {/* post writting */}
              <div className="bg-gray-50 py-16 rounded-3xl shadow-lg">
                <div className="flex  items-center justify-center">
                  <img
                    className="rounded-full mr-4 h-12 w-12"
                    src={user.photoURL}
                    alt=""
                  />
                  <TextField
                    style={{ width: "600px" }}
                    type="text"
                    name="post"
                    id="readPost"
                    //id="outlined-multiline-flexible resetPost"
                    label="Write your post"
                    multiline
                    maxRows={100}
                    onBlur={postText}
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
                    <input type="file" id="imageReset" onChange={covertBase64} />
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
                    onClick={postHandle}
                    type="button"
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-64 rounded-full"
                  >
                    Post
                  </button>
                </div>
              </div>
              <div>
                {posts.map((use) => (
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
              <h1 className="text-center text-xl font-semibold">
                {/* Mentors <br /><br />
                {mentors.map((mentor) => (
                  <Mentor key={mentor._id} mentor={mentor}></Mentor>
                ))}
                {mymentors.map((mentor) => (
                  // <p key={mentor._id}>{mentor.userName}</p>
                   <UnfollowMentor key={mentor} mentor={mentor}></UnfollowMentor>
                ))} */}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;

// poststore(newUser);
// console.log(user);
