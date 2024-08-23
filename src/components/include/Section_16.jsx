import React from "react";
import { Link } from "react-router-dom";

import section16_sns_01 from "./../../assets/img/section16_sns_01.svg";
import section16_sns_02 from "./../../assets/img/section16_sns_02.svg";
import section16_sns_03 from "./../../assets/img/section16_sns_03.svg";
import section16_lama from "./../../assets/img/section16_lama.svg";

const Section_16 = () => {
  return (
    // <!-- section16 -->
    // <section style={{ background: "#f6f6fb" }} className="section vr8">
    <section className="section vr8">
      <div className="section16_item_cont">
        <div className="contact_cont">
          <h2>연락해주세요 :)</h2>
          <div className="info_container">
            <p>
              <a href="mailto:alex8396@naver.com">메일</a>
            </p>
            <p>
              <Link to="https://github.com/alex8396">깃허브</Link>
            </p>
            <p>010-6603-8396</p>
          </div>
          
        </div>
        <img className="section16_lama" src={section16_lama} alt="" />
      </div>
    </section>
  );
};

export default Section_16;
