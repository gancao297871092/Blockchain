import React, { useState } from "react";

import styles from "./index.module.css";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

import pointImg from "@/assets/point.png";
import mapImg from "@/assets/map.png";
import btcImg from "@/assets/btc.png";
import icona from "./img/@.png";
import phone from "./img/phone.png";
import right from "./img/right.png";

import email from "./img/email.png";
import phonewrong from "./img/phonewrong.png";
import wrong from "./img/wrong.png";
import { Width } from "@/utils/client";
import { Icon } from "antd-mobile";

const Index = () => {
  const { t } = useTranslation();
  const { goBack, push } = useHistory();
  const [index, setIndex] = useState(0);
  const ContentRight = () => {
    return (
      <div>
        <div className={styles.title}>Security Center</div>
        <div className={styles.contentBox}>
          In order to protect the security of your assets, it is recommended to
          open another layer of authentication method.
        </div>
        <div className={styles.boxContainer}>
          <div
            className={styles.box_left}
            onClick={() => {
              push("phoneVerification");
            }}
          >
            <div className={styles.imgBox}>
              <img src={phone} alt="" />
            </div>
            <div className={styles.imgBox_text}>Phone Verification</div>
            <div className={styles.isRight}>
              <img src={right} alt="" />
            </div>
          </div>
          <div
            className={styles.box_right}
            onClick={() => {
              push("phoneVerification");
            }}
          >
            <div className={styles.imgBox}>
              <img src={icona} alt="" />
            </div>
            <div className={styles.imgBox_text}>E-mail Verification</div>
            <div className={styles.isRight}>
              <img src={right} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ContentWrong = () => {
    return (
      <div>
        <div className={styles.title}>Security Center</div>
        <div className={styles.contentBox}>
          In order to protect the security of your assets, it is recommended to
          open another layer of authentication method.
        </div>
        <div className={styles.boxContainer}>
          <div
            className={styles.box_left}
            onClick={() => {
              push("phoneVerification");
            }}
          >
            <div className={styles.imgBox}>
              <img src={email} alt="" />
            </div>
            <div className={styles.imgBox_text_wrong}>Phone Verification</div>
            <div className={styles.isRight}>
              <img src={wrong} alt="" />
            </div>
          </div>
          <div
            className={styles.box_right}
            onClick={() => {
              push("phoneVerification");
            }}
          >
            <div className={styles.imgBox}>
              <img src={phonewrong} alt="" />
            </div>
            <div className={styles.imgBox_text_wrong}>E-mail Verification</div>
            <div className={styles.isRight}>
              <img src={wrong} alt="" />
            </div>
          </div>
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
        {true ? <ContentRight /> : <ContentWrong />}
      </div>
    );
  };

  return (
    <div className={styles.contaner} style={{ width: Width }}>
      <div className={styles.linearBg} />
      <img className={styles.mapBg} src={mapImg} />
      <div className={styles.content}>
        <div className={styles.cardContainer}>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Index;
