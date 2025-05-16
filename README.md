
# PAY IT WEB APP 

Pay it app is a simple web app that helps client pay their home utility bills and also **record** them to the database which can be reviewed and kept track later on

This app is ONLY for the clients in Nepal as it uses the Esewa and Khalti merchant API's. 




## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY` (will add later)

`ANOTHER_API_KEY` (will add later)


## Installation

Clone the repository to your directory

```bash
  git clone https://github.com/uzuw/payIt.git
```


**Dependencies**

backend 
```bash
npm install \
  bcryptjs@^3.0.2 \
  body-parser@^2.2.0 \
  colors@^1.4.0 \
  cors@^2.8.5 \
  dotenv@^16.5.0 \
  express@^5.1.0 \
  express-session@^1.18.1 \
  googleapis@^148.0.0 \
  jsonwebtoken@^9.0.2 \
  mongoose@^8.14.1 \
  nodemailer@^7.0.3 \
  uuid@^11.1.0 \
```

frontend
```bash
  @heroicons/react@^2.2.0 \
  @tailwindcss/vite@^4.1.5 \
  axios@^1.9.0 \
  react@^19.1.0 \
  react-dom@^19.1.0 \
  react-router-dom@^7.5.3 \
  tailwindcss@^4.1.5
```

**Dev Dependencies**
```bash
npm install -D \
  nodemon@^3.1.10 \
```


### Start 

Frontend
```bash
cd backend

npm run dev
```

Backend
```bash
cd frontend

npm run dev
```



    
## Roadmap

- database for payment and user created 

- created auth routes using session auth 

- created created payment routes (not merchant gateway for now)

- created frontend with login session

- implemented contact mail using Google Oath2 routes in backend

## Whats Next?

- integrating merchant api

- proper login session using merchant

- animated dyamic web design

- security tests and responsiveness

