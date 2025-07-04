# Contributing to JobHunter

Thank you for your interest in contributing to JobHunter! This guide will help you get started.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Pull Request Process](#pull-request-process)
- [Project Structure](#project-structure)

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Please treat all community members with respect.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/jobhunter.git
   cd jobhunter
   ```
3. **Add the upstream repository**:
   ```bash
   git remote add upstream https://github.com/original-owner/jobhunter.git
   ```
4. **Install dependencies** following the main README instructions

## Development Workflow

1. **Create a new branch** for your feature or fix:
   ```bash
   git checkout -b feat/your-feature-name
   ```
2. **Make your changes** following our coding standards
3. **Test your changes** thoroughly
4. **Commit your changes** following our commit message guidelines
5. **Push to your fork** and create a pull request

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification. This ensures a consistent and readable commit history.

### Format

```
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

### Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **build**: Changes that affect the build system or external dependencies
- **ci**: Changes to our CI configuration files and scripts
- **chore**: Other changes that don't modify src or test files
- **revert**: Reverts a previous commit

### Scopes

- **frontend**: Vue.js frontend application
- **backend**: FastAPI backend application
- **ai-agents**: AI processing and agents
- **shared**: Shared utilities and types
- **deps**: Dependency updates
- **config**: Configuration changes
- **docker**: Docker-related changes
- **docs**: Documentation changes

### Examples

```bash
# Good examples
feat(frontend): add dashboard views for job analytics
fix(backend): resolve database connection timeout issue
docs(shared): update API documentation for job types
style(frontend): format Vue components with prettier
refactor(ai-agents): improve job analysis algorithm performance
test(backend): add unit tests for authentication service
build(deps): update fastapi to version 0.104.1
ci: add automated testing workflow
chore(config): update environment variable templates

# Bad examples
❌ Add new feature
❌ Fix bug
❌ Update docs
❌ frontend: new dashboard (missing type)
❌ feat: add stuff (not descriptive)
```

### Subject Guidelines

- Use the imperative mood: "add" not "added" or "adds"
- Don't capitalize the first letter
- No period (.) at the end
- Maximum 72 characters
- Be descriptive but concise

### Body and Footer (Optional)

- **Body**: Explain what and why, not how
- **Footer**: Reference issues and breaking changes

```
feat(backend): add job application automation

Implement automated form filling for job applications using Playwright.
This includes support for LinkedIn, Indeed, and company career pages.

Closes #123
BREAKING CHANGE: API endpoints now require authentication
```

## Pull Request Process

1. **Update documentation** if needed
2. **Add tests** for new features
3. **Ensure all tests pass**:
   ```bash
   pnpm test
   ```
4. **Lint your code**:
   ```bash
   pnpm lint
   ```
5. **Build the project**:
   ```bash
   pnpm build
   ```
6. **Create a pull request** with:
   - Clear title following commit message format
   - Detailed description of changes
   - Link to related issues
   - Screenshots (if applicable)

### PR Title Format

Use the same format as commit messages:
```
feat(frontend): add dashboard views for job analytics
```

## Project Structure

- **packages/frontend/**: Vue.js frontend application
- **packages/backend/**: FastAPI backend application
- **packages/ai-agents/**: AI processing and agents
- **packages/shared/**: Shared utilities and types

## Code Standards

### TypeScript/JavaScript (Frontend)
- Use TypeScript for all new code
- Follow ESLint and Prettier configurations
- Use Vue 3 Composition API
- Write unit tests for components

### Python (Backend/AI Agents)
- Follow PEP 8 style guide
- Use type hints
- Format with Black
- Sort imports with isort
- Write unit tests with pytest

### General
- Write clear, self-documenting code
- Add comments for complex logic
- Keep functions small and focused
- Use meaningful variable names

## Getting Help

- **Issues**: Check existing issues or create a new one
- **Discussions**: Use GitHub Discussions for questions
- **Documentation**: Refer to package-specific READMEs

Thank you for contributing to JobHunter! 🚀