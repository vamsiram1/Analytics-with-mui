import MetricCards from "../../components/metric-cards-component/metric-cards/MetricCards";
import AccordiansContainer from "../accordians-container/AccordiansContainer";
import AnalyticsHeaderContainer from "../analytics-header-container/AnalyticsHeaderContainer";
import ZoneRateContainer from "../zone-rate-container/ZoneRateContainer";
import styles from "./AnalyticsWholeContainer.module.css";



import headerIon from "../../assets/accordians_header.png";
const AnalyticsWholeContainer = () => {
  return (
    <>
      <div className={styles.analytics_section}>
        <AnalyticsHeaderContainer />
        <MetricCards />
        <ZoneRateContainer />
      </div>

      <div className={styles.prev_years_graphs_section}> 
        <div className={styles.accordian_header_text}>
          <figure>
            <img src={headerIon} className={styles.icon}/>
          </figure>
          <h6 className={styles.header_text}>Previous Year Graph</h6>
        </div>
        <AccordiansContainer />
        
        
      </div>
    </>
  );
};

export default AnalyticsWholeContainer;
