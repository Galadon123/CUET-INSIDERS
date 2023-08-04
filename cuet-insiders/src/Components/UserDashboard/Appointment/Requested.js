import React, { useEffect, useState } from "react";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
const Requested = (props) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    height:400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    borderRadius:"20px",
    padding:"8px",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { mentorId, userId, date, approved, _id, status } = props.appointment;
  const [applicant, setApplicant] = useState({});
  const [meetingdate, setDate] = useState("");
  const [meetinglink, setLink] = useState("");
  const [meetingtime, setTime] = useState("");
  const [value, setValue] = React.useState(true);
  //console.log(props);
  useEffect(() => {
    fetch(`http://localhost:5000/users/mentor/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setApplicant(data);
      });
  }, [applicant]);
  const Allow = () => {
    handleOpen();
  };
  const Reject = () => {
    setValue(false);
    ApproveHandle();
  };
  const dateHandle = (e) => {
    e.preventDefault();
    const date = e.target.value;
    setDate(date);
  };
  const LinkHandle = (e) => {
    e.preventDefault();
    const link = e.target.value;
    setLink(link);
  };
  const timeHandle = (e) => {
    e.preventDefault();
    const time = e.target.value;
    setTime(time);
  };
  function ApproveHandle() {
    const appoint = { meetingdate, meetinglink, meetingtime, approved: value };
    fetch(`http://localhost:5000/appointmenthandle/${_id}`, {
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
  }
  return (
    <div>
      {status ? (
        <p></p>
      ) : (
        <div className="grid grid-cols-2 border-2 border-blue-50 py-6 px-24">
          <div className="flex items-center gap-x-4">
            {" "}
            <img
              src={applicant.userPhoto}
              alt=""
              className="h-12 w-12 rounded-full"
            />
            <p  className="text-xl font-semibold">{applicant.userName} </p>{" "}
          </div>
          <div>
          <Button onClick={Allow} className="mr-8">
            <FontAwesomeIcon className="mr-2" icon={faCheck} />
            Approve
          </Button>
          <Button className="bg-red-300" onClick={Reject}>
            <FontAwesomeIcon className="mr-2" icon={faXmark} />
            Reject{" "}
          </Button>
          </div>
        </div>
      )}

      <Modal
      
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box  sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <h1 className="text-center text-lg font-semibold">Appointment Confirmation</h1><br /><br />
            
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="text-center">
            <label className="mr-4" htmlFor="">Meeting  Date  </label>
            <input className="border border-black px-8 w-96" type="date" onChange={dateHandle} /> <br /><br />
            <label className="mr-4" htmlFor="">Meeting Time </label>
            <input className="border border-black px-8 w-96" type="text" onChange={timeHandle} /> <br /><br />
            <label className="mr-4" htmlFor="">Meeting Link </label>
            <input className="border border-black px-8 w-96" type="text" onChange={LinkHandle} />
            <br />
            <Button onClick={ApproveHandle} className="mt-16">
              Approve
            </Button>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Requested;
