if [ -f .env ]; then
  export $(cat .env | sed 's/#.*//g' | xargs)
else
  echo "A .env file is needed to configure this project"
fi

echo ""
echo "Setting up \"Purchase Options\" Component for Steam FEC"
echo ""

echo ""
echo "  Working on correct/up-to-date branch"
git checkout master
git pull origin master

echo ""
echo "  Installing Dependancies"
npm i

echo ""
echo "  Building Webpack"
npm run-script build

echo ""
echo "  Configuring database"
sqlExecute=$(<./server/schema.sql)
echo "  Enter Database Info"
mysql --user=$SQL_USER --password=$SQL_PW --execute="$sqlExecute"

npm run seed
echo "Configuration Complete!"
