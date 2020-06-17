import axios from "axios";
import { API_URL as url } from "@/config/";

export class HttpService {
  constructor(route) {
    this.route = route;
  }

  get url() {
    return url + this.route;
  }

  async getAll() {
    const resp = await axios.get(this.url);
    return resp.data;
  }

  async login(params) {
    const resp = await axios.post(`${this.url}/login`, params);
    return resp.data;
  }

  getById(id) {
    const resp = axios.get(`${this.url}/${id}`);
    return resp;
  }

  create(params) {
    const resp = axios.post(this.url, params);
    return resp;
  }

  put(id, params) {
    const resp = axios.put(`${this.url}/${id}`, params);
    return resp;
  }

  patch(id, params) {
    const resp = axios.patch(`${this.url}/${id}`, params);
    return resp;
  }

  delete(id) {
    const resp = axios.delete(`${this.url}/${id}`);
    return resp;
  }
}
