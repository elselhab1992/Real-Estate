import "./App.css";
import Companies from "./components/Companies/Companies";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import GetStarted from "./components/GetStarted/GetStarted";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";

function App() {
  return (
    <div className="app">
      <div>
        <div className="white-gradient"></div>
        <NavBar />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
