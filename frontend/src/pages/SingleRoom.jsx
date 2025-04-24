import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import defaultBcg from "../images/room-1.jpeg";
import Banner from "../components/Banner";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";

const SingleRoom = () => {
  const { slug } = useParams();
  const { getRoom } = useContext(RoomContext);

  const room = getRoom(slug);

  if (!room) {
    return (
      <div className="error">
        <h3>No such room could be found...</h3>
        <Link to="/rooms" className="btn-primary">
          Back to rooms
        </Link>
      </div>
    );
  }

  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images
  } = room;

  const [main, ...defaultImages] = images;

  return (
    <>
      <StyledHero img={images[0] || defaultBcg}>
        <Banner   style={{ background: "rgba(174, 19, 112, 0.5)" }} title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            Back to rooms
          </Link>
        </Banner>
      </StyledHero>

      <section className="single-room">
        <div className="single-room-images">
          {defaultImages.map((item, index) => (
            <img key={index} src={item} alt={name} />
          ))}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>Details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>Info</h3>
            <h6>Price: Rs. {price}</h6>
            <h6>Size: {size} SQFT</h6>
            <h6>
              Max capacity:{" "}
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? "Pets allowed" : "No pets allowed"}</h6>
            <h6>{breakfast && "Free breakfast included"}</h6>
          </article>
        </div>
      </section>

      <section className="room-extras">
        <h6>Extras</h6>
        <ul className="extras">
          {extras.map((item, index) => (
            <li key={index}>- {item}</li>
          ))}
        </ul>

        <div className="p-4 clearfix">
          <div className="row">
            <div className="col-md-3 col-12 ml-auto">
              <Link
                to={`/bookings`}
                className="btn btn-outline-primary btn-block btn-lg float-right"
              >
                Book Room
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleRoom;
