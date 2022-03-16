import React, { useMemo } from "react";
import { useTable } from "react-table";
import { useSortBy } from "react-table/dist/react-table.development";
import { COLUMNS } from "../table-container/Column";
import "./table.css"

export default function Table(props) {
  var starWarsData = props;
  const starData = starWarsData.people

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => starData, [starData]);

  const tableInstance = useTable({
    columns,
    data,
  },
  useSortBy,
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div>
      
      {console.log(starData)}
      
      <table {...getTableProps()} >
       <thead>
         {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
                {column.isSorted ? (column.isSortedDesc ? "↓": "↑"): ""}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} >
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>
                  {cell.render("Cell")}
                  </td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
}
