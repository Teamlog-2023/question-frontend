import getInfo from "@/api/auth/get";
import getQuestionById from "@/api/question/getById";
import Container from "@/components/Container/Container";
import Response from "@/components/Response";
import { Question } from "@/types/Question";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Answer = () => {
  const [contents, setContents] = useState<Question[]>();

  useEffect(() => {
    (async () => {
      const userInfo = await getInfo();
      const res = await getQuestionById(userInfo.id);
      setContents(res);
    })();
  }, [setContents]);

  return (
    <Container>
      <Wrapper>
        <Title>답변하기</Title>
        <ContentWrapper>
          {contents?.map((e: Question) => {
            if (!e.answer) {
              return (
                <Response
                  id={e.uuid}
                  question={e.question}
                  createdAt={e.createdAt}
                  key={e.uuid}
                />
              );
            }
          })}
        </ContentWrapper>
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 36px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;

const Title = styled.h1`
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export default Answer;
