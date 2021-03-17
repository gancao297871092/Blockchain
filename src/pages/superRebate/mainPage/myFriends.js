import React from "react";
import FlatList from "@/components/flatlist";

import styles from "./index.module.css";

// MyFriends组件
const Index = () => {
  return (
    <div>
      <div className={styles.MyFriends_container}>
        <div className={styles.MyFriends_container_header}>
          <div>Level/ID/Join time</div>
          <div>Generate income (BTC)</div>
        </div>
        <FlatList
          style={{
            with: "100%",
            height: 222,
            overflowY: "scroll",
          }}
          item={(item) => (
            <div className={styles.itemView}>
              <div className={styles.itemView_item}>
                <div className={styles.itemView_img}>
                  <span>LV.1</span>
                </div>
                <div className={styles.itemView_date_id}>
                  <div className={styles.itemView_id}>ID:463829</div>
                  <div className={styles.itemView_date}>12-23 13:00</div>
                </div>
              </div>

              <div className={styles.itemView_money}>+0.00002314</div>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default Index;
