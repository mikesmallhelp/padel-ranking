# Padel ranking application

## Application

With a simple padel ranking application you can register game results and the application calculates ranking. 

Example of a player ranking calculation: When a team of the player wins four sets his ranking goes up with four points.

When you use the application, you first log into the application with Auth0 or Gmail authentication:

![Log in](doc/login.png)

At a home page you can see the ranking and played games:

![Home page](doc/padel-games.png)

You can add a new result in this page:

![Add new result](doc/add-result.png)

You can add a new player in this page:

![Add new player](doc/players.png)

## Technology

The technology stack is:

- Next.js framework
- React and MUI for the layout
- MUI dashboard template
- Prisma for the database access
- Next.js api routes
- auth0 authentication
- Jest and React Testing Library for the unit tests
- Playwright for the e2e tests
- Vercel cloud environment

Good introduction to Next.js development is for example [How to Build a Fullstack App with Next.js, Prisma, and PostgreSQL](https://vercel.com/guides/nextjs-prisma-postgres)

## Installation

### These are needed

- npm
- npx
- PostreSQL database
- psql client
- auth0 account

#### .env file

You need your .env file for local development. This file is in .gitignore file and is not put in the Git.

Copy from [.env-example](.env-example) file and you get your .env file for the local development. Change your values in the file.

#### auth0 account

Register to auth0, follow the instructions in the [auth0 Next.js guide](https://auth0.com/docs/quickstart/webapp/nextjs/01-login) and download your auth0 sample application to get your personal auth0 enviroment variable values.

### Installation

Clone the repository and go to the padel-ranking folder. First install npm libraries:

```
npm install
```

Then push your database schema to the database:

```
npx prisma db push
```

## Development

Start the application:

```
npm run dev
```

The command opens your browser in the url localhost:3000. To log in use your auth0 account or Gmail account. 

## Testing

Run the unit tests:

```
npm run test:unit
```

Run the unit tests with the watch functionality:

```
npm run test:unit-watch
```

When you run the e2e tests locally you need the auth0 username and password. Run the tests like this:

```
psql -f tests/e2e/initialize.sql <postgres-path>
npm run test:e2e-not-authenticated
AUTH0_E2E_TEST_USERNAME=<username> AUTH0_E2E_TEST_PASSWORD=<password> npm run test:e2e-initial-content
AUTH0_E2E_TEST_USERNAME=<username> AUTH0_E2E_TEST_PASSWORD=<password> npm run test:e2e-adding-data
```

Example of the `<postgres-path>` is

```
postgres://mike:mike@localhost:5432/postgres
```

## Deployment to Vercel

The file `.github/workflows/production-deployment.yaml` contains following jobs:

- run-unit-tests
- build-and-deploy-to-production
- run-e2e-tests

[More information about the Vercel deployment and environment variables can be found here](https://vercel.com/guides/how-can-i-use-github-actions-with-vercel)

### Your own deployment is done with these phases:

- fork your own repo from the padel-ranking repository
- create you own Vercel account
- add following secrets to your GitHub Actions:
  - VERCEL_ORG_ID
  - VERCEL_PROJECT_ID
  - VERCEL_TOKEN
  - DATABASE_URL (something like this `postgres://xxxxxx:yyyyyyyyyyyyyy@mahmud.db.elephantsql.com/zzzzzz`)
  - AUTH0_BASE_URL
  - AUTH0_CLIENT_ID
  - AUTH0_CLIENT_SECRET
  - AUTH0_ISSUER_BASE_URL
  - AUTH0_SECRET
  - AUTH0_E2E_TEST_USERNAME
  - AUTH0_E2E_TEST_PASSWORD 
- add following environment variable to you GitHub Actions:
  - PLAYWRIGHT_TEST_BASE_URL (the URL where the application is running in the Vercel)

## About auth0 authentication

The auth0 authentication is really simple:

- the package.json file contains `@auth0/nextjs-auth0` dependency
- add a _app.js file like in this project (`UserProvider` wraps the root element)
- add a middleware.ts file like in this project
- add a pages/api/auth/[...auth0].js file

See more in the [auth0 Next.js guide](https://auth0.com/docs/quickstart/webapp/nextjs/01-login)

## Backlog
 
 - the support for the 7 points
 - possibility to create the teams
 - lottery of the teams
 - possibility to add the game results etc. without the Internet connection (when the connection comes back the data is synchronized)


