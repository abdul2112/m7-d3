import { Component } from 'react';
//>>>>> React Components <<<<<//
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
//>>>>> Import Components<<<<<//
import JobDetail from './JobDetail';
import uniqid from 'uniqid';
class HomePage extends Component {
  state = {
    query: '',
    jobs: [],
  };

  endpoint = `https://remotive.io/api/remote-jobs?search=`;

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };
  handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(this.endpoint + this.state.query);

    if (!response.ok) {
      alert('Error while fetching jobs');
      return; //check this <<<<<
    }
    const jobs = await response.json();

    console.log(jobs);

    this.setState({ ...jobs });
  };

  //   htmlDesc = () => {
  //     return { __html: this.props.result.description };
  //   };
  render() {
    return (
      <Container>
        <Row>
          <Col xs={10} className="mx-auto my-3">
            <h1>Search Job</h1>
          </Col>
          <Col xs={10} className="mx-auto">
            <Form onSubmit={this.handleSubmit}>
              <Form.Control
                type="search"
                value={this.state.query}
                onChange={(e) => {
                  this.setState({ query: e.target.value });
                }}
              />
            </Form>
          </Col>

          <Col xs={10} className="mx-auto mb-5">
            {this.state.jobs.map((jobData) => (
              <JobDetail key={uniqid()} data={jobData} />
            ))}
          </Col>
        </Row>
      </Container>
      // <Container>
      //   <Row>
      //     <Col xs={10} className="mx-auto">
      //       <Form onSubmit={this.handleSubmit} style={{ textAlign: 'center' }}>
      //         <Form.Control
      //           type="search"
      //           placeholder="write job name here"
      //           value={this.state.query}
      //           onChange={this.handleChange}
      //         />
      //       </Form>
      //     </Col>
      //     <Col xs={10} className="mx-auto mb-5">
      //       {this.state.jobs.map((jobData) => (
      //         <JobDetail key={uniqid()} data={jobData} />
      //       ))}
      //     </Col>
      //   </Row>
      // </Container>
    );
  }
}

export default HomePage;
