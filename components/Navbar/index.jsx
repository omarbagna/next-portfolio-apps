'use client';

import React, { useEffect, useState } from 'react';
import './navbar.css';
import dayjs from 'dayjs';

const Navbar = () => {
	const [time, setTime] = useState(dayjs().format('hh:mmA'));

	useEffect(() => {
		setInterval(() => {
			setTime(dayjs().format('hh:mmA'));
		}, 1000);
	}, [time]);

	return (
		<div className="nav_bar">
			<div className="nav_bar-left">
				<img
					src="/images/logo.png"
					className="nav_bar-left_logo"
					alt="bagna logo"
					layout="fill"
				/>
				<div className="nav_bar-left_buttons">
					<span>
						<a className="nav-link" href="https://bagna.dev">
							Home
						</a>
					</span>
					<span>
						<a className="nav-link" href="#">
							Contact
						</a>
					</span>
					<span>
						<a className="nav-link" href="https://apps.bagna.dev">
							Projects
						</a>
					</span>
				</div>
			</div>
			<div className="nav_bar-right">
				<i className="bx bxl-github nav_bar-right_icons"></i>
				<i className="bx bxl-linkedin nav_bar-right_icons"></i>
				<i className="bx bxl-instagram-alt nav_bar-right_icons"></i>
				<span className="date_time">{dayjs().format('ddd D MMM')}</span>
				<span className="date_time">{time}</span>
			</div>
		</div>
	);
};

export default Navbar;
