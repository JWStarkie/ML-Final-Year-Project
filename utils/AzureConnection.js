"use strict";

import {
  TRAINING_API_KEY,
  PREDICTION_API_KEY,
  END_POINT,
  PROJECT_ID,
  ITERATION_ID
} from "react-native-dotenv";

const url =
  END_POINT + "/customvision/v3.0/training/projects/" + PROJECT_ID + "/tags";
const key = TRAINING_API_KEY;
const predi_url =
  END_POINT +
  "/customvision/v3.0/Prediction/" +
  PROJECT_ID +
  "/classify/iterations/" +
  ITERATION_ID +
  "/url";
const testUrl =
  "https://upload.wikimedia.org/wikipedia/commons/7/78/Ford_logo_1976.jpg";
const pred_key = PREDICTION_API_KEY;

// get image tags
function initiateAzureConnection() {
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Training-Key": key
    }
  })
    .then(response => response.json())
    .then(responseJson => {
      console.log(responseJson);
      uploadImageForTraining(responseJson[0].id, responseJson[1].id);
    })
    .catch(error => {
      console.error(error);
    });
}

// call prediction API to predict vehicle model
function predictVehicleMake() {
  fetch(predi_url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Prediction-Key": pred_key
    },
    body: JSON.stringify({
      Url: testUrl
    })
  })
    .then(response => response.json())
    .then(responseJson => {
      console.log(responseJson);
    })
    .catch(error => {
      console.error(error);
    });
}

function uploadImageForTraining(ford_tag, vw_tag) {
  console.log("Ford: " + ford_tag + " VW: " + vw_tag);
}

// add other navigation functions that you need and export them

export default {
  initiateAzureConnection,
  predictVehicleMake,
  uploadImageForTraining
};
