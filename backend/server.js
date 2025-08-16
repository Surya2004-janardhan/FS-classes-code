const express = require("express");

const User = require("./models/User");
// npm init -y to create new node project
// new pacakge -- npm install(i) new_package
// if package.json exist npm install to install all packages
const connectToDb = require("./config/db");

connectToDb();

// called mongo
const axios = require("axios");

const app = express();
// app == server
const port = 5000;

app.use(express.json()); // ??????? to parse json in body request

// server -- POST GET PUT DELETE
// req.body = userdata;

// endpoint or route interchangeable terms
// post -- posts data to endpoint with data to user

// callback (req, res)

// http//localhost:3000/verify-user

app.post("/verify-user", async (req, res) => {
  console.log(req.body);
  const data = req.body;

  console.log(data);

  // const { name, password } = userdata; // destrcuturing data

  res.status(200).json({ message: "valid user", userdata: data.userdata });
});

// C    R    U      D  == damal finish ----
// CREATE READ UPDATE DELETE
const middleware = require('./middleware/middleware')
app.post("/create-user", middleware ,async (req, res) => {
  const userdata = req.body; //{ { } , { }, { }}

  console.log(userdata);
  // const name = userdata.name;
  // const email = userdata.email;

  const newuser = new User(userdata);

  // new room in same house
  // not new house
  // new row not new table

  await newuser.save();

  res.status(200).json({ message: "successfully created a new user ----" });

  // object - name,email
  // newuser :{
  // name:  name ,
  // email : email
  // }
});

const callback = async (req, res) => {
  const allusers = await User.find();
  console.log(allusers);
  // user lo data mottham find -- total
  res.status(200).json(allusers);
};
// get (endpoint , middleware  ,callback )

// controller -- coz it comntrols logic + db upon an endpoint

app.get("/get-users", callback); // good practice

// jwt -auth - middleware --
// tmr
// 3 days

app.delete("/delete-user/:id", middleware ,async (req, res) => {
  const username = req.params.id;

  const naauser = await User.findOne({ name: username });

  if (naauser) {
    //

    await User.deleteOne({ name: username });

    res.status(200).json("babu deleted nvvv");
  } else {
    res.status(400).json("database lo ledu");
  }
});

const updatecallback = async (req, res) => {
  const username = req.params.id;
  console.log(username);

  const updateduser = await User.findOne({ name: username });
  console.log(updateduser);
  updateduser.name = "aditya";
  await updateduser.save();

  res.status(200).json(updateduser);
};

app.put("/update-user/:id", updatecallback);

//  mongo collections == tables
// documents == rows/cols
// bson -- same like json

// server running on the localhost of this port
app.listen(port, () => {
  console.log("server running on port 5000");
});

// commit test

// fs-classes

// mongodb+srv://fs-classes:fs-classes@fs-classes.w6glfk4.mongodb.net/?retryWrites=true&w=majority&appName=fs-classes

const jwt = require("jsonwebtoken");
const jwt_secret = "sijs";

loginController = async (req, res) => {
  const { email, password } = req.body;

  const newuser = await User.findOne({ email });

  if (!newuser) {
    res.status(400).json({ message: "user not found " });
  } else {
    // user exist
    const hashedpassword = await bcrypt.hash(password, 10);
    // const isMatch = await bcrypt.compare(password, user.password);

    if (newuser.password === hashedpassword) {
      // 123 === 123
      const token = jwt.sign({ username: email }, jwt_secret, {
        expiresIn: "30h",
      });
      res.status(200).json({ message: "successfully logged in ", token });
    } else {
      res.status(400).json({ message: "please enter correct credentials" });
    }
  }
};

app.post("/login", loginController);

const bcrypt = require("bcryptjs");
singupcontroller = async (req, res) => {
  const { name, email, password } = req.body;

  const newuser = await User.findOne({ email });

  if (newuser) {
    res.status(400).json({ message: "user with same email id exists" });
  } else {
    // aditya - fsjngjosngo - db store
    //  aditya - fsakndsklfns -==

    const hashedpassword = await bcrypt.hash(password, 10);
    const newuser = new User({ name, email, hashedpassword });

    await newuser.save();
    res
      .status(200)
      .json({ message: "successfully registered continue to login -- " });
  }
};

app.post("./singup", singupcontroller);


// server setup db setup crud login singup jwt hashing 
// backend completed 

// frontend login singup 
// fromtend crud 