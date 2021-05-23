import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./CustomAccordion.components.jsx";
import {
  AccordionWrapper,
  Title,
  Line,
  useStyles,
  Answer,
  Question,
} from "./CustomAccordion.components";

export function CustomAccordion({ el, id }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState("00");

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <AccordionWrapper id={id}>
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
              <Question>{item.question}</Question>
            </AccordionSummary>
            <AccordionDetails classes={{ root: classes.details }}>
              <Answer dangerouslySetInnerHTML={{ __html: item.answer }} />
            </AccordionDetails>
          </Accordion>
        );
      })}
    </AccordionWrapper>
  );
}
