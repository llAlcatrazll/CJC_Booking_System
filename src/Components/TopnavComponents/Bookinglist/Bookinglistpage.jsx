// import "./bookinglist.css";
import Eventcard from "../../Eventcard/Eventcard";
// import datas from "/data.json";
import { useEffect, useState } from "react";
export default function Bookinglistpage() {
  const [datas, setData] = useState(null);

  useEffect(() => {
    async function LoginToken() {
      const token = localStorage.getItem("token");
      const response = await fetch("http://192.168.40.173:3002/event", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      setData(result.data);
    }
    LoginToken();
  }, []);

  return (
    <div>
      <div id="center_box">
        <h2>Booking List</h2>
        <hr />
        <div id="booking-column">
          {datas &&
            datas.map((data, index) => <Eventcard key={index} data={data} />)}
        </div>
      </div>
    </div>
  );
}
