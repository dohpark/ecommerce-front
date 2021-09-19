import React from "react";
import styled from "styled-components";
import palette from "../../styles/palette";
import AgreementText from "./AgreementText";
import SigninProcess from "./SigninProcess";
import SigninFooter from "./SigninFooter";

const Container = styled.div`
  width: 100vw;
  padding: 0 23% 13%;
`;

const Agreement = styled.form`
  width: 100%;
  padding: 30px;
  h1 {
    text-align: center;
    border-bottom: solid 1px ${palette.grayLine};
    padding-bottom: 40px;
  }
`;

const AgreementBox = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 12px;

  em,
  strong {
    font-weight: bold;
  }
`;

const AgreementTextBox = styled.div`
  width: 750px;
  padding: 20px;
  margin: 10px 0 0;
  border: 1px solid ${palette.grayLine};
  overflow: scroll;
  height: 180px;
  font-size: 12px;
`;

const SigninAgreement: React.FC = () => {
  return (
    <Container>
      <SigninProcess />
      <Agreement>
        <h1>약관동의</h1>
        <AgreementBox>
          <input type="checkbox" />
          <label>
            <em>배민문방구의 모든 약관을 확인하고 전체 동의합니다</em>
          </label>
          <span>(전체동의, 선택항목도 포함합니다.)</span>
        </AgreementBox>
        <AgreementBox>
          <input type="checkbox" />
          <label>
            <strong>(필수)</strong> 이용약관
          </label>
          <span>전체보기</span>
          <AgreementTextBox>
            <AgreementText />
          </AgreementTextBox>
        </AgreementBox>
        <AgreementBox>
          <input type="checkbox" />
          <label>
            <strong>(필수)</strong> 개인정보 수집 및 이용
          </label>
          <span>전체보기</span>
          <AgreementTextBox>
            <AgreementText />
          </AgreementTextBox>
        </AgreementBox>
      </Agreement>
      <SigninFooter />
    </Container>
  );
};

export default SigninAgreement;
