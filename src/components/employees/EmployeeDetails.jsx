import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "reactstrap";
import { getEmployeeDetails } from "../../data/employeesData";

function EmployeeDetails() {
  const { id } = useParams();
  return (
    <div>{id}</div>
  );
}

export default EmployeeDetails
