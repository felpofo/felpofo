import { Link } from "react-router-dom";

import "./styles.scss";

export function About() {
  return (
    <div className="home">
      <h1>About</h1>
      <Link to="/">Go to Home</Link>
      <Link to="/contact">Go to Contact</Link>
    </div>
  );
}
