import react from "react";
import { render, screen } from '@testing-library/react';
import Home from "../components/home/Home";
import TableContainer from "../components/table-container/TableContainer";
import Table from "../components/table/Table";

const cols = [
  {
      Header: "name",
      accessor: "name"
  },
  {
      Header: "height",
      accessor: "height"
  },
  {
      Header: "mass",
      accessor: "mass"
  }]
const data = [
  {  name: 'Luke Skywalker', height: '172', mass: '77' },
  {  name: 'C-3PO', height: '167', mass: '75' },
  {  name: 'R2-D2', height: '96', mass: '32' },
];

test('renders Home', () => {
    render(<Home/>);
    screen.debug();
  });
test('renders Table container', () => {
    render(<TableContainer data = {data}/>);
    screen.debug();
  });
// test('renders Table', () => {
//     render(<Table data = {data}/>);
//     screen.debug();
//   });