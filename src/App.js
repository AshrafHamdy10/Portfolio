import "./App.css";
import Certs from "./components/Certs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Skills />
      <Projects />
      <Certs />
      <Footer />
    </>
  );
}

export default App;
