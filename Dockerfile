# Stage 1: Build the React application
FROM node:20-alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the app for production
RUN npm run build

# Stage 2: Serve the application using Node 'serve'
FROM node:20-alpine

WORKDIR /app

# Install 'serve' globally
RUN npm install -g serve

# Copy the build output from the first stage
COPY --from=build /app/dist ./dist

# Start the server using the PORT environment variable provided by Cloud Run
CMD ["sh", "-c", "serve -s dist -l ${PORT:-8080}"]
