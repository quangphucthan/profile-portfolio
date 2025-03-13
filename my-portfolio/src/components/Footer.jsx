import { Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-3 mt-5">
      <Container>
        <p className="text-center mb-0">&copy; 2023 My Portfolio. All rights reserved.</p>
      </Container>
    </footer>
  );
}