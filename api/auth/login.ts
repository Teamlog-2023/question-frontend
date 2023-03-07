import { setCookie } from "cookies-next";
import api from "..";

const login = async (body: { credential: string }) => {
  const { data } = await api.post("/auth/login", body);
  api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
  setCookie("token", data.token);
  return data;
};

export default login;
