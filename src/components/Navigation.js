import { BrowserRouter as Router, Link } from "react-router-dom";
const Navigation = () => (
  <nav>
    <Link to="/" exact>
      Home
    </Link>
    |<Link to="/register">Register</Link>
  </nav>
);

export default Navigation;
