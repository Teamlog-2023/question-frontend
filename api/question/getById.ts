import api from "..";

const getQuestionById = async (id: number) => {
  const { data } = await api.get(`/question/club/${id}`);
  return data;
};

export default getQuestionById;
