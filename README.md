# Live Weather & General Knowledge App

A full-stack web application that displays live weather information and provides general knowledge facts.

## Features

- **Live Weather**: Get current weather data for any city using OpenWeatherMap API
- **General Knowledge Facts**: Random interesting facts from a trivia API
- **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

- **Frontend**: Angular 17
- **Backend**: Node.js with Express
- **APIs**: OpenWeatherMap, Useless Facts API

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Angular CLI (`npm install -g @angular/cli`)

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env` file and add your OpenWeatherMap API key
   - Get API key from [OpenWeatherMap](https://openweathermap.org/api)

4. Start the backend server:
   ```bash
   npm start
   ```
   Server runs on http://localhost:3000

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Angular development server:
   ```bash
   ng serve
   ```
   App runs on http://localhost:4200

### Running the Application

- Ensure both backend and frontend servers are running
- Open http://localhost:4200 in your browser
- Enter a city name to get weather data
- Click "Get New Fact" for random facts

## API Endpoints

### Backend

- `GET /weather?city=<city>` - Get weather data for a city
- `GET /facts` - Get a random fact

## Development

- Backend uses nodemon for auto-restart during development
- Frontend uses Angular's built-in development server with hot reload

## License

MIT