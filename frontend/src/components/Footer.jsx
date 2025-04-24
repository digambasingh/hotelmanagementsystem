import React from 'react'
import { FaFacebookSquare,FaLinkedin } from 'react-icons/fa';
import {IoLogoYoutube} from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
// import './footer.css'
function Footer() {
    // const navigate = useNavigate();
    return (
        <footer className="border-top bg-white mt-5">
            <div className="py-4 footer-a">
                <Container>
                    <Row className="py-1">
                        <Col xs={12} md={6} lg={3}>
                            <ul className="list-unstyled">
                                <h6>ABOUT</h6>
                                <li>How Airbnb works</li>
                                <li>Newsroom</li>
                                <li>Airbnb 2021</li>
                                <li>Investors</li>
                                <li>Airbnb Plus</li>
                                <li>Founders' Letter</li>
                                <li>Careers</li>
                            </ul>
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                            <ul className="list-unstyled">
                                <h6>COMMUNITY</h6>
                                <li>Diversity &amp; Belonging</li>
                                <li>Against Discrimination</li>
                                {/* <li>Accessibility</li> */}
                                {/* <li>Airbnb Associates</li> */}
                                <li><a href="/viewbookings">AllBookings</a></li>
                                <li><a href="/roommanager/add">AddRoom</a></li>
                                <li ><a href="/roommanager/view">ViewRooms</a></li>
                                <li><a href="/roomManager/view/:id">ViewOneRoom</a></li>
                            </ul>
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                            <ul className="list-unstyled">
                                <h6>HOST</h6>
                                <li>Host your home</li>
                                <li>Host an Online Experience</li>
                                <li>Host an Experience</li>
                                <li>Responsible hosting</li>
                                <li>Resource Center</li>
                                <li>Community Center</li>
                            </ul>
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                            <ul className="list-unstyled">
                                <h6>SUPPORT</h6>
                                <li>Our COVID-19 Response</li>
                                <li>Help Center</li>
                                <li>Cancellation options</li>
                                <li>Neighborhood Support</li>
                                <li>Trust &amp; Safety</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="py-3 mx-5 d-flex flex-row flex-wrap text-center align-items-center justify-content-around border-bottom">
                {/* <div>
                    <h5>ALSO AVAILABLE ON</h5>
                    <div>
                        <img width="130px" src="https://z.nooncdn.com/s/app/com/common/images/logos/app-store.svg" alt="" />
                        <img width="130px" src="https://z.nooncdn.com/s/app/com/common/images/logos/google-play.svg" alt="" />
                    </div> */}
                <div>
                    <h5>Connect With Us</h5>
                    <div>
                        <a href="https://web.facebook.com/nabia.sheikh.1997/">
                                 <FaFacebookSquare className="connect text-dark" /></a>
                             <a href="https://www.linkedin.com/">
                                 <FaLinkedin className="connect text-dark" /></a>
                             <a href="https://www.instagram.com/">
                                 <AiFillInstagram className="connect text-dark" /></a>
                             <a href="https://www.youtube.com/">
                                <IoLogoYoutube className="connect text-dark" /></a>
                    </div>
                </div>
            </div>
            <div className="bg-dark text-white d-flex d-row justify-content-around align-items-center flex-wrap">
                <div>
                    <p className="text-center pt-3">&copy; 2025 Hotel Management App. All Right Reserved</p>
                </div>
                <div>
                    <ul className="list-unstyled d-flex d-row flex-wrap">
                        <li className="mx-2 mt-2">Carrers</li>
                        <li className="mx-2 mt-2">Join Our Team</li>
                        <li className="mx-2 mt-2">Partner With Us</li>
                        <li className="mx-2 mt-2"> User Guidelines</li>
                        <li className="mx-2 mt-2">Customer Support</li>
                        <li className="mx-2 mt-2">Privacy Policy</li>
                        <li className="mx-2 mt-2">Contact</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer