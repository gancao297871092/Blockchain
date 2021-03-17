// @充值 topUp 2021.3.13
import React from "react";
import { Toast } from "antd-mobile";
import QRCode from "qrcode.react";
import styles from "./index.module.css";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import mapImg from "@/assets/map.png";
import btcBackImg from "./img/btcBacK.png";

import btcoinallImg from "./img/btcoinall.png";
import moreImg from "./img/more.png";
import closeImg from "./img/close.png";
import checkImg from "./img/CHECK.png";
import nocheckImg from "./img/NOCHECK.png";
import udstImg from "./img/UDST.png";
import ethImg from "./img/ETH.png";
import changeImg from "./img/change.png";
import copyImg from "./img/copy.png";
import downLoadImg from "./img/downLoad.png";
import { Width } from "@/utils/client";

const Index = () => {

  const { t } = useTranslation();
  const { goBack, push } = useHistory();

  const changeCanvasToPic = () => {
    const canvasImg = document.getElementById("qrCode"); // 获取canvas类型的二维码
    const img = new Image();
    img.src = canvasImg.toDataURL("image/png"); // 将canvas对象转换为图片的data url
    const downLoad = document.createElement("a");
    downLoad.href = img.src;
    downLoad.download = "二维码";
    downLoad.click();
    downLoad.remove();
  };

  // 点击的时候复制文本
  const copyText = () => {
    // 先读取文本的值
    const text = document.getElementById("copyValue").innerText;
    const toolsInput = document.getElementById("tools");
    toolsInput.value = text;
    toolsInput.select();
    document.execCommand("Copy");
    Toast.info("复制成功", 1);
    toolsInput.blur();
  };

  const Panel = () => {
    return (
      <div
        style={{
          width: 300,
          height: 292,
          background: "#fff",
          borderRadius: 16,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            marginTop: 15,
            justifyContent: "space-between",
          }}
        >
          <img src={closeImg} style={{ width: 16, height: 16, opacity: 0 }} />
          <p
            style={{
              color: "#141516",
              fontSize: 16,
              fontWeight: "500",
              lineHeight: "18px",
            }}
          >
            Choose Currency
          </p>
          <img
            onClick={() => {
              global.C_Model?.current?.Hide();
            }}
            src={closeImg}
            style={{ width: 16, height: 16, marginRight: 20 }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            margin: "20px 20px 0px 20px",
            flex: 1,
            justifyContent: "space-between",
            height: 50,
            borderBottom: ".5px solid #F3F3F3",
          }}
        >
          <div className={styles.bigbox}>
            <div className={styles.iconContainer}>
              <img src={btcoinallImg} alt="" />
            </div>
            <p
              style={{
                color: "#141516",
                fontSize: 16,
                fontWeight: "400",
                lineHeight: "16px",
              }}
            >
              BTC
            </p>
          </div>

          <div className={styles.checkBox}>
            <img src={checkImg} alt="" />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            margin: "0px 20px 0px 20px",
            flex: 1,
            justifyContent: "space-between",
            height: 50,
            borderBottom: ".5px solid #F3F3F3",
          }}
        >
          <div className={styles.bigbox}>
            <div className={styles.iconContainer}>
              <img src={ethImg} alt="" />
            </div>
            <p
              style={{
                color: "#141516",
                fontSize: 16,
                fontWeight: "400",
                lineHeight: "16px",
              }}
            >
              ETH
            </p>
          </div>

          <div className={styles.checkBox}>
            <img src={nocheckImg} alt="" />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            margin: "0px 20px 0px 20px",
            flex: 1,
            justifyContent: "space-between",
            height: 50,
            borderBottom: ".5px solid #F3F3F3",
          }}
        >
          <div className={styles.bigbox}>
            <div className={styles.iconContainer}>
              <img src={udstImg} alt="" />
            </div>
            <p
              style={{
                color: "#141516",
                fontSize: 16,
                fontWeight: "400",
                lineHeight: "16px",
              }}
            >
              USDT
            </p>
          </div>

          <div className={styles.checkBox}>
            <img src={nocheckImg} alt="" />
          </div>
        </div>
        <div
          style={{
            width: 260,
            height: 44,
            background: "#34B498",
            borderRadius: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 20,
            marginTop: 20,
          }}
        >
          <p
            style={{
              color: "#FFFFFF",
              fontSize: 14,
              fontWeight: "500",
            }}
          >
            Confirm
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.contaner} style={{ width: Width }}>
      <div className={styles.linearBg} />
      <img className={styles.mapBg} src={mapImg} />
      <div className={styles.content}>
        <div className={styles.cardContainer}>
          <div
            className={styles.card}
            style={{ marginTop: 20, flex: 1, paddingBottom: 20 }}
          >
            <div>
              <div className={styles.headBox}>
                <div className={styles.imgBox}>
                  <img src={btcoinallImg} alt="" />
                </div>
                <div className={styles.headText}>BTC</div>
                <div
                  className={styles.headText2}
                  onClick={() => {
                    global.C_Model?.current?.Show({
                      dismiss: false,
                      children: <Panel />,
                    });
                  }}
                >
                  <img src={changeImg} alt="" />
                </div>
              </div>
              <div className={styles.btcBackImgBox}>
                <img src={btcBackImg} alt="" />
              </div>
              <div className={styles.recordBox} onClick={() => {
                push("rechargeHistory");
              }}>
                <div className={styles.record}>Transaction Record</div>
                <div className={styles.recordImgBox}>
                  <img src={moreImg} alt="" />
                </div>
              </div>

              <div className={styles.selectMainnet}>Select mainnet</div>

              <div className={styles.btns}>
                <div className={styles.btn1}>
                  <span>BTC</span>
                </div>
                <div className={styles.btn2}>
                  <span>ERC20</span>
                </div>
              </div>

              <div className={styles.deposit}>Deposit address</div>
              {/* 工具输入框 */}
              <input
                type="text"
                className={styles.toolsInput}
                id="tools"
                readonly
              />
              <div className={styles.copyContainer}>
                <div className={styles.copy_value} id="copyValue">
                  gancaogancaogancaoganca
                </div>
                <div
                  className={styles.copy_icon}
                  onClick={() => {
                    copyText();
                  }}
                >
                  <img src={copyImg} alt="" />
                </div>
              </div>

              <div className={styles.twoDCode}>
                <QRCode
                  id="qrCode"
                  value="http://www.badiu.com" //二维码的url
                  size={90} // 二维码的大小
                  fgColor="#34B498" // 二维码的颜色
                  style={{ margin: "auto" }}
                />
              </div>

              <div
                id="down_link"
                className={styles.downLoad}
                onClick={() => {
                  changeCanvasToPic();
                }}
              >
                <img src={downLoadImg} alt="" />
                <span>Download</span>
              </div>

              <div className={styles.noticeOne}>
                * Send only BTC to this deposit address .Sending any other coin
                or token to this address may result in the loss of your deposit
              </div>
              <div className={styles.noticeTwo}>
                * Coin will be deposited after 1 network confirmations.
              </div>
              <div className={styles.noticeThree}>
                *Until 2 confirmations are made，an equivalent amount of your
                assets will be temporarily unavailable for withdrawals.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
