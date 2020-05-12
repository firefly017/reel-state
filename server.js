const express = require("express");
const axios = require("axios");
app = express();
const port = 4000;
let listingsData;
let agentsData;

async function downloadData() {
  try {
    let listingsDataResponse = await axios.get(
      "https://my-json-server.typicode.com/Codaisseur/listings-agents-data/listings"
    );
    let agentsDataResponse = await axios.get(
      "https://my-json-server.typicode.com/Codaisseur/listings-agents-data/agents"
    );
    agentsData = agentsDataResponse.data;
    listingsData = listingsDataResponse.data;
    console.log(agentsData);
    console.log(listingsData);
  } catch (e) {
    console.log("error message " + e.message);
  }
}
function onListen() {
  console.log("listening on port " + port);
}

function onListingRequest(request, response) {
  response.send(listingsData);
}

function onAgentsRequest(request, response) {
  response.send(agentsData);
}

function onAgentLanguageRequest(request, response) {
  response.send(
    "onAgentLanguageRequest for language" + request.params.language
  );
}
downloadData();
app.get("/listings", onListingRequest);

app.get("/agents", onAgentsRequest);

app.get("/agents/:language", onAgentLanguageRequest);
app.listen(port, onListen);
