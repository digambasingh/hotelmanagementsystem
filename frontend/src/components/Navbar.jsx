import React,{ useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
// import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const [user] = useState(null);
  // const dispatch = useDispatch();
  // const user = useSelector((store) => store.connection)

  // Load user from localStorage on mount
  // useEffect(() => {
  //   const savedUser = JSON.parse(localStorage.getItem("user"));
  //   if (savedUser) {
  //     setUser(savedUser);
  //   }
  // }, []);

  // useEffect(() =>{
  //   if(!user){
  //     navigate('/login');
  //   }
  // },[]);



  // Logout handler
  // const handleLogout = () => {
  //   navigate("/signin");
  // };

  // Login handler (mock)
  // const handleLogin = () => {
  //   const fakeUser = { name: "TestUser" };
  //   localStorage.setItem("user", JSON.stringify(fakeUser));
    // setUser(fakeUser); 
    // navigate("/bookings");
  // };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-transparent py-2 fixed-top scrolled">
      <div className="container-fluid">
        <span
          className="navbar-brand font-weight-bolder"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          Hotel.
        </span>
        <a
          href="#!"
          className="navbar-toggler border-0"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <FaAlignRight className="nav-icon" />
          </span>
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact="true" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact="true" to="/rooms">
                Rooms
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact="true" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact="true" to="/contact-us">
                Contact
              </NavLink>
            </li>
           <li className="nav-item">
                  <NavLink className="nav-link" exact="true" to="/bookings">
                    Bookings
                  </NavLink>
                </li>

            {user ? (
              <>
                <li className="nav-item">
                  <button
                    type="button"
                    className="btn btn-outline-danger nav-link"
                    // onClick={handleLogout}
                  >
                    Log Out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  {/* <button
                    type="button"
                    className="btn btn-outline-success mx-1 nav-link"
                    // onClick={handleLogin}
                  >
                    Log in
                  </button> */}
                  <NavLink className="nav-link" to='signin' exact="true">
                  <button type="button" className="btn btn-outline-danger">
                    log in
                    </button>

                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" exact="true" to="/signup">
                    <button type="button" className="btn btn-outline-danger">
                      Sign up
                    </button>
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
