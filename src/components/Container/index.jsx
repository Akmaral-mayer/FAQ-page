import styled from "styled-components";

export const Container = styled.div`
  width: 1120px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 900px) {
    width: 100%;
  }

  @media screen and (min-width: 2200px) {
    width: 2000px;
  }
`;
