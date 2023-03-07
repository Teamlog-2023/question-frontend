import login from "@/api/auth/login";
import Center from "@/components/Container/Center";
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { useRouter } from "next/router";
import styled from "styled-components";

const Login = () => {
  const router = useRouter();

  const loginHandler = async ({ credential }: CredentialResponse) => {
    const res = await login({ credential: credential as string });
    console.log(res);
    router.push("/answer");
  };

  return (
    <Center>
      <Wrapper>
        <GoogleLogin onSuccess={loginHandler} />
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
