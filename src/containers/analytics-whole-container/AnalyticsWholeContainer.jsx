import React from "react";
import AnalyticsHeaderContainer from "../analytics-header-container/AnalyticsHeaderContainer";
import MetricCards from "../../components/metric-cards-component/metric-cards/MetricCards";
import ZoneRateContainer from "../zone-rate-container/ZoneRateContainer";
import styles from "./AnalyticsWholeContainer.module.css"

import CampusGraph from "../../components/graphs-components/CampusGraph";
import DgmGraph from "../../components/graphs-components/DgmGraph";
import ZoneGraph from "../../components/graphs-components/ZoneGraph";
const AnalyticsWholeContainer = () => {
  return (
    <>
      <div className={styles.analytics_section}>
        <AnalyticsHeaderContainer />
        <MetricCards />
        <ZoneRateContainer />
      </div>

      <div className={styles.prev_years_graphs_section}> 
        
        <CampusGraph/>
        <DgmGraph/>
        <ZoneGraph/>
        
      </div>
    </>
  );
};

export default AnalyticsWholeContainer;
