import React from "react";
import "../styles/resume.css";
import CV from "../assets/SaimaCVAug23.pdf";
import Banner from "../components/Banner";

const Resume = () => {
  // test
  return (
    <div>
      <Banner pageName="Resume" />

      <h2 className="about-subtitle">Status: Available</h2>

      <section id="resume" className="grey-section">
        <div className="row section-intro">
          <div className="col-twelve">
            <h1 className="resume-subtitle">My Credentials.</h1>
            <p>
              I am currently working as a fullstack developer for Teck
              Engineering Ltd, creating for them a sleek website that allows
              customers to schedule and pay for electrical services. I am
              skilled in both frontend and backend technologies.{" "}
            </p>
            <p>
              I possess a strong aptitude for problem-solving and enjoy tackling
              challenges from both the frontend and backend perspectives and
              contributing to the end-to-end development of robust and scalable
              software solutions.{" "}
            </p>
            <p>
              As a dedicated and motivated software developer who is eager to
              expand their skills, I am actively seeking a permanent software
              developer role that will provide me with the opportunity to grow
              and thrive in a collaborative and innovative environment. I am
              eager to join a team that values continuous learning and
              encourages professional development. I would be thrilled to
              discuss how my experience and aspirations align with your
              company's vision.
            </p>
            <p>
              You can either see my resume in detail{" "}
              <a
                className="resume-link"
                href={CV}
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              {", "} connect with me on{" "}
              <a
                href="https://www.linkedin.com/in/saimakhanom/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>{" "}
              or see below for a summary of my experience. 🙂
            </p>
            <br />
          </div>
        </div>

        <p className="work-experience">Work Experience</p>

        <div className="row resume-timeline">
          <div className="col-twelve">
            <div className="timeline-wrap">
              <div className="timeline-block">
                <div className="timeline-ico">
                  <i className="fa fa-graduation-cap"></i>
                </div>

                <div className="timeline-header">
                  <h3>Fullstack Developer</h3>
                  <p>Dec 2022 - Present</p>
                </div>

                <div className="timeline-content">
                  <h4>Teck Engineers</h4>
                  <p>
                    <strong>
                      Tech Stack: React.js | TypeScript | Node.js | Express.js |
                      PQSL
                    </strong>
                  </p>
                  <p>
                    I am solely responsible for development of a new
                    customer-facing company website. I have not only
                    successfully created a cutting-edge website, but I have also
                    honed my skills in project management, client collaboration,
                    and troubleshooting.{" "}
                  </p>
                  <ul className="resume-content">
                    <li>
                      Created a website that allows customers to schedule
                      appointments with Google Calendar API and purchase
                      electrical services utilizing the Stripe API using agile
                      methodologies
                    </li>
                    <li>
                      Deployed the frontend through Netlify and the server
                      through Render
                    </li>
                    <li>
                      Lead client engagements to understand product requirements
                    </li>
                    <li>
                      Developed mock-ups and prototypes and convert visual
                      designs into code using modular sass
                    </li>
                  </ul>
                </div>
              </div>

              <div className="timeline-block">
                <div className="timeline-ico">
                  <i className="fa fa-graduation-cap"></i>
                </div>

                <div className="timeline-header">
                  <h3>Junior Fullstack developer</h3>
                  <p>Mar 2023 - Jun 2023</p>
                </div>

                <div className="timeline-content">
                  <h4>Northcoders Software Engineering Bootcamp</h4>
                  <p>
                    <strong>
                      Tech Stack: HTML | CSSS | JS | React.js | Node.js |
                      Express.js | PQSL
                    </strong>
                  </p>
                  <p>
                    At Northcoders, a leading coding bootcamp provider that aims
                    to help career-changers becoming job-ready, I further
                    fortified and consolidated my coding knowledge to ensure a
                    strong foundation in software development.
                  </p>
                  <ul className="resume-content">
                    <li>
                      Solo project: Created a CRUD app which allows users to
                      read and comment on articles with React on the frontend
                      and PSQL and Express.js on the backend (
                      <a href="https://github.com/saimakhanom/fe-nc-news">
                        Frontend repository
                      </a>
                      /
                      <a href="https://github.com/saimakhanom/be-nc-news">
                        Backend repository
                      </a>
                      )
                    </li>
                    <li>
                      Group project: Created a 3D browser-based web game for a
                      group project using React Three Fiber on the frontend, and
                      utilizing agile and scrum methodologies (
                      <a href="https://github.com/saimakhanom/frontend-get-your-steps-in">
                        Frontend repository
                      </a>
                      /
                      <a href="https://github.com/saimakhanom/backend-get-your-steps-in">
                        Backend repository
                      </a>
                      )
                    </li>
                    <li>
                      Demonstrated strong problem-solving and debugging skills
                      within a collaborative coding environment through pair
                      programming sprints
                    </li>
                    <li>
                      Showcased proficiency in handling asynchronous functions
                      in JavaScript programming
                    </li>
                    <li>
                      Applied advanced error-handling techniques to enhance the
                      robustness of applications
                    </li>
                  </ul>
                </div>
              </div>

              <div className="timeline-block">
                <div className="timeline-ico">
                  <i className="fa fa-graduation-cap"></i>
                </div>

                <div className="timeline-header">
                  <h3>Frontend Developer</h3>
                  <p>Oct 2022 - Mar 2023</p>
                </div>

                <div className="timeline-content">
                  <h4>Uplifter Ltd</h4>
                  <p>
                    <strong>Tech Stack: React.js | TypeScript | Jest</strong>
                  </p>
                  <p>
                    I played a pivotal role in designing, building, testing,
                    deploying, and maintaining customer-facing web applications
                    and software. With a focus on revenue growth and enhancing
                    the user experience, I contributed to the success of various
                    projects as follows:
                  </p>
                  <ul className="resume-content">
                    <li>
                      Worked within an agile development team to define, plan
                      and develop new product features, and deliver high-quality
                      customer facing SaaS demonstrating ability to define
                      requirements and plan the development and implementation
                      of features through building custom, reusable React
                      components
                    </li>
                    <li>
                      Created a React UI to allow users to search and display
                      blockchain transactions by using Axios to connect to a
                      Java Spring Boot API{" "}
                    </li>
                    <li>
                      Released new features and bug fixes to staging
                      environments to ensure rigorous testing before releasing
                      to the production environment demonstrating an
                      understanding of the different working environments and
                      the importance of preventing problems in production
                    </li>
                  </ul>
                </div>
              </div>

              <div className="timeline-block">
                <div className="timeline-ico">
                  <i className="fa fa-graduation-cap"></i>
                </div>

                <div className="timeline-header">
                  <h3>Frontend Developer Training</h3>
                  <p>Feb 2022 - Oct 2022</p>
                </div>

                <div className="timeline-content">
                  <h4>Career Transition Period</h4>
                  <p>
                    As a first step to transitioning into a career in software
                    development, I took out 8 months to learn the fundamentals
                    of frontend which included the following:
                  </p>
                  <ul className="resume-content">
                    <li>
                      Completed courses on HTML, CSS, JavaScript, React, Jest,
                      Regex, in addition to Bootstrap, Git/GitHub, ESLint, Axios
                      and SQL
                    </li>
                    <li>
                      Learnt React under the guidance of a mentor who is an
                      established full-stack engineer at a Big 4 consultancy,
                      and created a portfolio website to demonstrate front-end
                      skills as well as interface and design planning skills
                    </li>
                  </ul>
                </div>
              </div>

              <div className="timeline-block">
                <div className="timeline-ico">
                  <i className="fa fa-graduation-cap"></i>
                </div>

                <div className="timeline-header">
                  <h3>Teacher of Chemistry</h3>
                  <p>Jul 2020 - Feb 2022</p>
                </div>

                <div className="timeline-content">
                  <h4>Harris Academy Riverside</h4>
                  <p>
                    I cultivated an engaging and inclusive learning environment,
                    leveraging my strong communication and interpersonal skills.{" "}
                  </p>
                  <ul className="resume-content">
                    <li>
                      Proactively identified and supported high-achieving
                      students, utilizing my organizational and coordination
                      abilities to foster intellectual growth and academic
                      excellence
                    </li>
                    <li>
                      Collaborated with colleagues by contributing to curriculum
                      development and shared best practices, while continuously
                      seeking professional development opportunities to enhance
                      my teaching skills
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
