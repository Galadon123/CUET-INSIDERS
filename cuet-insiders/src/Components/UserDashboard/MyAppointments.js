import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/UserContext";
import Requested from "./Appointment/Requested";
import Applied from "./Appointment/Applied";
import Header from "../Header/Header";

import {
  Button,
} from "@material-tailwind/react";
const MyAppointments = () => {
  const { customUserId } = useContext(AuthContext);

  console.log(customUserId);
  const [req_appointments, setReqAppointments] = useState([]);
  const [my_appointments, setMyAppointments] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/requested-appointments/${customUserId}`)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data)
        setReqAppointments(data);
      });
  }, [req_appointments]);
  useEffect(() => {
    fetch(`http://localhost:5000/my-appointments/${customUserId}`)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data)
        setMyAppointments(data);
      });
  }, [my_appointments]);
  console.log(req_appointments.length);
  req_appointments.map((a) => {
    //console.log(a)
  });
  return (
    <div>
      <Header></Header>
      {/* <Button>Appointments</Button>
      <Button>Appointment Request </Button> */}

      <div className="text-center mt-12">
        <div className="ml-48 mr-48">
          <p className="text-2xl font-semibold text-center mb-4">My Appointments </p>
          {my_appointments.map((appointment) => (
            <Applied key={appointment._id} appointment={appointment}></Applied>
          ))}
        </div>
        {/* <div>
          Appointments Request
          {req_appointments.map((appointment) => (
            <Requested
              key={appointment._id}
              appointment={appointment}
            ></Requested>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default MyAppointments;
