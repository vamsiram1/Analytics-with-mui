import React from "react";
import styles from "./SideBar.module.css";
import {listData} from "./SideBarListObject"

const SideBar = () => {
  return (
    <ul className={styles.sidebar}>
      {listData.map((list) => {
        return (
          <li className={styles.list}>
            <figure>
              <img src={list.icon} className={styles.icons}/>
            </figure>
            <span>
              <a className={styles.tab}>{list.name}</a>
            </span>
          </li>
        );
      })}
      <div className={styles.line}></div>
    </ul>
    
  );
};

export default SideBar;
