import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./CustomAccordion.css";
import styled from "styled-components";

const Title = styled.h2`
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
`;

const Line = styled.div`
  width: 64px;
  border-top: 3px solid #212121;
  @media (max-width: 768px) {
    display: none;
  }
`;

const useStyles = makeStyles((theme) => ({
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

export function CustomAccordion({ el, id }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState("00");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="accordion" id={id}>
      <Line />
      <Title>{el.title}</Title>
      {el.data.map((item, idx) => {
        return (
          <Accordion
            key={idx}
            expanded={expanded === `${id}${idx}`}
            onChange={handleChange(`${id}${idx}`)}
            className={classes.item}
            defaultExpanded={true}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ fill: "#000000" }} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              classes={{ content: classes.summary, root: classes.summary }}
            >
              <Typography className={classes.heading}>
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails classes={{ root: classes.details }}>
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
