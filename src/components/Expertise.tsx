import React from "react";
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const skillsData = [
  {
    title: "Scalable Data Applications",
    description: "I leverage full-stack expertise to create robust backends for data processing, and scalable frontends for data visualization and interaction. I enable powerful decision-making with large-scale data pipelines, utilizing modern technologies for data ingestion, transformation, and orchestration to drive actionable insights on structured and unstructured data, and deliver business value.",
    icons: [
      { id: "python_logo", src: `${process.env.PUBLIC_URL}/logos/py.svg`, alt: "Python Logo" },
      { id: "csharp_logo", src: `${process.env.PUBLIC_URL}/logos/cs.svg`, alt: "C# Logo" },
      { id: "javascript_logo", src: `${process.env.PUBLIC_URL}/logos/js.svg`, alt: "JavaScript Logo" }
    ],
    techStack: [
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
    ]
  },
  {
    title: "DevOps & Infra Automation",
    description: "I incorporate cloud-native DevOps practices throughout the entire development lifecycle. I leverage infrastructure-as-code (IaC), CI/CD pipelines, and robust testing to ensure quick deployment from development to production. I leverage my expertise across the the software development life cycle to deliver comprehensive and reliable end-to-end solutions.",
    icons: [
      { id: "azure_logo", src: `${process.env.PUBLIC_URL}/logos/az.svg`, alt: "Azure Logo" },
      { id: "bash_logo", src: `${process.env.PUBLIC_URL}/logos/sh.svg`, alt: "Bash Logo" },
      { id: "docker_logo", src: `${process.env.PUBLIC_URL}/logos/docker.svg`, alt: "Docker Logo" }
    ],
    techStack: [
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
    ]
  },
  {
    title: "GenAI & LLMs",
    description: "I integrate secure Large Language Models (LLMs) into applications to help clients unlock the power of AI for smarter decision-making. With experience building scalable GenAI solutions, I focus on automating workflows, enhancing data pipelines, and delivering intelligent features like insight generation and semantic search, all while ensuring secure and efficient deployment.",
    icons: [
      { id: "huggingface_logo", src: `${process.env.PUBLIC_URL}/logos/hf.svg`, alt: "HuggingFace Logo" },
      { id: "azureml_logo", src: `${process.env.PUBLIC_URL}/logos/azml.svg`, alt: "AzureML Logo" },
      { id: "openai_logo", src: `${process.env.PUBLIC_URL}/logos/openai.svg`, alt: "OpenAI Logo" }
    ],
    techStack: [
      "OpenAI API",
      "Llama3",
      "Llama-cpp",
      "AzureML",
      "HuggingFace",
      "Python",
      "ElasticSearch",
      "MongoDB"
    ]
  }
];

function Expertise() {
  return (
    <div className="body-container" id="expertise">
      <h1>Expertise</h1>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div className="skill" key={index}>
            <div className="skill-icons">
              {skill.icons.map((icon) => (
                <img key={icon.id} id={icon.id} src={icon.src} alt={icon.alt} className="svg-img" />
              ))}
            </div>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {skill.techStack.map((label, idx) => (
                <Chip key={idx} className='chip' label={label} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Expertise;