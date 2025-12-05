import axios from "axios";

const API = axios.create({
  baseURL: "https://doctor-backend-route-shibilbasithcp-dev.apps.rm2.thpm.p1.openshiftapps.com"
});

export default API;
