const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');

const app = express();
let port = 3000;

// User data for demo purposes
let user = {
    name: "sneha",
    email: "sneha@gmail.com",
    password: "sneha@123"
};

// Sample job listings
let jobListings = [
    { title: "UI/UX Designer", company: "Employee Solutions", location: "Remote" },
    { title: "Data Analyst", company: "Innovative Labs", location: "San Francisco, CA" },
    { title: "Software Engineer", company: "TechCorp", location: "New York, NY" }
];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/signin', (req, res) => {
    res.render('signin');
});
app.get('/jobs', (req, res) => {
    res.render('jobs', { jobs: jobListings });
});

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
