const configuration = {
  BASE_URL: "http://selu383-fa20-p05-g03.azurewebsites.net", //azure website url
};

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  // use the url provided by ngrok
  // Will need to update the url each time ngrok is started
  configuration.BASE_URL = "https://81ec8b9fb5a1.ngrok.io";
}

export { configuration };
