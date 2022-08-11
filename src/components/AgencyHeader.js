import React from "react";
import "../App.css";

const AgencyHeader = () => {
  return (
    <div className="d-flex justify-content-between pt-3 agencyHeader">
      <div
        className="d-flex border-bottom border-secondary px-4 "
        style={{ width: "40%" }}
      >
        <div className="container--ag">
          <span>
            <strong>All Agencies</strong>
          </span>
        </div>
        <div className="mx-5">
          <label htmlFor="month">Month : </label>
          <select name="month" id="month" className="mx-2" value="august">
            <option value="january">January</option>
            <option value="february">February</option>
            <option value="march">March</option>
            <option value="april">April</option>
            <option value="may">May</option>
            <option value="june">June</option>
            <option value="july">July</option>
            <option value="august">August</option>
            <option value="september ">September</option>
            <option value="octo">October</option>
            <option value="nov">November</option>
            <option value="dec">December</option>
          </select>
        </div>
      </div>
      <div className="d-flex pe-3 ">
        <div className="mx-4">
          <button className="CBtn px-4 py-1 bg-transparent">
            Import Aadhar Report
          </button>
        </div>
        <div>
          <button className=" DBtn px-4 py-1">Current Month Payments</button>
        </div>
      </div>
    </div>
  );
};

export default AgencyHeader;
