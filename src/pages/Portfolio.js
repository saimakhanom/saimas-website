import React from "react";
import Banner from "../components/Banner";
import "../styles/portfolio.css";
import TE from "../assets/TEScreenshot.PNG";
import GYSI from "../assets/GYSIScreenshot.PNG";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Counter from "../components/Counter";
import RadioForm from "../components/Form/Form";
import ToDoList from "../components/ToDoList";
import FileUpload from "../components/FileUpload";
import ColorPicker from "../components/ColorPicker";
import StateAPI from "../components/StateAPI";

const projects = [
  {
    name: "Teck Engineers",
    img: TE,
    tech: [
      "React",
      "TypeScript",
      "Node/Express.js",
      "MongoDB/Mongoose",
      "Stripe API",
      "Google Calendar API",
    ],
    url: "https://teck-engineering.netlify.app",
    desc: [
      "As the sole developer on the project, I undertook the responsibility of designing and implementing a cutting-edge website enabling customers to conveniently schedule and make payments for electrical services provided by the company. Leveraging the Google Calendar API, the website empowers customers to select suitable appointment dates and times that accommodate both their preferences and our operational availability. To ensure the utmost security for customers' payment information, I integrated the Stripe API, handling all payment transactions with the highest level of protection. Additionally, I am currently in the process of incorporating account functionality, allowing customers to log in, access, and modify their bookings, enhancing the overall user experience.",

      "By developing and deploying this bespoke solution, the business stands to benefit significantly, saving up to 20% in commissions that were previously paid to external companies for advertising their services. This efficient and cost-effective approach reinforces the company's autonomy and strengthens its competitive advantage in the market.",

      "This groundbreaking website represents a pioneering initiative in the realm of electrical services within the London area. As online services gain prominence, this platform positions the company at the forefront of innovation, enabling us to capitalize on evolving customer preferences. With the website's functionality, customers are no longer restricted to contacting us during traditional working hours; they can now book services at their convenience, day or night, while gaining instant access to our availability and transparent pricing.",

      "The implementation of this digital solution has far-reaching implications for the company's efficiency and resource management. By providing comprehensive information on the website, we have substantially reduced the need for manual interactions, freeing up manpower that was previously dedicated to answering queries and managing booking conflicts. The automation of internal processes streamlines operations, allowing us to optimize workforce allocation and focus on delivering exceptional service to our valued customers.",
    ],
  },
  {
    name: "Get Your Steps In 3D Game",
    img: GYSI,
    tech: [
      "React",
      "Rapier",
      "React Three Fiber",
      "Node/Express.js",
      "MongoDB",
    ],
    url: "https://getyourstepsin.netlify.app",
    desc: [
      "Developed as part of a group project during my tenure at the Northcoders Software Engineering Bootcamp, Get Your Steps In is an engaging 3D game that challenges players to navigate through obstacles, helping their character achieve daily step goals. Upon reaching the target step count, players are rewarded with a delightful trip to the kebab shop at the game's conclusion.",

      "To bring this captivating experience to life, Get Your Steps In leverages the React Three Fiber library, seamlessly incorporating Three.js functionalities into React while maintaining code simplicity. For an enhanced gaming experience, the physics engine Rapier replicates real-world gravity and collisions.",

      "As the most experienced developer on the team, I spearheaded the project's organization by breaking it into manageable tasks and maintaining a well-structured Kanban board. I also facilitated daily stand-ups, ensuring effective problem-solving and smooth progress. As the designated Git expert, I handled all Git-related challenges and skillfully managed both frontend and backend repositories.",

      "My contributions extended beyond project management; I designed randomized obstacles and scenery, ensuring each game remains unique. Additionally, I implemented logic for 'motivation' decreases during gameplay, incorporated toastify notifications, and managed the loading of multiple instances of the same GLB file. Furthermore, I played a crucial role in ensuring seamless collisions between the character and obstacles and adeptly managed the camera's dynamic position, following the character's movements.",

      "Through this remarkable project, I showcased my leadership, problem-solving, and technical skills, delivering a compelling and immersive gaming experience.",
    ],
  },
];

const Portfolio = () => {
  const handleClick = (url) => {
    window.location = url;
  };

  return (
    <>
      <Banner pageName="Portfolio" />

      <div>
        <h2 className="home-subtitle">
          Here Are The Latest Projects I&apos;ve Been Working On.
        </h2>
        <div className="projects">
          {projects.map((project, i) => {
            return (
              <div
                className="project"
                key={i}
                onClick={() => {
                  handleClick(project.url);
                }}
              >
                <h1>{project.name}</h1>
                <img src={project.img} className="image" />
                <div className="middle">
                  <div class="middle">
                    <p className="techStack">
                      Tech stack:{" "}
                      {project.tech.map((tech, i) => {
                        if (i === project.tech.length - 1) {
                          return <span className="spacing">{tech}</span>;
                        }
                        return <span className="spacing">{tech}</span>;
                      })}
                    </p>
                    <div class="text">Find out more</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <h2 className="home-subtitle">Some Fun Mini Projects.</h2>

        <Tabs defaultActiveKey="portfolio" className="tabs">
          <Tab eventKey="counter" title="Counter">
            <Counter />
          </Tab>
          <Tab eventKey="ColorPicker " title="Color Picker ">
            <ColorPicker />
          </Tab>
          <Tab eventKey="FileUpload" title="File Uploader">
            <FileUpload />
          </Tab>
          <Tab eventKey="StateAPI" title="State API">
            <StateAPI />
          </Tab>
          <Tab eventKey="ToDoList" title="To Do List">
            <ToDoList />
          </Tab>
          <Tab eventKey="Quiz" title="Quiz">
            <RadioForm />
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default Portfolio;
