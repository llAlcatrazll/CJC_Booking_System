import "./search.css";
import { useState } from "react";
import Eventcart_comp from "../../Eventcard/Eventcart_comp";
export default function Search_Page() {
  const [venusearch, setvenusearch] = useState();
  const [datesearch, setdatesearch] = useState();
  const [clubsearch, setclubsearch] = useState();
  const [namesearch, setnamesearch] = useState();

  const searchChanger = (e) => {
    const selectedValue = e.target.value;
    setvenusearch(selectedValue === "venue");
    setdatesearch(selectedValue === "date");
    setclubsearch(selectedValue === "club");
    setnamesearch(selectedValue === "name");
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
            <div className="display-flex--row">
              <select name="" id="select_options">
                <option value="">Gymnasium</option>
                <option value="">HE Hall</option>
              </select>
              <div>
                <button>Submit</button>
              </div>
            </div>
          </>
        )}
        {datesearch && (
          <>
            <div className="display-flex--row">
              <input type="date" />
              <div>
                <button>Submit</button>
              </div>
            </div>
          </>
        )}
        {clubsearch && (
          <>
            <div className="display-flex--row">
              <div>
                <input
                  id="club-search"
                  type="text"
                  placeholder="Club / Government Name"
                />
              </div>
              <div>
                <button>Submit</button>
              </div>
            </div>
          </>
        )}
        {namesearch && (
          <>
            <div className="display-flex--row">
              <div>
                <input id="club-search" type="text" placeholder="Event Name" />
              </div>
              <div>
                <button>Submit</button>
              </div>
            </div>
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
