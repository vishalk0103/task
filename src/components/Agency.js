import React from "react";
import Header from "./Header";
import Navbar from "./shared/Navbar";
import style from "./Agency.module.css";
import AgencyTable from "./AgencyTable";
import AgencyHeader from "./AgencyHeader";

const data = [
  {
    id: 1,
    name: "Astha",
    employees: 528,
    approved: 482,
    toAgency: "2 may",
    amountToPay: 8326438,
    amountPaid: 3256838,
    balance: 0,
    agencyToEmployee: "Delayed",
    aadhar: 211,
    leave: true,
  },
  {
    id: 1,
    name: "Alangodi Enterprises",
    employees: 528,
    approved: 482,
    toAgency: "2 may",
    amountToPay: 8326438,
    amountPaid: 3256838,
    balance: 0,
    agencyToEmployee: "Delayed",
    aadhar: 211,
    leave: true,
  },
  {
    id: 1,
    name: "Astha",
    employees: 528,
    approved: 482,
    toAgency: "2 may",
    amountToPay: 8326438,
    amountPaid: 3256838,
    balance: 0,
    agencyToEmployee: "Delayed",
    aadhar: 211,
    leave: true,
  },
  {
    id: 1,
    name: "Alangodi Enterprises",
    employees: 528,
    approved: 482,
    toAgency: "2 may",
    amountToPay: 8326438,
    amountPaid: 3256838,
    balance: 0,
    agencyToEmployee: "Delayed",
    aadhar: 211,
    leave: false,
  },
  {
    id: 1,
    name: "Astha",
    employees: 528,
    approved: 482,
    toAgency: "2 may",
    amountToPay: 8326438,
    amountPaid: 3256838,
    balance: 0,
    agencyToEmployee: "Delayed",
    aadhar: 211,
    leave: true,
  },
  {
    id: 1,
    name: "Alangodi Enterprises",
    employees: 528,
    approved: 482,
    toAgency: "2 may",
    amountToPay: 8326438,
    amountPaid: 3256838,
    balance: 0,
    agencyToEmployee: "Delayed",
    aadhar: 211,
    leave: false,
  },
];

const Agency = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Agency Name",
        accessor: "name",
      },
      {
        Header: "Employees",
        accessor: "employees",
      },
      {
        Header: "Approved",
        accessor: "approved",
      },
      {
        Header: "To Agency",
        accessor: "toAgency",
      },
      {
        Header: "Amount To Pay",
        accessor: "amountToPay",
      },
      {
        Header: "Paid",
        accessor: "amountPaid",
      },
      {
        Header: "Balance",
        accessor: "balance",
      },
      {
        Header: "Agency To Employee",
        accessor: "agencyToEmployee",
      },
      {
        Header: "Aadhar",
        accessor: "aadhar",
      },
      {
        Header: "leave",
        accessor: "leave",
      },
    ],
    []
  );

  return (
    <>
      <div className={style.container}>
        <Navbar />
        <div>
          <Header />
        </div>
        <div className="mx-auto text-secondary" style={{ width: "98%" }}>
          <AgencyHeader />
          <AgencyTable columns={columns} data={data} />
        </div>
      </div>
    </>
  );
};

export default Agency;
