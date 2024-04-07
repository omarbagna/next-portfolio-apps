import React from 'react';
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';

const Project = ({ title, desc, image, url = '#' }) => {
	return (
		<Sheet>
			<SheetTrigger>
				<div className="flex flex-col justify-center items-center gap-1 w-28 cursor-pointer">
					<span className="flex justify-center items-center p-1 rounded-md bg-gray-400/10 overflow-hidden">
						<img
							className="w-20 object-contain"
							src="/images/folder.png"
							alt=""
						/>
					</span>
					<h2>{title}</h2>
				</div>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle className="text-2xl">{title}</SheetTitle>
				</SheetHeader>
				<div className="w-full flex flex-col justify-start items-start gap-3 mt-6">
					<p>{desc}</p>

					<img
						className="rounded-md overflow-hidden object-contain w-full"
						src={image}
						alt="project"
					/>

					<div className="w-full flex justify-end items-center">
						<a
							href={url}
							target="_blank"
							className="transition-all duration-300 ease-in-outs capitalize px-3 py-1 rounded-md bg-blue-500 text-white cursor-pointer hover:shadow-md">
							Show project
						</a>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default Project;
