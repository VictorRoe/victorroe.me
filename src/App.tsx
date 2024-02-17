import "./Sass/index.sass";
import "./normalize.css";

import { Principal } from "./components/Principal.tsx";
import { AboutMe } from "./components/AboutMe.tsx";
import { ContactMe } from "./components/ContactMe.tsx";
import { Footer } from "./components/Footer.tsx";

function App() {
  return (
    <>
      <div className="responsive">
        <Principal />
        <div className="divisor"></div>
        <AboutMe />
        <div className="divisor"></div>
        <ContactMe />
        <Footer />
      </div>
    </>
  );
}

export default App;
