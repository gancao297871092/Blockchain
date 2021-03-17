import React, { useState, useRef } from "react";
import Model from "./model";
import FlatList from "@/components/flatlist";
import { debounce } from 'lodash'
import styles from "./index.module.css";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

import gobackImg from "@/assets/goback.png";
import mapImg from "@/assets/map.png";

// import btcImg from "@/assets/btc.png";
// import ethImg from "@/assets/eth.png";

import usdtImg from "@/assets/usdt.png";
import bottomImg from "./img/bottom.png";
import rightImg from "./img/right.png";

import { Width, Height } from "@/utils/client";

const Index = () => {
    const { t } = useTranslation();
    const { goBack, push } = useHistory();

    const [list, setList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

    const [type, setType] = useState('ALL')
    const [currency, setCurrency] = useState('ALL')

    const modelRef = useRef();
    var oldScrollTop = 0

    const lodingMore = debounce(() => {
        console.log('上拉加载')
        setList(list.concat(list))
    }, 300)

    const Item = ({ index }) => {
        return (
            <div
                className={styles.item}
                onClick={() => {
                    push("pledgeSuccess")
                }}
            >
                <div
                    className={styles.flexView}
                    style={{ justifyContent: "space-between" }}
                >
                    <div className={styles.flexView}>
                        <p className={styles.zyText}>质押 ---{index}</p>
                        <img className={styles.usdtImg} src={usdtImg} />
                        <p className={styles.zyEth}>USDT</p>
                    </div>
                    <div className={styles.flexView}>
                        <p className={styles.zyText} style={{ color: "#9099A9" }}>
                            质押成功
            </p>
                        <img className={styles.rightImg} src={rightImg} />
                    </div>
                </div>
                <div className={styles.valueView}>
                    <div className={styles.flexView}>
                        <p className={styles.zyValue}>2.38495932</p>
                        <p className={styles.zyv}>≈31,221.04 USD</p>
                    </div>
                    <p className={styles.zyTime}>01-23 12:09:12</p>
                </div>
            </div>
        )
    }

    const Header = () => {
        return <div className={styles.flexView}
            style={{
                justifyContent: "space-between",
                marginLeft: 12, paddingBottom: 30
            }}
        >
            <div style={{ paddingRight: 10 }}
                onClick={() => {
                    goBack();
                }}
            >
                <img className={styles.goBack} src={gobackImg} />
            </div>
            <div className={styles.flexView}>
                <div className={styles.btnView}
                    onClick={() => {
                        modelRef?.current?.Show(0);
                    }}
                >
                    <p className={styles.btnText}>类型:{type}</p>
                    <img className={styles.bottomImg} src={bottomImg} />
                </div>
                <div
                    className={styles.btnView}
                    style={{ marginLeft: 20 }}
                    onClick={() => {
                        modelRef?.current?.Show(1);
                    }}
                >
                    <p className={styles.btnText}>币种:{currency}</p>
                    <img className={styles.bottomImg} src={bottomImg} />
                </div>
            </div>
            <img
                className={styles.goBack}
                src={gobackImg}
                style={{ opacity: 0 }}
            />
        </div>
    }

    return (
        <div className={styles.contaner} style={{ width: Width }}>
            <div className={styles.linearBg} />
            <img className={styles.mapBg} src={mapImg} />

            <div className={styles.content}>

                <Header />

                <Model ref={modelRef}
                    type={type}
                    currency={currency}
                    callBack={(type, typeIndex) => {
                        if (type == 'currency') return setCurrency(typeIndex)
                        setType(typeIndex)
                    }}
                />
                <div style={{ paddingLeft: 12, paddingRight: 12 }}>
                    <FlatList style={{
                        height: Height > 700
                            ? Height - 180
                            : Height - 150,
                        overflowY: 'scroll',
                        borderTopLeftRadius: 16,
                        borderTopRightRadius: 16,
                        background: '#fff'
                    }}
                        item={() => <Item />} />
                </div>


            </div>
        </div>
    )
}

export default Index;
