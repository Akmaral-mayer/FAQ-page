import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

export const AccordionWrapper = styled.div`
  width: 830px;
  @media screen and (max-width: 900px) {
    width: 100%;
    padding: 0 16px;
  }

  @media screen and (min-width: 2000px) {
    width: 1500px;
  }
`;

export const Title = styled.h2`
  font-weight: 800;
  font-size: 42px;
  line-height: 125%;
  display: flex;
  align-items: center;
  letter-spacing: -0.03em;
  color: rgba(0, 0, 0, 0.87);
  margin-top: 36px;
  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media screen and (min-width: 2200px) {
    font-size: 88px;
    margin-top: 50px;
  }
`;

export const Line = styled.div`
  width: 64px;
  border-top: 3px solid #212121;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Answer = styled.div`
  a {
    color: #2f66e3;
  }
  @media screen and (min-width: 2200px) {
    font-size: 38px;
    line-height: 133%;
  }
`;

export const Question = styled.div`
  font-size: 22px;
  font-size: 22px;
  flex-basis: 80%;
  flex-shrink: 0;
  font-weight: bold;
  line-height: 29px;
  letter-spacing: -0.03em;
  color: #000000;
  padding: 0;

  @media (max-width: 768px) {
    fontsize: "17px";
  }

  @media screen and (min-width: 2200px) {
    font-size: 48px;
    line-height: 133%;
    margin: 30px 0;
  }
`;

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: "22px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "17px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "22px",
    },
    flexBasis: "80%",
    flexShrink: 0,
    fontWeight: "bold",
    lineHeight: "29px",
    letterSpacing: "-0.03em",
    color: "#000000",
    padding: 0,
  },
  item: {
    background: "none",
    boxShadow: "none",
    "&.MuiAccordion-root:before": {
      display: "none",
    },
    fontFamily: "Inter",
    padding: 0,
    marginBottom: 40,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 35,
    },
  },
  summary: {
    padding: 0,
    fontSize: "22px",
    lineHeight: "133%",
    fontFamily: "Inter",
  },
  details: {
    padding: 0,
    fontSize: "16px",
    lineHeight: "150%",
    fontFamily: "Inter",
  },
}));
