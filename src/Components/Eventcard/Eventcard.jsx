import "./eventcard2.css";

/*
READ ME!
  This basically displays all the events booked by the user

  data to be passed is
  eventname ="acquaintance Party";
  facilityName = "Gymnasium";
  purposeofEvent = "Get to Know";
  startofEvent: "2023-11-24T16:00"
  endofEvent: "2023-11-24T20:30"

  **Note current data format is to be formatted to standard 12hours AM-PM format on the database for easier reading in the frontend
      2023-11-24T20:30   To    8:30 PM
  **

these data are taken from the ./Createbooking.jsx  

Features:
  Filter function
      By Month
      By Semester
      By Week
      By Facility
      Sort by (Name, Data, FacilityName)
*/
export default function Eventcard(data) {
  console.log(data);
  /**  PurposeofEvent,
    DateofEvent,     */
  const {
    NameofEvent,

    FacilityofEvent,
    // StartingTimeofEvent,
    // EndingTimeofEvent,
    // eventStatus,
  } = data.data;

  return (
    <>
      <div className="eventcardbox">
        <div>{NameofEvent}</div>
        <div className="display-flex--column">
          <div>{FacilityofEvent}</div>
          <div>{}</div>
        </div>
      </div>
    </>
  );
}
/* <button
            id={
              eventStatus === "Pending"
                ? "button_spacer_pending"
                : eventStatus === "Approved"
                ? "button_spacer_approve"
                : eventStatus === "Denied"
                ? "button_spacer_denied"
                : "button_spacer_pending"
            }
          >
            {eventStatus}
          </button> */
