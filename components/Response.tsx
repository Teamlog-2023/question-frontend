import elapsedTime from "@/utils/elapsedTime";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface Props {
  id: string;
  question: string;
  createdAt: Date;
}

const Response = (props: Props) => {
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    const res = elapsedTime(props.createdAt);
    setDate(res);
  }, [props.createdAt]);

  return (
    <Wrapper>
      <QuestionWrapper>
        <Question>
          <QuestionStrong>Q.</QuestionStrong> {props.question}
        </Question>
        <QuestionCreated>{date}</QuestionCreated>
      </QuestionWrapper>
      <ResponseInput />
      <Submit>답변하기</Submit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const QuestionWrapper = styled.div`
  padding: 12px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px 8px 0 0;
  background-color: #000000;
`;

const Question = styled.h1`
  color: white;
  font-weight: 500;
  font-size: 22px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const QuestionCreated = styled.p`
  color: #b9b9b9;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const QuestionStrong = styled.strong``;

const ResponseInput = styled.textarea`
  width: 100%;
  height: 130px;
  resize: none;
  border: none;
  outline: none;
  background-color: #ffffff;
  border: 4px solid #000000;
  padding: 8px;

  @media (max-width: 768px) {
    height: 110px;
  }
`;

const Submit = styled.button`
  width: 100%;
  background-color: black;
  color: white;
  padding: 12px 0;
  border: none;
  border-radius: 0 0 8px 8px;
  font-weight: 500;
  cursor: pointer;
`;

export default Response;
