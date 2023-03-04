import Container from "@/components/Container/Container";
import Response from "@/components/Response";
import styled from "styled-components";

const Answer = () => {
  return (
    <Container>
      <Wrapper>
        <Title>답변하기</Title>
        <ContentWrapper>
          <Response id="대충 uuid" question="남영재" createdAt={new Date()} />
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

const ContentWrapper = styled.div``;

const Title = styled.h1`
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export default Answer;
