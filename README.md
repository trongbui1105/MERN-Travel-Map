# MERN-Travel-Map

<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="#">
    <img src="image/logo.png" alt="Logo" width="10%">
  </a>

  <h3 align="center">Travel Map Pin</h3>

  <p align="center">
    A single page application built with MERN Stack from scratch (MongoDB + Mongoose, Express, React & NodeJs)
  </p>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Content

  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>

<!-- ABOUT THE PROJECT -->

## About The Project

In this application, you can pin your location and share your reviews with other users.

The users can pin their favourite locations on the map to which the users can rate them, write some descripion about that place which other users can see.

Here are some of the basis functions:

- Register
<p align="center"><img src="image/register.png" alt="Logo" width="70%"></p>

- Login
<p align="center"><img src="image/login.png" alt="Logo" width="70%"></p>

- Pin a location
<p align="center"><img src="image/pin.png" alt="Logo" width="70%"></p>

- Review & Rating
<p align="center"><img src="image/review.png" alt="Logo" width="70%"></p>

- Preview all locations on the map
<p align="center"><img src="image/preview.png" alt="Logo" width="70%"></p>

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

For front end

- [ReactJS v17.0.2](https://reactjs.org/)

For the backend API

- [NodeJS](https://nodejs.org/en/)
- [Express Framework](https://expressjs.com/)
- [Mapbox API](https://www.mapbox.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

For the web application to work, you only need to have a knowledge about ReactMapGl. React App using the ReactMapGL component to use mapbox to display a map theme.

ReactMapGl component props that take from MAPBOX are: mapboxApiAccessToken and mapStyle.

Access key and mapStyle can be found once a MapBox account has been created where the access token will be visible at the bottom of the page. Mapstyle token can be found on Mapbox under Tools & resources, where Design in mapbox studio is selected to select a visual design theme and a code is then generated.

### Installation

1. Clone the repo and change to that folder

    ```sh
    git clone https://github.com/trongbui1105/MERN-Travel-Map.git
    ```

2. Install packages for the backend

   - Move to backend folder

    ```sh
    cd backend

    yarn install
    ```

   - Update the MongoDB URL (You can see it in [.env.example](https://github.com/trongbui1105/MERN-Travel-Map/blob/master/backend/.env.example))

    ```sh
        MONGO_URL = <ADD_YOUR_MONGODB_URL>
    ```

   - Run the server

    ```sh

    yarn start
    ```

3. Install packages for the frontend

   - Move to frontend folder

    ```sh
    cd frontend

    yarn install
    ```

   - Get a free API Key from Mapbox at [their website](https://www.mapbox.com/).

   - Update the API in "./frontend/.env" (You can see it in [.env.example](https://github.com/trongbui1105/MERN-Travel-Map/blob/master/frontend/.env.example))

    ```sh
    REACT_APP_MAPBOX = <YOUR_MAPBOX_API_KEY>
    ```

   - Run the frontend server
    ```sh
    yarn start
    ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

As the introduction indicated, this is an app where you can register, log in then write a review and rating of places you have visited. Users can go on the app and see other user's comments on the map.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

Don't forget to give the project a star! Thanks again!

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

[MIT](https://choosealicense.com/licenses/mit/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Bùi Quốc Trọng

[Facebook](https://www.facebook.com/BQTrong/)

[Email](buiquoctrong110500@gmail.com)

♥

<p align="right">(<a href="#top">back to top</a>)</p>
