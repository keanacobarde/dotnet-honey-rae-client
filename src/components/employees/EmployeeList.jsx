import React, {useState, useEffect} from 'react';
import { Table } from "reactstrap";
import { getEmployees } from '../../data/employeesData';
import { Link } from "react-router-dom";


function Employees() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
      getEmployees().then(setEmployees);
    }, []);
  
    return (
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Specialty</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {employees.map((e) => (
            <tr key={`employee-${e.id}`}>
              <th scope="row">{e.id}</th>
              <td>{e.name}</td>
              <td>{e.specialty}</td>
              <td>
                <Link to={`${e.id}`}>Service Tickets</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
  )
}

export default Employees
