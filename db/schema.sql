DROP TABLE IF EXISTS actors;
DROP TABLE IF EXISTS movies;

CREATE TABLE actors (
    id SERIAL PRIMARY KEY,
    first_name varchar(255),
    last_name varchar(255),
    dob timestamptz
);

CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    title varchar(255),
    release_date timestamptz
);
