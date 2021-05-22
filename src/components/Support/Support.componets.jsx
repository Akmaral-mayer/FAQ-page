import styled from "styled-components";

export const SupportBlock = styled.div`
  width: 930px;
  background: #ffffff;
  border-radius: 20px;
  padding: 50px 156px 50px 147px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 129px;
  text-align: center;

  p {
    text-align: center;
    font-weight: bold;
    font-size: 22px;
    line-height: 150%;
    letter-spacing: -0.03em;
    color: #212121;
  }
  h2 {
    font-weight: 800;
    font-size: 42px;
    line-height: 125%;
    letter-spacing: -0.03em;
    color: rgba(0, 0, 0, 0.87);
    margin-bottom: 16px;
  }

  a {
    color: #1c54d3;
    text-decoration: underline;
  }

  .gap {
    display: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 50px 34px;
    margin-top: 110px;

    .gap {
      display: block;
    }

    br {
      display: none;
    }

    h2 {
      font-size: 28px;
      line-height: 150%;
    }
  }
`;
