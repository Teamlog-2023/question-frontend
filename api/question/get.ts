import api from ".."

const getQuestions = async () => {
  const { data } = await api.get("/question");
  return data;
}

export default getQuestions;