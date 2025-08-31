import React, { useState } from "react";
import styles from "./AccordiansContainer.module.css";
import Accordian from "../../widgets/accordian-component/Accordian";

const AccordiansContainer = () => {
  // Track which accordion is open (null = none)
  const [expandedIndex, setExpandedIndex] = useState(null);

  const accordianData = [
    {
      title: "DGM wise graphh",
      graphData: [
        { label: "Issued", percent: 16 },
        { label: "Sold", percent: -12 },
      ],
      graphBarData: [
        { year: "2018-2019", issued: 60, sold: 100 },
        { year: "2019-2020", issued: 100, sold: 70 },
        { year: "2021-2022", issued: 100, sold: 30 },
        { year: "2023-2024", issued: 100, sold: 60 },
      ],
    },
    {
      title: "DGM wise graphh",
      graphData: [
        { label: "Issued", percent: 16 },
        { label: "Sold", percent: -12 },
      ],
      graphBarData: [
        { year: "2018-2019", issued: 60, sold: 100 },
        { year: "2019-2020", issued: 100, sold: 70 },
        { year: "2021-2022", issued: 100, sold: 30 },
        { year: "2023-2024", issued: 100, sold: 60 },
      ],
    },
    {
      title: "DGM wise graphh",
      graphData: [
        { label: "Issued", percent: 16 },
        { label: "Sold", percent: -12 },
      ],
      graphBarData: [
        { year: "2018-2019", issued: 60, sold: 100 },
        { year: "2019-2020", issued: 100, sold: 70 },
        { year: "2021-2022", issued: 100, sold: 30 },
        { year: "2023-2024", issued: 100, sold: 60 },
      ],
    },
  ];

  // MUI onChange signature: (event, isExpanded) => void
  const handleChange = (index) => (_event, isExpanded) => {
    setExpandedIndex(isExpanded ? index : null); // open clicked, close others
  };

  return (
    <div id="accordian_wrapper" className={styles.accordian_wrapper}>
      {accordianData.map((item, index) => (
        <Accordian
          key={index}
          zoneTitle={item.title}
          percentageItems={item.graphData}
          graphBarData={item.graphBarData}
          expanded={expandedIndex === index}
          onChange={handleChange(index)}
        />
      ))}
    </div>
  );
};

export default AccordiansContainer;
