import React from "react";
import "./MentorCart.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
const MentorCart = (props) => {
  //console.log(props.mentor)
  const { name, picture, email, company } = props.mentor;
  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-42">
        <img src={picture} alt="img-blur-shadow" layout="fill" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {name}
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  );
};

export default MentorCart;
