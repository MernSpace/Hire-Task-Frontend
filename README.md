# MERN Task Manager

## Overview
A full-stack task management application built using the MERN (MongoDB, Express.js, React, Node.js) stack.

## Features
- Create, read, update, and delete tasks
- User authentication
- Task categorization
- Priority and status tracking
- Responsive design

## Prerequisites
- Node.js (v16+)
- MongoDB
- npm

## Installation
1. Clone the repository
```bash
git clone https://github.com/yourusername/task-manager.git
cd task-manager
```

2. Install backend dependencies
```bash
cd backend
npm install
```

3. Install frontend dependencies
```bash
cd ../frontend
npm install
```

## Configuration
1. Create a `.env` file in the backend directory
2. Add the following environment variables:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

## Running the Application
1. Start the backend server
```bash
cd backend
npm start
```

2. Start the frontend development server
```bash
cd ../frontend
npm start
```

## Technology Stack
- Frontend: React, Redux
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT

## Contributing
1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## License
This project is licensed under the MIT License.
