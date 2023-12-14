import "./eventcard.css";
import { useState } from "react";
export default function Eventcart_comp() {
  const Eventname = "JPIA Conference";
  const Club = "JPIA";
  const FacilityName = "Gymnasium";
  const Date = "October 18";
  const StartingTime = "8:00";
  const EndingTIme = "3:00";
  const PurposeofEvent = "Funsies";

  const AccountType = "Student";

  const [openEventCard, setopenEventCard] = useState(true);
  const cardOpener = () => {
    setopenEventCard((current) => !current);
    // most efficient for reversing value
  };

  const [Status, setStatus] = useState("Pending");

  const handleClick = () => {
    if (Status === "Pending") {
      setStatus("Approved");
    }
    if (Status === "Approved") {
      setStatus("Denied");
    }
    if (Status === "Denied") {
      setStatus("Approved");
    }
  };
  return (
    <>
      {AccountType == "Admin" ? (
        <>
          {openEventCard ? (
            <div className="card-main">
              <div className="display-flex--row">
                <div className="display-column">
                  <div onClick={cardOpener}> {Eventname}</div>
                </div>
                <div onClick={cardOpener} className="display-flex--row">
                  {FacilityName}
                </div>
                <div onClick={cardOpener}>{Date}</div>
                <div onClick={cardOpener} className="display-flex--row">
                  {StartingTime} - {EndingTIme}
                </div>
                <button
                  id={
                    Status == "Pending"
                      ? "button_spacer_pending"
                      : Status == "Approved"
                      ? "button_spacer_approve"
                      : Status == "Denied"
                      ? "button_spacer_denied"
                      : "button_spacer_pending"
                  }
                  onClick={handleClick}
                >
                  {Status}
                </button>

                {/* <div className="display-flex--row">{Status}</div> */}
              </div>
            </div>
          ) : (
            <div className="card-main" onClick={cardOpener}>
              <div className="display-flex--row">
                <div className="display-column">
                  <div> {Eventname}</div>
                </div>
                <div className="display-flex--row">{FacilityName}</div>
                <div>{Date}</div>
                <div className="display-flex--row">
                  {StartingTime} - {EndingTIme}
                </div>
                <button
                  id={
                    Status == "Pending"
                      ? "button_spacer_pending"
                      : Status == "Approved"
                      ? "button_spacer_approve"
                      : Status == "Denied"
                      ? "button_spacer_denied"
                      : "button_spacer_pending"
                  }
                  onClick={handleClick}
                >
                  {" "}
                  {Status}
                </button>
              </div>
              <div className="display-flex--row">
                <div>{Club}</div>
                <div>{PurposeofEvent}</div>
              </div>
            </div>
          )}
        </>
      ) : AccountType == "Student" || AccountType == "Student Assistant" ? (
        <>
          {openEventCard ? (
            <div className="card-main">
              <div className="display-flex--row">
                <div className="display-column">
                  <div onClick={cardOpener}> {Eventname}</div>
                </div>
                <div onClick={cardOpener} className="display-flex--row">
                  {FacilityName}
                </div>
                <div onClick={cardOpener}>{Date}</div>
                <div onClick={cardOpener} className="display-flex--row">
                  {StartingTime} - {EndingTIme}
                </div>
                <button
                  id={
                    Status == "Pending"
                      ? "button_spacer_pending"
                      : Status == "Approved"
                      ? "button_spacer_approve"
                      : Status == "Denied"
                      ? "button_spacer_denied"
                      : "button_spacer_pending"
                  }
                >
                  {Status}
                </button>

                {/* <div className="display-flex--row">{Status}</div> */}
              </div>
            </div>
          ) : (
            <div className="card-main" onClick={cardOpener}>
              <div className="display-flex--row">
                <div className="display-column">
                  <div> {Eventname}</div>
                </div>
                <div className="display-flex--row">{FacilityName}</div>
                <div>{Date}</div>
                <div className="display-flex--row">
                  {StartingTime} - {EndingTIme}
                </div>
                <button
                  id={
                    Status == "Pending"
                      ? "button_spacer_pending"
                      : Status == "Approved"
                      ? "button_spacer_approve"
                      : Status == "Denied"
                      ? "button_spacer_denied"
                      : "button_spacer_pending"
                  }
                >
                  {" "}
                  {Status}
                </button>
              </div>
              <div className="display-flex--row">
                <div>{Club}</div>
                <div>{PurposeofEvent}</div>
              </div>
            </div>
          )}
        </>
      ) : (
        <>Error</>
      )}
    </>
  );
}
