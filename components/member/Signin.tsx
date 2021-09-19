import React from "react";
import styled from "styled-components";
import palette from "../../styles/palette";
import SigninProcess from "./SigninProcess";

const Container = styled.form`
  width: 100vw;
  padding: 0 23% 13%;
  display: flex;
  flex-direction: column;
`;

const MandatoryInfo = styled.div`
  padding: 32px;
  background-color: ${palette.white};

  .first-Child {
    justify-content: center;
    align-items: center;
  }

  .inputWrapper {
  }

  label {
    display: inline-block;
    padding: 10px 25px;
    width: 200px;
    background-color: ${palette.grayLine};
  }
`;

const AdditionalInfo = styled.div``;

const Signin: React.FC = () => {
  return (
    <Container>
      <SigninProcess />
      <MandatoryInfo>
        <div className="first-child">
          <h3>기본정보</h3>
          <p>이것은 비밀이여 비밀!!</p>
        </div>
        <div className="inputWrapper">
          <label>아이디</label>
          <input type="text" />
        </div>
        <div className="inputWrapper">
          <label>비밀번호</label>
          <input type="password" />
        </div>
        <div className="inputWrapper">
          <label>비밀번호 확인</label>
          <input type="password" />
        </div>
        <div className="inputWrapper">
          <label>이름</label>
          <input type="text" />
        </div>
        <div className="inputWrapper">
          <label>이메일</label>
          <input type="email" />
        </div>
        <div className="inputWrapper">
          <label>휴대폰번호</label>
          <input type="number" />
        </div>
        <div className="inputWrapper">
          <label>주소</label>
          <input type="address" />
        </div>
      </MandatoryInfo>
      <AdditionalInfo>
        <h3>생일축하합니다</h3>
        <label>생일</label>
        <select />
        <select />
        <select />
      </AdditionalInfo>
    </Container>
  );
};

export default Signin;
