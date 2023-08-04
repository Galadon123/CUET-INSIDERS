import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import Event from "./Event";
import "./Events.css";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { WindowSharp } from "@mui/icons-material";
const LoadEvent = () => {
  const { id } = useParams();
  const [ev, setEvent] = useState([]);
  const [istoggle, setToggle] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:5000/loadevent/${id}`)
      .then((res) => res.json())
      .then((data) => setEvent(data));
  }, []);
  const RegistrationHandle = () => {
    window.alert("Registration Completed");
    setToggle(false);
  };
  return (
    <div>
      {ev.map((ev) => (
        <div className="" key={ev.eventId}>
          <div className="mt-20 mb-24 flex flex-col justify-center items-center">
            <img
              className=" text-center"
              style={{ width: "800px" }}
              src={ev.banner}
              alt=""
            />
            <div className="px-32 py-8 w-4/6">
              <h1 className="mt-2 text-xl">
                <span className="font-bold">Event Description:</span> TechX 2023
                is an exciting technology-focused event organized by the
                university's Computer Science Department. It aims to bring
                together students, professionals, and technology enthusiasts to
                explore the latest advancements and trends in the tech industry.
                The event will feature keynote sessions, interactive workshops,
                panel discussions, and networking opportunities, making it a
                must-attend gathering for all tech enthusiasts.
              </h1>
              <h1 className=" mt-2 text-xl font-semibold">
                Event Host: CUET Computer Club
              </h1>
              <h1 className=" mt-2 text-xl">
                <span className="font-bold">Platform:</span>
                {ev.platform}
              </h1>
              <h1 className=" mt-2 text-xl font-smibold">
                <span className="font-bold">Date & Time:</span>
                <br />
                Date: October 15th to October 17th, 2023 <br />
                Time: 9:00 AM to 6:00 PM (each day) <br />
                Location: <br />
                CUET <br />
                OS Lab, Academic building 4
              </h1>
              <h1 className=" mt-2 text-xl">
                <span className="font-bold">Event Highlights:</span>
                <br />
                1. Innovative Keynote Sessions: Renowned experts from leading
                tech companies will deliver inspiring keynote sessions, sharing
                their experiences and insights into the ever-evolving tech
                landscape.
                <br />
                2. Hands-On Workshops: Engage in practical workshops that cover
                a wide range of topics such as artificial intelligence,
                blockchain, web development, cybersecurity, and more.
                Participants will have the opportunity to learn from experienced
                instructors and work on real-world projects.
                <br />
                3. Panel Discussions: Join thought-provoking panel discussions
                on emerging technologies, industry trends, and the future of
                tech. Gain valuable insights from experts and thought
                leaders in the field.
              </h1>
              <h1 className=" mt-2 text-xl font-smibold">
                <span className="font-bold">Featured Speakers: </span>
                <br />
                Dr. Samantha Carter - Chief Technology Officer, Tech Solutions
                Inc. Topic: "Demystifying AI: From Theory to Real-World
                Applications" Mr. Michael Ramirez - Co-founder, BlockchainX
                Topic: "Unlocking the Potential of Blockchain:
                Revolutionizing Industries"
              </h1>
            </div>
            {istoggle ? (
              <Button
                onClick={RegistrationHandle}
                className="mt-2 bg-gray-50 text-black "
                size="lg"
              >
                Register
              </Button>
            ) : (
              <h1>Registration Completed.</h1>
            )}

            <h1 className="mt-2 text-xl  font-smibold">
              Registration Deadline:{" "}
              <span className="mt-2 text-red-300">{ev.date}</span>{" "}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadEvent;
