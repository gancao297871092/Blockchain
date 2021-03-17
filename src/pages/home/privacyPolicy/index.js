// @隐私政策
import React, { useState, useEffect, useRef } from "react";
import styles from "./index.module.css";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import mapImg from "@/assets/map.png";

import { Width, Height } from "@/utils/client";

const Index = () => {
  const { t } = useTranslation();
  const { goBack, push } = useHistory();

  const Content = () => {
    return (
      <div>
        <div classNames={styles.privacyContainer}>
          <div className={styles.privacyContainer_title}>隐私政策</div>
          <div className={styles.privacyContainer_date}>
            更新于2021年2月19日
          </div>
          <div
            className={styles.privacyContainer_content}
            style={{ height: Height - 180 }}
          >
            上汽通用汽车有限公司、上汽通用汽车销售有限公司、上汽通用东岳汽车有限公司、上汽通用东岳动力总成有限公司、上汽通用（沈阳）北盛汽车有限公司、泛亚汽车技术中心有限公司（以下简称“上汽通用汽车”
            或者“我们”）向您提供车辆、配件及其他附属产品（统称为“产品”）及与产品相关的众多网上和线下服务，包括但不限于我们的网站、车载信息系统和其他车载技术、商品展览交流及其他服务（统称为“服务”）。当您与我们和/或我们的关联公司就产品和服务取得联系时，都可能会被要求提供您的个人信息。我们非常重视您的个人信息保护与个人隐私，也理解您可能关心您的个人信息是如何被使用和共享的，因此我们制订了本隐私政策，阐述了我们如何收集、使用、披露、共享以及储存您的个人信息。
          </div>
        </div>
      </div>
    );
  };

  const ContentEnglish = () => {
    return (
      <div>
        <div classNames={styles.privacyContainer}>
          <div className={styles.privacyContainer_title}>Privacy policy</div>
          <div className={styles.privacyContainer_date}>
            Updated February 19, 2021
          </div>
          <div
            className={styles.privacyContainer_content}
            style={{ height: Height - 190 }}
          >
            SAIC-GM Motor Co., Ltd., SAIC-GM Sales Co., Ltd., SAIC-GM Dongyue
            Automobile Co., Ltd., SAIC-GM Dongyue Powertrain Co., Ltd., SAIC-GM
            (Shenyang) Beisheng Automobile Co., Ltd., Pan-Asia Automotive
            Technology Center Co., Ltd. (hereinafter referred to as "SAIC-GM")
            Or "we") to provide you with vehicles, accessories and other
            ancillary products (collectively, the "Products") and numerous
            online and offline services related to the Products, including,
            without limitation, our website, vehicle-mounted information systems
            and other vehicle-mounted technologies, merchandise exhibitions,
            exchanges and other services (collectively, the "Services"). You may
            be asked to provide your personal information when you contact us
            and/or our affiliates with respect to products and services. We
            attach great importance to the protection of your personal
            information and personal privacy, and understand that you may be
            concerned about how your personal information is used and shared.
            Therefore, we have formulated this Privacy Policy, which describes
            how we collect, use, disclose, share and store your personal
            information. SAIC-GM Motor Co., Ltd., SAIC-GM Sales Co., Ltd.,
            SAIC-GM Dongyue Automobile Co., Ltd., SAIC-GM Dongyue Powertrain
            Co., Ltd., SAIC-GM (Shenyang) Beisheng Automobile Co., Ltd.,
            Pan-Asia Automotive Technology Center Co., Ltd. (hereinafter
            referred to as "SAIC-GM") Or "we") to provide you with vehicles,
            accessories and other ancillary products (collectively, the
            "Products") and numerous online and offline services related to the
            Products, including, without limitation, our website,
            vehicle-mounted information systems and other vehicle-mounted
            technologies, merchandise exhibitions, exchanges and other services
            (collectively, the "Services"). You may be asked to provide your
            personal information when you contact us and/or our affiliates with
            respect to products and services. We attach great importance to the
            protection of your personal information and personal privacy, and
            understand that you may be concerned about how your personal
            information is used and shared. Therefore, we have formulated this
            Privacy Policy, which describes how we collect, use, disclose, share
            and store your personal information.
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
        {/* <Content /> */}
        {false ? <Content /> : <ContentEnglish />}
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
