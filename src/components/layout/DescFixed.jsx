import React, { useEffect } from "react";

const DescFixed = ({ scrolled }) => {
  useEffect(() => {
    document.querySelector(".scroll_progress").style.height = scrolled + "%";
  });
  return (
    <section className="porfolio_desc_fixed">
      <p>Portfolio</p>
      {/* <p>Sangjun</p> */}
      <div className="scroll_background">
        <div className="scroll_progress"></div>
      </div>
      <p>2024</p>
    </section>
  );
};

export default DescFixed;
