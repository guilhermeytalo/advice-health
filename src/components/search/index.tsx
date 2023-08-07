import { FormEventHandler } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

type SearchInputProps = {
  value: FormEventHandler<HTMLFormElement>;
};

function SearchInput({
  value,  
}: SearchInputProps) {
  return (
    <Form onChange={value}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Control
            style={{ width: '100%', padding: '10px' }}
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
