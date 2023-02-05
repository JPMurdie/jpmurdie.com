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

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Nav />
      <About />
    </React.Fragment>
  );
}

export default App;
