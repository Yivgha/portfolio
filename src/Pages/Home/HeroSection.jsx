import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import handleScroll from "../../utils/handleScroll";

export default function HeroSection() {
  const [navActive, setNavActive] = useState(false);
  const closeMenu = () => {
    setNavActive(false);
  };
  useEffect(() => {
    if (window.innerWidth <= 500) {
      closeMenu;
    }
  });
  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu;
    }
  }, []);

  return (
    <section id="heroSection" className="heroSection">
      <div className="heroSectionContentBox">
        <div className="heroSectionContent">
          <p className="sectionTitle">Hi, nice to meet you! I'm</p>
          <h1 className="heroSectionTitle">
            <span className="heroSectionTitleColor">Full Stack</span> <br />
            Developer
          </h1>
          <p className="heroSectionDescription">
            Learn more about me and check my pet projects below.
            <br />
            Feel free to message me via contact form.
          </p>
        </div>

        <Link
          onClick={closeMenu}
          onScroll={handleScroll}
          activeClass="navbarActiveContent"
          spy={true}
          smooth={true}
          duration={500}
          to="contactMe"
          className="btn btnPrimary"
        >
          Get In Touch
        </Link>
      </div>
          <div className="heroSectionImg">
           
        <img src="./img/catProgrammer.gif" alt="Hero Section" />
      </div>
    </section>
  );
}
