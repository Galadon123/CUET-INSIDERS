import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Rating,
} from "@material-tailwind/react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React, { useEffect, useState } from "react";
const Applied = (props) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    height: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    borderRadius: "20px",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {
    mentorId,
    userId,
    meetingdate,
    meetingTopic,
    meetingtime,
    meetinglink,
    approved,
    status,
  } = props.appointment;
  const [myappointments, setMyAppointments] = useState({});
  // approved?setStatus("Approved"):setStatus("Rejected");
  useEffect(() => {
    fetch(`http://localhost:5000/users/mentor/${mentorId}`)
      .then((res) => res.json())
      .then((data) => {
        setMyAppointments(data);
      });
  }, []);
  return (
    <div>
      <div className="grid grid-cols-2 border-2 border-blue-50 py-6 px-24">
        <div className="flex items-center gap-x-4">
          {" "}
          <img
            src={myappointments.userPhoto}
            alt=""
            className="h-12 w-12 rounded-full"
          />
          <p className="text-xl font-semibold">{myappointments.userName} </p>
        </div>
        <div>
        <p className="flex">
          {status ? (
            <p>
              {approved ? (
                <p className="flex items-center gap-x-12">
                  <p className="text-green-900 font-semibold text-xl">Approved</p>
                  <Button onClick={handleOpen}>View Details</Button>
                </p>
              ) : (
                <p className="text-red-900 font-semibold text-xl">Rejected</p>
              )}
            </p>
          ) : (
            <p className="text-blue-900 font-semibold text-xl">Pending</p>
          )}
        </p>
        </div>
        
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="" sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <p></p>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="flex flex-col justify-center items-center gap-2">
              <img
                src={myappointments.userPhoto}
                className="h-32 w-32 rounded-full"
                alt=""
              />
              <p>Mentor : {myappointments.userName}</p>
              <p>Meeting Date : {meetingdate} </p>
              <p>Meeting Time : {meetingtime} </p>
              <p>Meeting Topic :{meetingTopic}</p>
              <a href={meetinglink}>Meeting Link</a>
              <Button onClick={handleClose}>ok</Button>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Applied;
