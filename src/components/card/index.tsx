import Card from 'react-bootstrap/Card';
import { profile } from '../../assets';

type CardProps = {
  title?: string;
  text?: string;
  subText?: string;
  img?: string;
}


function CardDefault({
  title,
  text,
  subText,
}: CardProps) {

  

  return (
    <Card style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ width: '40px', height: '40px', borderRadius: '50%', margin: '10px' }}>
        <Card.Img variant="top" src={profile} />
      </div>
      <Card.Body style={{ margin: '0' }}>
        <h5 style={{ margin: '0' }}>{title}</h5>
        <Card.Text style={{ margin: '0', fontSize: '60px'}}>
          {text}
        </Card.Text>
        <Card.Text>
          {subText}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardDefault;