export const WOORIDONG_DOCKER_COMPOSE = `version: "3.9"

services:
  postgres:
    container_name: postgres_service
    image: postgres:14.5

    ports:
      - "5432:5432"
    volumes:
      - ./data/db:/var/lib/postgresql/data
    environment:
      - POSTGRES_NAME=postgres
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
      - POSTGRES_HOST_AUTH_METHOD=trust

  django:
    container_name: django_service
    build: .
    command: python manage.py runserver 0.0.0.0:8000
    volumes:
      - .:/server
    ports:
      - "8000:8000"
    environment:
      - POSTGRES_NAME=postgres
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
      - POSTGRES_HOST=postgres
      - POSTGRES_PORT=5432
      - GOOGLE_APPLICATION_CREDENTIALS="/server/wooridong-rep-firebase-adminsdk.json"
      - BASE_URL=192.168.0.84:8000
      - PROTOCOL=http

    depends_on:
      - "postgres"
      `;
