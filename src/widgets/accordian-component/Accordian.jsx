import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BarGraph from "../graph-widget/BarGraph";
import styles from "./Accordian.module.css";
import graphTitleIcon from "../../assets/Paper.svg";
import PercentBox from "./PercentBox";

const Accordian = ({ zoneTitle, percentageItems, graphBarData }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Accordion
      expanded={expanded}
      onChange={(_, isExpanded) => setExpanded(isExpanded)}
      sx={{
        "&&": {
          "--Paper-shadow": "none",
          borderRadius: "20px",
          boxShadow: "none",
          border: "1px solid #E6E4F0", 
          borderImage: expanded
            ? "linear-gradient(45deg, #FF5722, rgb(114, 230, 183)) 1" // Gradient border when expanded
            : "none",

          overflow: "hidden",
        },
        "&::before": { display: "none" },
        "& .MuiButtonBase-root": {
          alignItems: "start",
          padding: "12px 18px",
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
        sx={{
          "& .MuiAccordionSummary-content": {
            margin: "0px !important",
          },
          "&.Mui-expanded .MuiAccordionSummary-content": {
            margin: "0px !important",
          },
        }}
      >
        <Typography component="span">
          <div className={styles.title_header}>
            <figure>
              <img src={graphTitleIcon} alt="Title Icon" />
            </figure>
            <div className={styles.header_right}>
              <p className={styles.header_title}>{zoneTitle}</p>
            </div>
          </div>
          {!expanded && <PercentBox items={percentageItems} />}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography component="div">
          <BarGraph graphBarData={graphBarData} />
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default Accordian;
