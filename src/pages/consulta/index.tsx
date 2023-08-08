import CalendarDefault from '../../components/calendar';
import CardDefault from '../../components/card';
import { data } from '../../data/data';

export const Consulta = () => {
  const proximosEventos = data.proximosEventos;

  return (
    <div>
      <h4>Consulta</h4>
      <div style={{ display: 'flex'}}>
        <div style={{ marginRight: '50px'}}>
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
        </div>

        {/* unfinished list */}
        {/* <div>
          <ListGroup style={{ maxWidth: 360 }}>
            <ListGroup.Item style={{ display: 'flex'}}>
              <Image src={profile} roundedCircle width="48" height="48" />
              <div style={{ marginLeft: 15 }}>
                <strong>Brunch this weekend?</strong>
                <p>
                  Ali Connors — I'll be in your neighborhood doing errands
                  this...
                </p>
              </div>
            </ListGroup.Item>
            <ListGroup.Item style={{ display: 'flex'}}>
              <Image src={profile} roundedCircle width="48" height="48" />
              <div style={{ marginLeft: 15 }}>
                <strong>Summer BBQ</strong>
                <p>
                  to Scott, Alex, Jennifer — Wish I could come, but I'm out of
                  town this...
                </p>
              </div>
            </ListGroup.Item>
            <ListGroup.Item style={{ display: 'flex'}}>
              <Image src={profile} roundedCircle width="48" height="48" />
              <div style={{ marginLeft: 15 }}>
                <strong>Oui Oui</strong>
                <p>
                  Sandra Adams — Do you have Paris recommendations? Have you
                  ever…
                </p>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </div> */}


      </div>
    </div>
  );
};
