import { Container, Card, Badge, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import projectsData from '../../backend/projects.json';

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Load projects from the JSON file
        try {
            setProjects(projectsData.projects);
            setLoading(false);
        } catch (error) {
            console.error('Error loading projects:', error);
            setLoading(false);
        }
    }, []);

    if (loading) {
        return (
            <Container className="text-center my-5">
                <output className="spinner-border d-block mx-auto">
                    <span className="visually-hidden">Loading...</span>
                </output>
            </Container>
        );
    }

    return (
        <Container>
            <h1 className="display-1 text-center my-5">Projects</h1>
            <p className="lead text-center mb-5">Here are some of the projects I have worked on.</p>
            
            <Row xs={1} md={1} className="g-4">
                {projects.map((project) => (
                    <Col key={project.id}>
                        <Card className="mb-4 h-100">
                            <Card.Body>
                                <Card.Title>{project.name}</Card.Title>
                                <Card.Text>{project.description}</Card.Text>
                                
                                <div className="mb-3">
                                    {project.languages.map((language) => (
                                        <Badge 
                                            key={language} 
                                            bg="secondary" 
                                            className="me-1 mb-1"
                                        >
                                            {language}
                                        </Badge>
                                    ))}
                                </div>
                                
                                {project.authors && (
                                    <Card.Subtitle className="mb-3 text-muted">
                                        <small>Contributors: {project.authors.join(', ')}</small>
                                    </Card.Subtitle>
                                )}
                                
                                {project.url && (
                                    <Card.Link 
                                        href={project.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className='text-dark'
                                    >
                                        View Project
                                    </Card.Link>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}