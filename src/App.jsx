import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Work from "./Components/Projects/Work";
import Services from "./Components/Services/Services";
import Companies from "./Components/Companies";
import { useState } from "react";
import Contact from "./Components/Contact";

function App() {
  const [contactStatus, setContactStatus] = useState(false);
  return (
    <div>
      <Navbar />
      {contactStatus && <Contact setContactStatus={setContactStatus} />}
      <div className={`h-auto ${contactStatus ? "hidden" : ""}`}>
        <Home setContactStatus={setContactStatus} />
        <About />
        <Services />
        <Work />
        <Companies />
      </div>
    </div>
  );
}

export default App;
