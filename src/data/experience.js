import React from "react";

function experience_1() {
	return {
		date: "September 2024 - Present",
		title: "Web Developer and Mobile Developer at PT Citra Bonang",
		description:
			"Leading multiple projects including Etos App for furniture testing documentation, Ebako-Latey mobile application for sales tracking, and modernizing Ebako ERP systems using PHP and CodeIgniter.",
		keywords: [
			"PT Citra Bonang",
			"Web Developer",
			"Mobile Developer",
			"PHP",
			"CodeIgniter",
			"ERP Systems",
			"Dedi Andre",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.experience-image {
					align-self: center;
					border-radius: 10px;
					max-width: 100%;
					margin: 20px 0;
				}

				.tech-stack {
					display: flex;
					flex-wrap: wrap;
					gap: 10px;
					margin: 15px 0;
				}

				.tech-item {
					background: #f0f0f0;
					padding: 5px 15px;
					border-radius: 20px;
					font-size: 14px;
					color: #333;
				}

				.project-list {
					list-style-type: disc;
					margin-left: 20px;
					margin-top: 15px;
				}

				.project-list li {
					margin-bottom: 10px;
					line-height: 1.6;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						<h2>Current Role: Web Developer and Mobile Developer</h2>
						<p>
							Currently working at PT Citra Bonang since September 2024, where I contribute to multiple 
							high-impact projects focused on improving business processes and system efficiency.
						</p>

						<div className="tech-stack">
							<span className="tech-item">PHP</span>
							<span className="tech-item">CodeIgniter</span>
							<span className="tech-item">Mobile Development</span>
							<span className="tech-item">ERP Systems</span>
							<span className="tech-item">Database Management</span>
						</div>

						<h3>Key Projects & Achievements:</h3>
						<ul className="project-list">
							<li>
								<strong>Etos App:</strong> Enhanced furniture testing documentation system for PT Ebako, 
								implementing comprehensive testing modules including Drop Test, Hot-Cold Test, Hardness Test, 
								and Print Mark Test functionality.
							</li>
							<li>
								<strong>Ebako-Latey Mobile Application:</strong> Developed mobile application features for 
								sales item input and tracking, creating an intuitive interface for sales team efficiency.
							</li>
							<li>
								<strong>Ebako Costing System:</strong> Improved costing application with advanced features 
								like change logs, new pricing modules, cost preview functionality, and seamless data migration.
							</li>
							<li>
								<strong>Ebako ERP Modernization:</strong> Led the upgrade of core ERP modules, implementing 
								modern architecture patterns and optimizing database performance for better scalability.
							</li>
						</ul>

						<p>
							This role has strengthened my expertise in PHP development, enterprise system architecture, 
							and mobile application development while working with complex business requirements and 
							large-scale systems.
						</p>
					</div>
				</div>
			</React.Fragment>
		),
	};
}

function experience_2() {
	return {
		date: "May 2024 - August 2024",
		title: "Full Stack Developer at Permana Solutions",
		description:
			"Developed a comprehensive microservices-based web application for explosive material transportation planning using .NET backend and Next.js frontend with REST API integration.",
		keywords: [
			"Permana Solutions",
			"Full Stack Developer",
			".NET",
			"Next.js",
			"Microservices",
			"REST API",
			"Dedi Andre",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.tech-stack {
					display: flex;
					flex-wrap: wrap;
					gap: 10px;
					margin: 15px 0;
				}

				.tech-item {
					background: #e3f2fd;
					padding: 5px 15px;
					border-radius: 20px;
					font-size: 14px;
					color: #1976d2;
					border: 1px solid #bbdefb;
				}

				.architecture-diagram {
					background: #f5f5f5;
					padding: 20px;
					border-radius: 10px;
					margin: 20px 0;
					text-align: center;
				}

				.module-list {
					display: grid;
					grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
					gap: 15px;
					margin-top: 20px;
				}

				.module-item {
					background: #fff;
					padding: 15px;
					border-radius: 8px;
					border-left: 4px solid #2196f3;
					box-shadow: 0 2px 4px rgba(0,0,0,0.1);
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						<h2>Full Stack Developer Experience</h2>
						<p>
							During my internship at Permana Solutions (May - August 2024), I worked on a sophisticated 
							microservices-based web application for explosive material transportation planning, gaining 
							valuable experience in modern full-stack development.
						</p>

						<div className="tech-stack">
							<span className="tech-item">.NET Core</span>
							<span className="tech-item">Next.js</span>
							<span className="tech-item">React</span>
							<span className="tech-item">Microservices</span>
							<span className="tech-item">REST API</span>
							<span className="tech-item">TypeScript</span>
						</div>

						<div className="architecture-diagram">
							<h3>🏗️ System Architecture</h3>
							<p>
								<strong>Frontend:</strong> Next.js with React components<br/>
								<strong>Backend:</strong> .NET Core microservices<br/>
								<strong>Communication:</strong> REST API integration<br/>
								<strong>Architecture:</strong> Distributed microservices pattern
							</p>
						</div>

						<h3>System Modules Developed:</h3>
						<div className="module-list">
							<div className="module-item">
								<h4>🏢 Vendor Form Module</h4>
								<p>Comprehensive vendor registration and management system with validation and approval workflows.</p>
							</div>
							<div className="module-item">
								<h4>📋 Pre-Operational Module</h4>
								<p>Planning and preparation phase management for transportation logistics and safety protocols.</p>
							</div>
							<div className="module-item">
								<h4>🚛 Operational Module</h4>
								<p>Real-time transportation tracking and monitoring system with status updates and notifications.</p>
							</div>
							<div className="module-item">
								<h4>✅ Approval Module</h4>
								<p>Multi-level approval system with role-based access control and audit trail functionality.</p>
							</div>
						</div>

						<h3>Key Learning Outcomes:</h3>
						<ul>
							<li><strong>Microservices Architecture:</strong> Gained hands-on experience in designing and implementing distributed systems</li>
							<li><strong>Full Stack Development:</strong> Mastered end-to-end development from frontend UI to backend APIs</li>
							<li><strong>REST API Integration:</strong> Implemented robust API communication between services</li>
							<li><strong>Modern Frontend:</strong> Advanced React and Next.js development with TypeScript</li>
							<li><strong>Enterprise Development:</strong> Worked with complex business requirements in a professional environment</li>
						</ul>

						<p>
							This experience significantly enhanced my full-stack development skills and provided deep insights 
							into enterprise-level software architecture and development practices.
						</p>
					</div>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [experience_1, experience_2];

export default myArticles;