import React, { useState } from "react";
import { faUsers, faTrophy, faCertificate, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Card from "../common/card";
import "../../pages/styles/works.css";

const Works = () => {
	// Ubah initial state menjadi false semua untuk auto hide
	const [expandedSections, setExpandedSections] = useState({
		leadership: false,
		achievements: false,
		education: false
	});

	const toggleSection = (section) => {
		setExpandedSections(prev => ({
			...prev,
			[section]: !prev[section]
		}));
	};

	const renderWorkItem = (work, index) => (
		<div key={index} className="work">
			<img
				src={work.image}
				alt={work.alt}
				className="work-image"
			/>
			<div className="work-content">
				<div className="work-title">{work.title}</div>
				<div className="work-subtitle">{work.subtitle}</div>
			</div>
			<div className="work-duration">{work.duration}</div>
		</div>
	);

	const leadershipData = [
		{
			image: "./itdel.png",
			alt: "IT Del",
			title: "MPM KM IT Del",
			subtitle: "Head of Student Representative Council",
			duration: "May 2023 - Nov 2024"
		},
		{
			image: "./itdel.png",
			alt: "IT Del KPU",
			title: "KPU IT Del",
			subtitle: "Head of Election Commission",
			duration: "Mar 2023 - May 2023"
		},
		{
			image: "./itdel.png",
			alt: "IT Del Festival",
			title: "IT Del Festival",
			subtitle: "Head of IT Del Fest 2023",
			duration: "Jun 2023 - Aug 2023"
		}
	];

	const achievementsData = [
		{
			image: "./dicoding.jpeg",
			alt: "Dicoding",
			title: "Back-End Developer Expert",
			subtitle: "JavaScript Certification",
			duration: "Dicoding - 2025"
		},
		{
			image: "./il.png",
			alt: "Infinite Learning",
			title: "MSIB Batch 7",
			subtitle: "Web Development & UI/UX Design",
			duration: "Infinite Learning - 2024"
		},
		{
			image: "./itdel.png",
			alt: "IT Del Grant",
			title: "Research Grant Recipient",
			subtitle: "Internal Grant for Research & Community Service",
			duration: "IT Del - 2025"
		}
	];

	const educationData = [
		{
			image: "./itdel.png",
			alt: "IT Del",
			title: "Institut Teknologi Del",
			subtitle: "Bachelor of Science in Informatics",
			duration: "2021 - 2025 | GPA: 3.65/4.00"
		},
		{
			image: "./itdel.png",
			alt: "Focus Areas",
			title: "Specialization Focus",
			subtitle: "Software Engineering & Cyber Security",
			duration: "Computer Science & Data Science"
		}
	];

	return (
		<div className="works">
			{/* Leadership & Organizations */}
			<div className="work-section">
				<div 
					className="section-header"
					onClick={() => toggleSection('leadership')}
				>
					<div className="section-header-content">
						<FontAwesomeIcon icon={faUsers} className="section-icon" />
						<h3 className="section-title">Leadership & Organizations</h3>
						<span className="section-count">({leadershipData.length})</span>
					</div>
					<FontAwesomeIcon 
						icon={expandedSections.leadership ? faChevronUp : faChevronDown} 
						className="section-toggle"
					/>
				</div>
				<div className={`works-body ${expandedSections.leadership ? 'expanded' : 'collapsed'}`}>
					{leadershipData.map(renderWorkItem)}
				</div>
			</div>

			{/* Achievements & Certifications */}
			<div className="work-section">
				<div 
					className="section-header"
					onClick={() => toggleSection('achievements')}
				>
					<div className="section-header-content">
						<FontAwesomeIcon icon={faTrophy} className="section-icon" />
						<h3 className="section-title">Achievements & Certifications</h3>
						<span className="section-count">({achievementsData.length})</span>
					</div>
					<FontAwesomeIcon 
						icon={expandedSections.achievements ? faChevronUp : faChevronDown} 
						className="section-toggle"
					/>
				</div>
				<div className={`works-body ${expandedSections.achievements ? 'expanded' : 'collapsed'}`}>
					{achievementsData.map(renderWorkItem)}
				</div>
			</div>

			{/* Education */}
			<div className="work-section">
				<div 
					className="section-header"
					onClick={() => toggleSection('education')}
				>
					<div className="section-header-content">
						<FontAwesomeIcon icon={faCertificate} className="section-icon" />
						<h3 className="section-title">Education</h3>
						<span className="section-count">({educationData.length})</span>
					</div>
					<FontAwesomeIcon 
						icon={expandedSections.education ? faChevronUp : faChevronDown} 
						className="section-toggle"
					/>
				</div>
				<div className={`works-body ${expandedSections.education ? 'expanded' : 'collapsed'}`}>
					{educationData.map(renderWorkItem)}
				</div>
			</div>
		</div>
	);
};

export default Works;