const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const usersRouter = require('./routes/users');
const contactsRouter = require('./routes/contacts');
const authRouter = require('./routes/auth');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// define Routes
app.use('/api/users', usersRouter);
app.use('/api/contacts', contactsRouter);
app.use('/api/auth', authRouter);

// serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, 'client', 'build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
