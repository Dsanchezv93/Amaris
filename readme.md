
## NODE APP
npm run start
http://localhost:5000/api/health

http://localhost:5000/api/15

http://localhost:5000/api/hello



## DOCKER APP
docker build -t amaris .
docker run -it -p 4000:3000 amaris

http://localhost:4000/api/health

http://localhost:4000/api/15

http://localhost:4000/api/hello


## TEST APP
npm test
