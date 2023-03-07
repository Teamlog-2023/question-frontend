import { ClubList } from "@/constants/club";
import api from "..";

const postQuestion = async (body: { id: ClubList; question: string }) => {
  const { data } = await api.post("/question", body);
  return data;
};

export default postQuestion;
