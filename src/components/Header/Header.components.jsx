import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  padding: 21px 80px;
  align-items: center;

  nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  img {
    width: 90px;
  }

  ul {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

  .logo {
    margin-right: 48px;
  }

  .burger {
    display: none;
  }

  @media screen and (max-width: 900px) {
    justify-content: space-between;
    padding: 20px 16px;

    .burger {
      display: block;
      width: 48px;
      cursor: pointer;
    }

    nav {
      display: none;
    }
  }

  @media screen and (min-width: 2200px) {
    img {
      width: 200px;
    }

    ul {
      font-size: 38px;
    }

    .btn {
      width: 400px;
      padding: 50px 0;
    }

    .btn span {
      font-size: 38px;
    }
  }
`;
