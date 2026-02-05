export interface PersonalInfo {
  name: string;
  role: string;
  location: string;
  profileImage: string;
}

export interface SocialLink {
  type: string;
  url: string;
  icon: string;
}

export interface Education {
  institution: string;
  logo: string;
  degree: string;
  date: string;
  gpa: string;
  coursework: string[];
}

export interface WorkExperience {
  company: string;
  logo: string;
  role: string;
  date: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
}

export interface Contact {
  text: string;
  email: string;
}

export interface Resume {
  fileName: string;
  path: string;
  downloadText: string;
}

export interface Resume {
  fileName: string;
  path: string;
  downloadText: string;
}
