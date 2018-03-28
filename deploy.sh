nvm use
npm install
npm run build
docker build -t lowz-nginx .
docker run --name lowz -d -p 80:80 lowz-nginx
