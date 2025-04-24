import React from 'react'
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Signup from "./components/auth/Signup";
import Login from './components/auth/Login';
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Bookings from './components/room/RoomBookings';
import AllBookings from './components/room/ViewAllRoomBookings';
import ViewOneRoom from './components/room/ViewOneRoom';
import ViewRooms from './components/room/ViewAllRooms';
import AddRoom from './components/room/AddRoom';
import SingleRoom from "./pages/SingleRoom";
function App() {
  return (
    <div className='App'>

      <BrowserRouter>
          <Navbar/>
          
          <Routes>
            {/* Room Booking Routes */}
<Route path="/" index element={<Home />} />
<Route path="/rooms" element={<Rooms />} />
{/* <Route  path="/rooms/:slug" component={SingleRoom} /> */}
<Route path="/rooms/:slug" element={<SingleRoom />} />
 {/* User Login and Reg*/}
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route  path = "/viewbookings" element={<AllBookings/>} />
          <Route path="/about" element={<About />} />
      <Route path="/contact-us" element={<Contact />} />



{/* Room Management Routes */}
      <Route  path = "/roommanager/add"   element={<AddRoom/>} />
       <Route  path = "/roommanager/view"    element={<ViewRooms/>}  />
       <Route  path = "/roomManager/view/:id"     element={<ViewOneRoom/>}  />

      <Route path="*" element={<Error />} />
          </Routes>
 
            </BrowserRouter>
            <Footer />
    </div>
  )
}

export default App
