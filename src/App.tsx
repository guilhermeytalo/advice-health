import './App.css';
import { Container, Row } from 'react-bootstrap';
import CardDefault from './components/card.tsx';
import TableDefault from './components/table.tsx';
import SearchInput from './components/search.tsx';
import { useEffect } from 'react';
import api from './data/api.json';

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
            <CardDefault title='Consultas' title2='do Mês' text={estatisticas.consultasDoMes} />
          </div>
          <div className="cardStatus">
            <CardDefault title='Consultas' title2='Confirmadas' text={estatisticas.consultasConfirmadas} />
            <CardDefault title='Consultas' title2='Canceladas' text={estatisticas.consultasCanceladas} />
          </div>
        </div>
        <h3>AVISOS/LEMBRETES</h3>
        <div className="tableContent">
          <TableDefault />
        </div>
      </Row>
      <Row className="calendarContent">
        <div>
          <CardDefault />
          <CardDefault />
          <CardDefault />
        </div>
      </Row>
    </Container>
  );
}

export default App;
