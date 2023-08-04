import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/UserContext";
import Header from "../../Header/Header";
import Requested from "./Requested";


const ReqAppointed = () => {
    const { customUserId } = useContext(AuthContext);
    const [req_appointments, setReqAppointments] = useState([]);
    useEffect(() => {
      fetch(`http://localhost:5000/requested-appointments/${customUserId}`)
        .then((res) => res.json())
        .then((data) => {
          //console.log(data)
          setReqAppointments(data);
        });
    }, [req_appointments]);
  return (
    <div>
      {" "}
      <Header></Header>
      <div className="mr-64 ml-64 mt-12">
          <p className="text-2xl font-semibold text-center mb-12">Appointment Requests</p>
          
          {req_appointments.map((appointment) => (
            <Requested
              key={appointment._id}
              appointment={appointment}
            ></Requested>
          ))}
        </div>
    </div>
  );
};

export default ReqAppointed;
