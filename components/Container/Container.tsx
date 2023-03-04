import styled from 'styled-components';
import { Props } from './types/Props';

const Container = (props: Props) => {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default Container;