import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import helmet from 'helmet';

const app = express();
const PORT = process.env.PORT || 5000;
const uri = "mongodb://localhost:27017/";

// Middleware
app.use(bodyParser.json());
app.use(helmet());

// Enable CORS for your frontend URL
const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200 
};

app.use(cors(corsOptions));

let db;

// Connect to MongoDB
MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to MongoDB');
    db = client.db('portfolio-data');

    // Start the server after successful DB connection
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(error => console.error(error));

// Routes
app.post('/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  const contactMessage = {
    name,
    email,
    subject,
    message,
    date: new Date()
  };

  db.collection('messages').insertOne(contactMessage)
    .then(result => {
      res.status(200).send('Message received and saved successfully!');
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('An error occurred while saving the message.');
    });
});
