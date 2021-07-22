import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 *
 */

class VolunteerApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${VolunteerApi.token}` };
    const params = (method === "get")
      ? data
      : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /***************************************************company */

  // Login company
  static async loginCompany(data) {
    let res = await this.request(`auth/login-company`, data, "post");
    return res.token;
  }

  // Signup company
  static async signupCompay(data) {
    let res = await this.request(`auth/register-company`, data, "post");
    return res.token;
  }

  // Get all companies 
  static async getCompanies() {
    let res = await this.request("companies");
    return res.companies;
  }

  // Get current company 
  static async getCurrentCompany(companyHandle) {
    let res = await this.request(`companies/${companyHandle}`);
    return res.company;
  }

  // Company profile 
  static async saveCompanyProfile(companyHandle, data) {
    let res = await this.request(`companies/${companyHandle}`, data, "patch");
    return res.company;
  }

  /************************************************user */

  // Login user
  static async loginUser(data) {
    let res = await this.request(`auth/login-user`, data, "post");
    return res.token;
  }

  // Signup user
  static async signupUser(data) {
    let res = await this.request(`auth/register-user`, data, "post");
    return res.token;
  }

  // Get current user 
  static async getCurrentUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  // User profile 
  static async saveUserProfile(username, data) {
    let res = await this.request(`users/${username}`, data, "patch");
    return res.user;
  }

  // Connect to company 
  static async connectToCompany(username, companyHandle) {
    await this.request(`users/${username}/${companyHandle}`, {}, "post");
  }

}

// for now, put token ("testuser" / "password" on class)
VolunteerApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
  "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
  "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";


export default VolunteerApi;