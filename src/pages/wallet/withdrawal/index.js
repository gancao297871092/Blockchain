// @提现
import React, { useState, useEffect, useRef } from "react";

import styles from "./index.module.css";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MoveGress from "@/components/moveGress";
import mapImg from "@/assets/map.png";
import btcBackImg from "./img/btcBacK.png";
import btcoinImg from "./img/btcoin.png";
import btcoinallImg from "./img/btcoinall.png";
import moreImg from "./img/more.png";
import pasteImg from "./img/paste.png";
import { Width } from "@/utils/client";

const Index = () => {
  const { t } = useTranslation();
  const { goBack, push } = useHistory();
  const [index, setIndex] = useState(0);

  const Content = () => {
    return (
      <div>
        <div className={styles.headBox}>
          <div className={styles.imgBox}>
            <img src={btcoinallImg} alt="" />
          </div>
          <div className={styles.headText}>BTC</div>
          <div className={styles.headText2}>≈30,428.09 USD</div>
        </div>
        <div className={styles.btcBackImgBox}>
          <img src={btcBackImg} alt="" />
        </div>
        <div
          className={styles.recordBox}
          onClick={() => {
            push("rechargeHistory");
          }}
        >
          <div className={styles.record}>Transaction Record</div>
          <div className={styles.recordImgBox}>
            <img src={moreImg} alt="" />
          </div>
        </div>
        <div className={styles.quantity}>
          <img src={btcoinImg} alt="" />
          <div className={styles.quantity_input_box}>
            <input
              type="number"
              placeholder="Withdrawal quantity"
              className={styles.quantity_input}
            />
          </div>
        </div>
        <div className={styles.available}>Available: 1.38596039</div>
        <div className={styles.moveGress}>
          <MoveGress />
        </div>

        <div className={styles.contentText}>
          * Each BTC transaction will incur a gas fee, please refer to the
          actual receipt.
        </div>

        <div className={styles.addressBox}>
          <div className={styles.address}>
            <input
              type="text"
              placeholder="Please enter the withdrawal address"
              className={styles.addressInput}
            />
          </div>
          <div className={styles.addressIcon}>
            <img src={pasteImg} alt="" />
          </div>
        </div>

        <div
          className={styles.submitBox}
          onClick={() => {
            // push("walletManner");
            global.C_Dialog?.current?.Show({
              title: 'No fund password is set',
              content: 'For the safety of your funds, please set the fund password first and then wi-thdraw cash',
              btnText: 'OK',
              callBack: () => {
                push('setFundPwd', { from: 'wallet' })
              }
            })
          }}
        >
          <span>Submit</span>
        </div>

        <div className={styles.contentBox}>
          * In order to protect the security of your assets, when you modify
          your account login password, we will restrict withdrawals. Please pay
          attention to protect your information to prevent leakage
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
        <Content></Content>
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
