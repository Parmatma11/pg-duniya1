import connectDB from "@/db";
import User from "@/models/user-model";
import bcrypt from "bcrypt";
import Home from "@/pages";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  // const userCredentials = {
  //   "harman@gmail.com": "harman",
  //   "deepak@example.com": "deepak",
  //   "jaideep@sample.com": "jaideep",
  //   "krishan@domain.com": "krishan",
  //   "bob@domain.com": "bob12345",
  //   "charlie@domain.com": "charliepass",
  //   "dave@website.com": "davepassword",
  //   "eve@webmail.com": "eve123456",
  //   "frank@online.com": "franksecure",
  //   "grace@provider.com": "grace0987",
  //   "harry@mail.com": "harry54321",
  //   "ivy@internet.com": "ivy654321",
  //   "jack@tech.com": "jacksecure",
  //   "karen@company.com": "karenpass"
  // };


  
  // if (req.method === "POST") {
  // //   connectDB();
  // const { email, password } = req.body;
  //   if (!email || !password) {
  //   // 
  //   return res.status(400).json({
  //     error: "Email and password are required to login.",
  //   });
  //  }
  //   const emailExists = await User.findOne({ email });
  //   if (!emailExists) {
  //     return res.status(400).json({ msg: "Please Register first !" });
  //   }
  //   const passwordMatched = await bcrypt.compare(
  //     password,
  //     emailExists.password
  //   );
  //   if (passwordMatched) {
  //     const token = jwt.sign({ token: emailExists._id }, process.env.JWT_SECRET, {
  //       expiresIn: "30d",
  //     });
  //     return res.status(200).json({ msg: "Logged in successfully !", token });
  //   }
  //   return res.status(400).json({ msg: "Invalid Credentitials !" });
  // }

  if (req.method === "POST") {
    const { email, password } = req.body;
  
    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({
        error: "Email and password are required to login.",
      });
    }
  
    // Dummy user credentials
    const userCredentials = {
      "harman@gmail.com": "harman",
      "deepak@example.com": "deepak",
      "jaideep@sample.com": "jaideep",
      "krishan@domain.com": "krishan",
      "bob@domain.com": "bob12345",
      "charlie@domain.com": "charliepass",
      "dave@website.com": "davepassword",
      "eve@webmail.com": "eve123456",
      "frank@online.com": "franksecure",
      "grace@provider.com": "grace0987",
      "harry@mail.com": "harry54321",
      "ivy@internet.com": "ivy654321",
      "jack@tech.com": "jacksecure",
      "karen@company.com": "karenpass",
    };
  
    // Check if the email exists and the password matches
    if (userCredentials[email] && userCredentials[email] === password) {
      // If credentials are valid, redirect or send a success response
      return res.status(200).json({
        message: "Login successful",
        redirectUrl: "/", // For example, redirect to a dashboard page
      });
    } else {
      // If credentials don't match, send an error response
      return res.status(401).json({
        error: "Invalid email or password.",
      });
    }
  }
}
