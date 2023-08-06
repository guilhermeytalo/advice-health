import Card from 'react-bootstrap/Card';

type CardProps = {
  title?: string;
  title2?: string;
  text?: string;
  img?: string;
}


function CardDefault({
  title,
  title2,
  text,
  img,
}: CardProps) {
  return (
    <Card style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'red', margin: '10px' }}>
        <Card.Img variant="top" src={img} />
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Title>{title2}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardDefault;