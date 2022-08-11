import React from "react";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={` ${style.nav} text-white`}>
      <nav className="navbar navbar-transparent bg-transparent d-flex justify-content-between px-5 py-3 ">
        <div className="">
          <h4>Payment Tracker</h4>
        </div>

        <div className={style.profile}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/236/236831.png"
            alt=""
            height="35px"
            width="35px"
          />
          <h6>
            <strong>A Name</strong>
          </h6>
          <img
            src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik0xNi42NjI1LDQ0LjM5NzVsLTcuMjAyNSw3LjIwMjVsNzYuNTQsNzYuNTRsNzYuNTQsLTc2LjU0bC03LjIwMjUsLTcuMjAyNWwtNjkuMzM3NSw2OS4zMzc1eiI+PC9wYXRoPjwvZz48ZyBmaWxsPSIjY2NjY2NjIj48cGF0aCBkPSJNOTkuMTk1LDY4Ljk0djMuN2gtMTAuOTd2MzAuNDJoLTQuNDh2LTMwLjQyaC0xMC45NHYtMy43eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
            alt=""
            height="22px"
            width="22px"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
