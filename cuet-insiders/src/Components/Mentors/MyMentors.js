import React, { useContext, useEffect, useState } from "react";
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

import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { AuthContext } from "../Context/UserContext";
import { TextField } from "@mui/material";
const MyMentors = (props) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const mentorId = props.mentor;
  const [mentors, setMentors] = useState({});
  const [topic, setTopic] = useState("");
  const { customUserId } = useContext(AuthContext);
  const topicHandle = (e) => {
    e.preventDefault();
    const topic = e.target.value;
    setTopic(topic);
  };
  const AppointmentHandle = () => {
    const appoint = { userId: customUserId, meetingTopic: topic };
    fetch(`http://localhost:5000/appointment/${mentors._id}`, {
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
        setMentors(data);
      });
  }, [mentors]);
  return (
    <div>
      <Card className="flex-row w-full max-w-[48rem] bg-gray-50">
        <CardHeader
          shadow={true}
          floated={true}
          className="w-2/5 shrink-0 m-0 rounded-r-none"
        >
          <img
            src={mentors.userPhoto}
            alt="image"
            className="w-full h-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="blue" className="uppercase mb-4">
            {/* <Rating value={4} readonly /> */}
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            <input type="text" onChange={topicHandle} />
            {mentors.userName}
          </Typography>
          <Typography color="gray" className="font-normal mb-8">
            CUET-INSIDERS has helped me to build tons of in-depth skills, learn
            approaches, get career direction and feedback and a lot for my
            personal brand.
          </Typography>

          <a href="#" className="inline-block">
            <Button
              onClick={handleOpen}
              variant="text"
              className="flex items-center gap-2"
            >
              Appointment
              <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
            </Button>
          </a>
          {/* <Button onClick={HandleUnFollow} className=""> */}
      {/* {" "}
      UnFollow
    </Button> */}
        </CardBody>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <p></p>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="flex flex-col justify-center items-center gap-2">
              <img
                src={mentors.userPhoto}
                className="h-32 w-32 rounded-full"
                alt=""
              />
              <p>Mentor : {mentors.userName}</p>
              <TextField
                type="text"
                name="post"
                id="outlined-multiline-flexible"
                label="Meeting Topic"
                multiline
                maxRows={100}
                onChange={topicHandle}
              />
              <Button onClick={AppointmentHandle}>Confirm</Button>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default MyMentors;
