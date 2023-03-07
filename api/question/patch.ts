import { getCookie } from "cookies-next";
import api from "..";

const patchQuestion = async (body: { uuid: string; answer: string }) => {
  const { data } = await api.patch(
    `/question/${body.uuid}`,
    {
      answer: body.answer,
    },
    {
      headers: {
        Authorization: `Bearer ${getCookie("token")}`,
      },
    }
  );
  return data;
};

export default patchQuestion;
