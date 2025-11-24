import express from 'express'; // Importing the Express framework
import cors from 'cors'; // Importing CORS middleware
import "dotenv/config"; // Importing dotenv to manage environment variables

const app = express();
const port = 4000; // Defining the port number

// Define Middleware 
app.use(cors());     // Enabling CORS for all routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));  // Parsing JSON and URL-encoded data


//Define Database Connection



// Define Routes
app.get('/', (req, res) => {
    res.send('API Working');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});