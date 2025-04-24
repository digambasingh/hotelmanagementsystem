import React, { useState, useEffect } from 'react'
import SoloAlert from 'soloalert'
// import { useParams } from "react-router";
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
    // const { logIn } = useUserAuth();
    const [isLoading, setLoading] = useState(false);
    const [cusemail, setcusemail] = useState("");
    const [password, setpassword] = useState("");
    // const navigate = useNavigate();
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //       await logIn(cusemail, password);
    //     } catch (err) {
    //       alert("Login failed. Please check your credentials.");
    //       console.error(err);
    //     }

    
    async function loginData(e) {
        
        setLoading(true)
        try {
            const loginDetails = { cusemail, password }
            const data = (await axios.post("http://localhost:5000/customer/login", loginDetails)).data
            console.log(data)
            if(data.status.role === 'customer'){
                // handleLogin();
                window.location = '/rooms'
                // navigate("/rooms");


            }else{
                window.location = '/'
                // navigate("/");
            }

        } catch (e) {
            alert('unautherized user')
        }
    }

    return (
        <section className="vh-100">

            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://www.onlineecovercreator.com/wp-content/uploads/2013/08/tropical_imacright.png"
                            className="img-fluid" alt="Sample image" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                       
                        <form>
                            <h3 mb-5>Login</h3>

                            <div className="form-outline mb-4 mt-5">
                                <input type="email" id="form3Example3" className="form-control form-control-lg"
                                    placeholder="Email" required
                                    onChange={(e) => { setcusemail(e.target.value) }} />
                            </div>


                            <div className="form-outline mb-3">
                                <input type="password" id="form3Example4" className="form-control form-control-lg"
                                    placeholder="Password" required
                                    onChange={(e) => { setpassword(e.target.value) }} />
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2 d-flex justify-content-start">
                                <button type="button" className="btn btn-primary btn-lg" onClick={(e) => { loginData(e) 
                                 }}>Login</button>




             {/* {user ? (
              <>
                <li classNameName="nav-item">
                  <NavLink classNameName="nav-link" exact="true" to="/bookings">
                    Bookings
                  </NavLink>
                </li>
                <li classNameName="nav-item">
                  <button
                    type="button"
                    classNameName="btn btn-outline-danger nav-link"
                  >
                    Log Out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li classNameName="nav-item">
                  <button
                    type="button"
                    classNameName="btn btn-outline-success mx-1 nav-link"
                    onClick={handleLogin}
                  >
                    Log in
                  </button>
                </li>
                
              </>
            )} */}
























                                <p className="small fw-bold mt-2 pt-1 mb-0 mx-5">Don't have an account? <a href="/signup"
                                
                                    className="link-danger">Register</a></p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <div
                className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-dark">

                <div className="text-white mb-3 mb-md-0">
                    Copyright © 2025. All rights reserved.
                </div>



                <div>
                    <a href="#!" className="text-white me-4">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#!" className="text-white me-4">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#!" className="text-white me-4">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="#!" className="text-white">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>

            </div>
        </section>
    )
};
