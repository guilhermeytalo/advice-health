import './App.css';
import { Container, Row } from 'react-bootstrap';
import CardDefault from './components/card/index.tsx';
import TableDefault from './components/table/index.tsx';
import SearchInput from './components/search/index.tsx';
import { useEffect } from 'react';
import api from './data/api.json';
import CalendarDefault from './components/calendar/index.tsx';

function App() {
  const data = api;

  const estatisticas = data.estatisticas;
  const proximosEventos = data.proximosEventos;
  const lembretes = data.lembretes.consultas;

  useEffect(() => {
    console.log(lembretes);
  }, []);

  return (
    <Container className="mainContent">
      <Row className="cardContent">
        <SearchInput />
        <h3>DASHBOARD</h3>
        <div className="card">
          <div className="cardMonth">
            <CardDefault title={"Consultas" + "\n" + "do Mês"} text={estatisticas.consultasDoMes} />
          </div>
          <div className="cardStatus">
            <CardDefault  title={"Consultas" + "\n" + "Confirmadas"} text={estatisticas.consultasConfirmadas} />
            <CardDefault title={'Consultas' + "\n" + "Canceladas"} text={estatisticas.consultasCanceladas} />
          </div>
        </div>
        <h3>AVISOS/LEMBRETES</h3>
        <div className="tableContent">
          <TableDefault />
        </div>
      </Row>
      <Row className="calendarContent">
        <div>
          <CalendarDefault />
        </div>
        <div>
          <CardDefault subText={proximosEventos.assunto + "\n" +proximosEventos.hora} />
          <CardDefault subText={proximosEventos.assunto + "\n" +proximosEventos.hora} />
          <CardDefault subText={proximosEventos.assunto + "\n" +proximosEventos.hora} />
        </div>
      </Row>
    </Container>
  );
}

export default App;
