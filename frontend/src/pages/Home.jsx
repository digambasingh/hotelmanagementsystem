import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

const Home = () => {
  return (
    <>

      <Hero hero="defaultHero"></Hero>
      <Banner style={{ background: "rgba(105, 186, 47, 0.5)" }} title="Luxurious Rooms" subtitle="deluxe rooms starting at Rs. 5000/=">
        <Link to="/rooms" className="btn btn-primary">
          Our Rooms
        </Link>
          </Banner>
          <Services />
          <FeaturedRooms />
    </>
  );
};

export default Home;
