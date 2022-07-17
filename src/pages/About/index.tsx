import { Link } from "react-router-dom";
import { Header } from "../../components/Header";

import "./styles.scss";

export function About() {
  return (
    <div className="about">
      <Header pagetitle="About">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
      </Header>
    </div>
  );
}
