import MetricCards from "../../components/metric-cards-component/metric-cards/MetricCards";
import Accordian from "../../widgets/accordian-component/Accordian";
import AccordiansContainer from "../accordians-container/AccordiansContainer";
import AnalyticsHeaderContainer from "../analytics-header-container/AnalyticsHeaderContainer";
import ZoneRateContainer from "../zone-rate-container/ZoneRateContainer";
import styles from "./AnalyticsWholeContainer.module.css";
const AnalyticsWholeContainer = () => {
  return (
    <>
      <div className={styles.analytics_section}>
        <AnalyticsHeaderContainer />
        <MetricCards />
        <ZoneRateContainer />
      </div>

      <div className={styles.prev_years_graphs_section}> 

        <AccordiansContainer />
        
        
      </div>
    </>
  );
};

export default AnalyticsWholeContainer;
