const express = require("express");
let router = express.Router();

module.exports.displayHomePage = (req, res, next) => {
  res.render("index", {
    title: "Home",
    message:
      "Web development, especially freelance web development has been steadily growing as businesses are increasingly going online. Many talented developers offer freelance web development in addition to their day jobs or some of them have fully embraced the freelance life. Nevertheless, every web developer that wants to be successful needs to have their web developer portfolio on the internet where it can be accessed easily.",
  });
};


module.exports.displayProjectPage = (req , res , next) => {
    res.render("index", { title: "Project", message: "" });
}

module.exports.displayServicePage = (req , res , next) => {
    res.render("index", { title: "Service", message: "" });
}

module.exports.displayContactPage = (req , res , next) => {
    res.render("index", { title: "Contact", message: "" });
}

module.exports.displayAboutPage = (req , res , next) => {
    res.render("index", { title: "About", message: "I, Mohammad Etedali with More than 8 years’ experience in programming with Microsoft products, am a responsible, highly motivated, highly organized, result-oriented, and self-motivated person. I have expertise in C# .Net, SQL Server, and ASP.Net MVC." });
}