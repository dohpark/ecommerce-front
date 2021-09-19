import React from "react";
import styled from "styled-components";
import palette from "../../styles/palette";
import SigninFooter from "./SigninFooter";
import SigninProcess from "./SigninProcess";

const Container = styled.form`
  width: 100vw;
  padding: 0 23% 13%;
`;

const MandatoryInfo = styled.div`
  padding: 32px;
  background-color: ${palette.white};

  .first-child {
    p {
      font-size: 11px;
    }
    display: flex;
    justify-content: space-between;
    padding: 0px 10px 30px;
    border-bottom: 1px solid ${palette.grayLine};
  }

  .inputWrapper {
    border-bottom: 1px solid ${palette.grayLine};
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items: center;
  }

  label {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: bold;
    padding: 20px 25px;
    height: 100%;
    background-color: ${palette.grayBack};
  }

  input {
    height: 30px;
    width: 200px;
    margin: 0 15px;
    border: 1px solid ${palette.grayLine};
  }

  input[type="email"] {
    height: 30px;
    width: 250px;
    margin: 0 15px;
    border: 1px solid ${palette.grayLine};
  }

  select {
    height: 30px;
    width: 120px;
    margin: 0;
    border: 1px solid ${palette.grayLine};
  }

  input:focus {
    outline: none;
  }

  #address1 {
    margin: 10px 15px 10px;
  }

  #address2,
  #address3 {
    width: 400px;
    margin: 0px 15px 10px;
  }

  button {
    height: 30px;
    background-color: ${palette.white};
    border: 1px solid ${palette.grayLine};
  }
`;

const AdditionalInfo = styled.div`
  padding: 0 32px;
  background-color: ${palette.white};

  h3 {
    font-size: 15px;
    padding-bottom: 30px;
    text-align: center;
    border-bottom: 1px solid ${palette.grayLine};
  }

  .input-wrapper {
    border-bottom: 1px solid ${palette.grayLine};
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items: center;
  }

  label {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: bold;
    padding: 20px 25px;
    height: 100%;
    background-color: ${palette.grayBack};
  }

  select {
    height: 30px;
    width: 80px;
    margin: 0 0 0 15px;
    border: 1px solid ${palette.grayLine};
  }

  p {
    font-size: 11px;
    margin-top: 5px;
  }

  p:first-child {
    font-size: 11px;
    margin-top: 10px;
  }
`;

const Signin: React.FC = () => {
  return (
    <Container>
      <SigninProcess />
      <MandatoryInfo>
        <div className="first-child">
          <h3>기본정보</h3>
          <p>* 표시는 반드시 입력하셔야 하는 항목입니다.</p>
        </div>
        <div className="inputWrapper">
          <label>* 아이디</label>
          <input type="text" />
        </div>
        <div className="inputWrapper">
          <label>* 비밀번호</label>
          <input type="password" />
        </div>
        <div className="inputWrapper">
          <label>* 비밀번호 확인</label>
          <input type="password" />
        </div>
        <div className="inputWrapper">
          <label>* 이름</label>
          <input type="text" />
        </div>
        <div className="inputWrapper">
          <label>* 이메일</label>
          <div>
            <input type="email" />
            <select />
          </div>
        </div>
        <div className="inputWrapper">
          <label>* 휴대폰번호</label>
          <input type="tel" />
        </div>
        <div className="inputWrapper">
          <label>* 주소</label>
          <div>
            <input id="address1" type="address" readOnly />
            <button type="button">우편번호검색</button>
            <input id="address2" type="address" readOnly />
            <input id="address3" type="address" />
          </div>
        </div>
      </MandatoryInfo>
      <AdditionalInfo>
        <h3>생일축하합니다</h3>
        <div className="input-wrapper">
          <label>* 생일</label>
          <div>
            <select />
            <select />
            <select />
          </div>
        </div>
        <div>
          <p> - 생일을 알려주시면, 많이 많이 축하해 드릴게요.</p>
          <p>
            - 입력하신 생일은 수정이 어려우니, 회원가입시 정확하게 입력해주세요.
          </p>
          <p> - 만 14세 이상만 회원가입이 가능합니다.</p>
        </div>
      </AdditionalInfo>
      <SigninFooter />
    </Container>
  );
};

export default Signin;
