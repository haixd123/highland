import { Col, Form } from "react-bootstrap";

const FormControlInput = ({
  name,
  handleChange,
  valueName,
  errorName,
  label
}: {
  label: string;
  name: string;
  handleChange: () => void;
  valueName: string | number | string[] | undefined;
  errorName?: boolean;
  }) => {
  return <Form.Group as={Col} md="6" controlId={`form-group-${name}`}>
    <Form.Label>{label}</Form.Label>
    <Form.Control
      type="text"
      placeholder={name}
      name={name}
      value={valueName}
      onChange={handleChange}
      isInvalid={!!errorName}
    />
    <Form.Control.Feedback type="invalid">
      {errorName}
    </Form.Control.Feedback>
  </Form.Group>
}

export default FormControlInput;