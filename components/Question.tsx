import styled from "styled-components";
import { Club, ClubList } from "@/constants/club";
import { useState } from "react";

const Question = () => {
  const [club, setClub] = useState<ClubList>(ClubList.Layer7);

  return (
    <>
      <Wrapper>
        <QuestionTextWrapper>
          <QuestionText>이곳에 질문해주세요!</QuestionText>
        </QuestionTextWrapper>
        <QuestionInputWrapper>
          <QuestionSelect
            onChange={(e) => {
              setClub(e.target.value as unknown as ClubList);
            }}
            style={{ background: Club[club].color }}
          >
            {Club.map((e, i) => (
              <QuestionOption value={e.id} key={i}>
                {e.name}
              </QuestionOption>
            ))}
          </QuestionSelect>
          <QuestionInput placeholder="텍스트를 입력해주세요." />
          <QuestionButton>제출</QuestionButton>
        </QuestionInputWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  min-width: 380px;
`;

const QuestionTextWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const QuestionText = styled.h1`
  font-weight: 700;
  font-size: 2vmax;
  position: relative;
  text-align: center;

  @media (max-width: 1440px) {
    font-size: 3vmax;
  }

  &:before {
    content: "";
    position: absolute;
    display: block;
    bottom: 0;
    width: 100%;
    height: 1vmax;
    background-color: #fff1a6;
    z-index: -1;
  }
`;

const QuestionInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  min-width: 300px;

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

const QuestionInput = styled.textarea`
  width: 100%;
  height: 170px;
  background-color: #f8f8f8;
  border-radius: 4px;
  padding: 24px;
  border: none;
  outline: none;
  font-size: 18px;
  resize: none;

  @media (max-width: 768px) {
    height: 120px;
  }

  &::placeholder {
    font-size: 18px;
  }
`;

const QuestionButton = styled.button`
  width: 100%;
  background-color: #2b2b2b;
  border-radius: 4px 4px 8px 8px;
  font-weight: 400;
  font-size: 18px;
  color: #ffffff;
  padding: 14px 0;
  border: none;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 10px 0;
  }
`;

const QuestionSelect = styled.select`
  width: 100%;
  background-color: #2b2b2b;
  color: white;
  border-radius: 8px 8px 4px 4px;
  padding: 14px 0;
  border: none;
  text-align: center;
  font-size: 18px;

  border: none;
  outline: none;
  cursor: pointer;

  -webkit-appearance: none;
  -moz-appearance: none;

  &:hover {
    background-color: #3b3b3b;
  }

  @media (max-width: 768px) {
    height: 120px;
  }
`;

const QuestionOption = styled.option``;

export default Question;
