import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Freatures from "./Components/Freatures";
import Articles from "./Components/Articles";
import Footer from "./Components/Footer";

const App = () => {
  return (
      <div className="min-h-screen overflow-x-hidden">
            <Navbar />
            <main>
                <Hero />
                <Freatures />
                <Articles />
            </main>
            <Footer />
        </div>
  );
};

export default App;
