import React from "react";
import styled from "styled-components";
import palette from "../../styles/palette";
import ArrowIcon from "../../public/static/svg/member/ArrowIcon.svg";

const Container = styled.div`
  width: 100%;
  margin-top: 30px;
  border-bottom: 1px solid ${palette.grayLine};
  display: flex;
  justify-content: right;

  svg {
    margin: 0 14px;
  }

  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  li {
    border: none;
    background-color: ${palette.white};
    line-height: 55px;
    font-size: 14px;
  }
`;

const SigninProcess: React.FC = () => {
  return (
    <Container>
      <ul>
        <li>
          <span>01</span> 약관동의
          <ArrowIcon />
        </li>
        <li>
          <span>02</span> 정보입력
          <ArrowIcon />
        </li>
        <li>
          <span>03</span> 가입완료
        </li>
      </ul>
    </Container>
  );
};

export default SigninProcess;
