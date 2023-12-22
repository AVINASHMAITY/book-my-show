# BookMyShow Project

## Introduction

BookMyShow project is a web application that allows users to book movie tickets online. Users can browse available movies, select a movie, choose a showtime, and book their desired seats. 
The project uses both local storage and MongoDB for temporary and permanent data storage, respectively.Library i used in this project is react js, node js, mongodb, express js and bootstrap

## ScreenShot of application
![bookmyshow ss1](https://avinash-bookmyshow.netlify.app/)

## Features

- Browse a list of available movies with details such as movie name and showtimes.
- Select a movie and view available showtimes for that movie.
- Reserve seats for a selected showtime.
- Store temporary booking details using local storage to allow users to continue their booking process even if they close the browser or refresh the page.
- Save completed bookings to MongoDB for permanent storage and retrieval.
- View the details of the last booked movie.

## Getting Started

### Prerequisites

Before running the project, make sure you have the following prerequisites installed on your system:

- Node.js and npm: Install 

### Installation

1. Clone the repository from GitHub:

```
git clone 
```

2. Install the required dependencies:

```
npm install
```

3. Set up the MongoDB connection:

   - Ensure you have MongoDB installed and running on your system.
   - Create a MongoDB database for the BookMyShow project and note down the connection string.

4. Configure the application:

   - Create a `.env` file in the root directory of the project.
   - Add the following environment variables to the `.env` file:

   ```
   PORT=4000                  # The port on which the application will run
   DATABASE_URL= your_url_here  # The MongoDB connection string
   ```
