import { useEffect } from 'react';
import { data } from '../../data/data';
import CardDefault from '../../components/card';
import CalendarDefault from '../../components/calendar';
import { Container, Row } from 'react-bootstrap';

export const Consulta = () => {
  const proximosEventos = data.proximosEventos;

  useEffect(() => {
    console.log('consulta', data);
  }, []);

  return (
    <div>
      <Container>
        <h1>Médico</h1>
        <Row>
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

          <div>
            <CalendarDefault />
          </div>
        </Row>
      </Container>
    </div>
  );
};
