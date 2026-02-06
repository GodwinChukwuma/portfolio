'use client';

import { motion } from 'framer-motion';

export default function TechnicalMetrics() {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white"
        >
          Impact & Achievements
        </motion.h2>

        <div className="grid grid-cols-1 gap-12">
          {/* Performance & Scalability */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-green-600 dark:text-green-400">
              Performance & Scalability
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800/50 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-300">
                  High‑Concurrency APIs
                </h4>
                <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Increased API throughput 3× by adopting modular microservices.</li>
                  <li>• Achieved 99.99% availability during product launches.</li>
                  <li>• Reduced median latency by 45% through caching & query tuning.</li>
                  <li>• Serves 1M+ requests per day without degradation.</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800/50 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-300">
                  Database & Web Optimization
                </h4>
                <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Improved query response times by 70% with indexing & ORM tuning.</li>
                  <li>• Reduced database load by 45% via caching and efficient queries.</li>
                  <li>• Enhanced page load times and user engagement by 30% through CDNs and asset optimization.</li>
                  <li>• Cut downtime by 25% with proactive maintenance and monitoring.</li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Infrastructure, Security & DevOps */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-green-600 dark:text-green-400">
              Infrastructure, Security & DevOps
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800/50 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-300">
                  CI/CD & Observability
                </h4>
                <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Established unified CI/CD pipelines, reducing deployment cycles by 50%.</li>
                  <li>• Achieved 100% release uptime and 30% fewer critical bugs through automated testing & monitoring.</li>
                  <li>• Accelerated feature delivery by 35% by automating builds, tests, and deployments.</li>
                  <li>• Centralized metrics with Grafana and Swagger, enabling data‑driven decisions.</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800/50 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-300">
                  Security Monitoring & Response
                </h4>
                <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Reduced security incidents by 40% through proactive SIEM monitoring.</li>
                  <li>• Improved incident response time by 35% via automated threat analysis.</li>
                  <li>• Hardened infrastructure with firewalls, encryption and compliance policies.</li>
                  <li>• Streamlined security workflows, saving analyst hours and boosting efficiency.</li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Development & Leadership */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-green-600 dark:text-green-400">
              Development & Leadership
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800/50 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-300">
                  Code Quality & Standards
                </h4>
                <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Led the adoption of TypeScript across backend services.</li>
                  <li>• Established and enforced coding standards and best practices.</li>
                  <li>• Reduced technical debt by 40% through systematic refactoring.</li>
                  <li>• Implemented error handling and testing strategies to improve stability.</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800/50 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-300">
                  Team Impact & Migrations
                </h4>
                <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Mentored 4 junior developers and facilitated cross-functional growth.</li>
                  <li>• Authored 30+ technical guides and documentation for maintainability.</li>
                  <li>• Led 3 major system migrations with zero downtime.</li>
                  <li>• Enhanced collaboration and decision-making across product and engineering teams.</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
