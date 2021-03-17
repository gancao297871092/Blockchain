import React, { useState, useEffect, useRef } from "react";

import styles from "./index.module.css";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

import mapImg from "@/assets/map.png";
import backImg from "./img/back.png";
import failImg from "./img/fail.png";
import processingImg from "./img/processing.png";
import successImg from "./img/success.png";
import tImg from "./img/t.png";
import zuanshiImg from "./img/zuanshi.png";
import btcImg from "./img/btc.png";
import { Width } from "@/utils/client";

const Index = () => {
  const { t } = useTranslation();
  const { goBack, push } = useHistory();
  const [index, setIndex] = useState(0);
  //   提现失败
  const WithdrawalFailure = () => {
    return (
      <div>
        <div className={styles.FailureContainer}>
          <div className={styles.FailureContainer_imgBox}>
            <img src={failImg} alt="" />
          </div>
          <div className={styles.FailureContainer_title}>Withdrawal failed</div>
          <div className={styles.FailureContainer_count}>1.37482094</div>
          <div className={styles.FailureContainer_btnC}>
            <div className={styles.FailureContainer_btnC_icon}>
              <img src={btcImg} alt="" />
            </div>
            <span>BTC</span>
          </div>
          <div className={styles.item_container}>
            <div className={styles.FailureContainer_item}>
              <div className={styles.FailureContainer_item_item1}>Address</div>
              <div className={styles.FailureContainer_item_item2}>
                5hh383hf8hfiij9hf9u3buhcny39u3r5ns47rfvfed
              </div>
            </div>

            <div className={styles.FailureContainer_item}>
              <div className={styles.FailureContainer_item_item1}>
                Handling fee
              </div>
              <div className={styles.FailureContainer_item_item2}>0.234</div>
            </div>

            <div className={styles.FailureContainer_item}>
              <div className={styles.FailureContainer_item_item1}>0.234</div>
              <div className={styles.FailureContainer_item_item2}>
                5hh383hf8hfiij9hf9u3buhcny39u3r5ns47rfvfed
              </div>
            </div>

            <div className={styles.FailureContainer_item}>
              <div className={styles.FailureContainer_item_item1}>Date</div>
              <div className={styles.FailureContainer_item_item2}>
                2021-09-21 12:09:34
              </div>
            </div>
          </div>

          <div className={styles.btn_container}>
            <div className={styles.btn_left}>
              <span>Copy Txid</span>
            </div>
            <div className={styles.btn_right}>
              <span>Check Txid</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  // 处理中
  const Processing = () => {
    return (
      <div>
        <div className={styles.process}>
          <div className={styles.FailureContainer_imgBox}>
            <img src={processingImg} alt="" />
          </div>
          <div className={styles.FailureContainer_title}>Withdrawal failed</div>
          <div className={styles.FailureContainer_count}>1.37482094</div>
          <div className={styles.FailureContainer_btnC}>
            <div className={styles.FailureContainer_btnC_icon}>
              <img src={btcImg} alt="" />
            </div>
            <span>BTC</span>
          </div>
          <div className={styles.item_container}>
            <div className={styles.FailureContainer_item}>
              <div className={styles.FailureContainer_item_item1}>Address</div>
              <div className={styles.FailureContainer_item_item2}>
                5hh383hf8hfiij9hf9u3buhcny39u3r5ns47rfvfed
              </div>
            </div>

            <div className={styles.FailureContainer_item}>
              <div className={styles.FailureContainer_item_item1}>
                Handling fee
              </div>
              <div className={styles.FailureContainer_item_item2}>0.234</div>
            </div>

            <div className={styles.FailureContainer_item}>
              <div className={styles.FailureContainer_item_item1}>0.234</div>
              <div className={styles.FailureContainer_item_item2}>
                5hh383hf8hfiij9hf9u3buhcny39u3r5ns47rfvfed
              </div>
            </div>

            <div className={styles.FailureContainer_item}>
              <div className={styles.FailureContainer_item_item1}>Date</div>
              <div className={styles.FailureContainer_item_item2}>
                2021-09-21 12:09:34
              </div>
            </div>
          </div>

          <div className={styles.btn_container}>
            <div className={styles.btn_left}>
              <span>Copy Txid</span>
            </div>
            <div className={styles.btn_right}>
              <span>Check Txid</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  //   成功
  const Success = () => {
    return (
      <div>
        <div className={styles.success1}>
          <div className={styles.FailureContainer_imgBox}>
            <img src={successImg} alt="" />
          </div>
          <div className={styles.FailureContainer_title}>Success</div>
          <div className={styles.FailureContainer_count}>1.37482094</div>
          <div className={styles.FailureContainer_btnC}>
            <div className={styles.FailureContainer_btnC_icon}>
              <img src={zuanshiImg} alt="" />
            </div>
            <span>ETH</span>
          </div>
          <div className={styles.item_container}>
            <div className={styles.FailureContainer_item}>
              <div className={styles.FailureContainer_item_item1}>Address</div>
              <div className={styles.FailureContainer_item_item2}>
                5hh383hf8hfiij9hf9u3buhcny39u3r5ns47rfvfed
              </div>
            </div>

            <div className={styles.FailureContainer_item}>
              <div className={styles.FailureContainer_item_item1}>
                Handling fee
              </div>
              <div className={styles.FailureContainer_item_item2}>0.234</div>
            </div>

            <div className={styles.FailureContainer_item}>
              <div className={styles.FailureContainer_item_item1}>0.234</div>
              <div className={styles.FailureContainer_item_item2}>
                5hh383hf8hfiij9hf9u3buhcny39u3r5ns47rfvfed
              </div>
            </div>

            <div className={styles.FailureContainer_item}>
              <div className={styles.FailureContainer_item_item1}>Date</div>
              <div className={styles.FailureContainer_item_item2}>
                2021-09-21 12:09:34
              </div>
            </div>
          </div>

          <div className={styles.btn_container}>
            <div className={styles.btn_left}>
              <span>Copy Txid</span>
            </div>
            <div className={styles.btn_right}>
              <span>Check Txid</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  //   推广成功 PromoteSuccess
  const PromoteSuccess = () => {
    return (
      <div>
        <div className={styles.success1}>
          <div className={styles.FailureContainer_imgBox}>
            <img src={successImg} alt="" />
          </div>
          <div className={styles.FailureContainer_title}>Success</div>
          <div className={styles.FailureContainer_count}>1.37482094</div>
          <div className={styles.FailureContainer_btnC}>
            <div className={styles.FailureContainer_btnC_icon}>
              <img src={tImg} alt="" />
            </div>
            <span>USDT</span>
          </div>
          <div className={styles.item_container}>
            <div className={styles.FailureContainer_item}>
              <div className={styles.FailureContainer_item_item1}>Address</div>
              <div className={styles.FailureContainer_item_item2}>
                5hh383hf8hfiij9hf9u3buhcny39u3r5ns47rfvfed
              </div>
            </div>

            <div className={styles.FailureContainer_item}>
              <div className={styles.FailureContainer_item_item1}>
                Handling fee
              </div>
              <div className={styles.FailureContainer_item_item2}>0.234</div>
            </div>

            <div className={styles.FailureContainer_item}>
              <div className={styles.FailureContainer_item_item1}>0.234</div>
              <div className={styles.FailureContainer_item_item2}>
                5hh383hf8hfiij9hf9u3buhcny39u3r5ns47rfvfed
              </div>
            </div>

            <div className={styles.FailureContainer_item}>
              <div className={styles.FailureContainer_item_item1}>Date</div>
              <div className={styles.FailureContainer_item_item2}>
                2021-09-21 12:09:34
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const x = "WithdrawalFailure";
  const renderToMain = (type) => {
    if (type === "WithdrawalFailure") {
      return <WithdrawalFailure />;
    } else if (type === "Processing") {
      return <Processing />;
    } else if (type === "Success") {
      return <Success />;
    } else {
      return <PromoteSuccess />;
    }
  };

  const Card = () => {
    return (
      <div
        className={styles.card}
        style={{ marginTop: 20, flex: 1, paddingBottom: 20 }}
      >
        {/* <WithdrawalFailure /> */}
        {/* <Processing /> */}
        {/* <Success /> */}
        {/* <PromoteSuccess /> */}
        {renderToMain(x)}
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
