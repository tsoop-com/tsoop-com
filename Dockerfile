# Use Node.js LTS as the base image
FROM node:lts

# Set the working directory
WORKDIR /app

RUN npm install -g pnpm
# Copy package.json and package-lock.json (if available) and install dependencies
COPY package*.json ./
RUN pnpm install

# Copy the rest of the application code
COPY . .


# Expose ports for development, hot-reload, and static build
EXPOSE 3010 3011 3012

# Install code-server for the hosted VSCode instance
RUN curl -fsSL https://code-server.dev/install.sh | sh

# Set up the entrypoint script
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
