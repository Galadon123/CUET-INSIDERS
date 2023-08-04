import React, { useContext, useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import { FaThumbsUp, FaCommentDots } from "react-icons/fa";
import Collapsible from "react-collapsible";
import { AuthContext } from "../Context/UserContext";
import { TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { createBrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
const PostContent = (props) => {
  const { post, PostuserName, photo, _id,postimage,likes } = props.use;
  const { user } = useContext(AuthContext);
  const userName = user.displayName;
  const userPhoto = user.photoURL;
  const [comm, setComm] = useState([]);
  const [like, setLikes] = useState(likes);
  const [isLike, setIsLike] = useState(false);
  const countLikes = () => {
    if (isLike) 
    {
      setIsLike(false);
      setLikes(like - 2);
      console.log(like)
    } 
    else 
    {
      setIsLike(true);
      setLikes(like + 1);
      console.log(like)
    }
    const likeValue={likes:like+1};
    fetch(`http://localhost:5000/posts/count/${_id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(likeValue),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    fetch(`http://localhost:5000/posts/comment/${_id}`)
      .then((res) => res.json())
      .then((data) => setComm(data));
  }, [comm]);
  const commentHandle = (e) => {
    e.preventDefault();
    const com = e.target.comment.value;
    const id = _id;
    const Comments = { com, id, userName, userPhoto };
    fetch("http://localhost:5000/posts/comment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Comments),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error(error));
    e.target.reset();
  };
  const Delete = (deleteID) => {
    fetch(`http://localhost:5000/post/${deleteID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="bg-gray-50 mt-8 rounded-2xl pt-12 pb-4 px-4 shadow-lg">
      <Link to={`dashboard/${_id}`}>
        <div className="flex flex-row items-center">
          <img className="rounded-full h-12 w-12" src={photo} alt="" />
          <h1 className="text-xl ml-4 font-semibold">{PostuserName}</h1>
        </div>
      </Link>
      {/* <button className="ml-48" onClick={() => Delete(_id)}>
        X
      </button> */}
      <div>
        <br />
        {post} <br /> <img src={postimage} alt="" />
      </div>
      <div className="">
        <div className="flex flex-row items-center">
          <button
            onClick={countLikes}
            className="mr-8 mt-4 flex flex-row items-center"
          >
            {" "}
            <FontAwesomeIcon icon={faThumbsUp} />
            <p className="ml-2 text-lg">{like} Likes</p>
          </button>
        </div>
        <div className="flex flex-row items-center">
          {/* <FontAwesomeIcon icon={faComment} /> */}
          <p>
            <Collapsible className="ml-2  text-lg" trigger="Comments">
              <p>
                {comm.map((cmt) => (
                  <p key={cmt._id}>
                    <div className="flex items-center mb-6">
                      <div className="">
                        <img
                          className="rounded rounded-full mr-2 h-12 w-12"
                          src={cmt.userPhoto}
                          alt=""
                        />
                      </div>
                      <div className=" border border-2 rounded bg-gray-200 rounded-3xl shadow py-2 px-6">
                        <p className="text-sm font-semibold">{cmt.userName}</p>
                        {cmt.com}
                      </div>
                    </div>
                  </p>
                ))}
              </p>
              <p>
                <form onSubmit={commentHandle}>
                  <div className="flex flex-row items-center gap-4">
                    <img
                      src={photo}
                      className="w-12 h-12 rounded-full"
                      alt=""
                    />
                    <TextField
                      className="w-96 rounded-xl"
                      type="text"
                      name="comment"
                      id="outlined-multiline-flexible"
                      label="Write your comment"
                      multiline
                      maxRows={100}
                    />
                    {/* <button type="submit">Add a Comment</button> */}
                    <button
                      type="submit"
                      className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-8 rounded-full"
                    >
                      Comment
                    </button>
                  </div>
                </form>
              </p>
            </Collapsible>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostContent;
