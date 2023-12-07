# React Drone Simulator App

This app simulates the drone motion on Google Maps based on user-provided information.

## Installation
1. Clone the repository

2. Navigate to the project directory

3. Install dependencies: npm install

## Starting the development server

npm start

Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

## Google Maps API Key

Add your google maps API key to the .env file present in the source directory

## Input Format

The input time series data should be an array of objects, where each object represents a data point with latitude (`lat`), longitude (`lng`), and timestamp (`timestamp`). The timestamp should follow the ISO 8601 format with milliseconds in UTC.

Example Input Format:

```json

[
  { "lat": 19.0760, "lng": 72.8777, "timestamp": "2023-01-01T12:00:00.000Z" },
  { "lat": 19.0820, "lng": 72.8920, "timestamp": "2023-01-01T12:00:05.000Z" },
  { "lat": 19.0875, "lng": 72.8955, "timestamp": "2023-01-01T12:00:10.000Z" },
  // ... (additional data points)
]
```

Multiple Paths

If the user wants to provide multiple arrays as input, they should be separated by a semicolon (;). Each array should still follow the same format as described above.

```json

[
  { "lat": 19.0760, "lng": 72.8777, "timestamp": "2023-01-01T12:00:00.000Z" },
  { "lat": 19.0820, "lng": 72.8920, "timestamp": "2023-01-01T12:00:05.000Z" },
  // ... (additional data points)
];[
  { "lat": 20.1234, "lng": 74.5678, "timestamp": "2023-01-01T12:02:00.000Z" },
  { "lat": 20.4567, "lng": 74.9876, "timestamp": "2023-01-01T12:02:15.000Z" },
  // ... (additional data points)
]
```

A paths.txt file is kept in src/assets for reference.