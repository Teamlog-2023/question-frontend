import { User } from "./User";

export interface Question {
  question: string;
  answer: string;
  writer: User;
  createdAt: Date;
}
