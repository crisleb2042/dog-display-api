# Random Dog Image Viewer

This is a simple web application that displays random dog images fetched from the Dog API. Users can view two random dog images at a time and refresh them with the click of a button.

## Features

- Displays two random dog images
- Responsive design using Bootstrap
- Dynamic image refresh without page reload
- Attractive gradient background animation

## Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript templating)
- Axios for API requests
- Bootstrap for styling
- Granim.js for background animation

## Installation

1. Clone the repository:
```
git clone { url of repo }
```
2. Navigate to the project directory
3. Install dependencies:
```
npm install
```
4. Start the server:
```
node index.js
```
5. Open your browser and visit `http://localhost:3000`

## Usage

- When you open the application, you'll see two random dog images.
- Click the "See more dogs!" button to fetch and display new random dog images without refreshing the page.

## Project Structure

- `index.js`: Main server file
- `views/index.ejs`: Main HTML template
- `public/styles/main.css`: Custom CSS styles
- `public/js/granim.js`: Background animation script

## API

This project uses the [Dog API](https://dog.ceo/dog-api/) to fetch random dog images.

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check [issues page](https://github.com/yourusername/random-dog-image-viewer/issues) if you want to contribute.

## License

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.