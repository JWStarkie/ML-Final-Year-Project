"use strict";

import {
  TRAINING_API_KEY,
  PREDICTION_API_KEY,
  END_POINT,
  PROJECT_ID,
  ITERATION_ID,
  IMGUR_CLIENT_ID
} from "react-native-dotenv";

import NavigationService from "./NavigationService";

const url =
  END_POINT + "/customvision/v3.0/training/projects/" + PROJECT_ID + "/tags";
const key = TRAINING_API_KEY;
const predi_url =
  END_POINT +
  "customvision/v3.0/prediction/" +
  PROJECT_ID +
  "/classify/iterations/" +
  ITERATION_ID +
  "/url";
const pred_key = PREDICTION_API_KEY;
const imgur_upload_url = "https://api.imgur.com/3/upload";

// upload image file to imgur host for azure prediction
function predictVehicleMakeWithImageFile(imageData) {
  fetch(imgur_upload_url, {
    method: "POST",
    headers: {
      Authorization: `Client-ID ${IMGUR_CLIENT_ID}`
    },
    body: imageData
  })
    .then(response => response.json())
    .then(responseJson => {
      azurePrediction(responseJson.data.link);
    })
    .catch(error => {
      console.error(error);
    });
}

// call prediction API to predict vehicle model
function azurePrediction(imageUrl) {
  fetch(predi_url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Prediction-Key": pred_key
    },
    body: JSON.stringify({ Url: imageUrl })
  })
    .then(response => response.json())
    .then(responseJson => {
      console.log(responseJson.predictions);
      let i;
      for (i in responseJson.predictions) {
        if (responseJson.predictions[i].probability > 0.9) {
          console.log(
            responseJson.predictions[i].probability * 100 +
              "% chance it's a " +
              responseJson.predictions[i].tagName
          );
          NavigationService.navigate("AR", {
            probability: responseJson.predictions[i].probability * 100,
            classification: responseJson.predictions[i].tagName
          });
        } else {
          NavigationService.navigate("AR");
        }
      }
    })
    .catch(error => {
      console.error(error);
    });
}

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

function uploadImageForTraining(ford_tag, vw_tag) {
  console.log("Ford: " + ford_tag + " VW: " + vw_tag);
}

// add other navigation functions that you need and export them

export default {
  predictVehicleMakeWithImageFile,
  azurePrediction,
  initiateAzureConnection,
  uploadImageForTraining
};
