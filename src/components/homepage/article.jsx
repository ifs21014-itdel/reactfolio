import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faBriefcase, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

import "./styles/article.css";

const Article = (props) => {
	const { title, description, date, link } = props;

	return (
		<React.Fragment>
			<div className="homepage-article">
				<div className="homepage-article-content">
					<div className="homepage-article-date">
						<FontAwesomeIcon
							icon={faCalendarAlt}
							style={{ fontSize: "12px", marginRight: "8px", color: "#666" }}
						/>
						{date}
					</div>
					<div className="homepage-article-title">
						<FontAwesomeIcon
							icon={faBriefcase}
							style={{ fontSize: "16px", marginRight: "10px", color: "#2196f3" }}
						/>
						{title}
					</div>
					<div className="homepage-article-description">
						{description}
					</div>
					<div className="homepage-article-link">
						<Link to={link}>
							Read more about this experience{" "}
							<FontAwesomeIcon
								style={{ fontSize: "10px" }}
								icon={faChevronRight}
							/>
						</Link>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Article;