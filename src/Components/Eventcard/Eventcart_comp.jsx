import "./eventcard.css";
import { useState } from "react";
export default function Eventcart_comp() {
  const Eventname = "JPIA Conference";
  const Club = "JPIA";
  const FacilityName = "Gymnasium";
  const Status = "Denied";
  const Date = "October 18";
  const StartingTime = "8:00";
  const EndingTIme = "3:00";
  const PurposeofEvent = "Funsies";

  const [openEventCard, setopenEventCard] = useState(false);
  const cardOpener = () => {
    setopenEventCard((current) => !current);
    // most efficient for reversing value
  };

  return (
    <>
      {openEventCard ? (
        <div className="card-main" onClick={cardOpener}>
          <div className="display-flex--row">
            <div className="display-column">
              <div> {Eventname}</div>
              <div>{PurposeofEvent}</div>
            </div>
            <div className="display-flex--row">{FacilityName}</div>
            <div>{Date}</div>
            <div className="display-flex--row">
              {StartingTime} - {EndingTIme}
            </div>
            <div className="display-flex--row">{Status}</div>
          </div>
        </div>
      ) : (
        <div className="card-main" onClick={cardOpener}>
          <div className="display-flex--row">
            <div className="display-column">
              <div> {Eventname}</div>
              <div>{PurposeofEvent}</div>
            </div>
            <div className="display-flex--row">{FacilityName}</div>
            <div>{Date}</div>
            <div className="display-flex--row">
              {StartingTime} - {EndingTIme}
            </div>
            <div className="display-flex--row">{Status}</div>
          </div>
          <div className="display-flex--row">
            <div>{Club}</div>
          </div>
        </div>
      )}
    </>
  );
}
