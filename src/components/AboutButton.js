import React, { useState } from "react";
import hardskill from "../assets/hardskill.png";
import softskill from "../assets/softskill.png";

const Button = () => {
  const [showStory, setShowStory] = useState(false);
  const [showSkills, setShowSkills] = useState(false);

  const toggleShowStory = () => {
    setShowStory(!showStory);
    setShowSkills(false);
  };

  const toggleShowSkills = () => {
    setShowSkills(!showSkills);
    setShowStory(false);
  };

  return (
    <div>
      <div className="btn-div">
        <button className="about-btn" type="button" onClick={toggleShowStory}>
          My Story
        </button>
        <button className="about-btn" type="button" onClick={toggleShowSkills}>
          {" "}
          My Skills
        </button>
      </div>

      <div className={showStory || showSkills ? "" : "whitespace"}></div>

      {showStory && (
        <div className="btn-text">
          <p className="content">
            Hi, my name is{" "}
            <a
              href="https://www.linkedin.com/in/saimakhanom/"
              target="_blank"
              rel="noreferrer"
            >
              Saima Khanom
            </a>
            . I am currently working as a fullstack developer for Teck
            Engineering Ltd to create them a stunning customer-facing website
            which you can view{" "}
            <a
              href="https://teck-engineering.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              here.
            </a>
          </p>
          <br />
          <p className="content">
            I have been interested in coding for some time now and last year I
            officially took the leap and left my teaching post to pursue a
            career in software development! Since then, I have become skilled in
            various frontend and backend technologies with a particular focus on
            React and Node/Express.js.
          </p>
          <br />
          <p className="content">
            Through this website, which has been created using React, as well as
            my CV, you will be able to see the skills that I have learnt so far.
            I say ‘so far’ as I am always learning new skills and putting those
            skills to the test to ensure I have mastered them. As a former
            teacher, I am great at learning and quick at picking up new things.
            I am passionate about continuously developing myself and becoming
            the best at anything I do. This in turn makes me passionate about
            software development as there are always new things to learn and
            areas to master!
          </p>
          <br />
          <p className="content">
            Outside of coding, I am continuously taking it upon myself to learn
            new things. I am super creative and my ever-growing list of hobbies
            include: embroidering, crocheting, oil painting, wall panelling,
            sewing, gardening, henna, reading, working out, photography, video
            editing (and watching a LOT of TV!) - you name it!
          </p>
        </div>
      )}
      {showSkills && (
        <div className="btn-text">
          <p className="content">
            Over the months and years, I have learned and developed many skills
            that lend themselves to the tasks and challenges that I am presented
            with. This list is by no means exhaustive or complete (as I&apos;m
            still learning!) 😄
          </p>
          <br />

          <div className="skills-grid">
            <div className="grid-item">
              <div className="list-title">
                <img
                  className="skill-icon"
                  src={hardskill}
                  alt="hard skill icon"
                />
                <p className="skill-title">Hard skills:</p>
              </div>

              <ul className="list-content">
                <li>JavaScript</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Bootstrap</li>
                <li>Git/GitHub</li>
                <li>ESLint</li>
                <li>
                  SQL (<i>in progress</i>)
                </li>
              </ul>
            </div>

            <div className="grid-item">
              <div className="list-title">
                <img
                  className="skill-icon"
                  src={softskill}
                  alt="soft skill icon"
                />
                <p className="skill-title">Soft skills:</p>
              </div>
              <ul className="list-content">
                <li>Ability to Work in a Team</li>
                <li>Problem-solving Approach</li>
                <li>Time Management</li>
                <li>Organisation</li>
                <li>Excellent Communication</li>
                <li>People and Interpersonal Skills</li>
                <li>Self-learning</li>
                <li>Quick Learner</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Button;
