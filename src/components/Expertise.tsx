import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "JavaScript",
    "C#",
    "Python",
    "Pandas",
    "SQL",
    ".NET Core",
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
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <div className="skill-icons">
                        <FontAwesomeIcon icon={faPython} size="3x"/>
                        <img // FortAwesome doesn't have a certain icons. Using raw svgs instead.
                            src={`${process.env.PUBLIC_URL}/logos/c_sharp_logo.svg`}
                            alt="C# Logo"
                        />
                        <FontAwesomeIcon icon={faJs} size="3x"/>
                    </div>
                    <h3>Scalable Data Applications</h3>
                    <p>I leverage full-stack expertise to create robust backends for data processing, and scalable frontends for data visualization and interaction. I enable powerful decision-making with large-scale data pipelines, utilizing modern technologies for data ingestion, transformation, and orchestration to drive actionable insights on structured and unstructured data, and deliver business value.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <div className="skill-icons">
                        <FontAwesomeIcon icon={faDocker} size="3x"/>
                        <img
                            src={`${process.env.PUBLIC_URL}/logos/azure_logo.svg`}
                            alt="Azure Logo"
                        />
                        <img
                            src={`${process.env.PUBLIC_URL}/logos/bash_logo.svg`}
                            alt="Bash Logo"
                        />
                    </div>
                    <h3>DevOps & Infra Automation</h3>
                    <p>I incorporate cloud-native DevOps practices throughout the entire development lifecycle. I leverage infrastructure-as-code (IaC), CI/CD pipelines, and robust testing to ensure quick deployment from development to production. I leverage my expertise across the the software development life cycle to deliver comprehensive and reliable end-to-end solutions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <div className="skill-icons">
                        <img
                            src={`${process.env.PUBLIC_URL}/logos/hf_logo.svg`}
                            alt="HuggingFace Logo"
                        />
                        <img
                            src={`${process.env.PUBLIC_URL}/logos/azureml_logo.svg`}
                            alt="AzureML Logo"
                        />
                        <img
                            src={`${process.env.PUBLIC_URL}/logos/openai_logo.svg`}
                            alt="OpenAI Logo"
                        />
                    </div>
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
    );
}

export default Expertise;