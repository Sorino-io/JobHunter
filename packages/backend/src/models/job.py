from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime
from enum import Enum

class JobStatus(str, Enum):
    ACTIVE = "active"
    CLOSED = "closed"
    APPLIED = "applied"

class JobSource(str, Enum):
    LINKEDIN = "linkedin"
    INDEED = "indeed"
    GLASSDOOR = "glassdoor"
    COMPANY_WEBSITE = "company_website"

class JobBase(BaseModel):
    title: str
    company: str
    location: Optional[str] = None
    description: str
    requirements: Optional[str] = None
    salary_min: Optional[int] = None
    salary_max: Optional[int] = None
    job_type: Optional[str] = None  # full-time, part-time, contract
    remote: bool = False
    url: str
    source: JobSource
    posted_date: Optional[datetime] = None

class JobCreate(JobBase):
    pass

class JobUpdate(BaseModel):
    title: Optional[str] = None
    company: Optional[str] = None
    location: Optional[str] = None
    description: Optional[str] = None
    requirements: Optional[str] = None
    salary_min: Optional[int] = None
    salary_max: Optional[int] = None
    job_type: Optional[str] = None
    remote: Optional[bool] = None
    status: Optional[JobStatus] = None

class Job(JobBase):
    id: int
    status: JobStatus = JobStatus.ACTIVE
    created_at: datetime
    updated_at: datetime
    
    class Config:
        from_attributes = True