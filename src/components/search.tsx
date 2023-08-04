import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function SearchInput() {

  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Control
            required
            type="text"
            placeholder="BUSCA"
          />
        </Form.Group>
      </Row>
    </Form>
  );
}

export default SearchInput;