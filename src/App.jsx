import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import UrlShortener from "./components/UrlShortener/UrlShortener";
import Statistics from "./components/Statistics/Statistics";
import Boost from "./components/Boost/Boost";
import Footer from "./components/Footer/Footer";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <UrlShortener />
        <Statistics />
        <Boost />
        <Footer />
      </main>
    </>
  );
}

export default App;
