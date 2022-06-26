import { Link } from "react-router-dom";
import { Header } from "../../components/Header";

import "./styles.scss";

export function Home() {
  return (
    <div className="home">
      <Header pageTitle="Home">
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </Header>
    </div>
  );
}
