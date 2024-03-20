FROM python:3.11-slim-bullseye

WORKDIR /app

RUN pip install --upgrade --no-cache-dir pip
RUN pip install poetry
COPY . .
RUN poetry install