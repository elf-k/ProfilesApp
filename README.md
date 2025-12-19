Elif Karakazan 
210408010

# Profiles Directory App

This is a React Native (Expo) application that fetches profile data from a local Express.js API.
The app displays a paginated list of profiles and allows navigation to a profile detail screen
where additional data is loaded dynamically.

## Features

- Fetch data from a REST API using Axios
- Paginated profiles list with infinite scrolling
- Profile detail screen with dynamic API calls
- Stack navigation between screens
- Loading indicators during data fetching
- Pull-to-refresh functionality
- Empty state handling
- Network and server error handling
- Environment variable based API configuration

## Technologies Used

- React Native (Expo)
- Axios
- React Navigation (Native Stack)
- Express.js (provided API server)

## Server Setup

1. Extract the provided Express server files (e.g. ProfilesServer)
2. Open a terminal in the server directory and run:

npm install  
node server.js

The server should start on:

http://<YOUR_IP>:3000

Important notes:
- Do NOT use localhost or 127.0.0.1
- Phone and computer must be on the same WiFi network

Test the server from your phone browser:

http://<YOUR_IP>:3000/profiles?page=1&limit=5

If JSON data appears, the server is running correctly.

## App Setup

Install dependencies:

npm install

Create a .env file in the project root and add:

EXPO_PUBLIC_API_BASE_URL=http://<YOUR_IP>:3000

Example:

EXPO_PUBLIC_API_BASE_URL=http://192.168.1.110:3000

After creating or updating the .env file, restart Expo:

npx expo start --clear

## App Behavior

- Profiles are loaded automatically when the app starts
- Scrolling down loads more profiles (pagination)
- Pull down to refresh the profiles list
- Tapping a profile navigates to the profile detail screen
- Loading indicators appear during API requests
- Error messages are shown when the server is unreachable
- Empty data states are handled gracefully

## Common Issues and Solutions

Network request failed:
- Ensure the Express server is running
- Verify the IP address in the .env file
- Ensure phone and computer are on the same WiFi network
- Do not use localhost
- Restart Expo with npx expo start --clear

Profiles not loading:
- Check API endpoint paths
- Verify API response format
- Check console logs for errors

## Notes

- API base URL is managed using environment variables
- Axios instance is centralized in api/client.js
- Pagination automatically stops when no more data is available

## Lab Completion

This project fulfills all lab requirements related to:
- Networking and APIs
- Navigation
- Pagination
- Error handling
- Environment variable usage
