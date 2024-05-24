import NavBar from "./components/NavBar";
import Contact from "./pages/Contact";
import Extension from "./pages/Extension";
import Faq from "./pages/Faq";
import Features from "./pages/Features";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";

const App = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <NavBar></NavBar>

      <div className="flex-1 grid place-items-center">
        <Hero></Hero>
        <Features></Features>
        <Extension></Extension>
        <Faq></Faq>
        <Contact></Contact>
        <Footer></Footer>
      </div>      
    </main>
  );
};

export default App;
