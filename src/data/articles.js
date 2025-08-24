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
			"Developed a comprehensive microservices-based web application for explosive material transportation planning using C# Clean Architecture, .NET backend, Next.js frontend with Docker containerization and JWT authentication.",
		keywords: [
			"Permana Solutions",
			"Full Stack Developer",
			"C# Clean Architecture",
			".NET",
			"Next.js",
			"Microservices",
			"Docker",
			"JWT Authentication",
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

				.tech-item.architecture {
					background: #f3e5f5;
					color: #7b1fa2;
					border: 1px solid #ce93d8;
				}

				.tech-item.docker {
					background: #e8f5e8;
					color: #2e7d32;
					border: 1px solid #a5d6a7;
				}

				.architecture-diagram {
					background: #f5f5f5;
					padding: 20px;
					border-radius: 10px;
					margin: 20px 0;
					text-align: center;
				}

				.microservices-grid {
					display: grid;
					grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
					gap: 15px;
					margin: 20px 0;
				}

				.microservice-item {
					background: #fff;
					padding: 15px;
					border-radius: 8px;
					border-left: 4px solid #2196f3;
					box-shadow: 0 2px 4px rgba(0,0,0,0.1);
				}

				.microservice-item h4 {
					margin: 0 0 10px 0;
					color: #1976d2;
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
						<h2>Full Stack Developer Experience - Microservices Architecture</h2>
						<p>
							During my internship at Permana Solutions (May - August 2024), I developed a sophisticated 
							microservices-based web application for explosive material transportation planning, implementing 
							modern software architecture patterns with C# Clean Architecture and containerization.
						</p>

						<div className="tech-stack">
							<span className="tech-item architecture">C# Clean Architecture</span>
							<span className="tech-item">.NET Core</span>
							<span className="tech-item">Next.js</span>
							<span className="tech-item">React</span>
							<span className="tech-item docker">Docker</span>
							<span className="tech-item">JWT Authentication</span>
							<span className="tech-item">Microservices</span>
							<span className="tech-item">REST API</span>
							<span className="tech-item">TypeScript</span>
						</div>

						<div className="architecture-diagram">
							<h3>🏗️ System Architecture Overview</h3>
							<p>
								<strong>Frontend:</strong> Next.js with React components and TypeScript<br/>
								<strong>Backend:</strong> C# .NET Core microservices with Clean Architecture<br/>
								<strong>Authentication:</strong> JWT-based security implementation<br/>
								<strong>Containerization:</strong> Docker for service deployment and orchestration<br/>
								<strong>Communication:</strong> REST API integration between services
							</p>
						</div>

						<h3>🚀 Microservices Implementation (11 Services):</h3>
						<div className="microservices-grid">
							<div className="microservice-item">
								<h4>🔐 wahana_auth</h4>
								<p>JWT authentication service with user management, role-based access control, and token validation.</p>
							</div>
							<div className="microservice-item">
								<h4>📄 wahana_content</h4>
								<p>Content management system for application data, documentation, and media handling.</p>
							</div>
							<div className="microservice-item">
								<h4>🔗 wahana_third_party</h4>
								<p>Third-party integration service for external APIs, payment gateways, and external systems.</p>
							</div>
							<div className="microservice-item">
								<h4>📦 wahana_product</h4>
								<p>Product catalog management with inventory tracking and product information systems.</p>
							</div>
							<div className="microservice-item">
								<h4>📊 wahana_journal</h4>
								<p>Financial journaling and transaction logging service with audit trail capabilities.</p>
							</div>
							<div className="microservice-item">
								<h4>🏢 wahana_vendor_form</h4>
								<p>Vendor registration and management system with comprehensive vendor profiling.</p>
							</div>
							<div className="microservice-item">
								<h4>🛒 wahana_purchase_order</h4>
								<p>Purchase order management with approval workflows and procurement tracking.</p>
							</div>
							<div className="microservice-item">
								<h4>📋 wahana_pre_operational</h4>
								<p>Pre-operational planning module for transportation logistics and safety protocols.</p>
							</div>
							<div className="microservice-item">
								<h4>🚛 wahana_operational</h4>
								<p>Real-time operational tracking system with monitoring and status management.</p>
							</div>
							<div className="microservice-item">
								<h4>✅ wahana_approval_step</h4>
								<p>Multi-level approval workflow engine with configurable approval chains.</p>
							</div>
						</div>

						<h3>🏛️ Clean Architecture Implementation:</h3>
						<ul>
							<li><strong>Domain Layer:</strong> Core business entities, value objects, and domain services</li>
							<li><strong>Application Layer:</strong> Use cases, interfaces, and application services</li>
							<li><strong>Infrastructure Layer:</strong> Data access, external services, and framework implementations</li>
							<li><strong>Presentation Layer:</strong> API controllers, DTOs, and request/response models</li>
						</ul>

						<h3>🐳 Docker Containerization:</h3>
						<ul>
							<li><strong>Service Isolation:</strong> Each microservice deployed in separate containers</li>
							<li><strong>Orchestration:</strong> Docker Compose for local development environment</li>
							<li><strong>Scalability:</strong> Independent scaling of services based on demand</li>
							<li><strong>Environment Consistency:</strong> Consistent deployment across development and production</li>
						</ul>

						<h3>Key Learning Outcomes:</h3>
						<ul>
							<li><strong>Clean Architecture:</strong> Mastered separation of concerns and dependency inversion principles</li>
							<li><strong>Microservices Design:</strong> Implemented distributed system patterns and inter-service communication</li>
							<li><strong>JWT Security:</strong> Developed secure authentication and authorization mechanisms</li>
							<li><strong>Docker Expertise:</strong> Gained proficiency in containerization and orchestration</li>
							<li><strong>C# Advanced Patterns:</strong> Applied modern C# features and design patterns</li>
							<li><strong>API Design:</strong> Created RESTful APIs following industry best practices</li>
						</ul>

						<p>
							This comprehensive microservices project provided invaluable experience in modern software 
							architecture, containerization, and enterprise-level development practices using cutting-edge 
							technologies and architectural patterns.
						</p>
					</div>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [experience_1, experience_2];

export default myArticles;