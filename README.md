# To-Do API Take-Home

A REST API to-do list app, built to spec for a take-home skills assessment.

**Status:** in progress — see the issues tab and the linked Linear project for the full design
and build plan. This README grows to a full setup/testing/design write-up in the final PR;
for now it only documents Docker (the piece that landed in this PR).

## Docker

Build the image:

```sh
docker build -t todo-api-takehome .
```

Run it:

```sh
docker run -p 3000:3000 todo-api-takehome
```

The server is now reachable at `http://localhost:3000`. Data persists inside the container at
`/app/data/todos.json` by default (overridable via the `DATA_FILE` env var) -- it will **not**
survive removing the container unless you mount a volume:

```sh
docker run -p 3000:3000 -v "$(pwd)/data:/app/data" todo-api-takehome
```
