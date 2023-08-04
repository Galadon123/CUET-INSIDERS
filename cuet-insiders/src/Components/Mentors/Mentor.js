import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/UserContext";
import { Button } from "@material-tailwind/react";
const Mentor = (props) => {
  const { user, customUserId } = useContext(AuthContext);
  const { userName, _id } = props.mentor;
  const userId = customUserId;
  const mentorID = { mentorId: _id,status:true };
  function HandleFollow() {
    fetch(`http://localhost:5000/users/${userId}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(mentorID),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }
  return (
    <div>
      <div className="flex justify-between gap-4 items-center border px-2 mb-2">
        <p className="text-xl">{userName}</p>
        <Button onClick={HandleFollow} className="">
          {" "}
          Follow
        </Button><br />
      </div>
    </div>
  );
};

export default Mentor;
