# Use a lightweight Node.js image
FROM node:18-alpine

# Install dependencies for JSON Server
RUN npm install -g json-server

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package.json package-lock.json ./

# Copy the JSON data file into the container
COPY server/cities.json ./server/

# Expose the port on which the JSON server will run
EXPOSE 8000

ENV PORT 8000

# Command to run the JSON server
CMD ["npm", "run", "server"]
