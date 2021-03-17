// @手机验证
import React, { useState } from "react";

import styles from "./index.module.css";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

import pointImg from "@/assets/point.png";
import mapImg from "@/assets/map.png";
import backImg from "./img/back.png";
import phone from "./img/phone.png";
import notice from "./img/notice.png";
import email from "./img/@.png";
import { Width } from "@/utils/client";

const Index = () => {
  const { t } = useTranslation();
  const { goBack, push } = useHistory();
  const [index, setIndex] = useState(0);

  const PhoneVerify = () => {
    return (
      <div className={styles.bigBox}>
        <div className={styles.phoneVerifyBox}>
          <img src={phone} alt="" />
        </div>
        <div className={styles.verify_text}>Phone Verification</div>
        <div className={styles.notice_text}>
          Mobile phone verification adds another layer of security to your
          account.
        </div>
        <div
          className={styles.btn}
          onClick={() => {
            push("verifEnabled");
          }}
        >
          <img src={notice} alt="" />
          <div className={styles.btn_text}>Turn on</div>
        </div>
      </div>
    );
  };

  const EmailVerify = () => {
    return (
      <div className={styles.bigBox}>
        <div className={styles.phoneVerifyBox}>
          <img src={email} alt="" />
        </div>
        <div className={styles.verify_text}>E-mail Verification</div>
        <div className={styles.notice_text}>
          E-mail verification adds another layer of security to your account.
        </div>
        <div
          className={styles.btn}
          onClick={() => {
            push("verifEnabled");
          }}
        >
          <img src={notice} alt="" />
          <div className={styles.btn_text}>Turn on</div>
        </div>
      </div>
    );
  };

  const Card = () => {
    return (
      <div
        className={styles.card}
        style={{ marginTop: 20, flex: 1, paddingBottom: 20 }}
      >
        {false ? <PhoneVerify /> : <EmailVerify />}
      </div>
    );
  };
  return (
    <div className={styles.contaner} style={{ width: Width }}>
      <div className={styles.linearBg} />
      <img className={styles.mapBg} src={mapImg} />
      <div className={styles.content}>
        <div className={styles.back} onClick={() => goBack()}>
          <img src={backImg} alt="" />
        </div>
        <div className={styles.cardContainer}>
          <Card />
        </div>
      </div>
    </div>
  );
};
export default Index;
