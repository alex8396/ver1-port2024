import React from "react";

import section3_img_bottom from "./../../assets/img/section3_img_bottom.svg";
import section3_img_001 from "./../../assets/img/section3_img_001.jpg";
import section3_img_002 from "./../../assets/img/section3_img_002.jpg";
import section3_img_003 from "./../../assets/img/section3_img_003.jpg";
import section3_img_004 from "./../../assets/img/section3_img_004.jpg";
import section3_img_005 from "./../../assets/img/section3_img_005.jpg";
import section3_img_006 from "./../../assets/img/section3_img_006.jpg";
import section3_title from "./../../assets/img/section3_title.svg";

const Section_03 = () => {
  const data = [
    {
      name: "dsad",
      desc: "asd",
      github: "asd",
    },
  ];
  return (
    <section id="usedStack" className="horizontal">
      <div className="section3_fixed">
        <h2>
          USED <em>STACK</em>
          {/* JAVASCRIPT <em>PRACTICE</em> */}
        </h2>
        <p>이런 기술들을 사용해봤어요!</p>
        {/* <img src={section3_title} alt="" /> */}
      </div>

      <section className="panel custom_02">
        <img
          className="section3_item_bottom2"
          src={section3_img_bottom}
          alt="라마인형들"
        />
        <img
          className="section3_item_bottom"
          src={section3_img_bottom}
          alt="라마인형들_뒷배경"
        />
        <div className="section3_item i001">
          <img src={section3_img_001} alt="Search Effect" />
          <div className="item_desc">
            <h2>FRONT</h2>

            <div>
              <h4>React</h4>
              <p>
                React의 구조를 이해하고 있으며, 여러가지 Hook을 사용할 수
                있습니다.
              </p>
            </div>
            <div>
              <h4>Vue</h4>
              <p>
                Vue의 구조를 이해하고 있으며, 여러가지 Hook을 사용할 수
                있습니다.
              </p>
            </div>
            <div>
              <h4>Vite</h4>
              <p>
                Vite의 구조를 이해하고 있으며, 여러가지 Hook을 사용할 수
                있습니다.
              </p>
            </div>
            <div>
              <h4>Next.js</h4>
              <p>
                Next.js의 구조를 이해하고 있으며, 여러가지 Hook을 사용할 수
                있습니다.
              </p>
            </div>
          </div>
        </div>

        <div className="section3_item i002">
          <img src={section3_img_002} alt="Search Effect" />
          <div className="item_desc">
            <h2>BACK-END</h2>
            
            <div>
              <h4>MySQL</h4>
              <p>
                php로 작성한것을 dothome 호스팅을 통해 filezilla로 접속하여 관리
                하기위해 사용하였습니다.
              </p>
            </div>
            {/* <div>
              <a href="https://github.com/kimsangjunv1/codingclass/blob/main/javascript/effect/quizEffect01.html">
                code
              </a>
              <a href="http://vvv0032.dothome.co.kr/javascript/effect/quizEffect01.html">
                view
              </a>
            </div> */}
          </div>
        </div>

        <div className="section3_item i003">
          <img src={section3_img_003} alt="Search Effect" />
          <div className="item_desc">
            <h2>LIBRARY</h2>
            <div>
              <h4>스와이퍼</h4>
              <p>
                다양한 데모를 통한 여러가지 형태의 슬라이드 구현이 가능하여
                사용하게 되었습니다.
              </p>
            </div>
            <div>
              <h4>SCSS</h4>
              <p>
                CSS 속성들이 사용된 클래스의 구조들을 쉽게 파악 및 수정이
                가능하고 압축해 사용이 가능해서 사용하게 되었습니다.
              </p>
            </div>
            <div>
              <h4>Lenis</h4>
              <p>스크롤을 부드럽게 제어하기 간편해 사용하게 되었습니다.</p>
            </div>
            
            <div>
              <h4>Jquery</h4>
              <p>
                바닐라 자바스크립트를 좀 더 손쉽게 사용 가능하고, 애니메이션을
                구현하는데 소요되는 시간이 적어 사용하였습니다.
              </p>
            </div>

            {/* <div>
              <a href="https://github.com/kimsangjunv1/codingclass/blob/main/javascript/effect/sliderEffect.html">
                code
              </a>
              <a href="http://vvv0032.dothome.co.kr/javascript/effect/sliderEffect.html">
                view
              </a>
            </div> */}
          </div>
        </div>

        <div className="section3_item i004">
          <img src={section3_img_004} alt="Search Effect" />
          <div className="item_desc">
            <h2>TOOLS</h2>
            
            <div>
              <h4>Figma</h4>
              <p>
                adobe xd가 아닌 웹사이트를 손쉽게 디자인하고 같은 반복적인
                작업이 필요할떄는 컴포넌트별로 분리 후 하나만 수정하면
                다양한것들이 수정 가능한 기능들이 제공되어 사용하게 되었습니다.
              </p>
            </div>
            <div>
              <h4>Slack</h4>
              <p>
                같이 작업하는 사람들과 손쉽게 코드를 공유 및 업무를 분배하기
                용이한 대화수단이라 사용하게 되었습니다.
              </p>
            </div>
            <div>
              <h4>Github</h4>
              <p>
                브랜치를 각각 나누어 작업하며 메인 브랜치에 merge 하는 방식으로
                작업하고 있습니다.
              </p>
            </div>
            <div>
              <h4>Photoshop</h4>
              <p>
                브랜치를 각각 나누어 작업하며 메인 브랜치에 merge 하는 방식으로
                작업하고 있습니다.
              </p>
            </div>
            <div>
              <h4>illustrator</h4>
              <p>
                브랜치를 각각 나누어 작업하며 메인 브랜치에 merge 하는 방식으로
                작업하고 있습니다.
              </p>
            </div>

            {/* <div>
              <a href="https://github.com/kimsangjunv1/codingclass/blob/main/javascript/effect/mouseEffect01.html">
                code
              </a>
              <a href="http://vvv0032.dothome.co.kr/javascript/effect/mouseEffect01.html">
                view
              </a>
            </div> */}
          </div>
        </div>

        <div style={{ display: "none" }} className="section3_item i005">
          <img src={section3_img_005} alt="Search Effect" />
          <div className="item_desc">
            <h2>
              PARALLAX <br />
              EFFECT
            </h2>
            <p>
              offsetTop 값을 기준으로 브라우저 내부 요소가 위치한 값에 따라
              <br />
              다양한 효과를 주는 예제를 만들었습니다.
            </p>
            <div>
              <a href="https://github.com/kimsangjunv1/codingclass/blob/main/javascript/effect/parallaxEffect.html">
                code
              </a>
              <a href="http://vvv0032.dothome.co.kr/javascript/effect/parallaxEffect01.html">
                view
              </a>
            </div>
          </div>
        </div>

        <div style={{ display: "none" }} className="section3_item i006">
          <img src={section3_img_006} alt="Search Effect" />
          <div className="item_desc">
            <h2>
              JS <br />
              PROJECT
            </h2>
            <p></p>
            <div>
              <a href="https://github.com/kimsangjunv1/codingclass/blob/main/javascript/effect/gameEffect01.html">
                code
              </a>
              <a href="http://vvv0032.dothome.co.kr/javascript/effect/gameEffect01.html">
                view
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Section_03;
