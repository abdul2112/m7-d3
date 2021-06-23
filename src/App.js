import './App.css';
import { Component } from 'react';
import { Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import CompanySearchResult from './components/CompanySearchResult';
import Favourites from './components/Favourites';
class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h1
              xs={10}
              className="mx-auto my-3"
              style={{ textAlign: 'center' }}
            >
              Job search
            </h1>
          </Link>
          <Button className="Favourite-button btn btn-dark">
            <Link
              to="/favourites"
              className="text-white"
              style={{ textDecoration: 'none' }}
            >
              Favourites
            </Link>
          </Button>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/:companyName" component={CompanySearchResult} />
          <Route exact path="/favourites" component={Favourites} />
          {/* <Route path="/" exact render={(routerProps) => <BookStore {...routerProps} addToCart={this.addToCart} />} /> */}
          {/* <Route path="/cart" exact render={(routerProps) => ( <Cart {...routerProps} cart={this.state.cart} removeFromCart={this.removeFromCart} /> )} /> */}
        </Container>
      </Router>
    );
  }
}

export default App;
