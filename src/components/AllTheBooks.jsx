import { Component } from "react";
import { Row, Col } from "react-bootstrap";
import BookCards from "./BookCard";

class AllTheBooks extends Component {
  getRandomBooks(num) {
    const randomBooks = [];
    for (let i = 0; i < num; i++) {
      let rand = Math.floor(Math.random() * this.props.books.length);

      randomBooks.push(this.props.books[rand]);
    }
    return randomBooks;
  }
  render() {
    return (
      <>
        <Row>
          <Col xs={12}>
            <h1 className="text-capitalize">{this.props.title}</h1>
          </Col>
        </Row>
        <Row lg={6} className="mb-4">
          {this.getRandomBooks(15).map((book, index) => (
            <BookCards key={book.asin} image={book.img} title={book.title} price={book.price} />
          ))}
        </Row>
      </>
    );
  }
}

export default AllTheBooks;
