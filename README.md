
# Backend_contacts

This is a backend application built using Express.js and MongoDB. It includes functionality for user authentication and authorization using jsonWebtoken, and implements middleware for error handling. The application also defines models, controllers, and routes for RESTful API endpoints related to contacts management.

## Technologies Used

- Express.js
- MongoDB
- Authentication and Authorization
- jsonWebtoken
- Middleware
- Error handling
- Models
- Controllers
- Routes
- RESTful API
- dotenv
- HTTP codes
- gitignore

## Setup

To run this application, you will need to install Node.js and MongoDB on your local machine. Once installed, clone this repository and install the required dependencies by running 'npm install' in the root directory. Then, create a .env file and provide the necessary environment variables. Finally, start the server by running npm start.

## Endpoints

This application exposes the following RESTful API endpoints:
```
GET /api/contacts : Retrieve all contacts for the authenticated user.

POST /api/contacts : Create a new contact for the authenticated user.

GET /api/contacts/:id : Retrieve a specific contact by ID for the authenticated user.

PUT /api/contacts/:id : Update a specific contact by ID for the authenticated user.

DELETE /api/contacts/:id : Delete a specific contact by ID for the authenticated user.
```

## HTTP Codes

This application returns the following HTTP status codes:
```
200: Successful GET, PUT, or DELETE operation.

201: Successful POST operation.

400: Validation error or bad request.

401: Unauthorized access.

403: Forbidden access.

404: Resource not found.
```
## Error Handling

This application implements middleware for error handling, which will return a JSON response with a relevant error message and HTTP status code for any encountered errors.
