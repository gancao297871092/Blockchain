// @我们的使命

import React, { useState, useEffect, useRef } from "react";
import styles from "./index.module.css";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import mapImg from "@/assets/map.png";
import bottomBgImg from "./img/bottomBg.png";

import zhizhuImg from "@/assets/zhizhu.png";
import confirmationImg from "@/assets/confirmation.png";
import a16zImg from "@/assets/a16z.png";
import bcvImg from "@/assets/bcv.png";
import craftImg from "@/assets/craft.png";
import defianceImg from "@/assets/defiance.png";
import dragonflyImg from "@/assets/dragonfly.png";
import kindredImg from "@/assets/kindred.png";
import polychainImg from "@/assets/polychain.png";
import rocktreeImg from "@/assets/rocktree.png";
import scalarImg from "@/assets/scalar.png";
import spartanImg from "@/assets/spartan.png";
import { Width } from "@/utils/client";

const Index = () => {
  const { t } = useTranslation();
  const { goBack, push } = useHistory();

  const Content = () => {
    return (
      <div>
        <div className={styles.missionContainer}>
          <div className={styles.missionContainer_title}>GarySwap</div>
          <div className={styles.missionContainer_title2}>
            Let everyone easily get high profits
          </div>
          <div className={styles.missionContainer_content}>
            We have built an advanced open platform that gains revenue through
            quantitative exchanges.
          </div>
          <div className={styles.cells_container}>
            <div className={styles.cells_container_content}>
              Quantitative flow cells.
            </div>
          </div>

          <div className={styles.cells_container_text}>
            <div className={styles.cells_container_content1}>
              We spent a full ten years of precipitation, just to create the
              fastest, most stable, and most powerful quantitative flow pool in
              history. We will not forget our original intention and continue to
              work hard to polish Grayswap better and make everyone better.
              satisfaction.
            </div>
          </div>

          <div className={styles.cells_container1}>
            <div className={styles.cells_container_content2}>
              Provide support to ervery user.
            </div>
          </div>

          <div className={styles.cells_container_text1}>
            <div className={styles.cells_container_content3}>
              Whether you are a financial player or a novice, you can easily
              understand the use of Grayswap, concise and clear, so that every
              user can easily get their own share of profits, trust us, after
              experiencing Grayswap you will Love it even more.
            </div>
          </div>

          <div className={styles.worldWide}>Top investors from worldwide</div>

          <div className={styles.global}>
            Our global investors, including angel investors and venture capital
            funds.
          </div>

          <div className={styles.grid_container}>
            <div className={styles.grid_container_item}>
              <img src={zhizhuImg} alt="" className={styles.zhizhuImg} />
            </div>
            <div className={styles.grid_container_item}>
              <img
                src={confirmationImg}
                alt=""
                className={styles.confirmationImg}
              />
            </div>
            <div className={styles.grid_container_item}>
              <img src={a16zImg} alt="" className={styles.a16zImg} />
            </div>
            <div className={styles.grid_container_item}>
              <img src={bcvImg} alt="" className={styles.bcvImg} />
            </div>
            <div className={styles.grid_container_item}>
              <img src={craftImg} alt="" className={styles.craftImg} />
            </div>
            <div className={styles.grid_container_item}>
              <img src={defianceImg} alt="" className={styles.defianceImg} />
            </div>
            <div className={styles.grid_container_item}>
              <img src={dragonflyImg} alt="" className={styles.dragonflyImg} />
            </div>
            <div className={styles.grid_container_item}>
              <img src={kindredImg} alt="" className={styles.kindredImg} />
            </div>
            <div className={styles.grid_container_item}>
              <img src={polychainImg} alt="" className={styles.polychainImg} />
            </div>
            <div className={styles.grid_container_item}>
              <img src={rocktreeImg} alt="" className={styles.rocktreeImg} />
            </div>
            <div className={styles.grid_container_item}>
              <img src={scalarImg} alt="" className={styles.scalarImg} />
            </div>
            <div className={styles.grid_container_item}>
              <img src={spartanImg} alt="" className={styles.spartanImg} />
            </div>
          </div>

          <div className={styles.footer_text}>
            To every user and investor who
            <br /> supports us With the utmost respect, <br />
            thank you all !
          </div>
        </div>
      </div>
    );
  };
  const Card = () => {
    return (
      <div className={styles.card} style={{ marginTop: 20, flex: 1 }}>
        <Content />
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
        <img className={styles.bottomBg} src={bottomBgImg} />
      </div>
    </div>
  );
};

export default Index;
