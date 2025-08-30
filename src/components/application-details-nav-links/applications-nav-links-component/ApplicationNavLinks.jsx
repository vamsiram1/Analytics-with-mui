import { Tab, Tabs } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./ApplicationNavLinks.module.css";
import { tabs } from "./links";

const ApplicationNavLinks = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentValue =
    tabs.find((t) => location.pathname.startsWith(t.path))?.path ?? false;

  const handleTabChange = (e, newValue) => {
    navigate(newValue);

  };

  return (
    <Tabs
      className={styles.nav_tabs}
      value={currentValue}
      onChange={handleTabChange}
      variant="scrollable"
      scrollButtons={false}
      textColor="#000000"
      sx={{
        minHeight:"38px",
        
     
        "& button":{
            minHeight:"35px",
            padding:"19px 18px",
        },  

        "& .MuiTabs-list": {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding:"1px",
          height:"100%",
        },
        "& .MuiTabs-indicator": {display:"none"},
        "& .Mui-selected":{
          backgroundColor:"#3425FF",
          color:"#FFFFFF",
          fontWeight:"bold"
        },
        "& .MuiTabs-scroller":{
          height:"100%",
        }

      }}
    >
      {tabs.map((tab) => (
        <Tab

          key={tab.id}
          value={tab.path}
          label={tab.label}
          sx={{
            color: "#000000",
            padding: "0px 15px",
            fontFamily: "Arial, sans-serif",
            borderRadius: "6px",
            fontSize: "16px",
            textTransform: "capitalize",
            height: "30px",
            "& .MuiTab-wrapper": {
              padding: 0,
            },
          }}
        />
      ))}
    </Tabs>
  );
};

export default ApplicationNavLinks;


