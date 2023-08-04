import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { AuthContext } from '../Context/UserContext';

const Temporay = () => {
    const navigate=useNavigate();
    const { user ,CustomUserIdSet} = useContext(AuthContext);
   // const [userid,setUserId]=useState("");
    UserStore();
    function UserStore() {
        const { displayName, email, photoURL } = user;
        const userPhoto=photoURL || "";
        const userName=displayName;
        const isMentor = true;
        const deptName = "CSE";
        const CurrentUniversity = "CUET";
        const CurrentCompany = "N/A";
        const Skills = {};
        const mentors=[];
        const bio="";
        const CurrentLocation = "Bangladesh";
        const newUser = {
          userName,
          email,
          userPhoto,
          isMentor,
          deptName,
          CurrentUniversity,
          CurrentCompany,
          Skills,
          CurrentLocation,
          mentors,
          bio
        }; 
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            CustomUserIdSet(data)
            navigate("/post")
          })
          .catch((error) => console.error(error));
       }    
  return (
    <div className='text-center text-4xl mt-64'>
         Loading <br /><br />
         Please  Wait ...
    </div>
  )
}
export default Temporay;