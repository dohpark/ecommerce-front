import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { useRouter, NextRouter } from "next/router";
import Link from "next/link";
import palette from "../styles/palette";
import Logo from "../public/static/logo/logo.png";

const HeaderContainer = styled.header`
  background-color: ${palette.white};
  width: 100vw;
`;

const HeaderTop = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 0 20%;
  border-bottom: 1px solid ${palette.grayLine};

  button {
    height: 40px;
    border: none;
    background-color: ${palette.white};
    padding-right: 10px;
    font-size: 12px;
    cursor: pointer;
  }
`;

const HeaderSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 90px;

  .logo {
    display: flex;
    justify-content: center;
  }
`;

const HeaderNav = styled.nav`
  border-bottom: 1px solid ${palette.grayLine};
  display: flex;
  justify-content: center;

  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  li {
    border: none;
    background-color: ${palette.white};
    padding: 0 19px;
    line-height: 55px;
    font-size: 14px;
    cursor: pointer;
  }
`;

const Header: React.FC = () => {
  const router: NextRouter = useRouter();

  const loginClick = () => {
    router.push("/member/login");
  };

  const signinClick = () => {
    router.push("/member/signinAgreement");
  };

  return (
    <HeaderContainer>
      <HeaderTop>
        <div>
          <button type="button" onClick={loginClick}>
            로그인
          </button>
          <button type="button" onClick={signinClick}>
            회원가입
          </button>
          <button type="button">마이페이지</button>
          <button type="button">장바구니</button>
        </div>
      </HeaderTop>
      <HeaderSearch>
        <Link href="/">
          <div className="logo">
            <Image src={Logo} alt="Logo" width="140" height="35" />
          </div>
        </Link>
      </HeaderSearch>
      <HeaderNav>
        <ul>
          <li>전체</li>
          <li>문구</li>
          <li>리빙</li>
          <li>책</li>
          <li>배민그린</li>
          <li>ㅋㅋ에디션</li>
          <li>을지로에디션</li>
          <li>배달이친구들</li>
          <li>선물세트</li>
          <li>콜라보레이션</li>
        </ul>
      </HeaderNav>
    </HeaderContainer>
  );
};

export default Header;
