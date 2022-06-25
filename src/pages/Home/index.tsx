import { Link } from "react-router-dom";

import "./styles.scss";

export function Home() {
  return (
    <div className="home">
      <h1>Home</h1>
      <Link to="/contact">Go to Contact</Link>
      <Link to="/about">Go to About</Link>
    </div>
  );
}
