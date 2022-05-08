import axios from "axios";

// Настройка запроса
export const instance = axios.create({
  baseURL: "https://server-my-profile.herokuapp.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const Api = {
  async getDescription() {
    const res = await instance.get("api/descriptions");
    return res.data;
  },
  async getLinks() {
    const res = await instance.get("api/links");
    return res.data;
  },
};
