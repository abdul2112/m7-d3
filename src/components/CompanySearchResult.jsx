import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import JobDetail from './JobDetail';
import uniqid from 'uniqid';

class CompanySearchResult extends Component {
  state = {
    jobs: [],
  };

  componentDidMount() {
    this.getJobs();
  }

  baseEndpoint = 'https://remotive.io/api/remote-jobs?company_name=';

  getJobs = async () => {
    const response = await fetch(
      this.baseEndpoint + this.props.match.params.companyName
    );
    const { jobs } = await response.json();

    this.setState({ jobs });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            {this.state.jobs.map((jobData) => (
              <JobDetail key={uniqid()} data={jobData} />
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CompanySearchResult;
