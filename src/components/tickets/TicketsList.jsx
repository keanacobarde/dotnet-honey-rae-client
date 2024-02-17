import { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import { completeServiceTicket, deleteServiceTicket, getServiceTickets } from "../../data/serviceTicketsData";
import { Link } from "react-router-dom";

export default function TicketsList() {
  const [tickets, setTickets] = useState([]);

  const getAllTheServiceTickets = () => {
    getServiceTickets().then(setTickets);
  }

  useEffect(() => {
    getAllTheServiceTickets();
  }, []);

  const handleDelete = (e) => {
    const { id } = e.target;
    deleteServiceTicket(id).then(setTickets);
  }

  const handleComplete = (e) => {
    const { id } = e.target;
    completeServiceTicket(id).then(setTickets);
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
        {tickets.map((t) => (
          <tr key={`ticket-${t.id}`}>
            <th scope="row">{t.id}</th>
            <td>{t.description}</td>
            <td>{t.emergency ? "yes" : "no"}</td>
            <td>{t.dateCompleted?.split("T")[0] || "Incomplete"}</td>
            <td>
              <Link to={`${t.id}`}>Details</Link>
            </td>
            <td onClick={handleDelete}>
              <Button color="danger" id={t.id}> Delete </Button>
            </td>
            <td>
             {t.dateCompleted == null ?  <Button color="success" id={t.id} onClick={handleComplete}> Complete </Button> : ''}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
