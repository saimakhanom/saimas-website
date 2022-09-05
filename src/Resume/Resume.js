import React from "react";
import "./resume.css";
import CV from "./SaimaCodingCVSep2022.pdf";



const Resume = () => {
	return (
		<div>
			<div id="head">
				<p id="helloworld">HELLO, WORLD.</p>
				<h1 className="title">I&apos;m Saima Khanom.</h1>
				<h4 className="subtitle">HTML | CSS | JAVASCRIPT | REACT | SQL</h4>
				<p className="page-heading">Resume</p>
			</div>

			<h2 className="about-subtitle">Status: Available</h2>







			<section id="resume" className="grey-section">

				<div className="row section-intro">
					<div className="col-twelve">
						<h1 className="resume-subtitle">My Credentials.</h1>
						<p className="content">I am a former teacher with over 7 years of teaching experience in various education settings. I have recently left the education sector to pursue a career in software development. I am  skilled in frontend languages such as HTML, CSS, JS and React.JS as demonstrated by this portfolio website which was built from scratch using React. I am currently learning backend languages such as SQL to expand my skill set.
						I aim to become a React Developer as a stepping stone to becoming a full-stack engineer. My problem-solving approach to coding and ability to master new skills quickly lends itself to the creation and maintenance of functional and quality websites.
						</p>
						<br />
						<p className="lead content">Please see below for a summary of my education and experience.</p>
						<br />
						<p className="see-resume content">You can also see my resume in more detail <a className="resume-link" href={CV} target="_blank" rel="noreferrer">here</a>.</p>
						<br />
						<p className="see-resumetwo content">And you can access the git repository for this website <a className="resume-link" href="https://github.com/saimakhanom/saimas-website" target="_blank" rel="noreferrer">here</a>.</p>

					</div>
				</div>

				<div>
					<h3 className="work-experience">Technical Skills</h3>
					<ul className="resume-content technical-skills">
						<li>Designing and developing re-usable React components (function and class-based) to allow re-use of code and to speed up development time </li>
						<li>Good knowledge of programming concepts such as objects, arrays, scoping, functions and variables</li>
						<li>Debugging code with devtools and ESLint, to ensure high code quality</li>
						<li>Knowledge of states, hooks and APIs, including use of Axios to obtain and update data from APIs
						</li>
						<li>Following documentation to ensure code is up to date</li>
						<li>Using CSS tools such as media queries, Grid and Flexbox as well as React Bootstrap components to produce visually pleasing user-interfaces and responsive web design </li>
						<li>Using git to track changes with add, commit, push and pull, as well as branching and merging strategies</li>
						<li>Using NPM to take advantage of external libraries and packages </li>
						<li>Using Heroku to deploy React applications into production through a build pipeline</li>
						<li>Using SQL to build and update databases and retrieve data</li>
						<li>Pair programming with other coders and working collaboratively to complete projects</li>
						<li>Completing various courses to expand skill set such as coding with companies such as SHECODES and CODECADEMY, as well as the Harris Diploma in Team Leadership (HDTL), and REED courses in project management and leadership</li>
					</ul>

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
									<h3>GCSE and A-Level Tutor</h3>
									<p>July 2015 - Present</p>
								</div>

								<div className="timeline-content">
									<h4>Private</h4>
									<ul className="resume-content">
										<li>Communicating with students and parents to capture needs to understand the type of service that will be suitable for their educational needs</li>
										<li>Being empathetic with students to show that I understand their learning challenges and offering various educational solutions to meet the needs of the client
										</li>
										<li>Reaching out to other teachers when tutoring students with special needs in order to understand how to meet their needs better demonstrating I am not afraid to reach out to those who know better when I am unsure</li>
									</ul>
								</div>

							</div>

							<div className="timeline-block">

								<div className="timeline-ico">
									<i className="fa fa-graduation-cap"></i>
								</div>

								<div className="timeline-header">
									<h3>Teacher of Science and Most Able Co-ordinator</h3>
									<p>Jul 2020 - Feb 2022</p>
								</div>

								<div className="timeline-content">
									<h4>Harris Academy Riverside</h4>
									<ul className="resume-content">
										<li>Using analysis of performance data to drive the development of new and engaging strategies to support struggling students to ensure progress in learning, evidencing the ability to think creatively</li>
										<li>Leading programmes on developing the most able students throughout the whole school using engaging and innovative strategies such as entering students into nationwide competitions (e.g. Chemistry Olympiad, The Scholars’ Programme) to challenge and inspire the brightest students evidencing an ability to lead and think creatively</li>
										<li>Leading the Outreach Programme for Cyber First Girls Competition to provide girls who are interested in tech an opportunity to ascertain what a career in tech could entail and increase gender diversity in a male dominated industry</li>
										<li>Acting as the Technology and Document Management Lead for the department in transitioning to the use of Microsoft Teams and creating new processes for all departmental work to be saved onto MS Teams during the lockdown demonstrating natural problem-solving ability and creative thinking </li>
										<li>Fulfilling multiple whole school leadership roles (Most-able Co-ordinator and Assistant Head of Sixth Form) alongside my full teaching timetable and pastoral responsibilities to an exceptional standard, demonstrating commitment to the job as well as effective organisational and time management skills</li>
										<li>Promoting diversity and inclusion by holding career workshops and inviting professionals from diverse backgrounds to give students an insight into their career journey</li>
									</ul>
								</div>

							</div>

							<div className="timeline-block">

								<div className="timeline-ico">
									<i className="fa fa-graduation-cap"></i>
								</div>

								<div className="timeline-header">
									<h3>Teacher of Science (Temporary)</h3>
									<p>Mar 2020 - Jun 2020</p>
								</div>

								<div className="timeline-content">
									<h4>Harris Academy Chafford Hundred</h4>
									<ul className="resume-content">
										<li>Responsible for teaching KS3, KS4 and KS5 Science lessons to students with a special focus on KS5</li>
										<li>Leading the creation of Schemes of Works (academic year teaching plan) for KS4 and KS5 Science demonstrating the ability to plan and lead activities of strategic importance to the department</li>
										<li>Analysing KS3 data assessments to identify topics that students were struggling with and creating online revision videos to be used as revision aids by students evidencing an ability to think creatively and use technology to improve education during a time of national lockdown</li>
										<li>Engaging with the Science department to update and improve the delivery of the science curriculum as well as the order in which topics are taught to ensure a smooth progression of learning from KS3 through to KS5, demonstrating an ability to work collaboratively and think analytically </li>

									</ul>
								</div>

							</div>

							<div className="timeline-block">

								<div className="timeline-ico">
									<i className="fa fa-graduation-cap"></i>
								</div>

								<div className="timeline-header">
									<h3>Multiple Social Media Businesses Owner</h3>
									<p>Jun 2018 - Present</p>
								</div>

								<div className="timeline-content">
									<h4>Social Media</h4>
									<ul className="resume-content">
										<li>Listening to the needs of customers, asking relevant questions, uncovering any barriers to service delivery and capturing the needs of customers accurately, enhancing attention to detail and ability to provide first class customer service</li>
										<li>Communicating with customers in a straightforward manner and adopting an approachable style, developing communication skills appropriate for all business environments  </li>
										<li>Adapting customer engagement techniques depending on the type of customer and the service package they are looking to purchase (e.g. corporate or individual) displaying deep understanding of customer engagement techniques and how to tailor them to meet the needs of the customer</li>
										<li>Using data and insights from successful business leads to inform marketing strategy for attracting potential new clients</li>
									</ul>
								</div>

							</div>



							<div className="timeline-block">

								<div className="timeline-ico">
									<i className="fa fa-graduation-cap"></i>
								</div>

								<div className="timeline-header">
									<h3>Trainee Teacher</h3>
									<p>Sep 2018-Feb 2020</p>
								</div>

								<div className="timeline-content">
									<h4>Robert Clack School/Barking Abbey School (PGCE Placements)</h4>
									<ul className="resume-content">
										<li>Putting students and their requirements at the heart of my teaching, developing deep understanding for the service I am providing and how that should be tailored towards the students taught</li>
										<li>Responsible for delivering high quality of teaching and improving student grades whilst contributing towards departmental objectives enhancing ability to achieve personal and departmental objectives simultaneously</li>
										<li>•	Using feedback to develop own teaching methodologies by implementing practices from those more experienced</li>
										<li>•	Establishing shared learning groups with other Trainee Teachers to provide a platform for challenges and learning to be shared, evidencing a desire to learn and share best practice</li>
									</ul>
								</div>

							</div>

							<div className="timeline-block">

								<div className="timeline-ico">
									<i className="fa fa-graduation-cap"></i>
								</div>

								<div className="timeline-header">
									<h3>Evening and Weekend Teacher</h3>
									<p>Oct 2015 - Feb 2019</p>
								</div>

								<div className="timeline-content">
									<h4>Azhar Academy School</h4>
									<ul className="resume-content">
										<li>Identifying emerging issues/challenges associated with student learning, using innovating techniques to address them and sharing this insight with team and the rest of the school </li>
										<li>Maintaining high expectations of students by expecting them to undertake independent preparation of content to be studied before taught lessons </li>
										<li>Building strong relationships with each student inside and outside the classroom by focusing on their interests such that students feel comfortable to approach me when in need of support and guidance, and helping to increase their confidence and love for the subject</li>
									</ul>
								</div>

							</div>

						</div>

					</div>

				</div>

				<div className="work-experience">

					<h3>Education</h3>

				</div>



				<div className="row resume-timeline">

					<div className="col-twelve">

						<div className="timeline-wrap">

							<div className="timeline-block">

								<div className="timeline-ico">
									<i className="fa fa-briefcase"></i>
								</div>

								<div className="timeline-header">
									<h3>PGCE</h3>
									<p>Sep 2018 - Feb 2020</p>
								</div>

								<div className="timeline-content">
									<h4>Univeristy of Greenwhich</h4>
									<p>Secondary Science with Biology</p>
								</div>

							</div>

							<div className="timeline-block">

								<div className="timeline-ico">
									<i className="fa fa-briefcase"></i>
								</div>

								<div className="timeline-header">
									<h3>Bachelors Degree</h3>
									<p>Sep 2015 - July 2018</p>
								</div>

								<div className="timeline-content">
									<h4>King&apos;s College London</h4>
									<p className="resume-content">
										Bachelor of Science degree in Neuroscience. Achieved an Upper Second Class. Also awarded Most Improved Neuroscience student.
									</p>
								</div>

							</div>

							<div className="timeline-block">

								<div className="timeline-ico">
									<i className="fa fa-briefcase"></i>
								</div>

								<div className="timeline-header">
									<h3>A-Levels</h3>
									<p>Sep 2013 - July 2015</p>
								</div>

								<div className="timeline-content">
									<h4>London Academy of Excellence</h4>
									<p className="resume-content">Achieved A* (Biology), A (Religious Studies) and B (Chemistry).</p>
								</div>

							</div>

							<div className="timeline-block">

								<div className="timeline-ico">
									<i className="fa fa-briefcase"></i>
								</div>

								<div className="timeline-header">
									<h3>GCSE</h3>
									<p>Sep 2008 - July 20013</p>
								</div>

								<div className="timeline-content">
									<h4>Azhar Academy</h4>
									<p className="resume-content">Achieved 9 (A* to B) grades, including Maths, English, Science and IT.</p>
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