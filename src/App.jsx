import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Details from "./pages/Details";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Campaigns from "./pages/Campaigns";
import Profile from "./pages/Profile";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/campaign" element={<Campaigns />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
