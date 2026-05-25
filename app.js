const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Project 5 - AKS deployment using Azure DevOps and Argo CD");
});

app.listen(8080, () => {
  console.log("App running on port 8080");
});
