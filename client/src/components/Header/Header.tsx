"use client";
import Link from "next/link";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  z-index: 50;
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  font-size: 1.25rem;
  font-weight: 700;
  color: #2563eb; /* Tailwind의 blue-600 */
  text-decoration: none;
`;

const Nav = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 1.5rem;
    font-weight: 500;
    color: #374151; /* Tailwind의 gray-700 */
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
`;

const UserMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const IconButton = styled.button`
  display: none;
  color: #4b5563; /* Tailwind의 gray-600 */
  background: none;
  border: none;
  font-size: 1.25rem;

  @media (min-width: 768px) {
    display: block;
  }
`;

const LoginButton = styled(Link)`
  padding: 0.5rem 1rem;
  background-color: #2563eb;
  color: white;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  text-decoration: none;

  &:hover {
    background-color: #1d4ed8;
  }
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        {/* 로고 */}
        <Logo href="/home">HoonsTrip</Logo>

        {/* 메뉴 */}
        <Nav>
          <NavLink href="/home">홈</NavLink>
          <NavLink href="/flight">항공권</NavLink>
          <NavLink href="/hotel">호텔</NavLink>
          <NavLink href="/activity">액티비티</NavLink>
          <NavLink href="/mypage">마이페이지</NavLink>
        </Nav>

        {/* 유저 메뉴 */}
        <UserMenu>
          <IconButton aria-label="검색">🔍</IconButton>
          <IconButton aria-label="알림">🔔</IconButton>
          <LoginButton href="/login">로그인</LoginButton>
        </UserMenu>
      </HeaderContainer>
    </HeaderWrapper>
  );
}
