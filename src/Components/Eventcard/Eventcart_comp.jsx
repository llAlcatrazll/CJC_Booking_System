import "./eventcard2.css";

// import { useState } from "react";
// PurposeofEvent,    Club,
// const Eventname = "JPIA Conference";
// const Club = "JPIA";
// const FacilityName = "Gymnasium";
// const Date = "October 18";
// const StartingTime = "8:00";
// const EndingTime = "3:00";
// const PurposeofEvent = "Funsies";

// const AccountType = "Admin";
// const eventStatus = "Pending";
// const [openEventCard, setopenEventCard] = useState(true);
// const cardOpener = () => {
//   setopenEventCard((current) => !current);
//   // most efficient for reversing value
// };

// const [Status, setStatus] = useState("Pending");

// const handleClick = () => {
//   if (Status === "Pending") {
//     setStatus("Approved");
//   }
//   if (Status === "Approved") {
//     setStatus("Denied");
//   }
//   if (Status === "Denied") {
//     setStatus("Approved");
//   }
// };

const Eventcart_comp = (data) => {
  console.log(data);
  const {
    FacilityofEvent,
    AdressofEvent,

    EndingTimeofEvent,
    NameofEvent,

    StartingTimeofEvent,
    eventStatus,
  } = data;

  return (
    <div className="eventcardbox">
      <div className="display-flex--row">
        <div className="display-column">
          <div>
            {NameofEvent}
            {AdressofEvent}
          </div>
        </div>
        <div className="display-flex--row">{FacilityofEvent}</div>
        <div>{Date}</div>
        <div className="display-flex--row">
          {StartingTimeofEvent} - {EndingTimeofEvent}
        </div>
        <button>{eventStatus}</button>
      </div>
    </div>
  );
};

/*  id={
            eventStatus === "Pending"
              ? "button_spacer_pending"
              : eventStatus === "Approved"
              ? "button_spacer_approve"
              : eventStatus === "Denied"
              ? "button_spacer_denied"
              : "button_spacer_pending"
          }
        >*/
export default Eventcart_comp;
