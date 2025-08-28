import React from "react";
import styles from "./SearchDropdown.module.css";
import {
  Tab,
  Tabs,
} from "@mui/material";
import ZoneNameDropdown from "../zone-name-dropdown/ZoneNameDropdown";

const SearchDropdown = () => {
  return (
    <div
      id="search_dropdown_wrapper"
      className={styles.search_dropdown_wrapper}
    >
      <label className={styles.dropdown_header}>Filter Category</label>
      <Tabs
        sx={{
          marginTop: "10px",
          marginBottom: "10px",
          backgroundColor:"#F0F0F0",
          borderRadius:"10px",
          "& .MuiTabs-list": {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          },
        }}
      >
        <Tab label="Zone" className={styles.zone_tab} />

        <Tab label="DGM" className={styles.dgm_tab} />

        <Tab label="Campus" className={styles.campus_tab} />
      </Tabs>

      

      
          <ZoneNameDropdown/>
    
    </div>
  );
};

export default SearchDropdown;
