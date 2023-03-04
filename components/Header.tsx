import styled from "styled-components";

const Header = () => {
  return (
    <>
      <Wrapper>정보호호과<Logo src="/images/logo.svg" /></Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 7vmax;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  font-size: 3vmax;
  font-weight: 700;
  border-bottom: 1px solid #BCBCBC;
`;

const Logo = styled.img`
  height: 60%;
`;

export default Header;
