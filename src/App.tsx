import { Routes, Route } from "react-router-dom";

import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Redirect } from "./components/Redirect";

const links = [
  { name: "telegram", link: "https://t.me/felpolho" },
  { name: "github", link: "https://github.com/felpofo" },
  { name: "twitter", link: "https://twitter.com/felpofo" },
  { name: "instagram", link: "https://instagram.com/felpofo" },
  { name: "linkedin", link: "https://linkedin.com/in/felpofo" },
];

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>

      <Route path="/social">
        {links.map(({ name, link }) => (
          <Route
            key={name}
            path={name}
            element={<Redirect uri={link}/>}
          />
        ))}
      </Route>
    </Routes>
  );
}
