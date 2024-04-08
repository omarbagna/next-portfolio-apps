import HomeContent from '@/components/HomeContent';
import FileWindow from '@/components/FileWindow';
import Project from '@/components/Project';

const projectItems = [
	{
		title: 'Tile Reveal Game',
		desc: 'A React JS application that lets you dive into a thrilling tile reveal picture game crafted with React.js, CSS, and Bootstrap! Test your memory and observation skills as you unveil hidden images beneath each tile.',
		image: '/images/tile-reveal.jpg',
		url: '/tile-reveal-game',
		techStack: [
			// {
			// 	icon: <i class="bx bxl-html5"></i>,
			// 	name: 'HTML5',
			// },
			{
				icon: <i class="bx bxl-react"></i>,
				name: 'React JS',
			},
			{
				icon: <i class="bx bxl-css3"></i>,
				name: 'CSS3',
			},
			{
				icon: <i class="bx bxl-bootstrap"></i>,
				name: 'BootStrap',
			},
		],
	},
];

export default function Home() {
	return (
		<>
			<HomeContent />
			<FileWindow title={'projects'}>
				{projectItems.map(({ title, desc, image, url, techStack }, index) => (
					<Project
						key={index}
						title={title}
						desc={desc}
						image={image}
						url={url}
						techStack={techStack}
					/>
				))}
			</FileWindow>
		</>
	);
}
