import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/UserContext";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
const UnfollowMentor = (props) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height:400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const { user, customUserId } = useContext(AuthContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [mentor, setMentor] = useState({});
  const [topic, setTopic] = useState("");
  const mentorId = props.mentor;
  //console.log(props.mentor);
  const userId = customUserId;
  const mentorID = { mentorId: mentorId, status: false };
  const topicHandle = (e) => {
    e.preventDefault();
    const topic = e.target.value;
    setTopic(topic);
  };
  function HandleUnFollow() {
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
  const AppointmentHandle = () => {
    const appoint = { userId: customUserId, meetingTopic: topic };
    fetch(`http://localhost:5000/appointment/${mentorId}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appoint),
    })
      .then((res) => res.json())
      .then((data) => {})
      .catch((error) => console.error(error));
    handleClose();
  };
  useEffect(() => {
    fetch(`http://localhost:5000/users/mentor/${mentorId}`)
      .then((res) => res.json())
      .then((data) => {
        setMentor(data);
      });
  }, [mentor]);
  return (
     <div>
       <Card className="mt-6 w-96">
        <CardHeader color="blue-gray" className="relative h-42  ">
          <img src={mentor.userPhoto} className="h-64" alt="img-blur-shadow" layout="fill" />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {mentor.userName}
          </Typography>
          {/* <Typography variant="h5" color="blue-gray" className="mb-2">
            {mentor.bio}
          </Typography> */}
          <Typography>
            {mentor.CurrentLocation}
          </Typography>
          <Typography>
          {mentor.deptName},{mentor.CurrentUniversity}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button onClick={HandleUnFollow}>UnFollow</Button>
          <Button
              className="ml-8"
              onClick={handleOpen}
            >
              Appointment
            </Button>
        </CardFooter>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <p className="text-center text-lg mb-2">Appointment Submission</p>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="flex flex-col justify-center items-center gap-2">
              <img
                src={mentor.userPhoto}
                className="h-32 w-32 rounded-full"
                alt=""
              />
              <p className="mt-2 mb-2">Mentor : {mentor.userName}</p>
              <TextField
                className="w-96"
                type="text"
                name="post"
                id="outlined-multiline-flexible"
                label="Meeting Topic"
                multiline
                maxRows={100}
                onChange={topicHandle}
              />
              <Button className="mt-8" onClick={AppointmentHandle}>Confirm</Button>
            </div>
          </Typography>
        </Box>
      </Modal>
     </div>
  );
};

export default UnfollowMentor;
