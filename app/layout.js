import { Red_Hat_Display } from 'next/font/google';
import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import BottomNav from '@/components/BottomNav';

const inter = Red_Hat_Display({ subsets: ['latin'] });

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="apple-touch-icon" sizes="180x180" href="/images/Head.png" />
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/images/Head.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/images/Head.png"
				/>
				<link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
				<link
					href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
					rel="stylesheet"
				/>

				<title>Bagna Applications</title>
			</head>
			<body className={inter.className}>
				<Navbar />
				{children}
				<BottomNav />
			</body>
		</html>
	);
}
