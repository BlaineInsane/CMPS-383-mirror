const configuration = {
  BASE_URL: "http://selu383-fa20-p05-g03.azurewebsites.net", //azure website url
};

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  // use the url provided by ngrok
  // Will need to update the url each time ngrok is started
  configuration.BASE_URL = "http://35d499904374.ngrok.io";
}

export { configuration };
