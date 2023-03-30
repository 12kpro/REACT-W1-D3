import { Component } from "react";
import { Card, Badge, Col } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false
  };
  handleToggle = () => {
    this.setState({ selected: !this.state.selected });
  };
  render() {
    return (
      <Col>
        <Card className={this.state.selected ? "border border-success" : null} onClick={this.handleToggle}>
          <Card.Img variant="top" src={this.props.image} />
          <Card.Body>
            <Card.Text>{this.props.title}</Card.Text>
            <Badge bg="secondary">{this.props.price}</Badge>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
export default SingleBook;
