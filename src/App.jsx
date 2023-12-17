import "./App.css";
import Header from "./Component/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Component/Home";
import Footer from "./Component/Footer";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Shop from "./Component/Shop";
import Blog from "./Component/Blog";
import Login from "./Component/Login/Login";
import SignIn from "./Component/Sign in/SignIn";

// import SignIn2 from "./Component/Sign in/SignIn2";
// import SignInFirbase from "./Component/Sign in/SignInFirbase";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/Shop" element={<Shop />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
