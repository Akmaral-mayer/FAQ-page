import styled from "styled-components";

export const PartnersBlock = styled.div`
  width: 100%;
  padding: 273px 10px 60px 10px;
  overflow-x: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 1400px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  img {
    width: 120px;
    margin-right: 80px;
  }

  img:last-child {
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    padding: 91px 10px 47px 10px;
    justify-content: flex-start;
  }

  @media screen and (min-width: 2200px) {
    div {
      width: 2000px;
    }

    img {
      width: 300px;
      margin-right: 120px;
    }
  }
`;
