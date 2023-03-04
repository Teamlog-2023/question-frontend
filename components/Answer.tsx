import { Club, ClubList } from "@/constants/club";
import { Question } from "@/types/Question";
import elapsedTime from "@/utils/elapsedTime";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Answer = (props: Question) => {
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    const res = elapsedTime(props.createdAt)
    setDate(res)
  }, [props.createdAt])

  // useEffect(() => {
  //   console.log(props)
  // }, [props])

  console.log(ClubList, Club)

  return (
    <>
      <Wrapper style={{ background: Club[props.writer.id].color }}>
        <QuestionWrapper>
          <QuestionStrong>Q.</QuestionStrong>&nbsp;{props.question}
        </QuestionWrapper>
        <DescriptionWrapper>
          <WriterWrapper>
            <WriterImage src={Club[props.writer.id].image} />
            <WriterDescription>
              <WriterName>{props.writer.name}</WriterName>
              <WriteDate>{date}</WriteDate>
            </WriterDescription>
          </WriterWrapper>
          <AnswerWrapper>
            <AnswerContent>{props.answer}</AnswerContent>
          </AnswerWrapper>
        </DescriptionWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 8px;
  color: white;
  background-color: #B82A2D;
  padding: 12px;
`;

const QuestionWrapper = styled.h1`
  width: 100%;
  font-size: 24px;
  font-weight: 500;
`;

const QuestionStrong = styled.strong`
  font-weight: 700;
`;

const WriterWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
`;

const WriterImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 6px;
  background-color: white;
`;

const WriterDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

const WriterName = styled.h1`
  font-size: 24px;
  font-weight: 700;
`;

const WriteDate = styled.p`
  font-size: 12px;
  font-weight: 300;
`;

const AnswerWrapper = styled.div`
  width: 100%;
  padding-left: 60px;
`;

const AnswerContent = styled.p`
  font-weight: 500;
  font-size: 20px;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default Answer;
