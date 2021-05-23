import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: #000000;
  padding: 70px 80px;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: space-between;

  img {
    width: 90px;
    margin-bottom: 76px;
  }

  .list-block {
    display: flex;
    align-items: flex-end;
  }

  .list-block ul {
    margin-right: 60px;
  }

  .terms-links {
    display: flex;
  }

  h4 {
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    text-transform: uppercase;

    color: #ffffff;
  }

  @media screen and (max-width: 900px) {
    padding: 48px 20px 65px 20px;
    flex-direction: column;

    .list-block {
      flex-direction: column;
    }
  }

  @media screen and (min-width: 2200px) {
    font-size: 38px;

    img {
      width: 200px;
    }

    h4 {
      font-size: 38px;
    }
  }
`;

export const SubBlock = styled.div`
  display: flex;

  .list-block {
    &:last-child {
      align-items: flex-start;
    }
  }
`;
