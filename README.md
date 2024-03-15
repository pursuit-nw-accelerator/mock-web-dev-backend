# Mock web development backend interview

You have been hired to create a database that stores **actors**, **movies**, and also stores **which actors have appeared in which movies**.

You have 90 minutes to complete the objectives for this task in class, following these rules:

- Work alone in a breakout room.
- Ask questions in the class channel only. Do not DM anyone.
- Do not use ChatGPT or anything similar (including replit AI auto complete).
- You can look up things in official documentation (Express, MDN, Postgres, pg-promise).
- Do not copy-paste anything. Learn from the documentation, then close the tab and write the code yourself.

## Setting up
1. Create a new database on Elephant SQL. You can follow [Stage 1 of these instructions](https://docs.google.com/document/d/1V-zsugFZ-sgxvscthfCgByJfBno6xz9TXFd3BMTsOIE/edit?usp=sharing).
2. Copy your Elephant SQL database URL to your clipboard.
3. Fork this repl. Add your first and last name to the repl name.
4. Click `Manage Secrets` and save your Elephant SQL db url as the value for the `DB_URL` environment variable.
5. In a repl shell, run the schema file: `psql -d $DB_URL -f db/schema.sql`
6. Run the seeds file: `psql -d $DB_URL -f db/seeds.sql`
7. Hit the Run button.
8. In the Webview component, visit these routes and confirm you get the correct results:
    - `/` (health check result)
    - `/actors` (get the list of 6 actors)
    - `/movies` (get the list of 6 movies)

## Objectives
1. Succesfully set up this API server (see `Setting up` above)
2. Update the schema and seeds file so that we can store information about which actors have appeared in which movies, as well as the name of their character in that movie. (See `Data to store` below). **You should be able to successfully run the updated files against your database.**
3. Create a new route that returns an array of all the movies that an actor has appeared in (we know the actor's id). Include the title and date of the movie, as well as the character name.
4. Create a new route that returns an array of all the actors that appeared in a movie (we know the movie's id). Include each actor's first name and last name, as well as the character name.
5. Make sure that your code follows the best practices (see below) and returns the correct output (see `Expected output` below).

## Code quality and best practices
- Return json with the correct status code and the format we have been using in this class. (The top key should be either `data` or `error`).
- Use correct REST convention for naming your routes.
- Use the correct conventions for naming your tables and columns.
- Use the correct data types for any new tables.
- Add code in the right files. (This may mean creating new files.)
- Catch errors correctly and do not swallow errors.
- Make sure your server returns a 404 when it is supposed to.
- You do not need to worry about validating input for this project.
- There should not be errors or warnings in the console and your server must never crash.

## Data to store
Your database must hold the following information about movies actors have appeared in.

⚠️ Be careful! The table below is **not exactly** how you want to create your tables in your schema file.

|`actor`|`movie`|`character_name`|
|----|----|----|
|Emma Stone|Poor Things|Bella|
|Emma Stone|La La Land|Mia|
|Margot Robbie|Barbie|Barbie|
|Ryan Gosling|Barbie|Ken|
|Ryan Gosling|La La Land|Sebastian|
|Ryan Gosling|The Fall Guy|Colt|
|Robert Downey|Oppenheimer|Lewis|
|Robert Downey|Avengers Endgame|Tony|
|Emily Blunt|Oppenheimer|Kitty|
|Emily Blunt|The Fall Guy|Jody|
|Mark Ruffalo|Poor Things|Duncan|
|Mark Ruffalo|Avengers Endgame|Bruce|

## Expected output
3. _Get all the movies an actor has appeared in_ (example: Ryan Gosling, actor id `3`)

```JSON
{
    "data": [
        {
            "id": 4,
            "actor_id": 3,
            "movie_id": 3,
            "character_name": "Ken",
            "title": "Barbie",
            "release_date": "2023-07-21T00:00:00.000Z"
        },
        {
            "id": 5,
            "actor_id": 3,
            "movie_id": 4,
            "character_name": "Sebastian",
            "title": "La La Land",
            "release_date": "2016-02-25T00:00:00.000Z"
        },
        {
            "id": 6,
            "actor_id": 3,
            "movie_id": 6,
            "character_name": "Colt",
            "title": "The Fall Guy",
            "release_date": "2024-05-03T00:00:00.000Z"
        }
    ]
}
```
4. _Get all the actors that appeared in a movie_
(Example: Barbie, movie id `3`)
```JSON
{
    "data": [
        {
            "id": 3,
            "actor_id": 2,
            "movie_id": 3,
            "character_name": "Barbie",
            "first_name": "Margot",
            "last_name": "Robbie"
        },
        {
            "id": 4,
            "actor_id": 3,
            "movie_id": 3,
            "character_name": "Ken",
            "first_name": "Ryan",
            "last_name": "Gosling"
        }
    ]
}
```
