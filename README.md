# Gallery App
A Gallery application to view and manage your images efficiently and loaded with features like search, paginated results, edit, delete, etc.

Deployed API url: https://galleryappapihackerearth.herokuapp.com/

Deployed ReactApp url: https://62d2f38ec1d65d301585c1ad--hackerearth-gallery-app.netlify.app/

## Getting Started

### `MongoDB Atlas`

Create a new MongoDB Atlas cluster. Then, inside the `backend/.env` file add a new key value pair as:
```
MONGO_URL=<your-mongodb-atlas-cluster-url-with-database-name>
```

### `Start the backend`

Inside the terminal, type:
```
npm i
nodemon server
```

Woohoo! The backend server has started now!

### `Start the frontend`

1. Inside the 'frontend/.env' file assign the following key value pair:
```
REACT_APP_API_URL=<url-of-the-backend-server>
```

2. Now inside the terminal, navigate to the `/frontend` directory and execute the following command:
```
npm start
```

This runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
