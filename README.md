# Name of Project

Off the Bench

Off the Bench is a web application designed to promote pick-up basketball in Minneapolis.  Users will create and join pickup games with the unique, intuitive design provided by Off the Bench.  Supported by Google Places, Google Maps and Trillo APIs, Off the Bench aspires to encourage teamwork, excercise and goodwill in the Minneapolis community.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- List other prerequisites here


### Installing

Steps to get the development environment running.

```sql
CREATE TABLE "users" (
  "id" serial primary key,
  "username" varchar(80) not null UNIQUE,
  "password" varchar(240) not null
);
```

## Screen Shot

Include one or two screen shots of your project here (optional). Remove if unused.

## Documentation



### Completed Features

High level list of items completed.


- [x] Design Login Screen
- [x] Create Database
- [x] Create locations Search view
- [x] Create game create View
- [x] Style
- [x] Implement Create/Post route
- [x] Join routes
- [x] Create user dashboard view
- [x] Implement Edit and Delete buttons/routes
- [x] Create Maps view
- [x] Create user dashboard view
- [x] Implement Introduction View
- [x] Consistent Style



### Next Steps

Features that you would like to add at some point in the future.

- [] Trillo implementation
- [] Options for wheelchair accessibility
- [] Harrasmnt reporting feature
- [] Rating system for courts around the city

## Deployment

Add additional notes about how to deploy this on a live system

## Authors

* Josh Nothum

## Acknowledgments
