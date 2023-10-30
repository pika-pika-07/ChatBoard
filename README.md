# Chat-App
This is a Realtime chat web application which allows users to create a room and chat with multiple users.


## Tech Stack
- Reactjs as Frontend Library
- Socket.io for Realtime connection
- Tailwind css
- Webpack as bundler

## How to Setup 
- Clone the repo
- Open the repo inside your editor
- Go inside the project folder and run npm install
- Run npm run start to start the Parcel server on localhost://3000
- Vist http://localhost:3000/ to see the app

## How it works
- The application allows users to chat realtime
- Open multiple instances of the app(https://chat-appp-live.vercel.app/)
- You can create multiple rooms
- Users in a single room can chat among themselves.
- List of users will be displayed on the sidebar which have joined the same room
- You can chat among the users of the same room

## TODOS for next version
- Persist the old messages on Browser refresh using some web storage( LocalStorage , IndexedDb) or a Database( Ex- Mongodb)
- Perform Authentication and Authorization using cookies or a dedicated db.
- 1-1 chat feature( it would require a dedicated db)
- As most of the above features require a dedicated db, next release will have a db integrated.

## APP hosted on Vercel
The App is also hosted on Vercel(https://chat-appp-live.vercel.app/)


