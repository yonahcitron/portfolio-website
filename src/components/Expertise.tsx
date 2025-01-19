import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "JavaScript",
    "C#",
    "Python",
    "Pandas",
    "SQL",
    "REST APIs",
    "Azure Data Factory",
    "DataBricks",
    "PostgreSQL",
    "CosmosDB",
    "Postman"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "Azure",
    "AWS",
    "Bicep",
    "Terraform",
    "Linux",
    "Bash",
    "PowerShell Core"
];

const labelsThird = [
    "OpenAI API",
    "Llama3",
    "Llama-cpp",
    "AzureML",
    "HuggingFace",
    "Python",
    "ElasticSearch",
    "MongoDB"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack for Big Data</h3>
                    <p>I have designed and implemented large-scale data pipelines, creating robust backends for data processing and frontends for data visualization and interaction. I excel at delivering end-to-end solutions, combining expertise in the software development life cycle (SDLC) as well as the modern data stack, including tools and technologies for data ingestion, transformation, and orchestration.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Infra Automation</h3>
                    <p>I incorporate cloud-native DevOps practices throughout the entire development lifecycle. I leverage infrastructure-as-code (IaC), CI/CD pipelines, and robust testing to ensure quick deployment from development to production.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>GenAI & LLMs</h3>
                    <p>I integrate secure Large Language Models (LLMs) into applications to help clients unlock the power of AI for smarter decision-making. With experience building scalable GenAI solutions, I focus on automating workflows, enhancing data pipelines, and delivering intelligent features like insight generation and semantic search, all while ensuring secure and efficient deployment.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;