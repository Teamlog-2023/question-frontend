import Center from "@/components/Container/Center";
import styled from "styled-components";

const Login = () => {
  return (
    <Center>
      <Wrapper>
        <Button>구글 계정으로 로그인</Button>
      </Wrapper>
    </Center>
  );
};

const Wrapper = styled.div`
  width: 80%;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

const Button = styled.button`
  width: 80%;
  height: 50px;

  border: none;
  outline: none;
  border-radius: 8px;

  background-color: #030303;
  color: white;
  font-size: 18px;
`;

export default Login;
