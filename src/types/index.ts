export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  summary: string;
}

export interface Experience {
  company: string;
  location: string;
  position: string;
  duration: string;
  startDate: string;
  endDate: string;
  achievements: string[];
  logo?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  thesis?: string;
}

export interface Certification {
  name: string;
  provider: string;
  date?: string;
  logo?: string;
  credentialUrl?: string;
}

export interface Award {
  name: string;
  organization: string;
  date: string;
  description?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ResumeData {
  personal: PersonalInfo;
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  awards: Award[];
  skills: SkillCategory[];
}
