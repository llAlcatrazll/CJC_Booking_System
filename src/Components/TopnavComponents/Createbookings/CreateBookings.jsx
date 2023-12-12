import { useState } from "react";
import "./createbookings.css";

export default function CreateBookings() {
  const [NameofEvent, setNameofEvent] = useState();
  const [AdressofEvent, setAdressofEvent] = useState();
  const [PurposeofEvent, setPurposeofEvent] = useState();
  const [FacilityofEvent, setFacilityofEvent] = useState();
  const [StartDateofEvent, setStartDateofEvent] = useState();
  const [EndingDateofEvent, setEndingDateofEvent] = useState();
  const [EndingTimeofEvent, setEndingTimeofEvent] = useState();
  const [StartingTimeofEvent, setStartingTimeofEvent] = useState();

  const handlesubmit = async (e) => {
    e.preventDefault();
    const blog = {
      NameofEvent,
      AdressofEvent,
      PurposeofEvent,
      FacilityofEvent,
      StartDateofEvent,
      EndingDateofEvent,
      EndingTimeofEvent,
      StartingTimeofEvent,
    };
    console.log(blog);
  };

  return (
    <div>
      <form id="center_box" onSubmit={handlesubmit}>
        <h2>Create Bookings</h2>
        <hr />
        <div id="booking-display ">
          <input
            required
            type="text"
            placeholder="Name of Event"
            value={NameofEvent}
            onChange={(e) => setNameofEvent(e.target.value)}
          />
          <input
            type="text"
            placeholder="Addres & Tel No. (if any)"
            value={AdressofEvent}
            onChange={(e) => setAdressofEvent(e.target.value)}
          />
          <input
            required
            type="text"
            placeholder="Purpose of Event"
            value={PurposeofEvent}
            onChange={(e) => setPurposeofEvent(e.target.value)}
          />
        </div>
        <label htmlFor="starting-time">Start of Event</label>
        <div name="starting-time" className="display-flex--column">
          <input
            required
            type="date"
            value={StartDateofEvent}
            onChange={(e) => setStartDateofEvent(e.target.value)}
          />
          <input
            required
            type="time"
            name="start-time"
            value={StartingTimeofEvent}
            onChange={(e) => setStartingTimeofEvent(e.target.value)}
          />
        </div>
        <label htmlFor="ending-event">End of Event</label>
        <div name="ending-time" className="display-flex--column">
          <input
            required
            type="date"
            value={EndingDateofEvent}
            onChange={(e) => setEndingDateofEvent(e.target.value)}
          />
          <input
            required
            type="time"
            value={EndingTimeofEvent}
            onChange={(e) => setEndingTimeofEvent(e.target.value)}
          />
        </div>
        <div className="display-flex--column">
          <select name="" id="">
            <option value="">Select Type</option>
          </select>
          <select
            name=""
            id=""
            value={FacilityofEvent}
            onChange={(e) => setFacilityofEvent(e.target.value)}
          >
            <option required value="">
              Select Facility
            </option>
          </select>
        </div>
        <button id="submit-button" onChange={handlesubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
