import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { AuthContext } from "../Context/UserContext";
const OurMentors = (props) => {
  const { customUserId } = useContext(AuthContext);
  const {
    userName,
    userPhoto,
    _id,
    CurrentLocation,
    deptName,
    CurrentUniversity,
    bio
  } = props.mentor;
  const userId = customUserId;
  const mentorID = { mentorId: _id, status: true };
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
      <Card className="mt-6 w-96">
        <CardHeader color="blue-gray" className="relative h-full">
          <img src={userPhoto} className="h-64" alt="" layout="fill" />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {userName}
          </Typography>
          {/* <Typography variant="h5" color="blue-gray" className="mb-2">
            {bio}
          </Typography> */}
          <Typography>{CurrentLocation}</Typography>
          <Typography>
            {deptName},{CurrentUniversity}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button onClick={HandleFollow}>Follow</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default OurMentors;
