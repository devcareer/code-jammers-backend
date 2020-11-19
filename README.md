[![](https://img.shields.io/badge/Reviewed_by-Hound-blueviolet.svg)](https://houndci.com) [![Actions Status](https://github.com/devcareer/code-jammers-backend/workflows/Nodejs%20CI/badge.svg)](https://github.com/devcareer/code-jammers-backend/actions) [![Maintainability](https://api.codeclimate.com/v1/badges/4f89b447ad9e9ead60db/maintainability)](https://codeclimate.com/github/devcareer/code-jammers-backend/maintainability) [![Coverage Status](https://coveralls.io/repos/github/devcareer/code-jammers-backend/badge.svg?branch=develop)](https://coveralls.io/github/devcareer/code-jammers-backend?branch=develop)


# Know Africa

An information and fact-based web application about Africa. Africa isn't a country. Africa is a continent with 54 independent countries.

- For the Features, go here: https://github.com/devcareer/code-jammers-backend/wiki/Backend-sample-test-APIs
- For the Heroku hosted APIs, go here: https://know-africa.herokuapp.com
- For the Pivotal tracker board(project management), go here: https://www.pivotaltracker.com/n/projects/2463429
- For GitHub kanban board, go here: https://github.com/devcareer/code-jammers-backend/projects/1
- For our static website, go here: https://devcareer.github.io/code-jammers-backend/docs/
- For our swagger docs, go here: https://know-africa.herokuapp.com/api/v1/docs

### The technologies used in creating this project are:

JavaScript, Node.js, ExpressJs, Sequelize ORM, PostgreSQL, Git, Github Actions, Code Climate, Coveralls, Pivotal Tracker, Docker, Swagger, Hound

### :rocket: How to get started( to run locally)

For the features, go here: https://github.com/devcareer/code-jammers-backend/wiki/Backend-sample-test-APIs

### The technologies used in creating this project are:

JavaScript, Node.js, ExpressJs, Sequelize ORM, PostgreSQL, Git, Github Actions, Code Climate, Coveralls, Pivotal Tracker, Docker, Swagger

### :rocket: How to get started

- Make sure to have Git and Node.js installed on your computer
- You can use this link to clone the project: `https://github.com/devcareer/code-jammers-backend.git`
- cd into the project and run `npm install`
- create a `.env` file and the contents in the sample file to it.
- Run `npm run start-dev` to start the server and `npm test` to run the test suites

#

Note: To test the APIs using Heroku, use the above Heroku Link. 

#

### Then to test it through a container(docker), follow the following steps:

- Make sure to have Git and Node.js installed on your computer
- You can use this link to clone the project: `https://github.com/devcareer/code-jammers-backend.git`
- cd into the project and run `npm install`
- create a `.env` file and the contents in the sample file to it.
- Run `docker-compose up`
- Run `docker-compose run web npm run migration`
- Run `docker-compose run web npm run seeder`
- To run tests `docker-compose run web npm run test`
- To shut down the container `docker-compose down`

#

### Sample .env file format

```
DATABASE_URL = postgres://<username>:<password>@localhost:5432/<prod-db>
DEV_DATABASE_URL = postgres://<username>:<password>@localhost:5432/<dev-db>
TEST_DATABASE_URL = postgres://<username>:<password>@localhost:5432/<test-db>
JWT_KEY = secret
SENDGRID_API_KEY= <sg-api-key>
SENDGRID_EMAIL = <sg-email>
NODE_ENV = development
GOOGLE_CLIENT_ID = 732603686075-gjth9b4tsh2qba48eh7mn7plcsjbfn4v.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET = ledPWdG3zGMCMzQ7wQvSvXyg
GOOGLE_CALLBACK_URL_SIGNIN = http://localhost:3000/auth/google/signin
GOOGLE_CALLBACK_URL_SIGNUP = http://localhost:3000/auth/google/signup
COOKIE_KEY = cookieKey
```

### Software Engineers / Mentees

- Fiyin Akinsiku
- Ufuoma Ogodo
- Godspower Uche
- Bernard Namangala
- Donald Agbakoba
- Bislon Zulu
- Augusta Ehihebolo
- Francis Xavier Abonyi
- Oyindamola Abiola

### Author & Mentor

- Funmilayo Olaiya.

### Acknowledgements

- DevCareer

### To Contact Us:
codejammers1@gmail.com

### License:

This project is available under the MIT license.

