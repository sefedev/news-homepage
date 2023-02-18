import React from "react";

const ArticleSummary = ({
  articleImg,
  articleNumber,
  articleTitle,
  articleSummary,
}) => {
  return (
    <div className="flex mt-5 w-1/3 sm:w-full">
      <img
      src={articleImg} 
      alt="img"
      width="90px"
      heigh="90px" />
      <div className="flex flex-col justify-between px-4">
        <h2 className="font-bold text-grayishBlue text-2xl">{articleNumber}</h2>
        <a href="#" className="font-bold text-veryDarkBlue hover:text-softRed transition duration-150" alt="">{articleTitle}</a>
        <p className="text-darkGrayishBlue">{articleSummary}</p>
      </div>
    </div>
  );
};

export default ArticleSummary;
