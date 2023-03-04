import styled from "styled-components";
import { Props } from "./types/Props";

const Center = (props: Props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Center;
