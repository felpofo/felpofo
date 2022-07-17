import { Routes, Route } from "react-router-dom";

import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Redirect } from "./components/Redirect";

const telegram = "https://t.me/felpolho";
const github = "https://github.com/felpofo";
const twitter = "https://twitter.com/felpofo";
const instagram = "https://instagram.com/felpofo";
const linkedin = "https://linkedin.com/in/felpofo";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/social">
        <Route path="telegram" element={<Redirect uri={telegram} />} />
        <Route path="github" element={<Redirect uri={github} />} />
        <Route path="twitter" element={<Redirect uri={twitter} />} />
        <Route path="instagram" element={<Redirect uri={instagram} />} />
        <Route path="linkedin" element={<Redirect uri={linkedin} />} />
      </Route>
    </Routes>
  );
}
