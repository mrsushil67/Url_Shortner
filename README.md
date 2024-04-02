# URL Shortener Service

# This is a simple URL shortener service implemented using Node.js, Express, and MongoDB.
# Project Structure

    index.js: Entry point of the application where Express app is initialized and server is started.
    src: Directory containing source code for the URL shortener service.
        model.js: Defines the Mongoose schema for storing URLs in the database.
        service.js: Contains functions for shortening and retrieving URLs from the database.
        controller.js: Defines controller functions for handling HTTP requests.
        route.js: Defines the Express router for handling URL shortening and redirection routes.

# Installation and Setup

        Clone the repository: git clone https://github.com/yourusername/url-shortener.git

# Navigate into the project directory:
        cd url-shortener

# Install dependencies:
        npm init
        npm i express
        npm i mongoose --save-dev
        npm i randomstring (for generate random string for short url)
        
# Ensure MongoDB is running locally on port 27017.

# To start the server, run:
        npm run dev

# API Documentation
# Shorten URL

    Endpoint: /url
    Method: POST
    Request Body:
        url (string): The long URL to be shortened.
    Response:
        status (boolean): Indicates if the operation was successful.
        message (string): Description of the operation result.
        longUrl (string): Original long URL.
        shortKey (string): Short key generated for the URL.

# Retrieve Original URL

    Endpoint: /:shortKey
    Method: GET
    Response: Redirects to the original long URL associated with the provided short key.

# This will start the server at http://localhost:4000.

# Shorten a URL

# Send a POST request to /url endpoint with the long URL in the request body:
      '{"url": "https://example.com/very-long-url-that-needs-shortening"}' http://localhost:4000/url

# Retrieve the Original URL

# To retrieve the original URL associated with a short key, simply visit http://localhost:4000/:shortKey in your browser, where :shortKey is the short key generated for the URL. 


