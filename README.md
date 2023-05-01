# TackleIt

A todo list web application to manages daily life tasks.

## Features

The app allows users to create and delete todo tasks, as well as the ability to mark them as complete/incomplete. The tasks are displayed neatly in the incomplete or the complete columns.

## Setup

### Backend server

Please ensure you have Docker installed. Then run:

```bash
docker compose -f docker-compose.dev.yml up -d --build
```

to build the backend image and start the backend containers for development. Then navigate to http://localhost:8080 to access the application.

Stop the containers with:

```bash
docker compose -f docker-compose.dev.yml stop
```

Remove the containers with:

```bash
# Use the -v flag if you wish to remove all the volumes containing node modules and static assets
docker compose -f docker-compose.dev.yml down
```

### Frontend Vite server

Please ensure you have `node` version >= 18 installed. Then navigate to `./frontend` and run:

```bash
npm run dev
```

to access the application at http://localhost:5173

Note that the backend server is at http://localhost:8080 and the frontend dev server is on http://localhost:5173

## Things to do for this project

- [ ] Add user authentication
- [ ] Handle deployment with Fly.io or AWS
