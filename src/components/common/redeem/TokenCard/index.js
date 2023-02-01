import React from "react";

const TokenCard = ({
  coverImg,
  alt,
  title,
  text1,
  text2,
  text3,
  coupon,
  button,
  innerText,
  style,
}) => {
  return (
    <section className={`w-full h-full`}>
      <div className={`w-[920px] h-full p-[30px] mx-auto ${style}`}>
        <div className="w-1/3 h-full">
          <img src={coverImg} alt={alt} />
        </div>
        <div className="w-2/3 h-full">
          <div className="w-full h-full">
            <h3>{title}</h3>
            <p>{text1}</p>
            <p>{text2}</p>
            <p>{text3}</p>
          </div>
          <div className={`w-full h-full ${coupon}`}>
            <div>
              <label htmlFor="code">enter code</label>
              <input type="text" name="code" id="code" />
              <p>* This field is Required</p>
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </div>
          <div className={`w-full h-full ${button}`}>
            <a href="blank">{innerText}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenCard;
