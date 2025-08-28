// import React from "react";
// import { Tab, Tabs } from "@mui/material";
// import styles from "./ApplicationNavLinks.module.css";
// import { tabs } from "./links";
// import { useState } from "react";

// const ApplicationNavLinks = () => {
//   const [selectedTab, setSelectedTab] = useState(null);

//   const handleTabChange = (event, newValue) => {
//     setSelectedTab(newValue); // Do something with the new tab value
//   };

//   return (
//     <Tabs
//       className={styles.nav_tabs}
//       variant="scrollable"
//       scrollButtons={false}
//       sx={{
//         "& .MuiTabs-list": {
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//         },
//       }}
//     >
//       {tabs.map((tab) => {
//         return (
//           <Tab
//             key={tab.id}
//             onChange={handleTabChange}
//             label={tab.label}
//             sx={{
//               color: "#000000",
//               padding: "0px 15px",
//               fontFamily: "Arial, sans-serif",
//               borderRadius: "5px",
//               fontSize: "16px",
//               textTransform: "capitalize",
//               height: "30px",
//               "& .MuiTab-wrapper": {
//                 padding: 0,
//               },
//             }}
//           />
//         );
//       })}
//     </Tabs>
//   );
// };

// export default ApplicationNavLinks;

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
        "& .MuiTabs-list": {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding:"1px",
        },
        "& .MuiTabs-indicator": {display:"none"},
        "& .Mui-selected":{
          backgroundColor:"#3425FF",
          color:"#FFFFFF",
          fontWeight:"bold"
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
            borderRadius: "10px",
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
