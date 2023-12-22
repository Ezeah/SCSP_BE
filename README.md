# Customer Support API application
A simple customer support platform backend API application repository.

This API serves as the backend for a simple customer support platform, allowing users to submit support requests.

This README includes sections covering the project overview, setup instructions, endpoints, documentation and testing.

## Table of Contents

- [Overview](#overview)
- [Setup](#setup)
- [Database-diagram](#database-diagram)
- [API Endpoints](#api-endpoints)
- [Documentation](#documentation)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Overview

The Customer Support API is built with AdonisJS and is responsible for handling support requests. It provides endpoints to submit support requests, link requests to users, and handle file uploads.

## Setup

### Prerequisites

- Node.js (v14 or later)
- npm
- AdonisJS CLI
- PostgreSQL or MySQL database

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Ezeah/SCSP_BE.git
    cd srf-api
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Configure environment variables:

    - Create a copy of `.env.example` and name it `.env`.
    - Set up your database connection details in the `.env` file.

4. Run migrations:

    ```bash
    adonis migration:run
    ```

5. Start the development server:

    ```bash
    adonis serve --dev
    ```

## Database-diagram

### Database Schema

Here's  the [database schema](https://dbdiagram.io/d/SCSP_DB-6580b57556d8064ca043ac1c)

Here's also the [database table structure](https://dbdocs.io/ezeahnnamdi/SCSP_Schema)

## API Endpoints

### Submit Support Request

- **Endpoint**: `POST /SupportRequest`
- **Description**: Submit a new support request.
- **Request Body**:

    ```json
    {
      "user_id": 123,
      "first_name": "John",
      "last_name": "Doe",
      "email": "john.doe@example.com",
      "support_message_title": "Issue with Account",
      "support_message_text": "I'm having trouble accessing my account.",
      "file": (file upload)
    }
    ```

### More Endpoints...

- `Get /users` 
- `Post /user`
- `Get /user/:id`
- `Patch /user/:id`
- `Delete /user/:id`

- `Get /SupportRequests`
- `Get /SupportRequest/:id`
- `Patch /SupportRequest/:id`
- `Delete /SupportRequest/:id`

## Documentation

This's the [DOCUMENTATION.md](DOCUMENTATION.md) from the project.

## Testing

### Running Tests

To run tests, use the following command:

```bash
adonis test
```

Here's also a documentation of some tests that i did [Test](Test) 

## Contributing

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
```
