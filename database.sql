
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "preset" (
    "id" SERIAL PRIMARY KEY, 
    "name" VARCHAR (200) UNIQUE NOT NULL,
    "notes" TEXT [],
    "kicks" TEXT [],
    "snares" TEXT [],
    "hats" TEXT [],
    "toms" TEXT [],
    "oscil" VARCHAR (200), 
    "pattern" VARCHAR (200), 
    "bpm" INTEGER, 
    "user_id" int NOT NULL
);