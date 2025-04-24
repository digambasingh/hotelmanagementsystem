import React from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import svg from "../images/about.svg"
import customersvg from "../images/customers/customer1.svg"
import customer3 from "../images/customers/customer3.svg";
import customer4 from "../images/customers/customer4.svg";
// import CEO from "../images/team/CEO.svg";
// import Manager from "../images/";
// import Developer from "../images/team/Developer.svg";
import manager1 from '../images/manager1.jpg';
import CEO from '../images/CEO.webp';
import Developer from '../images/manager.png';


function About() {
  return (
    <div className="container aboutus">
      <div className="row">
        <div className="col-md-6 col-12 my-auto">
          <img
            src={svg}
            alt="about us"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 col-12 my-auto">
          <h1 className="display-4 text-center my-5">About Us </h1>
          <p className="lead text-justify text-center">
          Our Hotel Management System is crafted with passion and precision by an innovative team led by Digambar Singh. Developed by Durgesh and Akash, with support from team members Vipin Kumar and Nikhil Toumar, the project streamlines hotel operations to deliver a smarter, faster, and guest-friendly experience.
          </p>
          <div className="text-center col-md-6 col-12 mx-auto">
            <Link
              to="/contact-us"
              className="btn btn-outline-dark btn-block btn-lg my-5"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
      <div className="about_company">
        <h1 className="display-4">About Project</h1>
        <div className="pt-4">
          <p className="about_info">
            The Hotel Management System is a comprehensive web-based application designed to streamline and automate various operations involved in the management of a hotel. Built using the MERN stack (MongoDB, Express.js, React, and Node.js), the system offers an intuitive and responsive interface that enhances user experience while providing robust backend functionality. It includes essential features such as room booking, check-in and check-out management, guest registration, billing and payment processing, staff allocation, and inventory tracking. Admins can manage room availability, monitor customer reservations, and oversee employee tasks from a centralized dashboard. Guests can browse available rooms, filter based on preferences, make secure online bookings, and provide feedback after their stay. The system ensures data accuracy, reduces human error, and eliminates the need for manual records by storing all critical information securely in a database. With integrated authentication and role-based access control, staff and administrators have customized dashboards and privileges. Additionally, the system supports real-time notifications and automated email confirmations for bookings and cancellations. For enhanced user engagement and analytics, the application includes a feedback module and performance dashboard, giving insights into occupancy rates, revenue trends, and customer satisfaction. The UI is developed using modern Bootstrap and React components, ensuring responsiveness across devices. AI-powered modules, such as chat-based virtual assistance for guests and predictive analytics for demand forecasting, are also being planned for integration in future phases. The system prioritizes security, scalability, and modularity to meet the needs of hotels of various sizes. Overall, this Hotel Management System serves as a digital backbone for hotel operations, significantly improving efficiency, customer service, and operational oversight. It is a valuable asset for any hospitality business aiming to adopt digital transformation and improve day-to-day management with technology.
          </p>
        </div>
      </div>
      <div className="testimony">
        <h1 className="display-4 mb-4">What Our Clients says</h1>
        <div className="row mb-5">
          <div className="col-md-10 col-12 mx-auto">
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center", // center them
                gap: "1rem", // add space between
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
              >

                <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to="0"
                  className="active"
                >Durgesh Kumar</li>
                <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to="1"
                >Vipin kumar</li>
                <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to="2"
                >Akash Kumar</li>
                <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to="3"
                >Digambar Singh</li>
              </ol>
              <div className="carousel-inner card border-0 shadow-lg p-4">
                <div className="carousel-item active text-center">
                  <div className="row">
                    <div className="col-md-8 col-12 my-auto">
                      <img
                        src={customersvg}
                        className="text-center img-fluid"
                        width="450"
                        height="400"
                        alt="customer1"
                      />
                    </div>
                    <div className="col-md-4 col-12 my-auto">
                      <div className="text-dark">
                        <h3 className="font-weight-bolder ">Customer Nikhil Tomar</h3>
                        <p>
                        "The Hotel Management System has completely transformed the way we run our operations. From seamless room bookings to automated billing, everything is now faster, more accurate, and easier to manage. Our staff love how user-friendly the dashboard is, and our guests appreciate the smooth online booking experience."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item text-center">
                  <div className="row">
                    <div className="col-md-8 col-12 my-auto">
                      <img
                        src={customersvg}
                        className="text-center img-fluid"
                        width="450"
                        height="400"
                        alt="customer2"
                      />
                    </div>
                    <div className="col-md-4 col-12 my-auto">
                      <div className="text-dark">
                        <h3 className="font-weight-bolder ">Customer DRF</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item text-center">
                  <div className="row">
                    <div className="col-md-8 col-12 my-auto">
                      <img
                        // src={require("../images/customers/customer3.svg")}
                        src={customer3}
                        //  src={require("../images/customers/customer3.svg").default} 

                        className="text-center img-fluid"
                        width="450"
                        height="400"
                        alt="customer3"
                      />
                    </div>
                    <div className="col-md-4 col-12 my-auto">
                      <div className="text-dark">
                        <h3 className="font-weight-bolder ">Customer RTY</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. <br />
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item text-center">
                  <div className="row">
                    <div className="col-md-8 col-12 my-auto">
                      <img
                        // src={require("../images/customers/customer4.svg")}
                        src={customer4}
                        className="text-center img-fluid"
                        width="450"
                        height="400"
                        alt="customer4"
                      />
                    </div>
                    <div className="col-md-4 col-12 my-auto">
                      <div className="text-dark">
                        <h3 className="font-weight-bolder ">Customer RTY</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur Praesent
                          commodo cursus magna, vel scelerisque nisl consectetur
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleCaptions"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleCaptions"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="team">
        <h1 className="display-4">Our Team</h1>
      </div>
      <div className="row mb-5">
        <div className="col-md-4 col-12 mx-auto my-2">
          <div className="card border-0 shadow-lg p-4">
            <img
              src={CEO}
              className="card-img-top"
              alt="director"
            />
            <div className="card-body">
              <h5 className="card-title mb-0">Team Leader</h5>
              <div className="card-text text-black-50">
                CEO <p className="float-right">5 years</p>
              </div>
              <h6 className="mt-5">CONNECT</h6>
              <div className="d-flex justify-content-around">
                <FaFacebookSquare className="connect" />
                <AiFillInstagram className="connect" />
                <FaLinkedin className="connect" />
                <IoLogoYoutube className="connect" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12 mx-auto my-2">
          <div className="card border-0 shadow-lg p-4">
            <img
              src={manager1}
              className="card-img-top"
              alt="director"
            />
            <div className="card-body">
              <h5 className="card-title mb-0">Team Member</h5>
              <div className="card-text text-black-50">
                Manager <p className="float-right">5 years</p>
              </div>
              <h6 className="mt-5">CONNECT</h6>
              <div className="d-flex justify-content-around">
                <FaFacebookSquare className="connect" />
                <AiFillInstagram className="connect" />
                <FaLinkedin className="connect" />
                <IoLogoYoutube className="connect" />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-md-4 col-12 mx-auto my-2">
          <div className="card border-0 shadow-lg p-4">
            <img
              src={manager1}
              className="card-img-top"
              alt="director"
            />
            <div className="card-body">
              <h5 className="card-title mb-0">Team Member</h5>
              <div className="card-text text-black-50">
                Manager <p className="float-right">5 years</p>
              </div>
              <h6 className="mt-5">CONNECT</h6>
              <div className="d-flex justify-content-around">
                <FaFacebookSquare className="connect" />
                <AiFillInstagram className="connect" />
                <FaLinkedin className="connect" />
                <IoLogoYoutube className="connect" />
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="col-md-4 col-12 mx-auto my-2">
          <div className="card border-0 shadow-lg p-4">
            <img
              src={manager1}
              className="card-img-top"
              alt="director"
            />
            <div className="card-body">
              <h5 className="card-title mb-0">Team Member</h5>
              <div className="card-text text-black-50">
                Manager <p className="float-right">5 years</p>
              </div>
              <h6 className="mt-5">CONNECT</h6>
              <div className="d-flex justify-content-around">
                <FaFacebookSquare className="connect" />
                <AiFillInstagram className="connect" />
                <FaLinkedin className="connect" />
                <IoLogoYoutube className="connect" />
              </div>
            </div>
          </div>
        </div> */}
        <div className="col-md-4 col-12 mx-auto my-2">
          <div className="card border-0 shadow-lg p-4">
            <img
              src={Developer}
              className="card-img-top"
              alt="director"
            />
            <div className="card-body">
              <h5 className="card-title mb-0">Team Member</h5>
              <div className="card-text text-black-50">
                Developer <p className="float-right">8 years</p>
              </div>
              <h6 className="mt-5">CONNECT</h6>
              <div className="d-flex justify-content-around">
                <FaFacebookSquare className="connect" />
                <AiFillInstagram className="connect" />
                <FaLinkedin className="connect" />
                <IoLogoYoutube className="connect" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
