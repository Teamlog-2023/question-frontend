import { ClubList } from "@/constants/club";

export interface Question {
  uuid: string;
  id: ClubList;
  question: string;
  answer: string;
  createdAt: Date;
}
