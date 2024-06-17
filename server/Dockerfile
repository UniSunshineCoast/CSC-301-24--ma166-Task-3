# Use the official Node.js 21 image
FROM node:lts

# Set the working directory
WORKDIR /usr/src/app/server

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port Vite is running on
EXPOSE 9000

# Command to run the application
CMD ["npm", "run", "dev"]
