import { Card, Badge, Col } from "react-bootstrap";
const BookCards = (props) => (
  <>
    <Col>
      <Card>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Text>{props.title}</Card.Text>
          <Badge bg="secondary">{props.price}</Badge>
        </Card.Body>
      </Card>
    </Col>
  </>
);
export default BookCards;
