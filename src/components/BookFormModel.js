import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';


class BookFormModal extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.handleBookSubmit(event);

    this.props.onHide();
  }
  render() {
    // console.log( this.props.handleBookSubmit )
    return (
      <Container className='mt-5'>
        <Modal show={this.props.show} onHide={this.props.onHide}>
          <Modal.Header closeButton>
            <Modal.Title>Add Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="status">
                <Form.Check type="checkbox" label="available" />
              </Form.Group>
              <Modal.Footer Footer className="modal-footer" >
              <Button variant="outline-secondary" type="submit" className="">Add Books</Button>
             </Modal.Footer >
              {/* <Button variant="outline-secondary" type="submit">Add Books</Button> */}
            </Form>

          </Modal.Body>
        </Modal>
      </Container >
    )

  }
}

export default BookFormModal;