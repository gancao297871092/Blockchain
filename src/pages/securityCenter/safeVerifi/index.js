import React, { useRef, useState, useEffect } from "react";
import styles from "./index.module.css";
import { useHistory } from "react-router-dom";
import TimeSend from "@/components/timeSend";
// import { useTranslation } from 'react-i18next'

import leftBgImg from "./img/leftBg.png";
import rightBgImg from "./img/rightBg.png";
import gobackImg from "@/assets/goback.png";
import mapImg from "@/assets/map.png";

import { Width, Height } from "@/utils/client";

const Index = () => {
  // const { t } = useTranslation()
  const { push, replace, goBack } = useHistory();

  const [numValue, setNumValue] = useState("180*****2342");
  const [email, setEmail] = useState("297871@163.com");

  const [phVerif, setPhVerif] = useState("");
  const [emVerif, setEmVerif] = useState("");

  const [type, setType] = useState(false);
  const [isCanComfir, setIsCanComfir] = useState(false);

  const phVerifRef = useRef();
  const emVerifRef = useRef();
  const phSendRef = useRef();
  const emSendRef = useRef();

  useEffect(() => {
    if (!type) {
      if (phVerif.length > 0) {
        setIsCanComfir(true);
      } else {
        setIsCanComfir(false);
      }
    } else {
      if (emVerif.length > 0) {
        setIsCanComfir(true);
      } else {
        setIsCanComfir(false);
      }
    }
  }, [type, phVerif, emVerif]);

  return (
    <div className={styles.contaner} style={{ width: Width, height: Height }}>
      <div className={styles.lineBg} />
      <img className={styles.mapBg} src={mapImg} style={{ width: Width }} />

      <div className={styles.content}>
        <div
          style={{ paddingRight: 10 }}
          onClick={() => {
            goBack();
          }}
        >
          <img className={styles.goback} src={gobackImg} />
        </div>

        <div className={styles.fromView} style={{ width: Width - 24 }}>
          <div
            className={styles.fromContent}
            style={{ width: Width - 64, marginLeft: 20 }}
          >
            <div
              onClick={() => {
                setType(!type);
              }}
              className={styles.flexView}
              style={{ width: "100%", height: 60 }}
            >
              <div
                className={styles.flexView}
                style={{ flex: 1, justifyContent: "center" }}
              >
                <p
                  className={styles.loginType}
                  style={{
                    marginRight: 10,
                    color: type ? "#fff" : "#0E1213",
                  }}
                >
                  Mobile Phone
                </p>
              </div>
              <div
                className={styles.flexView}
                style={{ flex: 1, justifyContent: "center" }}
              >
                <p
                  className={styles.loginType}
                  style={{ color: type ? "#0E1213" : "#fff" }}
                >
                  Email
                </p>
              </div>
            </div>

            {type ? (
              <div className={styles.flexView} style={{ height: 50 }}>
                <p className={styles.sendText}>
                  Send the verification code to {email}
                </p>
              </div>
            ) : (
              <div className={styles.flexView} style={{ height: 50 }}>
                <p className={styles.sendText}>
                  Send the verification code to {numValue}
                </p>
              </div>
            )}

            <div
              style={{
                position: "relative",
                marginTop: 20,
                width: "100%",
                height: 50,
              }}
            >
              <div
                className={styles.flexView}
                style={{
                  height: 50,
                  top: 0,
                  position: "absolute",
                  width: "100%",
                  opacity: !type ? 1 : 0,
                  zIndex: !type ? 2 : 1,
                }}
              >
                <input
                  type="number"
                  ref={phVerifRef}
                  onChange={() => {
                    setPhVerif(phVerifRef?.current.value);
                  }}
                  style={{ background: "#F6F6F6", paddingLeft: 10, height: 50 }}
                  className={styles.verifInput}
                  placeholder={"Phone Verification Code"}
                />
                <div style={{ marginLeft: 10 }}>
                  <TimeSend
                    ref={phSendRef}
                    sendAddress={numValue}
                    isLargeBtn={true}
                  />
                </div>
              </div>

              <div
                className={styles.flexView}
                style={{
                  height: 50,
                  top: 0,
                  position: "absolute",
                  width: "100%",
                  opacity: type ? 1 : 0,
                  zIndex: type ? 2 : 1,
                }}
              >
                <input
                  type="number"
                  ref={emVerifRef}
                  onChange={() => {
                    setEmVerif(emVerifRef?.current.value);
                  }}
                  style={{ background: "#F6F6F6", paddingLeft: 10, height: 50 }}
                  className={styles.verifInput}
                  placeholder={"Verification Code"}
                />
                <div style={{ marginLeft: 10 }}>
                  <TimeSend
                    ref={emSendRef}
                    sendAddress={email}
                    isLargeBtn={true}
                  />
                </div>
              </div>
            </div>

            <div
              className={styles.flexView}
              onClick={() => {
                if (!isCanComfir) return;
                replace("/home");
              }}
              style={{
                width: "100%",
                height: 44,
                background: "#34B498",
                borderRadius: 4,
                marginTop: 40,
                justifyContent: "center",
                opacity: isCanComfir ? 1 : 0.5,
              }}
            >
              <p style={{ color: "#FFFFFF", fontSize: 14 }}>Confirm</p>
            </div>
          </div>
          <img
            src={type ? rightBgImg : leftBgImg}
            style={{ width: Width - 24, height: "90%" }}
          />
        </div>

        {/* <div className={styles.fromView}
                style={{
                    width: Width - 24, height: 518,
                    background: '#fff', borderRadius: 16
                }}>
                <div className={styles.fromContent} style={{ width: Width - 64, marginLeft: 20 }}>
                    <div className={styles.flexView}
                        style={{ height: 50 }}>
                        <p className={styles.sendText}>Send the verification code to {numValue}</p>
                    </div>
                    <div className={styles.flexView}
                        style={{
                            height: 50, width: '100%'
                        }}>
                        <input
                            type="number"
                            ref={phVerifRef}
                            onChange={() => {
                                setPhVerif(phVerifRef?.current.value)
                            }}
                            style={{ background: '#F6F6F6', paddingLeft: 10, height: 50 }}
                            className={styles.verifInput}
                            placeholder={'Phone Verification Code'} />
                        <div style={{ marginLeft: 10 }}>
                            <TimeSend ref={phSendRef} sendAddress={numValue} isLargeBtn={true} />
                        </div>
                    </div>
                    <div className={styles.flexView}
                        onClick={() => {
                            if (!isCanComfir) return
                            replace('/home')
                        }}
                        style={{
                            width: '100%', height: 44,
                            background: "#34B498", borderRadius: 4,
                            marginTop: 40,
                            justifyContent: 'center',
                            opacity: isCanComfir ? 1 : .5
                        }}>
                        <p style={{ color: '#FFFFFF', fontSize: 14 }}>Confirm</p>
                    </div>
                </div>
            </div> */}
      </div>
    </div>
  );
};

export default Index;
