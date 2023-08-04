import Table from 'react-bootstrap/Table';

function TableDefault() {
  return (
    <Table striped bordered hover>
      <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
        <th>5 Username</th>
        <th>6 Username</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>@mdo</td>
        <td>6</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
        <td>@fat</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>3</td>
        <td colSpan={2}>Larry the Bird</td>
        <td>@twitter</td>
        <td>@fat</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>4</td>
        <td>@test</td>
        <td>@twitter</td>
        <td>@fat</td>
        <td>@fat</td>
        <td>@fa3</td>
      </tr>
      </tbody>
    </Table>
  );
}

export default TableDefault;