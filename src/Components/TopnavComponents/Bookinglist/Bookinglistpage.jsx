import "./bookinglist.css";
import Eventcart_comp from "../../Eventcard/Eventcart_comp";
export default function Bookinglistpage() {
  return (
    <div>
      <div id="center_box">
        <h2>Booking List</h2>
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
