// frontend/src/api/axios.js
import axios from "axios";

const API = axios.create({
  baseURL: "https://doctor-backend-route-shibilbasithcp-dev.apps.rm2.thpm.p1.openshiftapps.com"
  // This is your doctor-appointment backend route, not prescripto.
});

export default API;
