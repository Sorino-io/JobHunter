export interface Job {
  id: number;
  title: string;
  company: string;
  location?: string;
  description: string;
  requirements?: string;
  salary_min?: number;
  salary_max?: number;
  job_type?: string;
  remote: boolean;
  url: string;
  source: JobSource;
  status: JobStatus;
  posted_date?: Date;
  created_at: Date;
  updated_at: Date;
}

export interface JobCreate {
  title: string;
  company: string;
  location?: string;
  description: string;
  requirements?: string;
  salary_min?: number;
  salary_max?: number;
  job_type?: string;
  remote: boolean;
  url: string;
  source: JobSource;
  posted_date?: Date;
}

export enum JobStatus {
  ACTIVE = "active",
  CLOSED = "closed",
  APPLIED = "applied"
}

export enum JobSource {
  LINKEDIN = "linkedin",
  INDEED = "indeed",
  GLASSDOOR = "glassdoor",
  COMPANY_WEBSITE = "company_website"
}