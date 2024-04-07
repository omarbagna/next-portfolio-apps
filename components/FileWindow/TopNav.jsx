import React from 'react';

const TopNav = ({ title }) => {
	return (
		<div className="absolute top-0 right-0 h-14 w-full pl-32 bg-gray-100 border-b border-b-[#D9D9D9] flex justify-start items-center gap-1">
			<span className="flex justify-start items-center">
				<i className="bx bx-chevron-left text-4xl text-gray-300"></i>
				<i className="bx bx-chevron-right text-4xl text-gray-300"></i>
			</span>
			<h1 className="text-lg font-medium capitalize">{title}</h1>
		</div>
	);
};

export default TopNav;
