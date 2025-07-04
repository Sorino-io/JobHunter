from pydantic_settings import BaseSettings
from typing import List

class Settings(BaseSettings):
    # API Configuration
    API_V1_STR: str = "/api/v1"
    PROJECT_NAME: str = "JobHunter"
    
    # CORS
    ALLOWED_ORIGINS: List[str] = ["http://localhost:3000", "http://localhost:5173"]
    
    # Database
    DATABASE_URL: str = "postgresql://user:password@localhost/jobhunter"
    
    # External APIs
    GROK_API_KEY: str = ""
    GOOGLE_API_KEY: str = ""
    
    # Browser Automation
    HEADLESS_BROWSER: bool = True
    BROWSER_TIMEOUT: int = 30000
    
    # Security
    SECRET_KEY: str = "your-secret-key-here"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    
    class Config:
        env_file = ".env"

settings = Settings()