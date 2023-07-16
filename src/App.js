import React from "react";
//Global Style
import GlobalStyle from "./components/GlobalStyle";
//Nav
import Nav from "./components/Nav";
//Pages
import About from "./pages/About";
import MyWork from "./pages/MyWork";
import Blog from "./pages/Blog";
import ContactMe from "./pages/ContactMe";
//Footer
import Footer from "./components/Footer";
//Router
import { Routes, Route, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<About />} />
          <Route path="/mywork" exact element={<MyWork />} />
          <Route path="/blog" exact element={<Blog />} />
          <Route path="/contactme" exact element={<ContactMe />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
