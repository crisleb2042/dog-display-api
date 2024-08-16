/*
Project: Random Dog Image Viewer
Author: CRISLEB2042
Date: 20240816

Learning Outcomes:
1. API Integration: Gained practical experience in making API calls using axios.
   - Learned how to fetch data from an external API (Dog API in this case).
   - Understood the asynchronous nature of API requests and how to handle them.

2. Server-Side Programming:
   - Used Express.js to create a simple web server.
   - Learned how to set up routes to handle different HTTP requests.

3. Template Rendering:
   - Utilized EJS (Embedded JavaScript) for server-side rendering of dynamic content.
   - Passed data from the server to the template for display.

4. Error Handling:
   - Implemented try-catch blocks to handle potential errors in API calls.
   - Learned to send appropriate responses to the client in case of errors.

5. Asynchronous JavaScript:
   - Used async/await syntax for cleaner handling of asynchronous operations.

6. Environment Configuration:
   - Set up environment variables for configurable elements like port number.

7. Static File Serving:
   - Configured Express to serve static files from the 'public' directory.

This project provided hands-on experience with integrating external APIs into a web application,
demonstrating the flow of data from an API to the server and then to the client-side rendering.
*/


import express from "express";
import axios from 'axios';

const app = express();
const port = 3000;
let dogAPI = 'https://dog.ceo/api/breeds/image/random/2';

app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use('/node_modules', express.static('node_modules'));

app.get("/", async (req, res) => {
    try {
        const response = await axios.get(dogAPI);
        const imageURLArray = response.data.message;
        console.log(imageURLArray);
        res.render("index.ejs", { images: imageURLArray});
    } catch (error) {
        console.error("failed to make request: ", error.message);
        res.render('index.ejs', {
            error: error.message,
        });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})