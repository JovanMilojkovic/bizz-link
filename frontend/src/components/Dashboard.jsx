import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

export default function Dashboard() {
    const username = localStorage.getItem("username");
    const email = localStorage.getItem("email");
    const token = localStorage.getItem("jwtToken");
    const navigate = useNavigate();
    const param = useParams();

    const fetchData = async () => {
        try {
            const response = await fetch(
                `http://localhost:8080/dashboard/?id=${param.userId}`,
                {
                    method: "GET",
                    mode: "cors",
                    headers: {
                        //TODO at the end we need this
                        // "X-XSRF-TOKEN": csrfToken,
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            if (response.status == 401) {
                navigate("*");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleEditButton = async () => {
        console.log("clicked")
        try {
            const response = await fetch(
                `http://localhost:8080/dashboard/edit-user/?id=${param.userId}`,
                {
                    method: "GET",
                    mode: "cors",
                    headers: {
                        //TODO at the end we need this
                        // "X-XSRF-TOKEN": csrfToken,
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
    
            if (response.status == 401) {
                navigate("*");
            } else {
                navigate("/dashboard/edit-user/:userId")
            }
        } catch (error) {
            console.log(error);
        }
    };
    
    
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <NavBar />
            <div style={{ backgroundColor: "#f2f2f2", minHeight: "100vh" }}>
                <Container
                    fluid
                    className="d-flex justify-content-center align-items-center"
                >
                    <Container
                        style={{
                            background: "#fff",
                            padding: "20px",
                            borderRadius: "4px",
                            marginTop: "15vh",
                        }}
                    >
                        <Row>
                            <Col md={4}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>
                                            {username} Your Business Card
                                        </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">
                                            John Doe
                                        </Card.Subtitle>
                                        <Card.Text>
                                            Phone: 123-456-7890
                                            <br />
                                            Email: {email}
                                        </Card.Text>
                                        <Button
                                            variant="primary"
                                            style={{ backgroundColor: "#333" }}
                                            onClick={() => handleEditButton()}
                                        >
                                            Edit
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={8}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Recent Contacts</Card.Title>
                                        <Card.Text>
                                            You have 3 new contacts this week.
                                        </Card.Text>
                                        <Button
                                            variant="primary"
                                            style={{ backgroundColor: "#333" }}
                                        >
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
                                            Your business card has been viewed
                                            50 times this month.
                                        </Card.Text>
                                        <Button
                                            variant="primary"
                                            style={{ backgroundColor: "#333" }}
                                        >
                                            View Details
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </div>
        </>
    );
}
