from pydantic import BaseModel
from typing import Optional
from datetime import datetime
from enum import Enum

class ApplicationStatus(str, Enum):
    DRAFT = "draft"
    SUBMITTED = "submitted"
    UNDER_REVIEW = "under_review"
    INTERVIEW = "interview"
    REJECTED = "rejected"
    ACCEPTED = "accepted"

class ApplicationBase(BaseModel):
    job_id: int
    resume_path: str
    cover_letter: Optional[str] = None
    notes: Optional[str] = None

class ApplicationCreate(ApplicationBase):
    pass

class ApplicationUpdate(BaseModel):
    resume_path: Optional[str] = None
    cover_letter: Optional[str] = None
    notes: Optional[str] = None
    status: Optional[ApplicationStatus] = None

class Application(ApplicationBase):
    id: int
    status: ApplicationStatus = ApplicationStatus.DRAFT
    submitted_at: Optional[datetime] = None
    created_at: datetime
    updated_at: datetime
    
    class Config:
        from_attributes = True