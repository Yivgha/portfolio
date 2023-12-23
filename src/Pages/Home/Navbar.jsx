import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import handleScroll from "../../utils/handleScroll";

export default function Navbar() {
  const navigate = useNavigate()
  const [navActive, setNavActive] = useState(false);
  const toggleNav = () => {
    setNavActive(!navActive);
 
  };
  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu;
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <Link to="heroSection"
        spy={true}
        hashSpy={true}
        smooth={true}
        duration={500}
        onScroll={handleScroll}
       onClick={()=>navigate("/")}>
        <img src="./portfolio.png" alt="logo" className={`${navActive ? "logoImg" : ""}`}/>
        </Link>
      <a
        className={`navHamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="navHamburgerLine"></span>
        <span className="navHamburgerLine"></span>
        <span className="navHamburgerLine"></span>
      </a>
      <div className={`navbarItems ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={() => { closeMenu();navigate("/") }}
              onScroll={handleScroll}
              activeClass="navbarActiveContent"
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="navbarContent"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => { closeMenu();navigate("/") }}
              onScroll={handleScroll}
              activeClass="navbarActiveContent"
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="myPortfolio"
              className="navbarContent"
            >
              My Portfolio
            </Link>
          </li>
          <li>
            <Link
              onClick={() => { closeMenu(); navigate("/") }}
              onScroll={handleScroll}
              activeClass="navbarActiveContent"
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="aboutMe"
              className="navbarContent"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              onClick={() => { closeMenu(); navigate("/");  }}
              onScroll={handleScroll}
              activeClass="navbarActiveContent"
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="testimonials"
              className="navbarContent"
            >
              Testimonials
            </Link>
          </li>
        </ul>
      </div>
      <Link
        onClick={() => { closeMenu(); navigate("/"); }}
        onScroll={handleScroll}
        activeClass="navbarActiveContent"
        spy={true}
        hashSpy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="contactMe"
        className="btn btnOutlinePrimary"
      >
        Contact Me
      </Link>
    </nav>
  );
}
