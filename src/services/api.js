import axios from "axios";

//58429105/json/

const api = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});

export default api;
