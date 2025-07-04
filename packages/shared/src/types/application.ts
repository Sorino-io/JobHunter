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

export interface ApplicationCreate {
  job_id: number;
  resume_path: string;
  cover_letter?: string;
  notes?: string;
}

export enum ApplicationStatus {
  DRAFT = "draft",
  SUBMITTED = "submitted",
  UNDER_REVIEW = "under_review",
  INTERVIEW = "interview",
  REJECTED = "rejected",
  ACCEPTED = "accepted"
}