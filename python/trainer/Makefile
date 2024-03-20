up:
	docker compose up -d
build:
	docker compose build --no-cache --force-rm
init:
	docker compose up -d --build
	docker compose exec python poetry install
down:
	docker compose down --remove-orphans
destroy:
	docker compose down --rmi all --volumes --remove-orphans
destroy-volumes:
	docker compose down --volumes --remove-orphans
test:
	docker compose run python poetry install && poetry run pytest
