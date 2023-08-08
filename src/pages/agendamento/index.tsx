import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SearchInput from '../../components/search';
import TableDefault from '../../components/table';
import { data } from '../../data/data';
import { TableData } from '../../utils';

export const Agendamento = () => {
  const lembretes = data.lembretes.consultas;
  const [searchPatientData, setSearchPatientData] = useState('');
  const [filteredData, setFilteredData] = useState<TableData[]>([]);

  useEffect(() => {
    setFilteredData(
      lembretes.filter(
        (item) =>
          item.paciente
            .toLowerCase()
            .includes(searchPatientData.toLowerCase()) ||
          item.medico.toLowerCase().includes(searchPatientData.toLowerCase()) ||
          item.status.toLowerCase().includes(searchPatientData.toLowerCase())
      )
    );
  }, [searchPatientData]);

  return (
    <Container>
      <Row>
        <SearchInput
          value={searchPatientData}
          onChange={setSearchPatientData}
        />
        <div>
          <TableDefault
            data={filteredData.length > 0 ? filteredData : lembretes}
          />
        </div>
      </Row>
    </Container>
  );
};
