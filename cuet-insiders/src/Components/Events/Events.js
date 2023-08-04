import React, { useEffect, useRef, useState } from "react";
import Event from "./Event";
import Header from "../Header/Header";
import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Events = () => {
  const [events, setEvent] = useState([]);
  const [query, setQuery] = useState("");
  const [query2, setQuery2] = useState("name");
  const filteredEvents = events.filter((item) => {
    if (query2 === "platform")
      return item.platform.toLowerCase().includes(query.toLowerCase());
    else if (query2 === "department")
      return item.department.toLowerCase().includes(query.toLowerCase());
    else return item.name.toLowerCase().includes(query.toLowerCase());
  });

  useEffect(() => {
    fetch("events.json")
      .then((res) => res.json())
      .then((data) => setEvent(data));
  }, []);
  const handleChange = (e) => {
    e.preventDefault();
    setQuery("");
    const val = e.target.value;
    setQuery2(val);
  };
  //console.log(query2);
  return (
    <div>
      <Header></Header>
      {/* <div className="bg-slate-700 px-10 py-20">
        <form>
          <div className="max-w-xl">
            <div className="flex space-x-4">
              <div className="flex rounded-md overflow-hidden w-full">
                <input type="text" className="w-full rounded-md rounded-r-none" />
                <button className="bg-indigo-600 text-white px-6 text-lg font-semibold py-4 rounded-r-md">
                  Go
                </button>
              </div>
            </div>
          </div>
        </form>
      </div> */}
      <div className="mt-16 text-lg flex justify-center items-center">
        <form action="">
          <select className="mr-2 bg-gray-100 py-2 px-8 text-center rounded rounded-md" onChange={handleChange}>
            <option value="name">Event</option>
            <option value="platform">Platform</option>
            <option value="department">Department</option>
          </select>
        </form>
        <input
          className="border border-2 border-indigo-300/100 w-96 h-10"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="search"
        />
        <button className=" ml-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-32 h-10">
        <FontAwesomeIcon className="mr-2" icon={faSearch} />
  Search
</button>
      </div>
      <h1 className="text-5xl text-center mb-10 mt-4">Upcomming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-5">
        {filteredEvents.map((event) => (
          <Event key={event.eventId} event={event}></Event>
        ))}
      </div>
    </div>
  );
};

export default Events;
