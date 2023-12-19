import { useState } from "react";
import "./createbookings.css";

export default function CreateBookings() {
  //
  const [NameofEvent, setNameofEvent] = useState();
  const [AdressofEvent, setAdressofEvent] = useState();
  const [PurposeofEvent, setPurposeofEvent] = useState();
  const [FacilityofEvent, setFacilityofEvent] = useState();
  const [DateofEvent, setDateofEvent] = useState();
  const [EndingTimeofEvent, setEndingTimeofEvent] = useState();
  const [StartingTimeofEvent, setStartingTimeofEvent] = useState();
  const [DetailsConfirmation, setDetailsConfirmation] = useState(false);
  const [Facility, setFacility] = useState(false);
  const [Room, setRoom] = useState(false);
  const [eventStatus, seteventStatus] = useState("Pending");
  /*
No difference between Student Assisant and Admin Reservation */
  const handlesubmit = async (e) => {
    e.preventDefault();
    {
      details_popup;
    }
    const blog = {
      NameofEvent,
      AdressofEvent,
      PurposeofEvent,
      FacilityofEvent,
      DateofEvent,
      EndingTimeofEvent,
      StartingTimeofEvent,
      eventStatus,
    };
    console.log(blog);
    console.log("Its working");
  };
  const handleAffiliationChange = (event) => {
    const selectedValue = event.target.value;

    setFacility(selectedValue === "facility");
    setRoom(selectedValue === "room");
  };

  const clearInputs = async (e) => {
    e.preventDefault();
    setNameofEvent("");
    setAdressofEvent("");
    setPurposeofEvent("");
    setFacilityofEvent("");
    setDateofEvent("");
    setEndingTimeofEvent("");
    setStartingTimeofEvent("");
    setFacility("");
    setRoom("");
    seteventStatus("Pending");
  };

  const details_popup = (e) => {
    e.preventDefault();
    setDetailsConfirmation((current) => !current);
  };
  return (
    <div>
      <form id="center_box" onSubmit={details_popup}>
        <div id="top-booking-clear">
          <h1>Create Bookings</h1>
          <button onClick={clearInputs}>Clear</button>
        </div>
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
        <label htmlFor="starting-time">Date of Event</label>
        <div name="starting-time" className="display-flex--column">
          <input
            id="date_of_event"
            required
            type="date"
            value={DateofEvent}
            onChange={(e) => setDateofEvent(e.target.value)}
          />
        </div>
        <label htmlFor="ending-event">Time of Event</label>
        <div name="ending-time" className="display-flex--column">
          <input
            required
            type="time"
            value={StartingTimeofEvent}
            onChange={(e) => setStartingTimeofEvent(e.target.value)}
          />
          <input
            required
            type="time"
            value={EndingTimeofEvent}
            onChange={(e) => setEndingTimeofEvent(e.target.value)}
          />
        </div>
        <div className="display-flex--column">
          <select
            name="Venue-Check"
            required
            id="value"
            // onChange={handleAffiliationChange}
            onChange={handleAffiliationChange}
          >
            <option value="">Select a Type</option>
            <option value="facility">Facility</option>
            <option value="room">Room</option>
          </select>
          <select
            name=""
            id=""
            value={FacilityofEvent}
            onChange={(e) => setFacilityofEvent(e.target.value)}
          >
            {Facility && (
              <>
                <option value="gymnasium">Gymnasium</option>
                <option value="hehall">HE Hall</option>
                <option value="coindregrounds">Coindre Grounds</option>
                <option value="opencouty">Open Court</option>
                <option value="ledouxhall">Ledoux Hall</option>
                <option value="bouleyroom">Bouley Room</option>
                <option value="piazza">Piazza</option>
              </>
            )}

            {Room && (
              <>
                <option value="m116">M116</option>
                <option value="m118">M118</option>
                <option value="m120">M120</option>
                <option value="m103">R103</option>
              </>
            )}
          </select>
        </div>
        <button id="submit-button" onClick={details_popup}>
          Continue
        </button>
        {DetailsConfirmation ? (
          <>
            <div id="bg_blurr">.</div>
            <div id="details_confirmation_box">
              <div className="flex-display--column">
                <h2>Confirm your Details</h2>
                <p>{NameofEvent}</p>
                <p>{AdressofEvent}</p>
                <p>{PurposeofEvent}</p>
                <p>{FacilityofEvent}</p>
                <p>{DateofEvent}</p>
                <p>
                  {StartingTimeofEvent} - {EndingTimeofEvent}
                </p>
              </div>

              <button
                onClick={(e) => {
                  details_popup(e);
                  handlesubmit(e);
                }}
              >
                Submit
              </button>
              <button>Cancel</button>
            </div>
          </>
        ) : (
          <></>
        )}
      </form>
    </div>
  );
}
