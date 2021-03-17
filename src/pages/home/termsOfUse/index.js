// @使用条款
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
        <div className={styles.termContainer}>
          <div className={styles.termContainer_title}>使用条款</div>
          <div className={styles.termContainer_date}>更新于2021年2月19日</div>
          <div
            className={styles.termContainer_content}
            style={{ height: Height - 190 }}
          >
            本站允许访问者查看其上的材料，但只能用于个人的、非商业用途，且不侵犯本站资料的任何著作权及其他合法权利。
            免责声明与责任限制
            您使用本站不构成您与本站所有者的合同，本站内容只作为邀约邀请，而不是对您的邀约；本站也没有任何担保（包括但不限于针对特定目的的适用性和不侵犯知识产权等方面）。
            如果您不理解邀约邀请的含义和后果，请在请教他人后使用。
            在任何情况下，无论是根据合同或侵权行为抑或其它任何法律理论，也无论本站是否被告知有此类损害的可能性，本站及其与本站有合作的任何其它第三方均不对由于本站、链接到本站点的任何其他站点或者包含在任何或所有此类站点中的信息或服务的使用、无法使用或使用结果而造成的任何损害负责，包括但不限于直接的和/或间接的利润损失、数据损毁、精神损害等。
            本站力求给您提供安全、通畅的访问和其他服务，但由于Internet线路、垃圾邮件、黑客入侵或其他不可抗力等原因直接给您造成了损害，本站不负任何责任。
            注册用户应在线提交问题后，应在此后登陆会员区查看问题的处理结果，因各个邮件服务器反垃圾策略不同可能导致您不能完全依赖电子邮件获得本站的信息反馈。
            本站中指向其他第三方站点的链接
            本站某些内容指向其他第三方站点的链接仅仅为访
          </div>
        </div>
      </div>
    );
  };

  const ContentEnglish = () => {
    return (
      <div>
        <div className={styles.termContainer}>
          <div className={styles.termContainer_title}>Terms of use</div>
          <div className={styles.termContainer_date}>
            Updated February 19, 2021
          </div>
          <div
            className={styles.termContainer_content}
            style={{ height: Height - 190 }}
          >
            The Website allows visitors to view the material on it, but only for
            personal, non-commercial purposes, and does not infringe any
            copyright and other legal rights of the information on the Website.
            Disclaimer and Limitation of Liability Your use of this site does
            not constitute a contract between you and the owner of this site,
            the content of this site only as an invitation to invite, not to
            your invitation; The Website also does not have any warranty
            (including but not limited to fitness for a specific purpose and
            non-infringement of intellectual property rights and other aspects).
            If you do not understand the meaning and consequences of an
            invitation to invite, please use it after consulting others. In any
            case, whether under the contract or tort or any other legal theory,
            whether or not this site also informed the possibility of such
            damages, us and we have cooperation of any other third parties are
            not due to this site and any other sites link to this site or the
            information contained in any or all such sites or services use,
            unable to use or be liable for any damage caused by using the
            results, including but not limited to direct and/or indirect loss of
            profit, data damage, mental damage, etc. The Website strives to
            provide you with safe and unobstructed access and other services,
            but the Website shall not be responsible for any damage directly
            caused to you due to Internet lines, spam, hacker intrusion or other
            force majeure reasons. Registered users should submit their
            questions online, and then log in the member area to see the result
            of the problem. Because of the different anti-spam policies of each
            mail server, you may not be able to rely on email to get the
            information feedback of this site. Links to other third party sites
            on this site Some of the contents of this site are linked to other
            third party sites for visit only
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
        {true ? <Content /> : <ContentEnglish />}
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
