import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import { Container } from 'react-bootstrap/Container';
// import { Row } from 'react-bootstrap/Row';
// import { Col } from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import { addJobToFavouritesAction } from '../actions';

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  addFavourites: (job) => {
    dispatch(addJobToFavouritesAction(job));
  },
});

class Favourites extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col> Title </Col>
          <Col> Company Name </Col>
          <Col> Category </Col>
          <Col> Job Type </Col>
        </Row>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
