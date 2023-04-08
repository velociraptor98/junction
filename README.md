# HOPP

## Introduction

This project is the submission for the mental health track, for the junction-x-exeter hackathon. Go through the readme to understand how the project needs to be setup.

## Brief to the tool

Hopp aims to be a companion web-app, in order to provide to provide brief periods of joy and community. The main target audience is towards people who might feel lonesome a lot of times or people who are going through a hard time and need a place to jot down what they are feeling or going through. It aims to provide a place, a community and a tool to which a person can use in their times of needs. Using the journal data as well as event habits there is an attempt to identify what further activities, meetups and pass times a person can perform in order to keep their mind off troubling thoughts. Additionally the hotline features has direct access to the pages of multiple healthcare services in the UK which can be used in times of extreme distress.

## Technlogies Used

* Javascript
* Node.js
* React
* Tailwindcss
* MongoDB
* Flowbite

## Notes about the repo

The repo contains 2 sets of projects. The backend components as well as the frontend components, both having their own sets of instructs to use and execute.

## Steps to run the project
* As the first step simply clone the repository.

### Backend
* Navigate to the backend folder.
* Create a ***.env file*** in the server folder. Add the following keys ***MONGO_DB_URL*** and ***PORT***. 
* use ***npm install*** to install the node packages.
* Navigate to the server folder.
* Simply run ***node server*** to start the backend service
* (Note: the backend server will by default run on port 3500. Do not change this)


### Frontend

* Navigate to the frontend folder
* use ***npm install*** to install the node packages.
* use ***npm run build*** to compile the react project.
* use ***npm run start*** to start the web app.
* (Note: parts of the application has the endpoint for backend services harcoded. Changing the .env for this will cause the application to break.)

### Demo Application 

![Screenshot](/img_2.png)
![Screenshot](/img_1.png)
