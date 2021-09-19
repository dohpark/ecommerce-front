import React from "react";
import styled from "styled-components";
import palette from "../../styles/palette";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 82px;
  background-color: ${palette.white};
  border-top: 1px solid ${palette.grayLine};
`;

const Button = styled.button`
  height: 40px;
  width: 150px;
  border: none;
  background-color: ${palette.black};
  color: ${palette.white};
  font-size: 16px;
  cursor: pointer;
  margin: 12px;
`;

const SigninFooter: React.FC = () => {
  return (
    <Container>
      <Button>뒤로</Button>
      <Button>계속</Button>
    </Container>
  );
};

export default SigninFooter;
