import React from "react";
import styles from "./AccordiansContainer.module.css";
import Accordian from "../../widgets/accordian-component/Accordian";
const AccordiansContainer = () => {
  const accordianData = [
    {
      title: "DGM wise graphh",
      graphData: [
        { label: "Issued", percent: 16 },
        { label: "Sold", percent: -12 },
      ],
      graphBarData: [
        { year: "2018-2019", issued: 10, sold: 100 },
        { year: "2019-2020", issued: 100, sold: 70 },
        { year: "2021-2022", issued: 100, sold: 30 },
        { year: "2023-2024", issued: 100, sold: 60 },
      ],
    },
  ];

  console.log(accordianData[0].title);
  console.log(accordianData[0].graphData);
  return (
    <div id="accordian_wrapper" className={styles.accordian_wrapper}>
      <Accordian
        zoneTitle={accordianData[0].title}
        percentageItems={accordianData[0].graphData}
        graphBarData={accordianData[0].graphBarData}
      />
    </div>
  );
};

export default AccordiansContainer;
