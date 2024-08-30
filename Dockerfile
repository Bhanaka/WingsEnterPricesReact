#base images
FROM node:18
#working directory
WORKDIR /app
COPY package.json /app
# Install dependencies
RUN npm install

#copy the files
#copy source dest source--source=local file thiyena thena dest--docker eke me file copy krnna one thena
COPY . .
#Build the React application
# Run the React application
# Expose port 3000 (React's default port)
EXPOSE 3000
CMD ["npm", "start"]