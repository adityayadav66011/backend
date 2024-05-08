require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require('./router/contact-router');
const contactRoute1 = require('./router/contact-router1');
const contactRoute2 = require('./router/contact-router2');
const contactRoute3 = require('./router/contact-router3');
const contactRoute4 = require('./router/contact-router4');
const contactRoute5 = require('./router/contact-router5');
const contactRoute6 = require('./router/contact-router6');
const contactRoute7 = require('./router/contact-router7');
const contactRoute8 = require('./router/contact-router8');
const contactRoute9 = require('./router/contact-router9');
const contactRoute10 = require('./router/contact-router10'); // Import the router for contact form 10
const contactRoute11 = require('./router/contact-router11'); // Import the router for contact form 11
const contactRoute12 = require('./router/contact-router12'); // Import the router for contact form 12
const contactRoute13 = require('./router/contact-router13'); // Import the router for contact form 12
const contactRoute14 = require('./router/contact-router14'); // Import the router for contact form 12
const contactRoute15 = require('./router/contact-router15'); // Import the router for contact form 12

const serviceRoute = require("./router/service-router");
const adminRoute = require("./router/admin-router");
const connectDb = require("./utils/db");

const corsOptions = {
    origin: "*", 
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD", 
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);
app.use("/api/form", contactRoute1);
app.use("/api/form", contactRoute2);
app.use("/api/form", contactRoute3);
app.use("/api/form", contactRoute4);
app.use("/api/form", contactRoute5);
app.use("/api/form", contactRoute6);
app.use("/api/form", contactRoute7);
app.use("/api/form", contactRoute8);
app.use("/api/form", contactRoute9);
app.use("/api/form", contactRoute10); // Use the router for the tenth form
app.use("/api/form", contactRoute11); // Use the router for the eleventh form
app.use("/api/form", contactRoute12); // Use the router for the twelfth form
app.use("/api/form", contactRoute13); // Use the router for the twelfth form
app.use("/api/form", contactRoute14); // Use the router for the twelfth form
app.use("/api/form", contactRoute15); // Use the router for the twelfth form

app.use("/api/admin", adminRoute);

// Handler for the root route ("/")
app.get("/", (req, res) => {
    res.send("Welcome to your backend API!"); // You can customize this message
});

const PORT = process.env.PORT || 4000;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running at port: ${PORT}`);
    });
});
