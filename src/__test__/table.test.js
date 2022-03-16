import react from "react";
import { render, screen } from '@testing-library/react';
import Home from "../components/home/Home";
import Table from "../components/table/Table";
import TableContainer from "../components/table-container/TableContainer";

test('renders Home', () => {
    render(<Home/>);
    screen.debug();
  });
