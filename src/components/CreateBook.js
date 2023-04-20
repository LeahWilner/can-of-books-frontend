import React from "react";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import BookFormModal from "../components/BookFormModel";
import './CreateBooks.css';

class CreateBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        };
    }

    handleShowModal = () => {
        this.setState({
            showModal: true
        });
    };
    handleHideModal = () => {
        this.setState({
            showModal: false
        });
    };
    handleSubmit = (book) => {
        this.props.onSubmit(book);
    };

    render() {
        return (
            <Container className="mt-5">
                <footer>
                    <Button variant="secondary" className="add-button" onClick={
                        () => this.handleShowModal()}>Add Book</Button>
                </footer>
                <BookFormModal
                    show={this.state.showModal}
                    handleBookSubmit=
                    {this.props.handleBookSubmit}
                    onHide={this.handleHideModal}
                />
            </Container>
        );
    }
}

export default CreateBook;