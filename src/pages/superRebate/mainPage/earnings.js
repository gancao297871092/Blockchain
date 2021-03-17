import React from "react";
import FlatList from "@/components/flatlist";

import styles from "./index.module.css";

// Earnings 组件
const Index = () => {
  return (
    <div className={styles.earnings_container}>
      <FlatList
        style={{
          with: "100%",
          height: 161,
          overflowY: "scroll",
        }}
        item={(item) => (
          <div className={styles.earnings_container_item}>
            <div className={styles.earnings_container_item_left}>
              <div className={styles.earnings_container_item_left_top}>
                Rebate BTC
              </div>
              <div className={styles.earnings_container_item_left_bot}>
                <span className={styles.earnings_container_item_span1}>
                  +0.00002314
                </span>
                <span className={styles.earnings_container_item_span2}>
                  ≈31,221.04 USD
                </span>
              </div>
            </div>
            <div className={styles.earnings_container_item_right}>
              <div className={styles.earnings_container_item_right_top}>
                ID:463829
              </div>
              <div className={styles.earnings_container_item_right_bot}>
                12-23 13:00
              </div>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default Index;
