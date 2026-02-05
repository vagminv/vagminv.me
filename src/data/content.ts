import type { PersonalInfo, SocialLink, Education, WorkExperience, Project, Contact, Resume } from '../types';

export const personalInfo: PersonalInfo = {
  name: "Vagmin Viswanathan",
  role: "Co-founder @ CaseUp | CS & Physics @ Dartmouth",
  location: "Hanover, NH",
  profileImage: "/pfp.png"
}

export const socialLinks: SocialLink[] = [
  { type: "email", url: "mailto:vagmin.viswanathan@gmail.com", icon: "Mail" },
  { type: "linkedin", url: "https://linkedin.com/in/vagmin-viswanathan", icon: "Linkedin" },
  { type: "github", url: "https://github.com/vagminv", icon: "Github" },
  { type: "website", url: "https://vagminv.me", icon: "Globe" }
]

export const about: string[] = [
  "Co-founder @ CaseUp (Simulating consulting interviews with AI).",
  "Studying Computer Science & Physics @ Dartmouth College.",
  "President of Quantum Computing Club; interested in AI Agents, Deep Learning, and Quantum Systems.",
  "Previously built onboarding agents at Amazon and data pipelines at Millennium Management."
]

export const education: Education = {
  institution: "Dartmouth College",
  logo: "/logos/dartmouth-logo.png",
  degree: "Bachelor of Arts in Computer Science and Physics",
  date: "Expected Mar 2026",
  gpa: "3.87 / 4.00",
  coursework: [
    "AI Agents",
    "Deep Learning",
    "Full Stack Web Dev",
    "Cryptography",
    "Quantum Computing",
    "Game Theory"
  ]
}

export const workExperience: WorkExperience[] = [
  {
    company: "CaseUp",
    logo: "💼",
    role: "Co-founder",
    date: "Jan 2026 - Present",
    description: [
      "Built adaptive real-time voice AI interview bot using ElevenLabs & Whisper",
      "Launched beta to 100 students across 3 campuses; Telora fellowship finalist"
    ]
  },
  {
    company: "Amazon",
    logo: "/logos/amazon-logo.png",
    role: "Software Development Engineering Intern",
    date: "Jun 2025 - Sep 2025",
    description: [
      "Architected agentic onboarding system with AWS Bedrock; saved $400k/year",
      "Built multimodal knowledge graphs and RAG system with 97% accuracy"
    ]
  },
  {
    company: "Millennium Management",
    logo: "/logos/millennium-logo.png",
    role: "Data Science Intern",
    date: "Jun 2024 - Aug 2024",
    description: [
      "Engineered ETL pipeline to process 24k SEC filings annually with 98% accuracy",
      "Improved due-diligence workflow efficiency by 22%"
    ]
  },
  {
    company: "FitzLab",
    logo: "/logos/fitzlab-logo.png",
    role: "Presidential Scholar",
    date: "Aug 2023 - May 2024",
    description: [
      "Engineered simulation package in QuTiP; cut runtimes by 82%",
      "Prototyped graph attention networks for quantum error correction"
    ]
  }
]

export const projects: Project[] = [
  {
    title: "HardShell",
    description: "Firewall to defend LLM agents against prompt injection attacks in A2A social networks.",
    tags: ["Python", "LLM", "Security", "AI"]
  },
  {
    title: "friday.ai",
    description: "MacOS desktop agent for long-horizon context and project management with G-Suite/Notion integration.",
    tags: ["Swift", "AI Agents", "macOS", "Productivity"]
  },
  {
    title: "Twitter Sentiment Analysis",
    description: "Sentiment pipeline analyzing 1M+ tweets for stock market prediction using FinBERT and LSTM models.",
    tags: ["Python", "NLP", "Finance", "LSTM"]
  },
  {
    title: "Quantum Decoupling",
    description: "RL-driven scheduling for quantum error correction, outperforming classical algorithms by 63%.",
    tags: ["Python", "Qiskit", "RL", "Quantum"]
  }
]

export const hobbies: string[] = [
  "Chess",
  "Cooking",
  "Coffee",
  "Quantum Computing",
  "Reading",
  "Hiking"
]

export const contact: Contact = {
  text: "Reach out via email or connect on LinkedIn/GitHub.",
  email: "vagmin.viswanathan@gmail.com"
}

export const resume: Resume = {
  fileName: "Vagmin_Viswanathan_Resume.pdf",
  path: "/resume.pdf",
  downloadText: "Download Resume"
}
