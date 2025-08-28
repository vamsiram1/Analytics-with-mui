import React from "react";
import GraphWidget from "../../widgets/graphs-widgets/GraphWidget";
import AccordionWidget from "../../widgets/accordion-widget/AccordionWidget";
import styles from "./CampusGraph.module.css";
import campusIcon from "../../assets/Paper.svg";

const CampusGraph = () => {
  const campusData = {
    labels: ["2017-2018", "2019-2020", "2021-2022", "2023-2024"],
    issued: [150, 120, 180, 190],
    sold: [250, 170, 190, 250],
  };
 
  const formattedData = campusData.labels.map((year, idx) => ({
    year,
    Issued: campusData.issued[idx],
    Sold: campusData.sold[idx],
  }));
 
  const bars = [
    {
      dataKey: "Issued",
      gradientType: "linear",
      gradient: [
        { offset: "0%", color: "#F31616" },
        { offset: "100%", color: "#8D0D6F" },
      ],
      legendColor: "#F31616",
      label: "Issued",
    },
    {
      dataKey: "Sold",
      gradientType: "radial",
      gradient: [
        { offset: "0%", color: "#45D92E" },
        { offset: "100%", color: "#07968F" },
      ],
      legendColor: "#45D92E",
      label: "Sold",
    },
  ];
 
  return (
    <div className={`${styles.campus_graph} mt-2`}>
      <AccordionWidget
        id="campus-graph"
        className="campus-accordion"
        title={
          <div className={styles.campus_header}>
            <img
              src={campusIcon}
              alt="Campus Icon"
              className={styles.campus_header_icon}
            />
            <span className={styles.campus_header_title}>Campus Graph</span>
          </div>
        }
      >
        <GraphWidget data={formattedData} bars={bars} />
      </AccordionWidget>
    </div>
  );
};

export default CampusGraph;
