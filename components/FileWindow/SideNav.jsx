'use client';

import React, { useState } from 'react';

const SideNav = () => {
	const [showIcons, setShowIcons] = useState(false);
	const revealIcon = () => setShowIcons((prev) => !prev);

	return (
		<div className="absolute z-10 top-0 left-0 h-full w-1/6 border-r border-r-[#D0D0CE] bg-gray-200 p-3 flex flex-col justify-start items-start gap-3">
			<div
				className="flex justify-start items-center gap-2"
				onMouseEnter={revealIcon}
				onMouseLeave={revealIcon}>
				<span className="h-[14px] w-[14px] rounded-full bg-red-400 border border-red-500 flex justify-center items-center text-xs p-1">
					{showIcons ? <i class="bx bx-x"></i> : null}
				</span>
				<span className="h-[14px] w-[14px] rounded-full bg-yellow-400 border border-yellow-500 flex justify-center items-center text-xs">
					{showIcons ? <i class="bx bx-minus"></i> : null}
				</span>
				<span className="h-[14px] w-[14px] rounded-full bg-green-400 border border-green-500 flex justify-center items-center rotate-45 gap-[1px] text-[5px]">
					{showIcons ? (
						<>
							<i class="bx bxs-left-arrow"></i>
							<i class="bx bxs-left-arrow rotate-180"></i>
						</>
					) : null}
				</span>
			</div>
		</div>
	);
};

export default SideNav;
