# Backend - FastAPI Job Application Automation

This package contains the FastAPI backend server for the JobHunter application.

## Features

- RESTful API for job and application management
- Browser automation for job scraping and form filling
- Integration with AI agents for intelligent processing
- Authentication and user management

## Setup

1. Install Poetry (if not already installed):
```bash
curl -sSL https://install.python-poetry.org | python3 -
```

2. Navigate to the backend directory:
```bash
cd packages/backend
```

3. Install dependencies:
```bash
poetry install
```

4. Activate the Poetry shell (optional but recommended):
```bash
poetry shell
```
This creates and activates a virtual environment for the project. Once activated, you can run commands directly without the `poetry run` prefix.

5. Install Playwright browsers:
```bash
# If using poetry shell:
playwright install

# If not using poetry shell:
poetry run playwright install
```

6. Set up environment variables:
```bash
cp ../../.env.example .env
# Edit .env with your configuration
```

7. Run the development server:
```bash
# If using poetry shell:
uvicorn src.main:app --host 0.0.0.0 --port 8000 --reload

# If not using poetry shell:
poetry run start
```

## Development Commands

### With Poetry Shell Activated (`poetry shell`)
- **Start server**: `uvicorn src.main:app --host 0.0.0.0 --port 8000 --reload`
- **Run tests**: `pytest`
- **Format code**: `black src/`
- **Sort imports**: `isort src/`
- **Type checking**: `mypy src/`
- **Lint code**: `flake8 src/`

### Without Poetry Shell (using `poetry run`)
- **Start server**: `poetry run start`
- **Run tests**: `poetry run pytest`
- **Format code**: `poetry run black src/`
- **Sort imports**: `poetry run isort src/`
- **Type checking**: `poetry run mypy src/`
- **Lint code**: `poetry run flake8 src/`

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