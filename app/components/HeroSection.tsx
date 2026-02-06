'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 dark:opacity-10 opacity-0" />
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] dark:invert-0 invert" />
			</div>

			<div className="relative z-10 max-w-4xl w-full mx-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="bg-white/50 dark:bg-black/50 backdrop-blur-lg rounded-lg border border-gray-200 dark:border-gray-800 p-6 shadow-lg"
				>
					<div className="flex items-center gap-2 mb-4">
						<div className="w-3 h-3 rounded-full bg-red-500" />
						<div className="w-3 h-3 rounded-full bg-yellow-500" />
						<div className="w-3 h-3 rounded-full bg-green-500" />
					</div>
					<div className="font-mono">
						<p className="text-green-600 dark:text-green-500">$ whoami</p>
						<h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-gray-900 dark:text-white">Godwin Chukwuma</h1>
						<p className="text-gray-600 dark:text-gray-400 mb-2">Senior Backend Engineer</p>
						<p className="text-green-600 dark:text-green-500">$ skills</p>
						<div className="flex flex-wrap gap-2 mt-2">
							<span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20">Node.js</span>
							<span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20">Python</span>
							<span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20">NestJs</span>
							<span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20">ExpressJs</span>
							<span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20">Django</span>
							<span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20">Django REST Framework</span>
							<span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20">Flask</span>
							<span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20">TypeScript</span>
							<span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20">JavaScript</span>
							<span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20">RESTful APIs</span>
							<span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20">SupaBase</span>
							<span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20">TypeORM</span>
							<span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20">Grafana</span>
							<span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20">Go</span>
							<span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20">AWS</span>
							<span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20">Docker</span>
							<span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20">Kubernetes</span>
							<span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20">PostgreSQL</span>
							<span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20">JWT Authentication</span>
							<span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20">SQLAlchemy</span>
							<span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20">Redis</span>
							<span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20">GraphQL</span>
							<span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20">Microservices Architecture</span>
							<span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20">CI/CD</span>
							<span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20">API Integrations</span>
							<span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20">MongoDB</span>
							<span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20">Celery</span>
							<span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20">RabbitMQ</span>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
