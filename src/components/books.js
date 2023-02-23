import React from "react";
import { Container, ListGroup, Button } from "react-bootstrap";

class Books extends React.Component {

    render() {
        console.log(this.props.books);
        let books = this.props.books.map((book) => (
            <Book book={book} key={book._id} deleteBooks={this.props.deleteBooks} />
        ));

        return (
            <Container>
                <ListGroup>{books}</ListGroup>
            </Container>
        );
    }

}
// class Book extends Books {

class Book extends React.Component {

    render() {
        return (
            <ListGroup.Item>
                {this.props.book.title} is {this.props.book.description}
                <Button
                    variant="success"
                    onClick={() => {
                        // this.props.deleteBooks(this.props.book._id);
                        this.props.deleteBook(this.props.book._id);
                    }}
                >Delete Book
                </Button>
            </ListGroup.Item>
        );
    }
}

export default Books;