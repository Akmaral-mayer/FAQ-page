import styled from "styled-components";

export const Title = styled.h1`
  font-weight: 800;
  font-size: 80px;
  line-height: 100%;
  text-align: center;
  letter-spacing: -0.03em;
  color: #000000;
  width: 738px;
  margin-top: 40px;
  margin-bottom: 160px;
  @media (max-width: 768px) {
    font-size: 56px;
    line-height: 110%;
    width: 334px;
    margin-bottom: 64px;
  }
`;

export const Link = styled.a`
  margin-bottom: 32px;
  color: ${(props) => (props.active ? "#1C54D3" : "#000000")};
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  text-decoration: none;
`;

export const LeftMenu = styled.nav`
  display: flex;
  flex-direction: column;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 3em;
  @media (max-width: 768px) {
    display: none;
  }
`;
