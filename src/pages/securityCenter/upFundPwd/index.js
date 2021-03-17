import React, { useRef, useState, useEffect } from "react";
import styles from "./index.module.css";
import { useHistory } from "react-router-dom";
import TimeSend from "@/components/timeSend";
// import { useTranslation } from 'react-i18next'

import gobackImg from "@/assets/goback.png";
import mapImg from "@/assets/map.png";
import greenBanImg from "./img/greenBan.png";

import { Width, Height } from "@/utils/client";

const Index = () => {
  // const { t } = useTranslation()
  const { push, replace, goBack } = useHistory();

  const [oldValue, setOldValue] = useState("");
  const [newValue, setNewValue] = useState("");
  const [value, setValue] = useState("");
  const [email, setEmail] = useState("297871@163.com");

  // const [phVerif, setPhVerif] = useState("");
  // const [emVerif, setEmVerif] = useState("");

  const [type, setType] = useState(false);
  const [isCanComfir, setIsCanComfir] = useState(false);

  const oldIputRef = useRef()
  const newIputRef = useRef()
  const iputRef = useRef()

  useEffect(() => {
    // global.C_Dialog?.current?.Show({
    //   title: "Tips",
    //   content:
    //     "For the safety of your funds, the password cannot be withdrawn within 24h after changing the password.",
    //   btnText: "ok",
    //   callBack: () => { },
    // });
  }, []);

  useEffect(() => {

  }, []);

  return (
    <div className={styles.contaner} style={{ width: Width, height: Height }}>
      <div className={styles.lineBg} />
      <img className={styles.mapBg} src={mapImg} style={{ width: Width }} />

      <div className={styles.content}>
        <div>
          <img
            className={styles.goback}
            src={gobackImg}
            onClick={() => {
              goBack();
            }}
          />
        </div>
        <div className={styles.fromView}>
          <p className={styles.title}>Modify login password</p>
          <p className={styles.descripe}>
            For the safety of your funds, the password cannot be withdrawn
            within 24h after changing the password.
          </p>
          <div className={styles.clear}>

            <input
              className={styles.input}
              ref={oldIputRef}
              placeholder="Enter the original password"
              onChange={() => {
                setOldValue(oldIputRef?.current.value);
              }}
            />

          </div>
          <div className={styles.clear}>

            <input
              className={styles.input}
              ref={newIputRef}
              placeholder="New password (8-20 digits and letters)"
              onChange={() => {
                setNewValue(newIputRef?.current.value);
              }}
            />
          </div>
          <div className={styles.clear}>
            <input
              className={styles.input}
              ref={iputRef}
              placeholder="Double confirm"
              onChange={() => {
                setValue(iputRef?.current.value);
              }}
            />
            <input className={styles.input} placeholder="Double confirm" />
          </div>
          <div className={styles.btnView} onClick={() => {
            push("safeVerifi");
          }}>
            <p className={styles.btnText}>Next</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
