import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import './style.css';

type TableProps = {
  data: [];
  columns?: [] | undefined;
};

type TableData = {
  id?: number;
  paciente?: string;
  hora?: string;
  data?: string;
  medico?: string;
  status?: string;
  observacoes?: string;
}

function TableDefault({ data }: TableProps) {
  useEffect(() => {
    console.log('props', data);
  }, []);

  const table = data!.map((item: TableData) => (
    <tr key={item.id}>
      <td>
        <input type="checkbox" id="customCheck2" />
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
    <Table
      striped
      bordered
      hover
      style={{ textAlign: 'start' }}
    >
      {table}
    </Table>
  );
}

export default TableDefault;
