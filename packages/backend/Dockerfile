FROM python:3.11-slim

# Install system dependencies
RUN apt-get update && apt-get install -y \
    wget \
    gnupg \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Install Poetry
RUN pip install poetry

# Configure Poetry
ENV POETRY_NO_INTERACTION=1 \
    POETRY_VENV_IN_PROJECT=1 \
    POETRY_CACHE_DIR=/tmp/poetry_cache

WORKDIR /app

# Copy poetry files
COPY pyproject.toml poetry.lock* ./

# Install dependencies
RUN poetry install --only=main && rm -rf $POETRY_CACHE_DIR

# Install Playwright browsers
RUN poetry run playwright install --with-deps chromium

# Copy source code
COPY src/ ./src/

# Expose port
EXPOSE 8000

# Run the application
CMD ["poetry", "run", "start"]