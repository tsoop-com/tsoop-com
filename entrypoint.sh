#!/bin/sh

# Start the hosted VSCode instance on port 3010
code-server --bind-addr 0.0.0.0:3010 --auth none &

# Start the development server with hot-reload on port 3011
vitepress dev --port 3011 --host 0.0.0.0 &

# Build the static `dist` folder and serve it on port 3012
vitepress serve --port 3012 --host 0.0.0.0 &

# Keep the container running
wait
