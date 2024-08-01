import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import helmet from 'helmet';

const app = express();
const PORT = process.env.PORT || 5000;
const uri = "mongodb+srv://sharmasohini80:txVpB6XhM5c86Rfc@cluster0.zqyued7.mongodb.net/portfolio-data?retryWrites=true&w=majority";

// Middleware
app.use(bodyParser.json());
app.use(helmet());

const corsOptions = {
  origin: 'https://sohini-portfolio.netlify.app', 
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

let db;

// Connect to MongoDB
MongoClient.connect(uri)
  .then(client => {
    console.log('Connected to MongoDB');
    db = client.db('portfolio-data');

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1);
  });

// Root route with link to frontend
app.get('/', (req, res) => {
    res.send(`<h1>Welcome to My Portfolio API click <a href="https://sohini-portfolio.netlify.app"}>here</a> to visit frontend.</h1>`);
  });

  // Contact route
app.post('/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).send('All fields are required.');
  }

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
      console.error('Error inserting document:', error);
      res.status(500).send('An error occurred while saving the message.');
    });
});
