# Name of Project

Off the Bench

Off the Bench is a web application designed to promote pick-up basketball in Minneapolis.  Users will locate courts around Minneapolis/St.Paul and provide additional information for each court.  Supported by Google Places, Google Maps and Filestack APIs, Off the Bench aspires to encourage teamwork, exercise and goodwill in the Minneapolis community.

## Built with

- [Node.js](https://nodejs.org/en/)
- [AngularJS](https://angularjs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Express](https://expressjs.com/)
- [Google Places API](https://developers.google.com/places/)
- [Filestack API](https://www.filestack.com/docs)


### Installing

1. Fork and clone this repository
2. Run NPM install
3. Create the SQL tables in your database
4. Run npm start to start the web server
5. In your browser (Firefox suggested) navigate to localhost:5000

```sql
CREATE TABLE "users" (
  "id" serial primary key,
  "username" varchar(80) not null UNIQUE,
  "password" varchar(240) not null
);
CREATE TABLE "courts" (
  "id" serial primary key,
  "lights" boolean,
  "surface" integer,
  "size" integer,
  "location_id" integer,
  "air_con" boolean,
  "price" boolean,
  "photos" varchar[] not null,
);
CREATE TABLE "locations" (
  "id" serial primary key,
  "creator_id" boolean,
  "name" integer,
  "formatted_address" integer,
  "url" integer,
  "formatted_phone_number" boolean,
  "place_id" boolean,
  "lat" varchar[] not null,
  "lng" numeric,

);
```


### Completed Features

High level list of items completed.


- [x] Search for locations using Google Places API
- [x] Add location to database with additional information
- [x] Table view for stored locations
- [x] Add photo through Filestack API

### Next Steps

Features that you would like to add at some point in the future.

- [] Google Places edit function
- [] Rating system for courts around the city

## Deployment

(https://glacial-sierra-30356.herokuapp.com/#/home)

## Authors

* Josh Nothum

## Acknowledgments

* Thanks to Google for allowing developers access to their APIs for software development purposes.
