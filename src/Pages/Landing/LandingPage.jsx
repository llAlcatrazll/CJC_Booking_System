import "./landingpage.css";
import User_Icon from "../../assets/COE.jpg";
import Logo_CJC from "../../assets/Logo.png";
import Logout from "../../assets/logout.png";
import { useState } from "react";
import Sidebarbox from "../../Sidebar/Sidebarbox";
// import React, { Component } from "react";
import { Link } from "react-router-dom";
import Bookinglistpage from "../../Components/TopnavComponents/Bookinglist/Bookinglistpage";
import Search_Page from "../../Components/TopnavComponents/Search/Search_Page";
import ActivityCalendar_Page from "../../Components/TopnavComponents/ActivityCalendar/ActivityCalendarPage";
import CreateBookings from "../../Components/TopnavComponents/Createbookings/CreateBookings";

const Username = "COE";
/*
bookinglist
searchpage
activitycalendar
createbooking
*/

export default function LandingPage() {
  const [createbooking, setcreatebooking] = useState(true);
  const [activitycalendar, setactivitycalendar] = useState(false);
  const [searchpage, setsearchpage] = useState(false);
  const [bookinglist, setbookinglist] = useState(false);
  const [toggleSidebar, settoggleSidebar] = useState("true");
  const [logoutPop, setlogoutPop] = useState(false);

  const setPage = (selectedValue) => {
    setcreatebooking(selectedValue === "create");
    setactivitycalendar(selectedValue === "calendar");
    setsearchpage(selectedValue === "search");
    setbookinglist(selectedValue === "list");
  };

  const loutoutpopper = () => {
    setlogoutPop((current) => !current);
    // most efficient for reversing value
  };
  const collapser = () => {
    settoggleSidebar((current) => !current);
    // most efficient for reversing value
  };

  return (
    <div id="background_landing">
      <header id="landing_header">
        <div className="flex-row">
          <img id="Logo_header" src={Logo_CJC} alt="" />
          <div className="flex-row">
            <div onChange={setPage} className="test">
              <li onClick={() => setPage("calendar")}>Activity Calendar</li>
              <li onClick={() => setPage("create")}>Create Bookings</li>
              <li onClick={() => setPage("list")}>Booking List</li>
              <li onClick={() => setPage("search")}>Search</li>
            </div>
          </div>
          <div id="display-flex-column">
            <div id="username_decor">{Username}</div>
            <img
              id="user_icon"
              src={User_Icon}
              alt=""
              onClick={loutoutpopper}
            />
          </div>
          {logoutPop ? (
            <>
              <div id="Logout_box">
                <Link to={"/"}>
                  <p>Log out</p>
                </Link>
                <Link to={"/"}>
                  <img id="logout-button" src={Logout} />
                </Link>
              </div>
            </>
          ) : (
            <>
              <div></div>
            </>
          )}
        </div>
      </header>
      <div id="background_blug-black"></div>
      <main id="display-flex-column">
        <div id="button-toggle-sidebar" onClick={collapser}>
          =
        </div>
        {toggleSidebar ? <div></div> : <Sidebarbox />}
        <div id="center-creation">
          {createbooking && <CreateBookings />}
          {activitycalendar && <ActivityCalendar_Page />}
          {searchpage && <Search_Page />}
          {bookinglist && <Bookinglistpage />}
        </div>
      </main>
    </div>
  );
}
