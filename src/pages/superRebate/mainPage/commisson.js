import React from "react";
import styles from "./index.module.css";
import more1Img from "./img/more1.png";
import questionsImg from "./img/questions.png";
import noticeImg from "./img/notice.png";
import closeImg from "./img/close.png";
import btcImg from "./img/btc.png";
import btcblueImg from "./img/btcblue.png";
import udstImg from "./img/usdt.png";

// Commisson组件
const Index = () => {
  // 点击问号弹出层组件
  const Panel = () => {
    return (
      <div>
        <div className={styles.modelContainer}>
          <div className={styles.title_container}>
            <div className={styles.title_container_text}>
              Unlock instructions
            </div>
            <img
              src={closeImg}
              alt=""
              onClick={() => {
                global.C_Model?.current?.Hide();
              }}
            />
          </div>

          <div className={styles.textcontent}>
            1. Text to be determined. Invite friends to join the quantitative
            pool and earn an extra 20% rebate. 2. You can send a friend to
            download through the invitation poster or copy the invitation link.
            If the friend downloads by himself, he can fill in the
            recommendation ID in the registration field.
          </div>

          <div className={styles.chooseContainer}>
            <div className={styles.chooseContainer_item}>
              <div className={styles.chooseContainer_item1}>
                <div>
                  <img src={btcImg} alt="" />
                </div>
                <div className={styles.moneyType}>BTC</div>
                <div className={styles.moneyNumber}>0.09384728</div>
              </div>
              <div className={styles.pledgeContainer}>
                <div className={styles.pledge}>Pledge</div>
                <img src={more1Img} alt="" />
              </div>
            </div>
            <div className={styles.chooseContainer_item}>
              <div className={styles.chooseContainer_item1}>
                <div>
                  <img src={btcblueImg} alt="" />
                </div>
                <div className={styles.moneyType}>ETH</div>
                <div className={styles.moneyNumber}>0.09384728</div>
              </div>
              <div className={styles.pledgeContainer}>
                <div className={styles.pledge}>Pledge</div>
                <img src={more1Img} alt="" />
              </div>
            </div>
            <div className={styles.chooseContainer_item}>
              <div className={styles.chooseContainer_item1}>
                <div>
                  <img src={udstImg} alt="" />
                </div>
                <div className={styles.moneyType}>USDT</div>
                <div className={styles.moneyNumber}>0.09384728</div>
              </div>
              <div className={styles.pledgeContainer}>
                <div className={styles.pledge}>Pledge</div>
                <img src={more1Img} alt="" />
              </div>
            </div>
          </div>

          <div className={styles.model_btn1}>Recharge</div>
          <div className={styles.model_btn2}>Talk about it later</div>
        </div>
      </div>
    );
  };

  // 红色提示组件
  const RedNotice = () => {
    return (
      <div className={styles.footer_container_notice}>
        The pledge is converted into BTC 0.09758674 and then unlocked to the
        account
        <img
          src={questionsImg}
          alt=""
          onClick={() => {
            global.C_Model?.current?.Show({
              dismiss: false,
              children: <Panel />,
            });
          }}
        />
      </div>
    );
  };

  return (
    <div className={styles.footer_container}>
      {/* 红色提示组件条件渲染 */}

      {true ? <RedNotice /> : ""}
      <div className={styles.footer_container_item}>
        <div className={styles.footer_container_item_title}>
          <span>Income (24h)</span>
        </div>
        <div className={styles.income_number}>
          <span>+9.20393099</span>
        </div>
      </div>
      <div className={styles.footer_container_item}>
        <div className={styles.footer_container_item_title}>
          <span>Total (BTC)</span>
        </div>
        <div className={styles.totalBtc}>
          <span>3824.38920463</span>
        </div>
      </div>
      <div className={styles.footer_container_item}>
        <div className={styles.footer_container_item_title}>
          <span>Add friends today</span>
        </div>
        <div className={styles.add_friends}>
          <span>+34</span>
        </div>
      </div>
      <div className={styles.footer_container_item}>
        <div className={styles.footer_container_item_title}>
          <span>All friends</span>
          <img src={noticeImg} alt="" />
        </div>
        <div className={styles.all_friends}>
          <span>896</span>
        </div>
      </div>
    </div>
  );
};
export default Index;
