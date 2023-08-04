import React, { useContext, useEffect, useState } from "react";
import Mentor from "./Mentor";
import Header from "../Header/Header";
import { AuthContext } from "../Context/UserContext";
import MyMentors from "./MyMentors";
import OurMentors from "./OurMentors";
import UnfollowMentor from "./UnfollowMentor";
const Mentors = () => {
  const [mentors, setMentors] = useState([]);
  const [mymentors, setMyMentors] = useState([]);
  const { user, customUserId } = useContext(AuthContext);
  const userId=customUserId;
  useEffect(() => {
    fetch(`http://localhost:5000/users/${customUserId}`)
      .then((res) => res.json())
      .then((data) => {
        setMyMentors(data);
      });
  }, [mymentors]);
  useEffect(() => {
    fetch(`http://localhost:5000/mentors/${customUserId}`)
      .then((res) => res.json())
      .then((data) => setMentors(data));
  }, [mentors]);
  const MentorsOnly=mentors.filter(m=>{
     return m._id!=userId
  })
  return (
    <div>
      <Header></Header>
      <h1 className="text-center mt-8 mb-12 text-2xl font-semibold">Mentors</h1>
      <div className="grid grid-cols-3 gap-4 mx-24 mb-12">
        {mymentors.map((mentor) => (
          <UnfollowMentor key={mentor} mentor={mentor}></UnfollowMentor>
        ))}
        {MentorsOnly.map((mentor) => (
          <OurMentors key={mentor._id} mentor={mentor}></OurMentors>
        ))}
     </div>
    </div>
  );
};

export default Mentors;
