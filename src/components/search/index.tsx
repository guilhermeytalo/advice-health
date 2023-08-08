import { ChangeEvent, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

function SearchInput({ onChange, placeholder = 'BUSCA' }: SearchInputProps) {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
    onChange(value); // Notify the parent component about the value change
  };

  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Control
            style={{ width: '100%', padding: '10px' }}
            required
            type="text"
            placeholder={placeholder}
            value={searchValue}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>
    </Form>
  );
}

export default SearchInput;
