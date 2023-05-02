# Padel ranking application

## Application

With a simple padel ranking application you can register game results and the application calculates ranking. 

Example of a player ranking calculation: When a team of the player wins four sets his ranking goes up with four points.

First you have to log into the application with Auth0 or Gmail authentication:

![Log in](doc/login.png)

At home page you can see the ranking and the played games:

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
- Jest and React Testing Library for the unit tests
- Playwright for the e2e tests
- Vercel cloud environment

Good introduction to the Next.js development is for example [How to Build a Fullstack App with Next.js, Prisma, and PostgreSQL](https://vercel.com/guides/nextjs-prisma-postgres)

## Installation

### These are needed

- npm
- npx
- PostreSQL database
  - padel-ranking/.env file configures the local database connection (replace this with your value)
- psql client

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

The command opens your browser in the url localhost:3000.

## Testing

Run the unit tests:

```
npm run test:unit
```

Run the unit tests with the watch functionality:

```
npm run test:unit-watch
```

Run the e2e tests:

```
psql -f tests/e2e/initialize.sql <postgres-path>
npm run test:e2e-initial-content
npm run test:e2e-adding-data
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

[More information about the Vercel deployment can be found here](https://vercel.com/guides/how-can-i-use-github-actions-with-vercel)

### Your own deployment is done with these phases:

- fork your own repo from the padel-ranking repository
- create you own Vercel account
- add following secrets to your GitHub Actions:
  - VERCEL_ORG_ID
  - VERCEL_PROJECT_ID
  - VERCEL_TOKEN
  - DATABASE_URL (something like this `postgres://xxxxxx:yyyyyyyyyyyyyy@mahmud.db.elephantsql.com/zzzzzz`)
- add following environment variable to you GitHub Actions:
  - PLAYWRIGHT_TEST_BASE_URL (the URL where the application is running in the Vercel)
  
 ### Backlog
 
 - the support for the 7 points
 - possibility to create the teams
 - lottery of the teams
 - possibility to add the game results etc. without the Internet connection (when the connection comes back the data is synchronized)


