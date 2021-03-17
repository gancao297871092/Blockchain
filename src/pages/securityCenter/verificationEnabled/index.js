// @开启手机验证
import React, { useState, useRef, useEffect } from "react";
import styles from "./index.module.css";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Areachoice from "@/components/areachoice";
import SendTime from "@/components/timeSend";

import mapImg from "@/assets/map.png";
import expand from "./img/expand.png";
import backImg from "./img/back.png";
import ban from "./img/ban.png";
import { Width } from "@/utils/client";

const Index = () => {
  const { t } = useTranslation();
  const { goBack } = useHistory();
  const [index, setIndex] = useState(0);

  const [inputValue, setInputValue] = useState("");
  const [phoneCode, setPhoneCode] = useState("");
  const [emailCode, setEmailCode] = useState("");
  const [isConfirm, setConfirm] = useState(false);
  const areachoiceRef = useRef();
  const inputRef = useRef();
  const inputRef1 = useRef();
  const inputRef2 = useRef();

  const Children = () => {
    return (
      <div>
        <div className={styles.modelStyle}>
          <div className={styles.imageBox}>
            <img src={ban} alt="" />
          </div>
          <div className={styles.modelText}>
            This phone is already in use, please add another phone.
          </div>

          <div className={styles.modelSubmit}>
            <span>OK</span>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    console.log(phoneCode, emailCode);

    if (phoneCode.length > 0 && emailCode.length > 0) {
      setConfirm(true);
    } else {
      setConfirm(false);
    }
  }, [phoneCode, emailCode]);

  return (
    <div className={styles.contaner} style={{ width: Width }}>
      <div className={styles.linearBg} />
      <img className={styles.mapBg} src={mapImg} />
      <div className={styles.content}>
        <div className={styles.back} onClick={() => goBack()}>
          <img src={backImg} alt="" />
        </div>
        {false ? (
          <div className={styles.cardContainer}>
            <div
              className={styles.card}
              style={{ marginTop: 20, flex: 1, paddingBottom: 20 }}
            >
              <div>
                <div className={styles.inputPhoneNumber}>
                  <div
                    className={styles.areaNumber}
                    onClick={() => {
                      areachoiceRef?.current?.Show();
                    }}
                  >
                    <span className={styles.number}>+86</span>
                    <img src={expand} alt="" className={styles.expand} />
                  </div>
                  <div className={styles.line}>|</div>
                  <input
                    type="number"
                    className={styles.inputStyles}
                    ref={inputRef}
                    placeholder="Enter Phone Number"
                    onChange={() => {
                      setInputValue(inputRef?.current.value);
                    }}
                  />
                </div>

                <div className={styles.verifyCode}>
                  <div className={styles.verifyCodeInput}>
                    <input
                      type="number"
                      className={styles.codeInputStyles}
                      placeholder="Phone Verification Code"
                      ref={inputRef1}
                      onChange={() => {
                        setPhoneCode(inputRef1?.current.value);
                      }}
                    />
                  </div>
                  <SendTime isLargeBtn={true} sendAddress={inputValue} />
                </div>

                <div className={styles.notice}>
                  Send the verification code to 186****2098
                </div>

                <div className={styles.verifyCode}>
                  <div className={styles.verifyCodeInput}>
                    <input
                      type="number"
                      className={styles.codeInputStyles}
                      placeholder="E-mail Verification Code"
                      ref={inputRef2}
                      onChange={() => {
                        setEmailCode(inputRef2?.current.value);
                      }}
                    />
                  </div>
                  <SendTime isLargeBtn={true} sendAddress={"1234"} />
                </div>

                <div
                  className={styles.confirm}
                  style={{ opacity: isConfirm ? 1 : 0.5 }}
                  onClick={() => {
                    if (!isConfirm) return;
                  }}
                >
                  <span>Confirm</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.cardContainer}>
            <div
              className={styles.card}
              style={{ marginTop: 20, flex: 1, paddingBottom: 20 }}
            >
              <div>
                <div className={styles.inputPhoneNumber}>
                  <div
                    className={styles.areaNumber}
                    onClick={() => {
                      areachoiceRef?.current?.Show();
                    }}
                  ></div>
                  <input
                    type="email"
                    className={styles.inputStyles + " " + styles.emailSty}
                    ref={inputRef}
                    placeholder="Enter Email Address"
                    onChange={() => {
                      setInputValue(inputRef?.current.value);
                    }}
                  />
                </div>

                <div className={styles.verifyCode}>
                  <div className={styles.verifyCodeInput}>
                    <input
                      type="number"
                      className={styles.codeInputStyles}
                      placeholder="E-mail Verification Code"
                      onChange={(e) => {
                        setEmailCode(e.target.value);
                      }}
                    />
                  </div>
                  <SendTime isLargeBtn={true} sendAddress={inputValue} />
                </div>

                <div className={styles.notice}>
                  Send the verification code to 186****2098
                </div>

                <div className={styles.verifyCode}>
                  <div className={styles.verifyCodeInput}>
                    <input
                      type="number"
                      className={styles.codeInputStyles}
                      placeholder="Phone Verification Code"
                      onChange={(e) => {
                        setPhoneCode(e.target.value);
                      }}
                    />
                  </div>
                  <SendTime isLargeBtn={true} sendAddress={"1234"} />
                </div>

                <div
                  className={styles.confirm}
                  style={{ opacity: isConfirm ? 1 : 0.5 }}
                  onClick={() => {
                    global.C_Model?.current?.Show({
                      dismiss: false,
                      children: <Children />,
                    });
                    // if (!isConfirm) return;
                  }}
                >
                  <span>Confirm</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Areachoice
        ref={areachoiceRef}
        chooseTag={(t) => {
          // alert(t)
        }}
      />
    </div>
  );
};

export default Index;
