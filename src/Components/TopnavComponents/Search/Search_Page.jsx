import "./search.css";
import { useState } from "react";
import Eventcart_comp from "../../Eventcard/Eventcart_comp";
export default function Search_Page() {
  const [venusearch, setvenusearch] = useState();
  const [datesearch, setdatesearch] = useState();
  const [clubsearch, setclubsearch] = useState();
  const [namesearch, setnamesearch] = useState();
  // search functions
  const [venueofEvent, setvenueofEvent] = useState("");
  const [dateofEvent, setdateofEvent] = useState("");
  const [clubofEvent, setClubofEvent] = useState("");
  const [nameofEvent, setNameofEvent] = useState("");

  const searchChanger = (e) => {
    const selectedValue = e.target.value;
    setvenusearch(selectedValue === "venue");
    setdatesearch(selectedValue === "date");
    setclubsearch(selectedValue === "club");
    setnamesearch(selectedValue === "name");
  };

  const venueSubmitter = async (e) => {
    e.preventDefault();
    const blog = {
      venueofEvent,
    };
    console.log(blog);
  };
  const dateSubmitter = async (e) => {
    e.preventDefault();
    const blog = {
      dateofEvent,
    };
    console.log(blog);
  };
  const clubSubmitter = async (e) => {
    e.preventDefault();
    const blog = {
      clubofEvent,
    };
    console.log(blog);
  };
  const nameSubmitter = async (e) => {
    e.preventDefault();
    const blog = {
      nameofEvent,
    };
    console.log(blog);
  };

  return (
    <div>
      <div id="center_box">
        <div className="display-flex--row">
          <h2>Search </h2>
          <p>Search by: </p>
          <select name="" id="" onChange={searchChanger}>
            <option value="venue">Venue</option>
            <option value="date">Date</option>
            <option value="club">Club</option>
            <option value="name">Event Name</option>
          </select>
        </div>
        {venusearch && (
          <>
            <form className="display-flex--row" onSubmit={venueSubmitter}>
              <select
                name=""
                id="select_options"
                onChange={(e) => setvenueofEvent(e.target.value)}
              >
                <option value="Gymnasium">Gymnasium</option>
                <option value="HE Hall">HE Hall</option>
                <option value="Bouley Building">Bouley Building</option>
                <option value="Coindre Grounds">Coindre Grounds</option>
                <option value="Open Court">Open Court</option>
              </select>
              <div>
                <button>Submit</button>
              </div>
            </form>
          </>
        )}
        {datesearch && (
          <>
            <form className="display-flex--row" onSubmit={dateSubmitter}>
              <input
                type="date"
                onChange={(e) => setdateofEvent(e.target.value)}
              />
              <div>
                <button>Submit</button>
              </div>
            </form>
          </>
        )}
        {clubsearch && (
          <>
            <form className="display-flex--row" onSubmit={clubSubmitter}>
              <div>
                <input
                  id="club-search"
                  type="text"
                  placeholder="Club / Government Name"
                  onChange={(e) => setClubofEvent(e.target.value)}
                />
              </div>
              <div>
                <button>Submit</button>
              </div>
            </form>
          </>
        )}
        {namesearch && (
          <>
            <form className="display-flex--row" onSubmit={nameSubmitter}>
              <div>
                <input
                  id="club-search"
                  type="text"
                  placeholder="Event Name"
                  onChange={(e) => setNameofEvent(e.target.value)}
                />
              </div>
              <div>
                <button>Submit</button>
              </div>
            </form>
          </>
        )}
        <hr />
        <div id="booking-column">
          <Eventcart_comp />
          <Eventcart_comp />
          <Eventcart_comp />
          <Eventcart_comp />
          <Eventcart_comp />
          <Eventcart_comp />
        </div>
      </div>
    </div>
  );
}
