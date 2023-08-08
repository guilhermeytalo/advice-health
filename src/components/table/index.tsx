import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import './style.css';

type TableProps = {
  data: TableData[];
  columns?: string[] | undefined;
};

type TableData = {
  id?: number;
  paciente?: string;
  hora?: string;
  data?: string;
  medico?: string;
  status?: string;
  observacoes?: string;
};

function TableDefault({ data }: TableProps) {
  useEffect(() => {
  }, [data]);

  const tableRows = data.map((item: TableData) => (
    <tr key={item.id}>
      <td>
        <input type="checkbox" id={`customCheck-${item.id}`} />
      </td>
      <td>{item.paciente}</td>
      <td>{item.data}</td>
      <td>{item.hora}</td>
      <td>{item.medico}</td>
      <td>{item.status}</td>
      <td>{item.observacoes}</td>
    </tr>
  ));

  return (
    <Table striped bordered hover style={{ textAlign: 'start' }}>
      <thead>
        <tr>
          <th>#</th>
          <th>Paciente</th>
          <th>Data</th>
          <th>Hora</th>
          <th>Médico</th>
          <th>Status</th>
          <th>Observações</th>
        </tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </Table>
  );
}

export default TableDefault;
