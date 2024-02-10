import { useEffect, useState } from "react";
import { Form, Row, Col, FormGroup, Label, Input, Button} from "reactstrap";
import { getEmployees } from "../../data/employeesData";
import { getCustomers } from "../../data/customersData";

// Setting Initial State
const initialState = {
  customerId: '',
  employeeId: '',
  description: '',
  emergency: false,
};

export default function CreateTicket() {

  const [formInput, setFormInput] = useState(initialState);
  const [customers, setCustomers] = useState([]);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees().then((res) => setEmployees(res.map(employee => employee.id)))
    getCustomers().then((res) => setCustomers(res.map((cus) => cus.id)));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (<Form>
    <Row>
      <Col md={6}>
        <FormGroup>
          <Label for="CustomerName">
            Customer ID
          </Label>
          <Input
    className="mb-3"
    type="select"
    id="customerId"
    name="customerId"
    placeholder="Customer"
    value={formInput.customerId}
    onChange={handleChange}
  >
    {customers.map((cus) => <option key={cus}>{cus}</option>)}
  </Input>
        </FormGroup>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <FormGroup>
          <Label for="Employee">
            Employee Name
          </Label>
          <Input
    className="mb-3"
    type="select"
    id="employeeId"
    name="employeeId"
    placeholder="Employee"
    value={formInput.employeeId}
    onChange={handleChange}
  >
    {employees.map((emp) => <option key={emp}>{emp}</option>)}
  </Input>
        </FormGroup>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <FormGroup>
          <Label for="Description">
            Description
          </Label>
          <Input
            id="description"
            name="description"
            placeholder="Description of Issue"
            type="text"
            value={formInput.description}
            onChange={handleChange}
          />
        </FormGroup>
      </Col>
    </Row>
    <FormGroup check>
    <Input type="checkbox" />
    {' '}
    <Label check>
      Emergency?
    </Label>
  </FormGroup>
  <Button type="submit">
    Submit
  </Button>
  </Form>);
}
