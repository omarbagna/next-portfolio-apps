import React from 'react';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import './bottomNav.css';

const BottomNav = () => {
	return (
		<div className="bottom_nav">
			<TooltipProvider delayDuration={300}>
				<a href="https://bagna.dev" className="bottom_nav-icon_container">
					<Tooltip>
						<TooltipTrigger>
							<i className="bx bx-home-alt"></i>
						</TooltipTrigger>
						<TooltipContent side="bottom">
							<p>Home</p>
						</TooltipContent>
					</Tooltip>
				</a>
				<a href="#" className="bottom_nav-icon_container">
					<Tooltip>
						<TooltipTrigger>
							<i className="bx bx-phone-call"></i>
						</TooltipTrigger>
						<TooltipContent side="bottom">
							<p>Contact</p>
						</TooltipContent>
					</Tooltip>
				</a>
				<a href="https://apps.bagna.dev" className="bottom_nav-icon_container">
					<Tooltip>
						<TooltipTrigger>
							<i className="bx bx-coin-stack"></i>
						</TooltipTrigger>
						<TooltipContent side="bottom">
							<p>Projects</p>
						</TooltipContent>
					</Tooltip>
				</a>
			</TooltipProvider>
		</div>
	);
};

export default BottomNav;
