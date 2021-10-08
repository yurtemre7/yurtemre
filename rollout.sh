#!/bin/bash
git_count=$(git rev-list --count master)

echo "---------------------"
echo "UPDATE THE SERVER (v$git_count)"
echo "---------------------"
echo ""

echo "Fetching changes.."
git pull
echo "---------------------"
echo ""

echo "Stopping running server.."
docker-compose stop
echo "---------------------"
echo ""

echo "Rebuilding server first.."
docker-compose build --no-cache
echo "---------------------"
echo ""

echo "Starting server.."
docker-compose up --force-recreate --build -d
echo "---------------------"
echo ""

echo "Delete excess of docker.."
docker image prune -f
echo "---------------------"
echo ""
