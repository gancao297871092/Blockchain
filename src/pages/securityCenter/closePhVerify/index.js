/* @关闭手机验证 */
import React, { useState, useEffect, useRef } from "react";

import styles from "./index.module.css";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import TimeSend from "../../../components/timeSend";

import pointImg from "@/assets/point.png";
import mapImg from "@/assets/map.png";
import backImg from "./img/back.png";

import { Width } from "@/utils/client";

const Index = () => {
  const { t } = useTranslation();
  const { goBack, push } = useHistory();
  const [index, setIndex] = useState(0);
  const [phoneCode, setPhoneCode] = useState("");
  const [emailCode, setEmailCode] = useState("");
  const [isConfirm, setConfirm] = useState(false);
  const inputRef = useRef();
  const inputRef1 = useRef();
  useEffect(() => {
    console.log(phoneCode, emailCode);

    if (phoneCode.length > 0 && emailCode.length > 0) {
      setConfirm(true);
    } else {
      setConfirm(false);
    }
  }, [phoneCode, emailCode]);

  return (
    <div className={styles.contaner} style={{ width: Width }}>
      <div className={styles.linearBg} />
      <img className={styles.mapBg} src={mapImg} />
      <div className={styles.content}>
        <div className={styles.back} onClick={() => goBack()}>
          <img src={backImg} alt="" />
        </div>
        <div className={styles.cardContainer}>
          <div
            className={styles.card}
            style={{ marginTop: 20, flex: 1, paddingBottom: 20 }}
          >
            <div className={styles.titleBox}>
              Send the verification code to 186****2098
            </div>
            <div className={styles.phoneCode}>
              <div className={styles.inputBox}>
                <input
                  type="number"
                  className={styles.phoneCodeInput}
                  placeholder="Phone Verification Code"
                  ref={inputRef}
                  onChange={() => {
                    setPhoneCode(inputRef?.current.value);
                  }}
                />
              </div>
              <TimeSend isLargeBtn={true} sendAddress={"1234"} />
            </div>

            <div className={styles.titleBox2}>
              Send the verification code to HHfffpll78@-Google.com
            </div>

            <div className={styles.phoneCode1}>
              <div className={styles.inputBox}>
                <input
                  type="number"
                  className={styles.phoneCodeInput}
                  placeholder="E-mail Verification Code"
                  ref={inputRef1}
                  onChange={() => {
                    setEmailCode(inputRef1?.current.value);
                  }}
                />
              </div>
              <TimeSend isLargeBtn={true} sendAddress={"1234"} />
            </div>

            <div
              className={styles.subMit}
              style={{ opacity: isConfirm ? 1 : 0.5 }}
              onClick={() => {
                if (!isConfirm) return;
              }}
            >
              <span>Confirm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
