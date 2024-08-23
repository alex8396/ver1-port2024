import React from "react";

import section4_lama from "./../../assets/img/section4_lama.svg";

const Section_04 = () => {
  return (
    // <!-- 섹션 4 : 게임 이펙트 -->
    <section id="game" className="section point custom_color">
      <div className="section4_fixed">
        <h2 className="title">my story</h2>
        <div className="desc_cont">
          <p className="desc">
            
          </p>
          
        </div>
      </div>

      <div className="section4_cont">
        <div className="section4_icon_layout one">
          {/* <div className="level_cont">
            <p>!</p>
            <p>
              공부할때 childNodes와 같은 노드 선택을 활용한 점이 어려웠습니다.
            </p>
          </div> */}
          <div className="section4_item">
            <div className="section4_left"></div>
            <div className="section4_right">
              <h2>01.</h2>
              <div className="section4_item_desc">
                <h4>우연한 기회</h4>
                <p>
                  우연한 기회에 인공지능 스피커를 얻고 개발에 관심을 가지게 되었습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section4_rev_icon_layout">
          {/* <div className="level_cont">
            <p>!</p>
            <p>
              공부할때 childNodes와 같은 노드 선택을 활용한 점이 어려웠습니다.
            </p>
          </div> */}
          <div className="section4_rev_item two">
            <div className="section4_rev_left">
              <h2>02.</h2>
              <div className="section4_rev_item_desc">
                <h4>대학교 진학</h4>
                <p>
                  개발자라는 직업을 알게 되었고 스마트시스템소프트웨어공학과에 입학을 하였습니다.
                </p>
              </div>
            </div>
            <div className="section4_rev_right"></div>
          </div>
        </div>
        <div className="section4_icon_layout three">
          {/* <div className="level_cont">
            <p>!</p>
            <p>
              setTimeout을 통해 한정된 시간을 정해두고 해당 시간이 지나면 종료를
              시켜야 했었는데 해당 부분이 어려웠습니다.
            </p>
          </div> */}
          <div className="section4_item">
            <div className="section4_left"></div>
            <div className="section4_right">
              <h2>03.</h2>

              <div className="section4_item_desc">
                <h4>웹 개발자</h4>

                <p>
                  대학교 수업 중 웹개발 수업이 가장 인상 깊게 들었고 웹 개발자가 되어야겠다고 생각했습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section4_rev_icon_layout">
          {/* <div className="level_cont">
            <p>!</p>
            <p>
              data-index, data-duration 등 data 값을 다양하게 활용했던점이 가장
              어려웠었습니다.
            </p>
          </div> */}
          <div className="section4_rev_item two">
            <div className="section4_rev_left">
              <h2>04.</h2>
              <div className="section4_rev_item_desc">
                <h4>최종 목표</h4>
                <p>
                  아직은 프론트엔드 개발만 가능하지만 점차 더 공부를 해서 풀스택 개발자가 되는 것이 최종 목표입니다.
                </p>
              </div>
            </div>
            <div className="section4_rev_right"></div>
          </div>
        </div>
      </div>
      <svg
        className="editorial editorial_04"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 
      58-18 88-18s
      58 18 88 18 
      58-18 88-18 
      58 18 88 18
      v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use xlinkHref="#gentle-wave" x="50" y="0" fill="#000000" />
          <use xlinkHref="#gentle-wave" x="50" y="3" fill="#000000cf" />
          <use xlinkHref="#gentle-wave" x="50" y="6" fill="#000000ad" />
        </g>
      </svg>
      <img className="ir lamas" src={section4_lama} alt="" />
    </section>
  );
};

export default Section_04;
