import React, { useState } from "react";
import hardskill from "./images/hardskill.png";
import softskill from "./images/softskill.png";

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
				<button className="about-btn" type="button" onClick={toggleShowStory}>My Story</button>
				<button className="about-btn" type="button" onClick={toggleShowSkills}> My Skills</button>
			</div>

			<div className={showStory || showSkills ? "" : "whitespace"}></div>


			{showStory && (
				<div className="btn-text">
					<p className="content">Hi, my name is <a href="https://www.linkedin.com/in/saimakhanom/" target="_blank" rel="noreferrer">Saima Khanom</a>. I am currently a FrontEnd Developer Intern at Uplifter Ltd and a former A-level Science teacher.</p>
					<br />
					<p className="content">I have been interested in coding for some time now and this year I officially took the leap and left my teaching post to pursue a career in software development! Since then, I have learnt HTML, CSS, JavaScript and React, and I am currently learning SQL. My ambition is to become a full-time React developer on my way to becoming a full-stack engineer and so I am currently on the hunt for a Junior React Developer role.</p>
					<br />
					<p className="content">Through this website, which has been created using React, as well as my CV, you will be able to see the skills that I have learnt so far. I say ‘so far’ as I am always learning new skills and putting those skills to the test to ensure I have mastered them. As a former teacher, I am great at learning and quick at picking up new things. I am passionate about continuously developing myself and becoming the best at anything I do. This in turn makes me passionate about software development as there are always new things to learn and areas to master!</p>
					<br/>
					<p className="content">Outside of coding, I am continuously taking it upon myself to learn new things. I am super creative and my ever-growing list of hobbies include: embroidering, crocheting, oil painting, wall panelling, sewing, henna, reading, working out, photography, video editing (and watching a LOT of TV!) - you name it!</p>

				</div>)}
			{showSkills && (
				<div className="btn-text">
					<p className="content">Over the months and years, I have learned and developed many skills that lend themselves to the tasks and challenges that I am presented with. This list is by no means exhaustive or complete (as I&apos;m still learning!) 😄
					</p>
					<br/>
                    
					<div className="skills-grid">
						<div className="grid-item">
							<div  className="list-title">
								<img className="skill-icon" src={hardskill} alt="hard skill icon"/>
								<p className="skill-title">Hard skills:</p>
							</div>

							<ul className="list-content">
								<li>HTML</li>
								<li>CSS</li>
								<li>JavaScript</li>
								<li>React</li>
								<li>TypeScript</li>
								<li>Bootstrap</li>
								<li>Git/GitHub</li>
								<li>ESLint</li>
								<li>SQL (<i>in progress</i>)</li>
							</ul>
						</div>
                        

						<div className="grid-item">
							<div  className="list-title">
								<img className="skill-icon" src={softskill} alt="soft skill icon"/>
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