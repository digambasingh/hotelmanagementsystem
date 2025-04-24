import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../Components/RoomsContainer";
const Rooms = () => {
  return (
    <div>
      <Hero hero="roomsHero"></Hero>
      <Banner   style={{ background: "rgba(161, 102, 139, 0.5)" }}  title="Available Rooms" subtitle="Best in Class Room">
        <Link to="/" className="btn btn-warning">
          RETURN HOME
        </Link>
      </Banner>
       <Hero/> 
      <RoomsContainer />
    </div>
  );
};

export default Rooms;
