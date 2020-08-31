This is just primitive demo project

### Necessary configurations before testing project
 * Java 8+
 * Node.js 12 +
 * Docker 19+
 * Docker MySql image
 * Postman 7+


##The project devided 2 part: front-end and backe-end side

>Back-end side for creating api/
>I used spring web for creating rest controller.
>For database I used docker-compose file inside this project, Spring Data Jpa helped me to create repository and manage my data entities

>Front-end side use api and generate ui
>I used react router dom for route pages and use router context provider
>Also I used axios http-library to call and manipulate for rest api

1. > cd spring-react-backend/src/main/resources
   >docker-compose -f docker-compose.yml up -d
   >then run spring project(./mvnw spring-boot:run)
   >you can test from http://localhost:8080 to run backend 


2. > cd spring-react-frontend 
   >npm start
   >call http://localhost:3000


3. >for db side you can check http://localhost:8888
   >this adminer panel shows your db visual interface