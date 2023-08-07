import Table from 'react-bootstrap/Table';

function TableDefault() {
  return (
    <Table striped bordered hover style={{ textAlign: 'center'}}>
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
          <td>
            <div>
              <input type="checkbox" id="customCheck2" />
            </div>
          </td>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>
            <div>
              <input type="checkbox" id="customCheck2" />
            </div>
          </td>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>
            <div>
              <input type="checkbox" id="customCheck2" />
            </div>
          </td>
          <td>3</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>
            <div>
              <input type="checkbox" id="customCheck2" />
            </div>
          </td>
          <td>4</td>
          <td>@test</td>
          <td>@twitter</td>
          <td>@fat</td>
          <td>@fat</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableDefault;
