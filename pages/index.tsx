import Answer from "@/components/Answer";
import Container from "@/components/Container/Container";
import Header from "@/components/Header";
import Question from "@/components/Question";
import { Club, ClubList } from "@/constants/club";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Question as QuestionType } from "@/types/Question";
import getQuestions from "@/api/question/get";

const Index = () => {
  const [questions, setQuestions] = useState<QuestionType[]>();

  useEffect(() => {
    (async () => {
      const res = await getQuestions();
      setQuestions(res);
    })();
  }, [setQuestions]);

  return (
    <>
      <Header />
      <Container>
        <QuestionWrapper>
          <Question />
        </QuestionWrapper>
        <AnswerWrapper>
          <AnswerColumn>
            {questions?.map((e: QuestionType) => {
              if (e.answer)
                return (
                  <Answer
                    id={e.id}
                    uuid={e.uuid}
                    question={e.question}
                    answer={e.answer}
                    createdAt={e.createdAt}
                  />
                );
            })}
          </AnswerColumn>
        </AnswerWrapper>
      </Container>
    </>
  );
};

const Wrapper = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
`;

const QuestionWrapper = styled(Wrapper)`
  align-items: center;
  justify-content: center;

  @media (max-width: 1440px) {
    padding-top: 10vmax;
  }
`;

const AnswerWrapper = styled(Wrapper)`
  padding-top: 7vmax;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 1440px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  @media (max-width: 768px) {
    padding-top: 0;
  }
`;

const AnswerColumn = styled.div`
  min-width: 380px;
  width: 25vmax;
  display: flex;
  flex-direction: column;
  gap: 24px;

  overflow-y: auto;

  padding: 24px;
`;

export default Index;
