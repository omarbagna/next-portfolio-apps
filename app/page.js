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
	{
		title: 'Countdown Timer',
		desc: 'A customizable countdown timer application built with HTML, JavaScript, CSS, and Bootstrap! Set your own deadlines with precision and watch as the timer counts down, keeping you focused and motivated.',
		image: '/images/countdown-timer.jpg',
		url: '/countdown-timer',
		techStack: [
			{
				icon: <i class="bx bxl-html5"></i>,
				name: 'HTML5',
			},

			{
				icon: <i class="bx bxl-css3"></i>,
				name: 'CSS3',
			},
			{
				icon: <i class="bx bxl-javascript"></i>,
				name: 'JavaScript',
			},
			{
				icon: <i class="bx bxl-bootstrap"></i>,
				name: 'BootStrap',
			},
		],
	},
	{
		title: 'Stopwatch',
		desc: 'Discover a sleek and efficient stopwatch application meticulously crafted with HTML, JavaScript, CSS, and Bootstrap. Take control of time with ease as you start, stop, and reset the stopwatch with just a click.',
		image: '/images/stopwatch.jpg',
		url: '/stopwatch',
		techStack: [
			{
				icon: <i class="bx bxl-html5"></i>,
				name: 'HTML5',
			},

			{
				icon: <i class="bx bxl-css3"></i>,
				name: 'CSS3',
			},
			{
				icon: <i class="bx bxl-javascript"></i>,
				name: 'JavaScript',
			},
			{
				icon: <i class="bx bxl-bootstrap"></i>,
				name: 'BootStrap',
			},
		],
	},
	{
		title: 'Analog Clock',
		desc: "Immerse yourself in the elegance of an analog clock application, crafted with HTML, JavaScript, and CSS. Witness time unfold in real-time as the clock's hands gracefully sweep across its face, providing you with accurate and visually stunning timekeeping.",
		image: '/images/analog-clock.jpg',
		url: '/analog-clock',
		techStack: [
			{
				icon: <i class="bx bxl-html5"></i>,
				name: 'HTML5',
			},

			{
				icon: <i class="bx bxl-css3"></i>,
				name: 'CSS3',
			},
			{
				icon: <i class="bx bxl-javascript"></i>,
				name: 'JavaScript',
			},
		],
	},
	{
		title: 'Digital Clock',
		desc: 'A dynamic digital clock application designed with HTML, JavaScript, and CSS. Witness time unfolding in real-time, displayed in crisp digital format.',
		image: '/images/digital-clock.jpg',
		url: '/digital-clock',
		techStack: [
			{
				icon: <i class="bx bxl-html5"></i>,
				name: 'HTML5',
			},

			{
				icon: <i class="bx bxl-css3"></i>,
				name: 'CSS3',
			},
			{
				icon: <i class="bx bxl-javascript"></i>,
				name: 'JavaScript',
			},
		],
	},
];

export default function Home() {
	return (
		<>
			<HomeContent />
			<FileWindow title={'projects'}>
				<div className="flex justify-start items-start gap-2 flex-wrap">
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
				</div>
			</FileWindow>
		</>
	);
}
