import "./Sass/index.sass";
import "./normalize.css";

import { Principal } from "./components/Principal.tsx";
import { AboutMe } from "./components/AboutMe.tsx";
import { ContactMe } from "./components/ContactMe.tsx";
import { Footer } from "./components/Footer.tsx";

function App() {
  return (
    <>
      <div className="responsive" id="pico">
        <Principal />
        <div className="divisor" id="about"></div>
        <AboutMe />
        <div className="divisor" id="contact"></div>
        <ContactMe />
        <Footer />
      </div>
    </>
  );
}

export default App;
