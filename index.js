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