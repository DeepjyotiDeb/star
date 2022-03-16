import React from 'react';
import Table from "../components/table/Table";

it('renders in table rows based on provided columns', () => {
    const cols = [
       { header: 'name', name: 'name' },
       { header: 'height', name: 'height' },
       { header: 'mass', name: 'mass' }
    ];   
    const data = [
       {  name: 'Luke Skywalker', height: '172', mass: '77' },
       {  name: 'C-3PO', height: '167', mass: '75' },
       {  name: 'R2-D2', height: '96', mass: '32' },
    ];   
    const container = shallow(<Table data={data} cols={cols} />);   
    const table = container.find('table');
    expect(table).toHaveLength(1);   
    const thead = table.find('thead');
    expect(thead).toHaveLength(1);   
    const headers = thead.find('th');
    expect(headers).toHaveLength(cols.length);   
    headers.forEach((th, idx) => {
       expect(th.text()).toEqual(cols[idx].header);
    });   
    const tbody = table.find('tbody');
    expect(tbody).toHaveLength(1);   
    const rows = tbody.find('tr');
    expect(rows).toHaveLength(data.length);   
    rows.forEach((tr, rowIndex) => {
       const cells = tr.find('td');
       expect(cells).toHaveLength(cols.length);
       expect(cells.at(0).text()).toEqual(data[rowIndex].name);
       expect(cells.at(1).text()).toEqual(data[rowIndex].height);
       expect(cells.at(2).text()).toEqual(data[rowIndex].mass);
    });
 });