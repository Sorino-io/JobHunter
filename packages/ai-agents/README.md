# AI Agents - Intelligent Job Application Processing

This package contains AI agents for analyzing jobs, tailoring resumes, and generating cover letters.

## Features

- 🤖 Job description analysis with AI
- 📝 Automated resume tailoring
- ✉️ Personalized cover letter generation
- 🔗 Integration with Grok and Google APIs

## Setup

1. Install Poetry (if not already installed):
```bash
curl -sSL https://install.python-poetry.org | python3 -
```

2. Navigate to the ai-agents directory:
```bash
cd packages/ai-agents
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

5. Set up environment variables:
```bash
cp ../../.env.example .env
# Edit .env with your API keys
```

## Development Commands

### With Poetry Shell Activated (`poetry shell`)
- **Run tests**: `pytest`
- **Format code**: `black src/`
- **Sort imports**: `isort src/`
- **Type checking**: `mypy src/`
- **Lint code**: `flake8 src/`

### Without Poetry Shell (using `poetry run`)
- **Run tests**: `poetry run pytest`
- **Format code**: `poetry run black src/`
- **Sort imports**: `poetry run isort src/`
- **Type checking**: `poetry run mypy src/`
- **Lint code**: `poetry run flake8 src/`

## Project Structure

```
src/
├── agents/
│   ├── job-analyzer/    # Job description analysis
│   ├── resume-tailor/   # Resume customization
│   └── cover-letter/    # Cover letter generation
├── integrations/        # External API clients
└── utils/              # Shared utilities
```

## Usage

```python
from src.agents.job_analyzer.analyzer import JobAnalyzer
from src.agents.resume_tailor.tailor import ResumeTailor
from src.agents.cover_letter.generator import CoverLetterGenerator

# Analyze a job description
analyzer = JobAnalyzer()
analysis = await analyzer.analyze(job_description)

# Tailor resume
tailor = ResumeTailor()
tailored_resume = await tailor.tailor_resume(resume_content, analysis, user_profile)

# Generate cover letter
generator = CoverLetterGenerator()
cover_letter = await generator.generate(job_info, analysis, user_profile)
```