import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
	faUsers, 
	faComments, 
	faClock, 
	faHandshake,
	faCode,
	faDatabase,
	faTools,
	faServer,
	faLayerGroup
} from "@fortawesome/free-solid-svg-icons";
import {
	faJs,
	faPhp,
	faJava,
	faPython,
	faHtml5,
	faGithub,
	faGitlab,
	faDocker,
	faFigma,
	faGitAlt
} from "@fortawesome/free-brands-svg-icons";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	const skillsData = {
		softSkills: [
			{ name: "Leadership", icon: faUsers, color: "#3B82F6" },
			{ name: "Teamwork", icon: faHandshake, color: "#10B981" },
			{ name: "Communication", icon: faComments, color: "#F59E0B" },
			{ name: "Time Management", icon: faClock, color: "#EF4444" }
		],
		programmingLanguages: [
			{ name: "JavaScript", icon: faJs, color: "#F7DF1E" },
			{ name: "C#", icon: faCode, color: "#239120" },
			{ name: "Go", icon: faCode, color: "#00ADD8" },
			{ name: "PHP", icon: faPhp, color: "#777BB4" },
			{ name: "Java", icon: faJava, color: "#ED8B00" },
			{ name: "Python", icon: faPython, color: "#3776AB" },
			{ name: "HTML", icon: faHtml5, color: "#E34F26" },
			{ name: "Kotlin", icon: faCode, color: "#7F52FF" }
		],
		frameworks: [
			{ name: ".NET", icon: faLayerGroup, color: "#512BD4" },
			{ name: "Express.js", icon: faServer, color: "#000000" },
			{ name: "Next.js", icon: faLayerGroup, color: "#000000" },
			{ name: "CodeIgniter", icon: faLayerGroup, color: "#EF4223" },
			{ name: "Laravel", icon: faLayerGroup, color: "#FF2D20" }
		],
		databases: [
			{ name: "SQL Server", icon: faDatabase, color: "#CC2927" },
			{ name: "MariaDB", icon: faDatabase, color: "#003545" },
			{ name: "PostgreSQL", icon: faDatabase, color: "#336791" }
		],
		tools: [
			{ name: "Figma", icon: faFigma, color: "#F24E1E" },
			{ name: "Docker", icon: faDocker, color: "#2496ED" },
			{ name: "Postman", icon: faTools, color: "#FF6C37" },
			{ name: "Git", icon: faGitAlt, color: "#F05032" },
			{ name: "GitHub", icon: faGithub, color: "#181717" },
			{ name: "GitLab", icon: faGitlab, color: "#FCA326" }
		],
		apiCommunication: [
			{ name: "REST API", icon: faServer, color: "#61DAFB" },
			{ name: "gRPC", icon: faServer, color: "#4285F4" }
		]
	};

	const SkillItem = ({ skill }) => (
		<div className="skill-item">
			<div className="skill-icon" style={{ color: skill.color }}>
				<FontAwesomeIcon icon={skill.icon} />
			</div>
			<span className="skill-name">{skill.name}</span>
		</div>
	);

	const SkillSection = ({ title, skills, columns = 2 }) => (
		<div className="skill-section">
			<h3 className="skill-section-title">{title}</h3>
			<div className={`skill-grid skill-grid-${columns}`}>
				{skills.map((skill, index) => (
					<SkillItem key={index} skill={skill} />
				))}
			</div>
		</div>
	);

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description}
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="Pasfoto_11S2014_Dedi Andre Martua Raja Panggabean.JPG"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>

						{/* Skills Section */}
						<div className="skills-container">
							<div className="skills-header">
								<h2 className="skills-title">Technical Skills & Expertise</h2>
								<p className="skills-description">
									A comprehensive overview of my technical capabilities and professional skills
								</p>
							</div>

							<div className="skills-content">
								<SkillSection 
									title="Soft Skills" 
									skills={skillsData.softSkills}
									columns={2}
								/>

								<SkillSection 
									title="Programming Languages" 
									skills={skillsData.programmingLanguages}
									columns={3}
								/>

								<SkillSection 
									title="Frameworks & Libraries" 
									skills={skillsData.frameworks}
									columns={2}
								/>

								<SkillSection 
									title="Databases" 
									skills={skillsData.databases}
									columns={3}
								/>

								<SkillSection 
									title="Tools & Platforms" 
									skills={skillsData.tools}
									columns={3}
								/>

								<SkillSection 
									title="API Communication" 
									skills={skillsData.apiCommunication}
									columns={2}
								/>
							</div>
						</div>

						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;