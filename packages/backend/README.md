# Backend - FastAPI Job Application Automation

This package contains the FastAPI backend server for the JobHunter application.

## Features

- RESTful API for job and application management
- Browser automation for job scraping and form filling
- Integration with AI agents for intelligent processing
- Authentication and user management

## Setup

1. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Install Playwright browsers:
```bash
playwright install
```

4. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

5. Run the development server:
```bash
python -m src.main
```

## API Documentation

Once running, visit http://localhost:8000/docs for interactive API documentation.

## Project Structure

```
src/
├── api/v1/          # API route handlers
├── models/          # Pydantic models
├── services/        # Business logic
├── config/          # Configuration
└── main.py         # Application entry point
```