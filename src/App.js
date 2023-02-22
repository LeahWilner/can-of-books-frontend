import React from "react";
import axios from "axios";
import "./css/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "./components/Books.js";
// import About from "./components/About/About.js";
import Header from "./components/Header/Header.js";
import CreateBook from "./components/CreateBook.js";


let SERVER = process.env.REACT_APP_SERVER;
//add comment


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  getBooks = async () => {
    try {
      let results = await axios.get(`${SERVER}/books`);
      console.log(results);
      this.setState({
        books: results.data,
      });
    } catch (error) {
      console.log("error found: ", error.response.data);
    }
  };


  // handleBookSubmit = async (event) => {
  // event.preventDefault();
  //   let newBook = {
  //     title: event.target.title.value,
  //     description: event.target.description.value,
  //     status: event.target.status.checked,
  //   };
  // this.postBook(newBook);
  // };
  ///////////
  // postBook = async (newBookObject) => {
  //   console.log("🚀 ~ file: App.js:53 ~ App ~ postBook= ~ newBookObject", newBookObject)

  //   try {
  //     let url = `${SERVER}/books`;
  //     let createdBook = await axios.post(url, newBookObject);
  //     // console.log("createdBook", createdBook);
  //     this.setState({
  //       books: [...this.state.books, createdBook.data],
  //     });
  //   } catch (error) {
  //     console.log("We have an error: ", error.response.data);
  //   }
  // };

  // deleteBook = async (bookToDelete) => {
  //   // console.log("we here!", bookToDelete);
  //   try {
  //     let url = `${SERVER}/books/${bookToDelete._id}`;
  //     await axios.delete(url);
  //     let updatedBooks = this.state.books.filter(
  //       (book) => book._id !== bookToDelete._id
  //     );

  //     this.setState({
  //       books: updatedBooks,
  //     });
  //   } catch (error) {
  //     console.log("We have an error: ", error.response.data);
  //   }
  // };


  componentDidMount() {
    this.getBooks();
  }

  render() {
    console.log(this.state.books)

    let books = this.state.books.map((book) => {
      return (
        <Carousel.Item key={book._id}>
          {/* <Carousel.Caption> */}
          <h2>{book.title}</h2>
          <p className="book-desc">{book.description}</p>
          <Button
            variant="danger" onClick=
            {() =>
              this.deleteBook(book)}
            className='mb-5'>
            Delete Book
          </Button>
          {/* </Carousel.Caption> */}
        </Carousel.Item>
      );
    });
    return (
      <>
        <Header />
        <section className="section-background">
          <main className="carousel-container">
            {this.state.books.length > 0 ? (
              <Carousel>{books}</Carousel>
            ) : (
              <p>The book collection is empty.</p>)}
          </main>
        </section>
        <CreateBook handleBookSubmit={this.handleBookSubmit} />
      </>
    );
  }
}



export default App;


