export default function Projects() {
    return (
        <div>
        <Header />

        <Container>
            <h1 className="display-1 text-center my-5">Projects</h1>
            <p className="lead text-center mb-5">Here are some of the projects I have worked on.</p>
            <Card>
                <Card.Body>
                    <Card.Title>Project 1</Card.Title>
                    <Card.Text>
                        This is a project I worked on recently.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Project 2</Card.Title>
                    <Card.Text>
                        This is another project I worked on.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
        
        <Footer />
        </div>
    );
}