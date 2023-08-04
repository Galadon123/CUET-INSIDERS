import "./Home.css";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import MentorCart from "../CartofMentors/MentorCart";
import Header from "../Header/Header";
import Accordionfile from "./HomeComponent/accordionfile";
import Reviewcard from "./HomeComponent/Reviewcard";
const names = ["Higher Study", "Research Paper", "Academic"];
const Home = (props) => {
  // Name chaging code
  const [currentName, setCurrentName] = useState(names[0]);
  function setRandomName() {
    const index = Math.floor(Math.random() * names.length);
    let newName = names[index];
    if (newName == currentName) {
      setRandomName();
    } else {
      setCurrentName(newName);
    }
    return;
  }

  useEffect(() => {
    setTimeout(() => {
      setRandomName();
    }, 2000);
  }, [currentName]);
  const [mentors, setMentors] = useState([]);
  useEffect(() => {
    fetch("./cartitem.json")
      .then((res) => res.json())
      .then((data) => setMentors(data));
  }, []);
  // Name chaging code

  return (
    <div className="">
      {/* section 1 */}
      <div>
        <Header></Header>
      </div>
      <div className="flex content-center justify-center items-center mt-36 ">
        <div className="mt-24 mr-24">
          <h1 className="text-6xl font-semibold">
            Where Experience <br /> Meets Aspiration
          </h1>
          <br />
          <p className="text-md text-xl">
            A platform for proper Advice,Guidance <br /> And Support for Your
            Future.
          </p>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl 
                   focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-8 
                    py-2.5 text-center mr-10 mb-2 mt-5 "
          >
            <a href="/services">Job Query</a>
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-lg px-8 py-2.5 text-center mr-2 mb-2"
          >
            <a href="/services">Find Mentors</a>
          </button>
        </div>
        <div>
          <img
            src="https://i.ibb.co/wwTYSDB/Our-Team-Header.png"
            alt="Mentorship"
            border="0"
          />
        </div>
      </div>
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10"></hr>
      {/* section 2 */}
      <div className="flex content-center justify-center items-center mt-32">
        <div>
          <div></div>

          {
            <img
              src="https://i.ibb.co/Tg5pDwN/business-advisor-types-article-cover.png"
              alt="business-advisor-types-article-cover"
              border="0"
            />
          }
        </div>
        <div className="ml-48">
          <h1 className="text-6xl font-semibold">
            Get unstuck <br /> quicker with 1:1 <br /> mentorship
          </h1>
          <p className="text-2xl">
            Say goodbye to guesswork and <br /> expensive mistakes. <br /> Get
            valuable "been there, done that" <br /> advice directly from the
            mentors
          </p>
        </div>
      </div>
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 "></hr>
      {/* section 3 */}
      <div className="px-24">
        <div>
          <br />
          <h1 className="text-center text-2xl font-semibold mt-4">
            It's like an all-you-can-eat buffet of advice <br /> from operators
            that drive growth at the world’s top startups
          </h1>{" "}
          <br />
          <br />
          <p className="text-gray-600 text-center mt-6 mb-4">
            FILTER MENTORS BY YOUR OBJECTIVE:
          </p>
        </div>
        <div className="flex justify-center ">
          <div className="grid grid-cols-3 gap-4 ">
            {mentors.map((mentor) => (
              <MentorCart key={mentor._id} mentor={mentor}></MentorCart>
            ))}
          </div>
        </div>
      </div>
      <div></div>
      {/* Sectrion 4 */}
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10"></hr>
      <div className="flex flex-col justify-center text-center mt-24">
        <div>
          <p className="text-xl mb-12">
            "It’s awesome to have the opportunity to sit down with intelligent
            mentors and <br /> share all of your ideas and concerns."
          </p>
        </div>
        <div className="w-full text-2xl font-semibold mb-12 ">
          <p>
            Struggling with <span className="text-blue-600">{currentName}</span>
          </p>
          <p> A growth mentor can help with that.</p>
        </div>
        <div className="w-full">
          {/* video */}
          <div>
            <div>
              <iframe
                src="https://streamable.com/e/4zrf7b?autoplay=1&nocontrols=1"
                frameBorder="0"
                width="100%"
                height="300px"
                allowFullScreen
                allow="autoplay"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center flex flex-col justify-center items-center mt-32">
          <div>
            <h1 className="text-center text-3xl mt-12 font-semibold">
              What mentees say about their results
            </h1>
            <p className="text-md mb-8">
              Thousands of Students are using mentors to get help.
            </p>
          </div>
          <Reviewcard></Reviewcard>
        </div>
        <h1 className="text-center text-3xl mt-24 font-semibold">
          Frequently Asked Question.
        </h1>
        <div className="mt-8 flex justify-center items-center ">
          <img className="pl-12" src="./images/faq.png" alt="" />
          <div className="pr-48">
            <Accordionfile></Accordionfile>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};
export default Home;
