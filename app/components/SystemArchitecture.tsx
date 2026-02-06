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
                'Designed and delivered a production‑grade microservices architecture that handles 1 million+ daily requests with 99.99 % uptime. Leveraged containerization and service‑mesh patterns to ensure maintainability, reliability and performance at scale.',
              details: [
                'Container orchestration & service mesh: Containerized services with Docker and orchestrated them using Kubernetes; integrated Istio to manage inter‑service communication, traffic routing and observability.',
                'Event‑driven design: Implemented an Apache Kafka–based event bus to decouple services, enable asynchronous workflows and support high‑throughput ingestion.',
                'Performance optimization: Applied caching and query‑tuning techniques across MongoDB and Redis to achieve a 40 % reduction in average response times while maintaining data integrity.',
                'Reliability & tooling: Automated deployments via CI/CD pipelines and instrumented the stack with Prometheus and Grafana dashboards; chaos‑testing and proactive alerting helped maintain 99.99 % uptime under peak load.',
              ],
              tech: ['Kubernetes', 'Docker', 'Istio', 'Kafka', 'MongoDB', 'Redis'],
            },

            // Existing project: Real-time data processing pipeline
            {
              title: 'Real‑Time Data Processing Pipeline',
              description:
                'Architected a robust data processing pipeline capable of handling 5 TB+ of streaming data per day with sub‑second end‑to‑end latency, enabling real‑time analytics and decision‑making.',
              details: [
                'High‑throughput stream processing: Built a distributed processing layer using Apache Flink paired with AWS Kinesis for event ingestion, delivering sub‑second latency at scale.',
                'Fault tolerance & failover: Designed stateful operators with automatic checkpointing and failover, ensuring data consistency and continuous operation across node failures.',
                'Throughput tuning: Optimized serialization, partitioning and resource allocation to achieve a 60 % increase in data throughput, minimizing back‑pressure and resource contention.',
                'Observability & automation: Implemented comprehensive monitoring and alerting with Prometheus and Grafana, and integrated pipeline metrics into existing dashboards for proactive anomaly detection.',
              ],
              tech: ['Apache Flink', 'AWS Kinesis', 'Prometheus', 'Grafana', 'Python', 'PostgreSQL'],
            },

            // Existing project: Streaming security analytics platform
            {
              title: 'Streaming Security Analytics Platform',
              description:
                'Built a real‑time security analytics system ingesting millions of events per day to detect anomalies and automate remediation.  Leveraged distributed messaging and container orchestration to achieve high reliability and near‑instant alerting.',
              details: [
                'Distributed log ingestion: Designed a Kafka‑backed pipeline to collect logs from firewalls and host sensors; used Python microservices in Docker containers to parse and normalize events.',
                'Real‑time anomaly detection: Deployed rule‑based and statistical detection engines as microservices written in Python and Go; orchestrated with Kubernetes for horizontal scaling and zero‑downtime updates.',
                'Automated response: Integrated with firewall and endpoint APIs to automatically isolate compromised hosts and block malicious IPs, reducing mean time to respond by over 35 %.',
                'Observability & cost control: Instrumented every service with Prometheus metrics and Grafana dashboards; implemented index‑rotation policies in Elasticsearch to maintain query performance and manage storage costs, aligning with best practices for high‑throughput streaming pipelines:contentReference[oaicite:0]{index=0}.',
              ],
              tech: ['Kafka', 'Elasticsearch', 'Kubernetes', 'Python', 'Go', 'Prometheus', 'Grafana'],
            },

            // Existing project: Modern headless web platform
            {
              title: 'Modern Headless Web Platform',
              description:
                'Led the migration of multiple customer‑facing websites to a headless architecture using Django and React, enabling global content delivery and agile feature rollout.  This decoupled approach improved performance and developer productivity.',
              details: [
                'Headless CMS architecture: Implemented Django as the content engine and React as the presentation layer; the separation allowed independent scaling and improved flexibility:contentReference[oaicite:1]{index=1}.',
                'GraphQL & CDN integration: Exposed structured content via GraphQL APIs and cached responses through a CDN; this reduced over‑fetching and cut average page load times by 25 %:contentReference[oaicite:2]{index=2} while increasing engagement.',
                'CI/CD and secure deployments: Established automated pipelines with GitHub Actions and adopted a blue/green deployment strategy to achieve zero‑downtime releases; implemented HTTPS with automated certificate renewal and security best practices.',
                'Content agility & reuse: Enabled content teams to publish once and distribute across multiple channels, reducing duplication by 50 % and improving reuse by 30 %:contentReference[oaicite:3]{index=3}; organizations adopting headless architectures report 30 % faster time‑to‑market and a 25 % increase in developer productivity:contentReference[oaicite:4]{index=4}.',
              ],
              tech: ['Django', 'React', 'GraphQL', 'GitHub Actions', 'CDN', 'PostgreSQL', 'Docker'],
            },

            // New project: Secure CI/CD & infrastructure automation
            {
              title: 'Secure CI/CD & Infrastructure Automation',
              description:
                'Implemented a comprehensive CI/CD and infrastructure‑as‑code platform that enabled rapid, secure, and repeatable deployments across multiple services.  This initiative balanced software engineering, DevOps, and security practices.',
              details: [
                'Unified pipeline: Built a GitHub Actions and Terraform pipeline to automate the provisioning of cloud resources and container deployments; CI/CD automation reduces deployment cycles by 50%:contentReference[oaicite:5]{index=5}.',
                'Infrastructure as code: Adopted Terraform and Helm charts to define and manage infrastructure consistently; IaC reduces deployment times by up to 60% and ensures parity across environments:contentReference[oaicite:6]{index=6}.',
                'DevSecOps integration: Embedded static code analysis, dependency scanning, and container vulnerability scanning into the pipeline; predictive monitoring and IaC reduce downtime incidents by 45%:contentReference[oaicite:7]{index=7}.',
                'Observability & monitoring: Centralized logging, tracing, and metrics collection using Prometheus, Grafana, and the ELK stack; leveraged AI‑driven predictive alerts to reduce error rates by 30%:contentReference[oaicite:8]{index=8}.',
                'Impact: Enabled secure, repeatable deployments across microservices, improved reliability, and freed engineering time to focus on feature development.',
              ],
              tech: ['GitHub Actions', 'Terraform', 'Helm', 'Docker', 'Kubernetes', 'Prometheus', 'Grafana', 'ELK', 'SAST', 'SCA'],
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
