export interface User {
  id: number;
  email: string;
  full_name?: string;
  created_at: Date;
}

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

export interface Application {
  id: number;
  job_id: number;
  resume_path: string;
  cover_letter?: string;
  notes?: string;
  status: ApplicationStatus;
  submitted_at?: Date;
  created_at: Date;
  updated_at: Date;
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

export enum ApplicationStatus {
  DRAFT = "draft",
  SUBMITTED = "submitted",
  UNDER_REVIEW = "under_review",
  INTERVIEW = "interview",
  REJECTED = "rejected",
  ACCEPTED = "accepted"
}