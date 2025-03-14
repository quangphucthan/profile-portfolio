import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="text-center">
        <h1 className="display-1">404</h1>
        <p className="lead">Page not found</p>
        <Link to="/" className="btn btn-primary">Go back to home</Link>
        </div>
    );
}