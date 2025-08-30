import { FormControl, MenuItem, Select } from "@mui/material";
import styles from "./ZoneNameDropdown.module.css";
import downArrow from "../../../assets/down_arrow.png";

const myArrow = () => {
  return (
    <figure>
      <img className={styles.down_arrow} src={downArrow} />
    </figure>
  );
};
const ZoneNameDropdown = () => {
  const zones = [
    {
      id: 1,
      zoneName: "zone1",
    },
    {
      id: 2,
      zoneName: "zone2",
    },
    {
      id: 3,
      zoneName: "zone3",
    },
    {
      id: 4,
      zoneName: "zone4",
    },
  ];

  return (
    <div id="zone_name_dropddown">
      <label>Zone Name</label>
      <FormControl fullWidth>
        <Select
          displayEmpty
          IconComponent={myArrow}
          sx={{
            marginTop: 1,
            borderRadius: 2,
            height: 41,
            fontSize: 14,

            "& .MuiSelect-select": {
              padding: "8px 14px",
            },

            "& .MuiSelect-root .MuiInputBase-root .MuiInputBase-colorPrimary":{
              display:"none",
            },
          }}
          MenuProps={{
            PaperProps: {
              onMouseDown: (e) => e.stopPropagation(), // ⬅️ prevents your document handler from firing
            },
          }}
        >
          <MenuItem disabled>
            Select Zone {/*here we need to give zone or dgm */}
          </MenuItem>

          {zones.map((zone) => {
            return (
              <MenuItem value={zone.zoneName} key={zone.id}>
                {zone.zoneName}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default ZoneNameDropdown;
