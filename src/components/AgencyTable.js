import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import BTable from "react-bootstrap/Table";

import { useTable } from "react-table";

const AgencyTable = ({ columns, data }) => {
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  return (
    <BTable
      className="text-secondary"
      striped
      bordered
      hover
      size="sm"
      {...getTableProps()}
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {rows.map((row, i) => {
          prepareRow(row);

          if (row.values.leave === true) {
            row.values.leave = (
              <img
                src="https://cdn-icons.flaticon.com/png/128/4315/premium/4315445.png?token=exp=1660198311~hmac=ea63249504a4e6e757c297dfee85c447"
                alt=""
                height={20}
                width={20}
              />
            );
          } else if (row.values.leave === false) {
            row.values.leave = (
              <img
                src="https://cdn-icons-png.flaticon.com/128/6711/6711656.png"
                alt=""
                height={20}
                width={20}
              />
            );
          }

          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </BTable>
  );
};

export default AgencyTable;
