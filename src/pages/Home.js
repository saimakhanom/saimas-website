import React from "react";
import "../styles/home.css";
import css from "../assets/css.png";
import html5 from "../assets/html5.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import sql from "../assets/sql.png";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div id="head">
          <p id="helloworld">HELLO, WORLD.</p>
          <h1 className="title" data-testid="subtitle">
            I&apos;m Saima Khanom.
          </h1>
		  <h4 className="subtitle">JAVASCRIPT | REACT | NODE/EXPRESS | PSQL | MONGODB</h4>
          {/* <a href="http://www.saimakhanom.com/about" className="button">
           Learn more about me
          </a> */}
        </div>
        <div>
          <h2 className="home-subtitle">Welcome To My Website.</h2>
          <p className="content">
            My name is Saima Khanom, and I am a Fullstack developer for Teck
            Engineers Ltd! This website is an example of the React skills I have
            learnt so far. Use the links at the top of the page to navigate
            through my website, learn more about me and see what I can do.{" "}
          </p>
          <br />
          <p className="content">
            Alternatively, you can connect with me on{" "}
            <a
              href="https://www.linkedin.com/in/saimakhanom/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            , contact me via email at{" "}
            <a className="link" href="http://localhost:3006/contactme">
              saimakhanom@gmail.com{" "}
            </a>{" "}
            and through the form in the &apos;Contact Me&apos; section 😃
          </p>
          <p className="content">Thanks for visiting my page, and enjoy!</p>

          <div className="grid-container">
            <div className="content-img">
              <img className="icons" src={html5} alt="html" />
              <div className="content">HTML</div>
            </div>

            <div className="content-img">
              <img className="icons" src={css} alt="css" />
              <div className="content">CSS</div>
            </div>

            <div className="content-img">
              <img className="icons" src={js} alt="JavaScript" />
              <div className="content">JavaScript</div>
            </div>

            <div className="content-img">
              <img className="icons" src={react} alt="React" />
              <div className="content">React</div>
            </div>

            <div className="content-img">
              <img className="icons" src={sql} alt="SQL" />
              <div className="content">SQL</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
