import { Link } from "react-router-dom";
import "../Components/Pages.css";

export default function NotFound() {
  return (
    <div className="page notfound-page">
      <div className="page-header">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
          The page you are looking for doesn’t exist or was moved.
        </p>

        <Link to="/" className="support-link">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
