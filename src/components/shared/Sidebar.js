import React from "react";
import style from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={style.container}>
      <div className="mt-3 p-3">
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/1810/1810989.png"
            alt=""
            height="70px"
            width="70px"
          />
        </div>
      </div>
      <div className={`${style.links}`}>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/3388/3388614.png"
            alt=""
            height="30px"
            width="30px"
          />
          <p>
            <small>Dashboard</small>
          </p>
        </div>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/8223/8223041.png"
            alt=""
            height="30px"
            width="30px"
          />
          <p>
            <small>Manage</small>
          </p>{" "}
        </div>
        <div>
          <img
            src="https://img.icons8.com/sf-ultralight/2x/appointment-reminders.png"
            alt=""
            height="30px"
            width="30px"
          />
          <p>
            <small>Payments</small>
          </p>{" "}
        </div>
        <div>
          <img
            src="https://img.icons8.com/sf-ultralight/2x/appointment-reminders.png"
            alt=""
            height="30px"
            width="30px"
          />
          <p>
            <small>Notifications</small>
          </p>{" "}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
