import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Homepage from "./components/Homepage/Homepage.jsx";
import Users from "./components/Users/Users";
import User from "./components/User/User";
import { useTheme } from "./Context.js";
import Footer from "./components/Footer/Footer.jsx";
function App() {
  const { theme, setTheme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <div>
        <a
          href="#"
          id="btnTheme"
          className={`float-start theme-btn-${theme}`}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <i class="fa-solid fa-moon"></i>
        </a>
        <nav>
          <ul>
            <li>
              <NavLink activeclassname="activeElementNew" to="/">
                HomePage
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname="activeElementNew" to="/contact">
                Contact Page
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname="activeElementNew" to="/about">
                About Page
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname="activeElementNew" to="/users">
                Users Page
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/users" element={<Users/>} />
        <Route path="/users/:id" element={<User/>} />
        <Route path="*" element={Error} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
