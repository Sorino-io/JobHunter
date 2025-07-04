# JobHunter - Open-Source Job Application Automation Tool

An intelligent job application automation tool that leverages AI agents, browser automation, and external APIs to streamline the job search process.

## Features

- 🤖 AI-powered job description analysis
- 📝 Automated resume tailoring
- ✉️ Personalized cover letter generation
- 🌐 Job listing scraping from multiple platforms
- 🚀 Automated form submission
- 📊 Application tracking and analytics

## Tech Stack

- **Backend**: FastAPI (Python) with Poetry
- **Frontend**: Vue.js with TypeScript
- **AI Agents**: Python with Grok/Google APIs
- **Browser Automation**: Playwright
- **Monorepo**: pnpm workspaces + Turborepo

## Quick Start

### Prerequisites

- Node.js ≥ 18.0.0
- Python ≥ 3.9
- pnpm ≥ 8.0.0
- Poetry (for Python packages)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/jobhunter.git
cd jobhunter

# Install Poetry (if not already installed)
curl -sSL https://install.python-poetry.org | python3 -

# Install Node.js dependencies
pnpm install

# Install Python dependencies for backend
cd packages/backend
poetry install

# Activate Poetry shell (recommended for development)
poetry shell

# Install Playwright browsers (with shell activated)
playwright install

# Install Python dependencies for AI agents
cd ../ai-agents
poetry install

# Activate Poetry shell for ai-agents (if working on this package)
poetry shell

# Return to root
cd ../..

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Start development servers
pnpm dev
```

## Development Commands

### Root Level
- `pnpm dev` - Start all development servers
- `pnpm build` - Build all packages
- `pnpm test` - Run all tests
- `pnpm lint` - Lint all packages

### Backend (Python)

#### Option 1: Using Poetry Shell (Recommended)
```bash
cd packages/backend
poetry shell                    # Activate virtual environment
uvicorn src.main:app --host 0.0.0.0 --port 8000 --reload  # Start server
pytest                         # Run tests
black src/                     # Format code
mypy src/                      # Type checking
```

#### Option 2: Using Poetry Run
```bash
cd packages/backend
poetry run start               # Start development server
poetry run pytest             # Run tests
poetry run black src/          # Format code
poetry run mypy src/           # Type checking
```

### AI Agents (Python)

#### Option 1: Using Poetry Shell (Recommended)
```bash
cd packages/ai-agents
poetry shell                   # Activate virtual environment
pytest                        # Run tests
black src/                    # Format code
mypy src/                     # Type checking
```

#### Option 2: Using Poetry Run
```bash
cd packages/ai-agents
poetry run pytest             # Run tests
poetry run black src/          # Format code
poetry run mypy src/           # Type checking
```

### Frontend (TypeScript)
```bash
cd packages/frontend
pnpm dev               # Start development server
pnpm build             # Build for production
pnpm test              # Run tests
```

## Poetry Shell vs Poetry Run

**Poetry Shell** (`poetry shell`):
- Activates a virtual environment in your current shell
- Allows running commands directly without `poetry run` prefix
- Recommended for active development
- Run once per terminal session

**Poetry Run** (`poetry run <command>`):
- Runs commands in the virtual environment without activating it
- Good for one-off commands or CI/CD pipelines
- No need to activate/deactivate environments

## Project Structure

```
jobhunter/
├── packages/
│   ├── backend/        # FastAPI backend (Poetry)
│   ├── frontend/       # Vue.js frontend (pnpm)
│   ├── shared/         # Shared utilities and types (pnpm)
│   └── ai-agents/      # AI processing logic (Poetry)
├── package.json
├── pnpm-workspace.yaml
└── turbo.json
```

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Disclaimer

This tool is for educational and personal use. Please respect the terms of service of job platforms and use responsibly.