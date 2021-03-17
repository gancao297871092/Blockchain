import React, { useState, useRef } from "react";

import styles from "./index.module.css";
import { useHistory, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import gobackImg from "@/assets/goback.png";
import mapImg from "@/assets/map.png";
import { Width } from "@/utils/client";

const Index = () => {
  const { state } = useLocation();
  const { t } = useTranslation();

  const { goBack, push } = useHistory();
  const [iputV, setIputV] = useState(state?.pwd || "");
  const iputRef = useRef();

  return (
    <div className={styles.contaner} style={{ width: Width }}>
      <div className={styles.linearBg} />
      <img className={styles.mapBg} src={mapImg} />

      <div className={styles.content}>
        <div>
          <img
            className={styles.goback}
            src={gobackImg}
            style={{ paddingRight: 10 }}
            onClick={() => {
              goBack();
            }}
          />
        </div>

        <div className={styles.card}>
          <p className={styles.title}>Set fund password</p>
          <p className={styles.descripe}>
            In order to protect the safety of your funds, please set a 6 digit
            password.
          </p>
          <div className={styles.inputView} style={{ width: Width - 64 }}>
            <div
              onClick={() => {
                document.getElementById("ipt").focus();
              }}
              className={styles.blockView}
            >
              <div className={styles.block} style={{ marginLeft: 0 }}>
                {iputV.length > 0 ? <div className={styles.blockY} /> : null}
              </div>
              <div className={styles.block}>
                {iputV.length > 1 ? <div className={styles.blockY} /> : null}
              </div>
              <div className={styles.block}>
                {iputV.length > 2 ? <div className={styles.blockY} /> : null}
              </div>
              <div className={styles.block}>
                {iputV.length > 3 ? <div className={styles.blockY} /> : null}
              </div>
              <div className={styles.block}>
                {iputV.length > 4 ? <div className={styles.blockY} /> : null}
              </div>
              <div className={styles.block}>
                {iputV.length > 5 ? <div className={styles.blockY} /> : null}
              </div>
            </div>
            <input
              id="ipt"
              className={styles.input}
              type="number"
              ref={iputRef}
              maxlength={6}
              onChange={() => {
                if (iputRef?.current.value.length > 6) document.getElementById('ipt').value = iputV
                setIputV(iputRef?.current.value);
              }}
            />
          </div>
          <div
            className={styles.btnView}
            style={{ width: Width - 64, opacity: iputV.length >= 6 ? 1 : 0.5 }}
            onClick={() => {
              if (iputV.length < 6) return;
              if (state?.from == "wallet") return push("safeVerifi");
              push("makePwd", { pwd: iputV });
            }}
          >
            <p className={styles.btnText}>Next</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
