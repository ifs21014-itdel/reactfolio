import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Experience = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	const organizations = [
		{
			title: "Head of MPM KM IT Del",
			organization: "Majelis Permusyawaratan Mahasiswa KM IT Del",
			period: "May 2023 – November 2024",
			description: "Led the student representative council, overseeing student governance and representing student interests in university decisions."
		},
		{
			title: "Head of KPU IT Del",
			organization: "KPU IT Del",
			period: "March 2023 – May 2023",
			description: "Managed the student election committee, ensuring fair and transparent democratic processes within the campus."
		},
		{
			title: "Head of IT Del Festival",
			organization: "IT Del Festival",
			period: "June 2023 – August 2023",
			description: "Organized and led the annual IT Del Festival, coordinating various activities and events for the campus community."
		},
		{
			title: "Member of Commission B",
			organization: "Majelis Permusyawaratan Mahasiswa KM IT Del",
			period: "June 2022 – May 2023",
			description: "Participated in commission activities focusing on student welfare and academic affairs."
		},
		{
			title: "Head of MPK",
			organization: "SMA N 3 Tarutung",
			period: "October 2018 – October 2019",
			description: "Led the student council during high school, organizing school events and representing student body."
		}
	];

	const achievements = [
		{
			title: "Back-End Developer Expert with JavaScript",
			issuer: "Dicoding",
			year: "2025",
			type: "Certification",
			link: "https://www.dicoding.com/certificates/JMZVE6QK3PN9"
		},
		{
			title: "MSIB BATCH 7: Study Independent - Web Development & UI/UX Design",
			issuer: "Infinite Learning",
			year: "2024",
			type: "Program"
		},
		{
			title: "Internal Grant for Research and Community Service (PkM) Funding",
			issuer: "Institut Teknologi Del",
			year: "2025",
			type: "Grant"
		}
	];

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Experience | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Education, Organizations, and Achievements
						</div>

						<div className="subtitle contact-subtitle">
							Throughout my academic journey, I have actively participated in various organizational roles and achieved significant milestones. My experience spans leadership positions in student governance, event management, and academic excellence.
						</div>

						{/* Education Section */}
						<div className="experience-section">
							<h2 className="section-title">Education</h2>
							<div className="experience-item">
								<div className="experience-header">
									<h3>Bachelor of Science in Informatics</h3>
									<span className="experience-period">August 2021 – September 2025</span>
								</div>
								<div className="experience-organization">Institut Teknologi Del - Sitoluama, Toba Samosir, North Sumatra</div>
								<div className="experience-description">
									Focusing on computer science, software engineering, cyber security, and data science. Current GPA: 3.65/4.00
								</div>
							</div>
						</div>

						{/* Organizations Section */}
						<div className="experience-section">
							<h2 className="section-title">Organizations & Committees</h2>
							{organizations.map((org, index) => (
								<div key={index} className="experience-item">
									<div className="experience-header">
										<h3>{org.title}</h3>
										<span className="experience-period">{org.period}</span>
									</div>
									<div className="experience-organization">{org.organization}</div>
									<div className="experience-description">{org.description}</div>
								</div>
							))}
						</div>

						{/* Achievements Section */}
						<div className="experience-section">
							<h2 className="section-title">Achievements & Certifications</h2>
							{achievements.map((achievement, index) => (
								<div key={index} className="experience-item">
									<div className="experience-header">
										{achievement.link ? (
											<a 
												href={achievement.link} 
												target="_blank" 
												rel="noopener noreferrer"
												className="achievement-link"
											>
												<h3>{achievement.title}</h3>
											</a>
										) : (
											<h3>{achievement.title}</h3>
										)}
										<span className="experience-type">{achievement.type}</span>
									</div>
									<div className="experience-organization">{achievement.issuer} - {achievement.year}</div>
									{achievement.link && (
										<div className="certificate-note">
											<small>Click title to view certificate</small>
										</div>
									)}
								</div>
							))}
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
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

export default Experience;