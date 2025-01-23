import React from "react";
import "../assets/styles/Project.scss";

function Project() {
    return (
        <div className="body-container" id="projects">
            <h1>Professional Projects</h1>
            <p style={{ color: 'grey', fontStyle: 'italic', margin: 0}}>
                Note: The website is new and this section is currently under development. Some elements may appear incomplete or not fully styled.
            </p>
            <div className="projects-list">
                <div className="project">
                    <h2>Threat Intelligence AI Data Platform</h2>
                    <h3>Independently designed and built a real-time threat intelligence platform with handover to the Cyber SecOps team.</h3>
                    <ul>
                        <li>Developed an interactive JavaScript frontend to triage incoming threat alerts.</li>
                        <li>Built a Python backend to process user flows and integrate with secure LLMs, with features including data enhancement, translation, and summarization.</li>
                        <li>Designed a scalable and extensible data interface for regular pipeline ingestion and synchronization, integrating six API feeds before handoff.</li>
                        <li>Deployed all infrastructure-level and application-level code across staged environments with automated CI/CD pipelines.</li>
                        <li>Enabled full user authentication to the frontend with Azure Entra ID, with logging of user decisions for auditing and traceability.</li>
                    </ul>
                </div>
                <div className="project">
                    <h2>SharePoint Document Processing Platform</h2>
                    <h3>Developed new features for large-scale document processing platform and improved system reliability.</h3>
                    <ul>
                        <li>Maintained and enhanced a distributed .NET Core cloud platform handling millions of documents.</li>
                        <li>Built an end-to-end CI/CD pipeline to automate fragmented manual deployments using PowerShell Core and GitHub Actions.</li>
                        <li>Developed new features to enable cronjob batch-processing, and enhanced user interaction through upgraded UI capabilities.</li>
                        <li>Documented the platform’s complete architecture on Visio to simplify onboarding for future developers.</li>
                    </ul>
                </div>
                <div className="project">
                    <h2>LLM Insight Generation Framework</h2>
                    <h3>Used LLMs to extract insights from unstructured data, generating structured outputs based on dynamic user prompt files.</h3>
                    <ul>
                        <li>Wrote a framework allowing an arbitrary number of prompt files to map data to new columns, generated using configurable LLMs, enabling quick iteration with LLMs across different business use cases.</li>
                        <li>Hosted open-source models securely on private cloud infrastructure using llama.cpp.</li>
                        <li>Transitioned to AzureML for scalable deployment, optimizing resource utilization and cost.</li>
                        <li>Worked on custom preprocessing pipelines for a particular email dataset, utilizing graph-based deduplication algorithms to reduce token usage.</li>
                    </ul>
                </div>
                <div className="project">
                    <h2>News Feed Portal</h2>
                    <h3>Built an integrated news feed, using NLP techniques for advanced search and summarization capabilities.</h3>
                    <ul>
                        <li>Built modular data pipelines using YAML-defined AzureML orchestration-files, with custom dockerized runtime environments and comprehensive CI/CD.</li>
                        <li>Built backend APIs in Express.js, orchestrating data batches with Azure Data Factory.</li>
                        <li>Optimized search and result-ranking functionality in PostgreSQL using stored procedures.</li>
                        <li>Implemented domain-specific classification, tagging algorithms, and semantic search over vector databases.</li>
                        <li>Nominated for the company’s ‘AI Award’ for exceptional contributions to project delivery.</li>
                    </ul>
                </div>
                <div className="project">
                    <h2>Legacy Enterprise Platform Chatbot Upgrade</h2>
                    <h3>Revamping a knowledge management system with semantic search and automation.</h3>
                    <ul>
                        <li>Integrated a broken knowledge management app into an enterprise platform by fixing application code and automating deployments.</li>
                        <li>Upgraded the app to utilize LLMs for semantic queries over a proprietary knowledge base, delivering human-readable answers (RAG).</li>
                        <li>Built a CI/CD pipeline, converting manual deployments to parameterized infrastructure-as-code (IaC).</li>
                        <li>Refactored code for maintainability, enhanced prompt design, and upgraded models for performance and reliability.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Project;