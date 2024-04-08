import React from 'react';
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';

const Project = ({ title, desc, image, techStack = [], url = '#' }) => {
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

					<div className="w-full flex flex-col justify-start items-start gap-2">
						<h3 className="font-medium text-xl">Tech Stack</h3>
						<div className="w-full flex justify-start items-center gap-2 flex-wrap">
							{techStack.map(({ icon, name }, index) => (
								<div
									key={index}
									className="w-fit flex flex-col justify-start items-center text-5xl text-blue-500 gap-0">
									{icon}
									<span className="text-xs text-gray-600">{name}</span>
								</div>
							))}
						</div>
					</div>

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
