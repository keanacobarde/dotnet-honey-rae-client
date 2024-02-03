import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "reactstrap";
import { getEmployeeDetails } from "../../data/employeesData";

function EmployeeDetails() {
  const { id } = useParams();
  const [employeeTickets, setEmployeeTicket] = useState(null);

  //add useEffect here to get the ticket details from the API
  useEffect(() => {
    getEmployeeDetails(id).then(setEmployeeTicket);
  }, []);

  if (!employeeTickets) {
    return null;
  }

  return (
    <Table>
   <thead>
        <tr>
          <th>Id</th>
          <th>Description</th>
          <th>Emergency?</th>
          <th>Date Completed</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {employeeTickets.serviceTickets.map((t) => (
          <tr key={`ticket-${t.id}`}>
            <th scope="row">{t.id}</th>
            <td>{t.description}</td>
            <td>{t.emergency ? "yes" : "no"}</td>
            <td>{t.dateCompleted?.split("T")[0] || "Incomplete"}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );

}

export default EmployeeDetails
