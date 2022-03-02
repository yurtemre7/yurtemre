echo "Server Script by Emre"
echo ""
if [ "$1" == "-b" ]
then
	echo 'building the server';
	git pull;
	npm run build;
fi
echo "running the server on port $port"
npm run start
