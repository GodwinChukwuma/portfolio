'use client';

import { motion } from 'framer-motion';

export default function SystemArchitecture() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white"
        >
          System Architecture & Projects
        </motion.h2>

        <div className="grid grid-cols-1 gap-8">
          {[
            // Existing project: Scalable microservices platform
            {
              title: 'Scalable Microservices Platform',
              description:
                'Designed and shipped a microservices backend handling 1M+ daily requests with 99.99% uptime, focusing on domain boundaries, API contracts, and performance at scale.',
              details: [
                'Service design: Defined domain-driven service boundaries, REST contracts, and versioning to enable independent releases and team ownership.',
                'Event-driven workflows: Implemented Kafka-based messaging for async processing, retries, and idempotent handlers across services.',
                'Performance engineering: Reduced average response time by ~40% using Redis caching, MongoDB indexing, and query profiling.',
                'Reliability in code: Added timeouts, circuit breakers, structured logging, and trace correlation to stabilize behavior under peak load.',
              ],
              tech: ['Node.js', 'NestJS', 'Kafka', 'MongoDB', 'Redis'],
            },

            // Existing project: Real-time data processing pipeline
            {
              title: 'Real‑Time Data Processing Pipeline',
              description:
                'Architected a robust data processing pipeline capable of handling 5 TB+ of streaming data per day with sub‑second end‑to‑end latency, enabling real‑time analytics and decision‑making.',
              details: [
                'Stream processing: Built Flink jobs with clear event schemas, windowing, and exactly-once semantics where required.',
                'State & recovery: Designed stateful operators with checkpointing and deterministic reprocessing to maintain correctness on failure.',
                'Throughput tuning: Improved throughput by ~60% by optimizing partitioning, serialization formats, and operator parallelism.',
                'Data quality: Implemented validation, deduplication, and late-event handling to keep analytics reliable in real time.',
              ],
              tech: ['Apache Flink', 'AWS Kinesis', 'Prometheus', 'JSON', 'Python', 'PostgreSQL'],
            },

            // Existing project: Streaming security analytics platform
            {
              title: 'Real-Time Distributed Analytics Platform',
              description:
                'Built a real‑time security analytics system ingesting millions of events per day to detect anomalies and automate remediation.  Leveraged distributed messaging and container orchestration to achieve high reliability and near‑instant alerting.',
              details: [
                'Streaming ingestion layer: Architected and implemented Kafka-backed ingestion services to reliably process and normalize high-volume event streams into a unified, versioned data model.',
                'Scalable processing services: Built stateless, horizontally scalable backend services in Python and Go to process streaming data in real time, with explicit guarantees around throughput, latency, and fault tolerance.',
                'Asynchronous workflows & integrations: Engineered asynchronous processing pipelines and external system integrations using well-defined APIs, reducing end-to-end processing time by over 35%.',
                'Reliability & scalability: Designed for partition tolerance and graceful degradation using backpressure-aware consumers, idempotent processing, and retry-safe workflows.',
              ],
              tech: ['Kafka', 'Python', 'Go', 'Grafana'],
            },

            // Existing project: Modern headless web platform
            {
              title: 'Modern Headless Web Platform',
              description:
                'Led migration to a headless architecture using Django + React, improving delivery speed, content reuse, and front-end performance.',
              details: [
                 'API architecture: Built Django services with clean domain models and GraphQL/REST APIs optimized for client-specific needs.',
                'Caching strategy: Reduced page load time by ~25% using CDN caching, response shaping, and cache-aware API design.',
                'Developer velocity: Introduced reusable components and API patterns that reduced duplicated implementation work by ~50%.',
                'Security & correctness: Added auth, rate limiting, input validation, and audit-ready logging to protect content and endpoints.',
              ],
              tech: ['Django', 'React', 'GraphQL', 'CDN', 'PostgreSQL', 'TypeScript'],
            },

            // New project: Secure CI/CD & infrastructure automation
            {
              title: 'Secure Delivery Enablement',
              description:
                'Improved release safety and engineering throughput by enforcing quality gates, profiling hot paths, and standardizing production observability.',
              details: [
                'Quality gates: Enforced tests, linting, type checks, and build validation to prevent regressions before merge.',
                'Performance profiling: Used Silk to profile endpoints and background jobs, identify bottlenecks, and reduce latency in critical paths.',
                'Observability standards: Standardized metrics/logs/traces with dashboard-driven alerting in Grafana to reduce time-to-diagnosis.',
                'Release readiness: Added health checks, smoke tests, and rollback-safe versioning patterns to support reliable deployments.',
              ],
              tech: ['GitHub Actions', 'Silk', 'OpenTelemetry', 'Docker', 'Grafana', 'Sentry'],
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-200 dark:border-gray-800"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{project.description}</p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Key Achievements:
                </h4>
                <ul className="list-disc list-outside pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                  {project.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 bg-blue-500/10 text-blue-800 dark:text-blue-300 rounded-full border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
