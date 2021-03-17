// @超级返利
import React, { useState, useEffect, useRef } from "react";
import FlatList from "@/components/flatlist";
import Commisson from "./commisson";
import MyFriends from "./myFriends";
import Earnings from "./earnings";
import { Toast } from "antd-mobile";
import QRCode from "qrcode.react";
import styles from "./index.module.css";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import html2canvas from "html2canvas";

import moreImg from "./img/more.png";
import more1Img from "./img/more1.png";
import copyImg from "./img/copy.png";
import questionsImg from "./img/questions.png";
import noticeImg from "./img/notice.png";
import closeImg from "./img/close.png";
import btcImg from "./img/btc.png";
import btcblueImg from "./img/btcblue.png";
import downLoadImg from "./img/downLoad.png";
import udstImg from "./img/usdt.png";
import { Width, Height } from "@/utils/client";
import EventAggregator from "@/EventAggregator.js";

const Index = () => {
  const { t } = useTranslation();
  const { goBack, push } = useHistory();
  const [index, setIndex] = useState(0);
  // 转换canvas对象为图片
  const canvasToPic = () => {
    const canvasImg = document.getElementById("haibao111"); // 获取canvas类型的二维码
    html2canvas(canvasImg, {
      allowTaint: false,
      useCORS: true,
      height: canvasImg.offsetHeight,
      width: canvasImg.offsetWidth,
      windowWidth: document.body.scrollWidth,
      windowHeight: document.body.scrollHeight,
    }).then((canvas) => {
      const img = new Image();
      const imgUrl = canvas.toDataURL("image/png");
      img.src = imgUrl;
      const downLoad = document.createElement("a");
      downLoad.href = img.src;
      downLoad.download = "Posters";
      downLoad.click();
      downLoad.remove();
    });
  };
  // 根据不同的index渲染不同的结构
  const chooseComponent = () => {
    if (index === 0) {
      return <Commisson />;
    } else if (index === 1) {
      return <MyFriends />;
    } else {
      return <Earnings />;
    }
  };
  // 处理复制url;
  const handleCopyUrl = () => {
    Toast.info("复制成功", 1);
  };
  // 处理复制code
  const handleCopyCode = () => {
    const inputDom = document.getElementById("tools_input");
    const codeBox = document.getElementById("code");
    const content = codeBox.innerText;
    inputDom.value = content;
    inputDom.select();
    document.execCommand("Copy");
    Toast.info("复制成功", 1);
    inputDom.blur();
  };
  // 规则说明组件
  const PanelRules = () => {
    return (
      <div>
        <div className={styles.panelRulesModel}>
          <div className={styles.title_container}>
            <div className={styles.title_container_text}>Rule description</div>
            <img
              src={closeImg}
              alt=""
              onClick={() => {
                global.C_Model?.current?.Hide();
              }}
            />
          </div>
          <div className={styles.panelRulesModel_content}>
            1. Text to be determined. Invite friends to join the quantitative
            pool and earn an extra 20% rebate. 2. You can send a friend to
            download through the invitation poster or copy the invitation link.
            If the friend downloads by himself, he can fill in the
            recommendation ID in the registration field. 3. When you invite a
            friend to participate in the quantitative pool, you will get a 20%
            rebate of the friend's redemption income. Special note: due to the
            complexity of related business data, there may be In the calculation
            of settlement delays, it will cause you inconvenience, please
            understanding.
          </div>

          <div className={styles.panelRulesModel_confirm}>Confirm</div>
          <div className={styles.panelRulesModel_notice}>
            * Data calculation delays may occur. Sorry for the inconvenience
            caused to you.
          </div>
        </div>
      </div>
    );
  };
  // 海报弹出层组件
  const PanelPosters = () => {
    return (
      <div className={styles.tools_div}>
        <div className={styles.panelPosters}>
          <div className={styles.haibao} id="haibao111">
            <div className={styles.panelPosters_container}>
              <div className={styles.panelPosters_headProfile}></div>
              <div className={styles.panelPosters_headName}>Grayswap</div>
            </div>

            <div className={styles.panelPosters_title}>
              Grayscale made great efforts.
            </div>
            <div className={styles.panelPosters_content}>
              The annual interest rate is up to 40%, earn high yields.
            </div>
            <div className={styles.panelPosters_content2}>
              Let the profits run with me.
            </div>
            <div className={styles.erweima_container}>
              <div className={styles.erweima}>
                <QRCode
                  id="qrCode"
                  value="http://www.badiu.com" //二维码的url
                  size={70} // 二维码的大小
                  fgColor="#34B498" // 二维码的颜色
                  style={{ margin: "auto" }}
                />
              </div>
            </div>
          </div>

          <div className={styles.panelPosters_downLoad}>
            <div className={styles.panelPosters_downLoad_text}>
              Scan the QR code to open the website
            </div>
            <div
              className={styles.panelPosters_downLoad_btn}
              onClick={() => {
                canvasToPic();
              }}
            >
              <img src={downLoadImg} alt="" />
              <span>Download</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  // 内容区组件
  const Content = () => {
    return (
      <div>
        <div className={styles.title}>
          Become a partner and make money together
        </div>
        <div className={styles.main_content_box}>
          {/* 上方的平行四边行 */}
          <div className={styles.topTitle}>
            <div className={styles.topTitle_text}>Up to 12% rebate</div>
          </div>

          <div className={styles.main_content}>
            <div className={styles.main_content_item1}>
              · Invite friends to participate, and you can en-joy a{" "}
            </div>
            <div className={styles.main_content_item2}>
              · If your friends invite others, you can also share the benefits
              of the invitees.
            </div>
          </div>

          <div
            className={styles.rules}
            onClick={() => {
              global.C_Model?.current?.Show({
                dismiss: false,
                children: <PanelRules />,
              });
            }}
          >
            <span>Specific rules</span>
            <img src={moreImg} alt="" />
          </div>

          <div className={styles.btnsContainer}>
            <div
              className={styles.btn1}
              onClick={() => {
                handleCopyUrl();
              }}
            >
              Copy URL
            </div>
            <div
              className={styles.btn2}
              onClick={() => {
                global.C_Model?.current?.Show({
                  dismiss: false,
                  children: <PanelPosters />,
                });
              }}
            >
              Share poster
            </div>
          </div>

          <div className={styles.codeContainer}>
            <input
              type="text"
              id="tools_input"
              style={{ opacity: 0 }}
              className={styles.tools_input}
            />
            <div className={styles.codeContainer_text}>
              Invitation code：<span id="code">HUG859</span>
            </div>
            <div
              className={styles.icon}
              onClick={() => {
                handleCopyCode();
              }}
            >
              <img src={copyImg} alt="" />
            </div>
          </div>
        </div>

        <div className={styles.toggleBtnsContainer}>
          <div
            className={
              index == 0
                ? styles.toggleBtnsContainer_item1 + " " + styles.active_bac
                : styles.toggleBtnsContainer_item1
            }
            onClick={() => {
              setIndex(0);
            }}
          >
            <span>Commission</span>
          </div>
          <div
            className={
              index == 1
                ? styles.toggleBtnsContainer_item2 + " " + styles.active_bac
                : styles.toggleBtnsContainer_item2
            }
            onClick={() => {
              setIndex(1);
            }}
          >
            <span>My friends</span>
          </div>
          <div
            className={
              index == 2
                ? styles.toggleBtnsContainer_item3 + " " + styles.active_bac
                : styles.toggleBtnsContainer_item3
            }
            onClick={() => {
              setIndex(2);
            }}
          >
            <span>Earnings</span>
          </div>
        </div>
        {/* 条件渲染不同的组件 */}
        {chooseComponent()}
      </div>
    );
  };
  // 卡片视图容器组件
  const Card = () => {
    return (
      <div className={styles.card}>
        <Content />
      </div>
    );
  };

  return (
    <div
      onScroll={(e) => {
        EventAggregator.trigger("scroll", e.target.scrollTop);
      }}
      className={styles.contaner}
      style={{
        width: Width,
        height: Height,
        overflowY: "scroll",
      }}
      id="scroll"
    >
      <div className={styles.content_box}>
        <Card />
      </div>
    </div>
  );
};

export default Index;
