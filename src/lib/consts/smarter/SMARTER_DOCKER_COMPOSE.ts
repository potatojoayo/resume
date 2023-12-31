export const SMARTER_DOCKER_COMPOSE = `version: "3.9"

services:
  postgres:
    container_name: postgres_smarter
    image: postgres
    ports:
      - "5432:5432"
    volumes:
      - ./data/db:/var/lib/postgresql/data
    environment:
      - POSTGRES_NAME=postgres
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres

  django:
    container_name: django
    build: .
    command: python manage.py runserver 0.0.0.0:8000
    volumes:
      - .:/server
      - ./media:/server/media
    ports:
      - "8000:8000"
    environment:
      - POSTGRES_NAME=postgres
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
      - POSTGRES_HOST=postgres
      - POSTGRES_PORT=5432
      - BASE_URL=https://test.server.ksmarter.shop
    depends_on:
    - "postgres"

  redis:
    image: redis:alpine
  celery:
    restart: always
    build:
      context: .
    command: bash -c 'celery -A server worker --loglevel=info & celery -A server beat --loglevel=INFO'
    volumes:
      - .:/server
    environment:
      - POSTGRES_NAME=postgres
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
      - POSTGRES_HOST=postgres
    depends_on:
      - 'django'
      - 'redis'

`;
