# Todo List

Todo list web application. Built with React, Django, and Django REST Framework. Note that I have not deployed this yet. However, the application can still runs locally.

## Features

The app allows users to create and delete todo tasks, as well as the ability to mark them as complete/incomplete. The tasks are displayed neatly in the incomplete or the complete columns.

## Setup

Please make sure `pipenv` and `npm` is installed. Then change directory into `backend/` and run the following to install all dependency for the backend.

```
pipenv shell
pipenv install
```

To install dependencies for the frontend, first change directory into `frontend/`. Then:

```
npm install
```

### Running the Application

First make sure the backend server is running by changing directory into `backend/`, then:

```
pipenv shell               # if not already activated
python manage.py migrate   # to apply migration
python manage.py runserver
```

Afterward, open a new terminal instance and start the application by changing directory into `frontend/`, then:

```
npm start
```

Note that the backend server is on `localhost:8000` and the Webpack server in the frontend is on `localhost:3000`

## Remaining things to do for this project

- [ ] Add more thorough testings in the frontend
- [ ] Add error handling when user enters empty title and/or empty description
