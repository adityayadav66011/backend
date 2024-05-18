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
const contactRoute10 = require('./router/contact-router10');
const contactRoute11 = require('./router/contact-router11');
const contactRoute12 = require('./router/contact-router12');
const contactRoute13 = require('./router/contact-router13');
const contactRoute14 = require('./router/contact-router14');
const contactRoute15 = require('./router/contact-router15');
const contactRoute16 = require('./router/contact-router16');
const contactRoute17 = require('./router/contact-router17');
const contactRoute18 = require('./router/contact-router18');
const contactRoute19 = require('./router/contact-router19');
const contactRoute20 = require('./router/contact-router20');
const contactRoute21 = require('./router/contact-router21');
const contactRoute22 = require('./router/contact-router22');
const contactRoute23 = require('./router/contact-router23');
const contactRoute24 = require('./router/contact-router24');
const contact24DataRoute = require('./router/get-router');
const employeeRouter = require('./router/employee-router');
const serviceRoute = require("./router/service-router");
const adminRoute = require("./router/admin-router");
const connectDb = require("./utils/db");
const CropSoilSeasonMapRouter = require("./router/CropSoilSeasonMapRouter");

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
app.use("/api/form", contactRoute10);
app.use("/api/form", contactRoute11);
app.use("/api/form", contactRoute12);
app.use("/api/form", contactRoute13);
app.use("/api/form", contactRoute14);
app.use("/api/form", contactRoute15);
app.use("/api/form", contactRoute16);
app.use("/api/form", contactRoute17);
app.use("/api/form", contactRoute18);
app.use("/api/form", contactRoute19);
app.use("/api/form", contactRoute20);
app.use("/api/form", contactRoute21);
app.use("/api/form", contactRoute22);
app.use("/api/form", contactRoute23);
app.use("/api/form", contactRoute24);

app.use("/api/v1", employeeRouter);
app.use("/api/admin", adminRoute);

// Use the route for fetching Contact Form 24 data
app.use("/api/contact24Data", contact24DataRoute);

app.use("/api/crop-soil-season-mapping",CropSoilSeasonMapRouter)
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
