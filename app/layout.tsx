'use client';

import './globals.css';
import { useTheme, ThemeProvider } from './components/theme/ThemeProvider';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const metadata: Metadata = {
	title: 'Godwin Chukwuma - Backend Developer',
	description:
		'Welcome to my portfolio! I am a Senior software engineer specialising in building scalable server architectures, robust APIs and high‑performance distributed systems. With expertise in cloud infrastructure and database optimisation, I create efficient and reliable backend solutions. With expertise in cloud infrastructure and database optimization, I create efficient and reliable backend solutions.',
	keywords: [
		'Backend Developer',
		'Software Engineer',
		'System Architecture',
		'API Development',
		'Database Design',
		'Cloud Computing',
		'Microservices',
		'DevOps',
		'Godwin Chukwuma',
		'Node.js',
		'Python',
		'JavaScript',
		'RESTful APIs',
		'GraphQL',
		'SQL',
		'NoSQL',
		'Containerization',
		'Docker',
		'Kubernetes',
		'Node.js',
		'Express.js',
		'Django',
		'Flask',
		'System Design',
		'Backend Architecture',
	],
	authors: [{ name: 'Godwin Chukwuma' }],
	creator: 'Godwin Chukwuma',
	openGraph: {
		title: 'Godwin Chukwuma - Backend Developer Portfolio',
		description: 'Senior backend engineer crafting scalable server architectures, robust APIs and high‑performance distributed systems. Explore my projects and technical expertise to see how I build efficient, cloud‑optimised solutions.',
		url: 'https://your-domain.com',
		siteName: 'Godwin Chukwuma - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Godwin Chukwuma - Backend Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Godwin Chukwuma - Backend Developer',
		description: 'Passionate backend developer crafting scalable and efficient server architectures. Explore my projects and technical expertise.',
		creator: '@yourusername',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

function RootLayout({ children }: { children: React.ReactNode }) {
	const { theme } = useTheme();

	return (
		<html lang="en" className={theme} suppressHydrationWarning>
			<body>
				<div className="antialiased">{children}</div>
			</body>
		</html>
	);
}

export default function BackendDeveloperLayout({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider>
			<RootLayout>
				{children}
				<Analytics />
			</RootLayout>
		</ThemeProvider>
	);
}
