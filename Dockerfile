# Stage 1: Build Stage
FROM node:20-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install dependencies (including devDependencies like TypeScript)
RUN npm install

# Install TypeScript globally (only needed during build stage)
RUN npm install -g typescript

# Copy the rest of the application code
COPY . .

# Compile TypeScript to JavaScript
RUN tsc

# Stage 2: Production Stage
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy only the compiled JavaScript code from the build stage
COPY --from=build /app/dist ./dist

# Copy only the necessary package.json and package-lock.json for production
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Install serve globally
RUN npm i -g serve

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["serve", "-s", "dist"]
