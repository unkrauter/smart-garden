const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');

// Require routes
const usersRoutes = require('./routes/users');
const sensorsRoutes = require('./routes/sensors');
const plantsRoutes = require('./routes/plants');
const notificationsRoutes = require('./routes/notifications');


const socketUtil = require('./socketutil');

const app = express();
const server = http.createServer(app);

// Use bodyParser middleware to parse JSON requests
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, 'public')));

// Use routes
app.use('/users', usersRoutes);
app.use('/sensors', sensorsRoutes);
app.use('/plants', plantsRoutes);
app.use('/notifications', notificationsRoutes);


socketUtil.init(server);


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = 3000;  // Setting port to 3000

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});