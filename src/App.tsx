import { Routes, Route } from "react-router-dom";

import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Redirect } from "./components/Redirect";

const links = {
  telegram: "https://t.me/felpolho",
  github: "https://github.com/felpofo",
  twitter: "https://twitter.com/felpofo",
  instagram: "https://instagram.com/felpofo",
  linkedin: "https://linkedin.com/in/felpofo",
};

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>

      <Route path="/social">
        {Object.entries(links).map((entry) => (
          <Route
            key={entry[0]}
            path={entry[0]}
            element={<Redirect uri={entry[1]}/>}
          />
        ))}
      </Route>
    </Routes>
  );
}
