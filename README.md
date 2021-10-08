
# yurtemre.me

## how to run

Using docker:

```bash
git pull
docker-compose stop
docker-compose build --no-cache
docker-compose up --force-recreate --build -d
docker image prune -f
```
