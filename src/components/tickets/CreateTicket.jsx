import { Form, Row, Col, FormGroup, Label, Input} from "reactstrap";

export default function CreateTicket() {
  return (<Form>
    <Row>
      <Col md={6}>
        <FormGroup>
          <Label for="exampleEmail">
            Email
          </Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="with a placeholder"
            type="email"
          />
        </FormGroup>
      </Col>
    </Row>
  </Form>);
}
