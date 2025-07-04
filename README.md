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

- **Backend**: FastAPI (Python)
- **Frontend**: Vue.js with TypeScript
- **AI Agents**: Python with Grok/Google APIs
- **Browser Automation**: Playwright
- **Monorepo**: pnpm workspaces + Turborepo

## Quick Start

### Prerequisites

- Node.js ≥ 18.0.0
- Python ≥ 3.9
- pnpm ≥ 8.0.0

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/jobhunter.git
cd jobhunter

# Install dependencies
pnpm install

# Start development servers
pnpm dev
```

## Project Structure

```
jobhunter/
├── packages/
│   ├── backend/        # FastAPI backend
│   ├── frontend/       # Vue.js frontend
│   ├── shared/         # Shared utilities and types
│   └── ai-agents/      # AI processing logic
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