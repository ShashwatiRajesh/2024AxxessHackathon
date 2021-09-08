var _Environments = {
  production: { BASE_URL: "", API_KEY: "" },
  staging: { BASE_URL: "", API_KEY: "" },
  development: {
    BASE_URL: "https://topastro-backend.herokuapp.com",//"https://topastro-backend.herokuapp.com",
    API_KEY: "",
  },
};

function getEnvironment() {
  return _Environments["development"];
}

var Environment = getEnvironment();
export { Environment };