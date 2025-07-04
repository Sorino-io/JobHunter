export const API_ENDPOINTS = {
  JOBS: '/jobs',
  APPLICATIONS: '/applications',
  AUTH: '/auth',
} as const;

export const JOB_PLATFORMS = {
  LINKEDIN: 'linkedin',
  INDEED: 'indeed',
  GLASSDOOR: 'glassdoor',
  COMPANY_WEBSITE: 'company_website',
} as const;

export const APPLICATION_STATUSES = {
  DRAFT: 'draft',
  SUBMITTED: 'submitted',
  UNDER_REVIEW: 'under_review',
  INTERVIEW: 'interview',
  REJECTED: 'rejected',
  ACCEPTED: 'accepted',
} as const;

export const JOB_STATUSES = {
  ACTIVE: 'active',
  CLOSED: 'closed',
  APPLIED: 'applied',
} as const;