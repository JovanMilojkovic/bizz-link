import useGlobalState from "../globalState";
import Error from "./Error";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';


export default function Dashboard() {
    const logInUserData = useGlobalState((selector) => selector.user);
    if (logInUserData === null) {
        return <Error />;
    }
    const { username, email } = logInUserData;

    return (
        // <div>
        //     <h3>Hello {username} :)</h3>
        // </div>
        <div style={{ backgroundColor: '#f2f2f2', minHeight: '100vh' }}>
        <Container fluid className="d-flex justify-content-center align-items-center">
          <Container style={{ background: '#fff', padding: '20px', borderRadius: '4px',marginTop: '15vh' }}>
            <Row>
              <Col md={4}>
                <Card>
                  <Card.Body>
                    <Card.Title>{username}, Your Business Card</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      John Doe
                    </Card.Subtitle>
                    <Card.Text>
                      Phone: 123-456-7890
                      <br />
                      Email: {email}
                    </Card.Text>
                    <Button variant="primary" style={{ backgroundColor: '#333'}}>
                      Edit
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={8}>
                <Card>
                  <Card.Body>
                    <Card.Title>Recent Contacts</Card.Title>
                    <Card.Text>You have 3 new contacts this week.</Card.Text>
                    <Button variant="primary" style={{ backgroundColor: '#333'}}>
                      View All
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>Analytics</Card.Title>
                    <Card.Text>
                      Your business card has been viewed 50 times this month.
                    </Card.Text>
                    <Button variant="primary" style={{ backgroundColor: '#333'}}>
                      View Details
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    );
}
