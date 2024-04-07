import React from 'react';
import SideNav from './SideNav';
import TopNav from './TopNav';

const FileWindow = ({ title, children }) => {
	return (
		<div className="fixed top-0 left-0 z-10 w-full h-full flex justify-center items-center">
			<div className="w-1/2 h-2/3 pl-36 pt-20 bg-white rounded-md relative overflow-hidden shadow-2xl">
				<SideNav />
				<TopNav title={title} />

				{children}
			</div>
		</div>
	);
};

export default FileWindow;
