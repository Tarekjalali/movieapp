import Rating from '@mui/material/Rating';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function CardMovies({el}) {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={el.url} />
        <Card.Body>
          <Link to={`/moviepage/${el.id}`}><Card.Title>{el.title}</Card.Title></Link>
          <Card.Text>
            {el.description}
          </Card.Text>
          <Card.Text>
          <Rating name="read-only" value={el.rating} readOnly />
          
          </Card.Text>
          
        </Card.Body>
      </Card>
    );
  }
  
  export default CardMovies;