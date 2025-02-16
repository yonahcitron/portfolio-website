import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Pagination, A11y, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../assets/styles/Project.scss";

// Register the Swiper modules
SwiperCore.use([Pagination, A11y, Mousewheel]);

type ProjectType = {
  title: string;
  description: string;
  details: string[];
};

const projects: ProjectType[] = [
  {
    title: "Threat Intelligence AI Data Platform",
    description:
      "Independently designed and built a real-time threat intelligence platform with handover to the Cyber SecOps team.",
    details: [
      "Developed an interactive JavaScript frontend to triage incoming threat alerts.",
      "Built a Python backend to process user flows and integrate with secure LLMs, with features including data enhancement, translation, and summarization.",
      "Designed a scalable and extensible data interface for regular pipeline ingestion and synchronization, integrating six API feeds before handoff.",
      "Deployed all infrastructure-level and application-level code across staged environments with automated CI/CD pipelines.",
      "Enabled full user authentication to the frontend with Azure Entra ID, with logging of user decisions for auditing and traceability.",
    ],
  },
  {
    title: "SharePoint Document Processing Platform",
    description:
      "Developed new features for large-scale document processing platform and improved system reliability.",
    details: [
      "Maintained and enhanced a distributed .NET Core cloud platform handling millions of documents.",
      "Built an end-to-end CI/CD pipeline to automate fragmented manual deployments using PowerShell Core and GitHub Actions.",
      "Developed new features to enable cronjob batch-processing, and enhanced user interaction through upgraded UI capabilities.",
      "Documented the platform’s complete architecture on Visio to simplify onboarding for future developers.",
    ],
  },
  {
    title: "LLM Insight Generation Framework",
    description:
      "Used LLMs to extract insights from unstructured data, generating structured outputs based on dynamic user prompt files.",
    details: [
      "Wrote a framework allowing an arbitrary number of prompt files to map data to new columns, generated using configurable LLMs, enabling quick iteration with LLMs across different business use cases.",
      "Hosted open-source models securely on private cloud infrastructure using llama.cpp.",
      "Transitioned to AzureML for scalable deployment, optimizing resource utilization and cost.",
      "Worked on custom preprocessing pipelines for a particular email dataset, utilizing graph-based deduplication algorithms to reduce token usage.",
    ],
  },
  {
    title: "News Feed Portal",
    description:
      "Built an integrated news feed, using NLP techniques for advanced search and summarization capabilities.",
    details: [
      "Built modular data pipelines using YAML-defined AzureML orchestration-files, with custom dockerized runtime environments and comprehensive CI/CD.",
      "Built backend APIs in Express.js, orchestrating data batches with Azure Data Factory.",
      "Optimized search and result-ranking functionality in PostgreSQL using stored procedures.",
      "Implemented domain-specific classification, tagging algorithms, and semantic search over vector databases.",
      "Nominated for the company’s ‘AI Award’ for exceptional contributions to project delivery.",
    ],
  },
  {
    title: "Enterprise Platform Chatbot Upgrade",
    description:
      "Revamping a knowledge management system with semantic search and automation.",
    details: [
      "Integrated a broken knowledge management app into an enterprise platform by fixing application code and automating deployments.",
      "Upgraded the app to utilize LLMs for semantic queries over a proprietary knowledge base, delivering human-readable answers (RAG).",
      "Built a CI/CD pipeline, converting manual deployments to parameterized infrastructure-as-code (IaC).",
      "Refactored code for maintainability, enhanced prompt design, and upgraded models for performance and reliability.",
    ],
  },
];

function Project() {
  return (
    <div className="body-container" id="projects">
      <h1>Professional Projects</h1>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        pagination={{ clickable: true }}
        grabCursor={true}
        mousewheel={{ forceToAxis: true, releaseOnEdges: true, sensitivity: 0.5 }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          670: {
            slidesPerView: 3,
          },
        }}
        onSlideChange={() => console.log("Scrolled to a different project slide.")}
        onSwiper={(swiper: any) => console.log(swiper)}
      >
        {projects.map((project: ProjectType, index: number) => (
          <SwiperSlide key={index}>
            <div className="project">
              <h2>{project.title}</h2>
              <h3>{project.description}</h3>
              <ul>
                {project.details.map((detail: string, i: number) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Project;