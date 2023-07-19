import "./css_files/HomePage.css"
import { useNavigate } from "react-router"
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function HomePage() {
    //const navigate = useNavigate();
    return (
        <>
          {/* Header Section */}
          <header className="hero-section">
            <Container>
              <Row>
                <Col>
                  <h1 className="text-center">Welcome to BizCard</h1>
                  <p className="lead text-center">
                    Create and share virtual business cards with ease.
                  </p>
                  <div className="text-center">
                    <Button as={Link} to="/api/v1/signup" variant="primary">
                      Get Started
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </header>
    
          {/* Features Section */}
          <section className="features-section">
            <Container>
              <Row>
                <Col md={4}>
                  <div className="feature-box">
                    <i className="bi bi-person-fill"></i>
                    <h3>Create Your Profile</h3>
                    <p>Create a professional profile with your contact details, social links, and more.</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="feature-box">
                    <i className="bi bi-card-checklist"></i>
                    <h3>Design Customizable Cards</h3>
                    <p>Choose from a variety of card templates and personalize them to match your brand.</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="feature-box">
                    <i className="bi bi-share-fill"></i>
                    <h3>Share and Connect</h3>
                    <p>Share your virtual business cards easily and connect with potential clients and partners.</p>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
    
          {/* Call-to-Action Section */}
          <section className="cta-section">
            <Container>
              <Row>
                <Col>
                  <h2 className="text-center">Ready to Get Started?</h2>
                  <div className="text-center">
                    <Button as={Link} to="/api/v1/signup" variant="primary">
                      Sign Up Now
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </>
      );
}