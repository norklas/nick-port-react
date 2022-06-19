import "./App.css";
import Container from "./components/Container";
import Footer from "./components/Footer";
import "@fontsource/fira-sans";

const App = () => (
  <div className="px-2 sm:px-8 md:px-24 lg:px-48 xl:px-72 flex flex-col min-h-screen bg-corduroy">
    <Container />
    <Footer />
  </div>
);

export default App;
