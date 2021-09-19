import React from "react";
import styled from "styled-components";
import palette from "../../styles/palette";

const Container = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    margin-top: 5%;
    height: 40px;
    font-size: 22px;
  }

  input:focus {
    outline: none;
  }
`;

const Input = styled.input`
  height: 50px;
  width: 250px;
  margin: 0;
  margin-bottom: 12px;
  border: 0;
  border-bottom: 1px solid ${palette.grayLine};
  font-size: 16px;
`;

const Button = styled.button`
  height: 50px;
  width: 250px;
  border: none;
  background-color: ${palette.black};
  color: ${palette.white};
  font-size: 16px;
  cursor: pointer;
  margin-top: 12px;
`;

const Login: React.FC = () => {
  return (
    <Container>
      <h1>회원 로그인</h1>
      <Input type="text" placeholder="아이디" />
      <Input type="text" placeholder="비밀번호" />
      <Button type="submit">로그인</Button>
    </Container>
  );
};

export default Login;
