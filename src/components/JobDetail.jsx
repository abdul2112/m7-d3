import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const JobDetail = ({ data }) => {
  return (
    <Container>
      {/* <Row>
        <Col xs={3}>
          <b>Company Name</b>
        </Col>
        <Col xs={3}>
          <b>Title</b>
        </Col>
      </Row> */}
      <Row
        className="mx-0 mt-3 p-3"
        style={{ border: '1px solid #00000033', borderRadius: 4 }}
      >
        <Col xs={2}>
          <Link to={`/${data.company_name}`}>{data.company_name}</Link>
        </Col>
        <Col xs={3}>
          <Link to={{ pathname: data.url }} target="_blank">
            {data.title}
          </Link>
        </Col>
        <Col xs={2}>
          <Button className="Favourite-button btn btn-dark">
            <Link
              to="/"
              className="text-white"
              style={{ textDecoration: 'none' }}
            >
              Details
            </Link>
          </Button>
        </Col>
        <Col xs={3}>
          <Button className="Favourite-button btn btn-dark">
            <Link
              to="/"
              className="text-white"
              style={{ textDecoration: 'none' }}
            >
              Add to favourites
            </Link>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default JobDetail;
