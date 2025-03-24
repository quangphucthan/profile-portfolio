import { Container } from 'react-bootstrap';
import Skills from '../components/Skills';

export default function About() {
    return (
        <Container>
            <h1 className="display-1 text-center my-5">About Me</h1>
            <p className="lead text-center mb-5">I am a web developer with a passion for creating beautiful and functional websites.</p>
            
            <Skills />
        </Container>
    );
}