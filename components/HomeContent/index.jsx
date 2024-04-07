import React from 'react';
import './homeContent.css';

const HomeContent = () => {
	return (
		<div className="home_content">
			<div className="home_content-widgets">
				<div className="widget">
					<div className="widget-content">
						<div className="widget-logo">
							<img
								src="/images/profile.png"
								alt="bagna illustrator headshot"
								className="alt_logo"
							/>
							<span></span>
						</div>
						<div className="widget-text">
							<span className="widget-text_md">Portfolio</span>
						</div>
					</div>
				</div>
				<div className="widget widget_col_2">
					<div className="widget-content_2">
						<span className="widget-text_xl">
							Hi, <br />
							I'm Bagna
						</span>
						<div className="widget-tags_right">
							<div className="widget-tag">
								<span className="widget-text_sm align-right">Fullstack</span>
								<span className="bar"></span>
							</div>
							<div className="widget-tag">
								<span className="widget-text_sm align-right orange">
									Developer
								</span>
								<span className="bar alt-white"></span>
							</div>
						</div>
					</div>
				</div>
				<div className="widget widget_col_2">
					<div className="widget-content_3">
						<span className="widget-text_md"> Skills </span>

						<div className="widget-icons_container">
							<span>
								<i className="bx bxl-html5"></i>
							</span>
							<span>
								<i className="bx bxl-react"></i>
							</span>
							<span>
								<i className="bx bxl-tailwind-css"></i>
							</span>
							<span>
								<i className="bx bxl-javascript"></i>
							</span>
						</div>
					</div>
				</div>
				<div className="widget">
					<div className="widget-tags_left">
						<div className="widget-tag_reverse">
							<span className="bar alt-white"></span>
							<span className="widget-text_xs">Fullstack Developer</span>
						</div>
						<div className="widget-tag_reverse">
							<span className="bar alt-white"></span>
							<span className="widget-text_xs">UI/UX Designer</span>
						</div>
						<div className="widget-tag_reverse">
							<span className="bar alt-white"></span>
							<span className="widget-text_xs">Tailwind Warrior</span>
						</div>
						<div className="widget-tag_reverse">
							<span className="bar alt-white"></span>
							<span className="widget-text_xs">Coffee Sipper</span>
						</div>
					</div>
				</div>
			</div>
			<div className="home_content-icons"></div>
		</div>
	);
};

export default HomeContent;
