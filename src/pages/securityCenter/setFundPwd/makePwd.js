import React, { useState, useRef } from "react";

import styles from "./index.module.css";
import { useHistory, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import gobackImg from "@/assets/goback.png";
import mapImg from "@/assets/map.png";
import { Width } from "@/utils/client";

const Index = () => {
  const { t } = useTranslation();
  const { goBack, push } = useHistory();

  const [iputVs, setIputVs] = useState("");
  const iputsRef = useRef();
  const { state } = useLocation();

  return (
    <div className={styles.contaner} style={{ width: Width }}>
      <div className={styles.linearBg} />
      <img className={styles.mapBg} src={mapImg} />

      <div className={styles.content}>
        <div
          style={{ paddingRight: 10 }}
          onClick={() => {
            push("setFundPwd", { pwd: state.pwd });
          }}
        >
          <img className={styles.goback} src={gobackImg} />
        </div>

        <div className={styles.card}>
          <p className={styles.title}>Set fund password</p>
          <p className={styles.descripe}>Please enter again to confirm</p>
          <div className={styles.inputSecondView} style={{ width: Width - 64 }}>
            <div
              onClick={() => {
                document.getElementById("ipts").focus();
              }}
              className={styles.blockView}
            >
              <div className={styles.block} style={{ marginLeft: 0 }}>
                {iputVs.length > 0 ? <div className={styles.blockY} /> : null}
              </div>
              <div className={styles.block}>
                {iputVs.length > 1 ? <div className={styles.blockY} /> : null}
              </div>
              <div className={styles.block}>
                {iputVs.length > 2 ? <div className={styles.blockY} /> : null}
              </div>
              <div className={styles.block}>
                {iputVs.length > 3 ? <div className={styles.blockY} /> : null}
              </div>
              <div className={styles.block}>
                {iputVs.length > 4 ? <div className={styles.blockY} /> : null}
              </div>
              <div className={styles.block}>
                {iputVs.length > 5 ? <div className={styles.blockY} /> : null}
              </div>
            </div>
            <input
              id="ipts"
              className={styles.input}
              type="number"
              ref={iputsRef}
              maxlength={6}
              onChange={() => {
                if (iputsRef?.current.value.length > 6) document.getElementById('ipts').value = iputVs
                setIputVs(iputsRef?.current.value);
              }}
            />
          </div>
          <div
            className={styles.btnView}
            style={{ width: Width - 64, opacity: iputVs.length >= 6 ? 1 : 0.5 }}
            onClick={() => {
              if (iputVs.length < 6) return;
              push("safeVerifi");
            }}
          >
            <p className={styles.btnText}>Comfirm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
