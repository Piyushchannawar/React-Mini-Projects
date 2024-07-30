# Image Slider Component

A React Image Slider component that fetches images from a given URL and allows users to navigate through the images using next and previous buttons.

## Features

- Fetches images from a specified URL
- Allows navigation between images using next and previous buttons
- Displays loading and error messages
- Customizable number of images to fetch and initial page number
- Circle indicators to show the current slide

## Demo

![Image Slider Demo](public/Randomimage.png)  <!-- Update the path accordingly -->

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/Piyushchannawar/React-Mini-Projects.git
    cd Image-Slider
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Start the development server:

    ```sh
    npm run dev
    ```

4. Open your browser and navigate to `http://localhost:5173`.

## Usage

1. Import the `ImageSlider` component in your React application:

    ```jsx
    import ImageSlider from './ImageSlider';
    ```

2. Use the component in your application, passing the required `url` prop:

    ```jsx
    const App = () => {
        return (
            <div>
                <h1>Image Slider</h1>
                <ImageSlider url="https://example.com/api/images" limit={5} page={1} />
            </div>
        );
    };

    export default App;
    ```

## Props

- `url` (string): The URL to fetch images from.
- `limit` (number): The number of images to fetch. Default is 5.
- `page` (number): The initial page number to fetch images from. Default is 1.