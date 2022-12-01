## Backend Github

<p align="left">
API that will proxy all client requests to the appropriate GitHub endpoint
</p>

### Endpoints

- `GET - /api/users?since={number}`    : This endpoint must return a list of GitHub users and the link for the next page.
- `GET - /api/users/:username/details` : This endpoint must return the details of a GitHub user
- `GET - /api/users/:username/repos`   : This endpoint must return a list with all user repositories

### Installing the dependencies

Run `npm install`.

### Development server

Run `npm run dev` for a dev server. The server will start on port 3333.

### Running tests

Run `npm test` to execute tests that cover all endpoints
