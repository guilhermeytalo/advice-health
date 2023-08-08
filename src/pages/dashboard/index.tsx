import '../styles.css';
import { Container, Row } from 'react-bootstrap';
import CardDefault from '../../components/card/index.tsx';
import TableDefault from '../../components/table/index.tsx';
import SearchInput from '../../components/search/index.tsx';
import { useEffect, useState } from 'react';
import api from '../../data/api.json';
import CalendarDefault from '../../components/calendar/index.tsx';
import { TableData } from '../../utils.ts';

function Dashboard() {
  const data = api;
  const proximosEventos = data.proximosEventos;
  const estatisticas = data.estatisticas;
  const lembretes = data.lembretes.consultas;
  const [searchPatientData, setSearchPatientData] = useState('');
  const [filteredData, setFilteredData] = useState<TableData[]>([]);

  useEffect(() => {
    setFilteredData(
      lembretes.filter(
        (item) =>
          item.paciente.toLowerCase().includes(searchPatientData.toLowerCase()) ||
          item.medico.toLowerCase().includes(searchPatientData.toLowerCase()) ||
          item.status.toLowerCase().includes(searchPatientData.toLowerCase())
      )
    );
  }, [searchPatientData]);

  return (
    <Container className="mainContent">
      <Row className="cardContent">
        <SearchInput value={searchPatientData} onChange={setSearchPatientData} />
        <h3>DASHBOARD</h3>
        <div className="card">
          <div className="cardMonth">
            <CardDefault
              title={'Consultas' + '\n' + 'do Mês'}
              text={estatisticas.consultasDoMes}
            />
          </div>
          <div className="cardStatus">
            <CardDefault
              title={'Consultas' + '\n' + 'Confirmadas'}
              text={estatisticas.consultasConfirmadas}
            />
            <CardDefault
              title={'Consultas' + '\n' + 'Canceladas'}
              text={estatisticas.consultasCanceladas}
            />
          </div>
        </div>
        <h3>AVISOS/LEMBRETES</h3>
        <div className="tableContent">
          <TableDefault data={filteredData.length > 0 ? filteredData : lembretes} />
        </div>
      </Row>
      <Row className="calendarContent">
        <div>
          <CalendarDefault />
        </div>
        <div>
          <CardDefault
            subText={proximosEventos.assunto + '\n' + proximosEventos.hora}
          />
          <CardDefault
            subText={proximosEventos.assunto + '\n' + proximosEventos.hora}
          />
          <CardDefault
            subText={proximosEventos.assunto + '\n' + proximosEventos.hora}
          />
        </div>
      </Row>
    </Container>
  );
}

export default Dashboard;
