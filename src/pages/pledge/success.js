import React, { useState, useEffect } from "react";

import styles from "./index.module.css";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MoveGress from "@/components/moveGress";

import gobackImg from "@/assets/goback.png";
import ethImg from "@/assets/eth.png";
import mapImg from "@/assets/map.png";
import okImg from "./img/ok.png";
import { Width } from "@/utils/client";

const Index = () => {
  // const { t } = useTranslation()
  const { goBack, replace } = useHistory();

  return (
    <div className={styles.contaner} style={{ width: Width }}>
      <div className={styles.linearBg} />
      <img className={styles.mapBg} src={mapImg} />

      <div className={styles.content}>
        <div
          style={{ paddingRight: 10 }}
          onClick={() => {
            goBack();
          }}
        >
          <img className={styles.gobackImg} src={gobackImg} />
        </div>
        <div
          className={styles.cardSuccess}
          style={{
            width: Width - 24,
            marginLeft: 12,
          }}
        >
          <div className={styles.cardBody}>
            <img src={okImg} className={styles.okImg} />
            <p className={styles.okText}>Success</p>
            <p className={styles.value}>1.37482094</p>
            <div className={styles.flexRow}>
              <img src={ethImg} className={styles.ethImg} />
              <p className={styles.eth}>ETH</p>
            </div>

            <div className={styles.borderView} style={{ marginTop: 20 }}>
              <p className={styles.charge}>Service charge</p>
              <p className={styles.chargeV}>0.00000004</p>
            </div>

            <div className={styles.borderView}>
              <p className={styles.charge}>Service charge</p>
              <p className={styles.chargeV}>0.00000004</p>
            </div>

            <div
              className={styles.btnViews}
              onClick={() => {
                replace("/home");
              }}
            >
              <p className={styles.btnTexts}>Confirm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
