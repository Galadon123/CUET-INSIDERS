import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Rating,
} from "@material-tailwind/react";

import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
function Reviewcard() {
  return (
      <div>
        <Card className="flex-row w-full max-w-[48rem] bg-gray-50">
          <CardHeader
            shadow={true}
            floated={true}
            className="w-2/5 shrink-0 m-0 rounded-r-none"
          >
            <img
              src="./images/icon/char7.jpeg"
              alt="image"
              className="w-full h-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h6" color="blue" className="uppercase mb-4">
              <Rating value={4} readonly />
            </Typography>
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Ad Watson
            </Typography>
            <Typography color="gray" className="font-normal mb-8">
              CUET-INSIDERS has helped me to build tons of in-depth skills,
              learn approaches, get career direction and feedback and a lot for
              my personal brand.
            </Typography>

            <a href="#" className="inline-block">
              <Button variant="text" className="flex items-center gap-2">
                Learn More
                <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
              </Button>
            </a>
          </CardBody>
        </Card>
      </div>
  );
}

export default Reviewcard;
