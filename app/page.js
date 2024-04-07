import HomeContent from '@/components/HomeContent';
import FileWindow from '@/components/FileWindow';
import Project from '@/components/Project';

const projectItems = [
	{
		title: 'Calculator',
		desc: 'A simple React JS calculator application that simulates a calculator.',
		image: '/images/example.jpg',
		url: '#',
	},
];

export default function Home() {
	return (
		<>
			<HomeContent />
			<FileWindow title={'projects'}>
				{projectItems.map(({ title, desc, image, url }, index) => (
					<Project
						key={index}
						title={title}
						desc={desc}
						image={image}
						url={url}
					/>
				))}
			</FileWindow>
		</>
	);
}
