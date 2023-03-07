import { getCookie } from "cookies-next";
import api from "..";

const getInfo = async () => {
  const { data } = await api.get("/auth", {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
  return data;
};

export default getInfo;
