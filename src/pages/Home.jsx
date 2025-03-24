import { Container, Row, Col } from 'react-bootstrap';
import Weather from '../components/Weather';

export default function Home() {
    return (
        <Container>
            <h1 className="display-1 text-center my-5">Welcome to My Portfolio</h1>
            <p className="lead text-center mb-5">This is a simple portfolio website created using React.</p>
            
            <Row className="justify-content-center">
                <Col md={8} lg={6}>
                    <Weather />
                </Col>
            </Row>
        </Container>
    );
}