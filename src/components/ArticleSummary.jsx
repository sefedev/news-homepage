import React from "react";

const ArticleSummary = ({
  articleImg,
  articleNumber,
  articleTitle,
  articleSummary,
}) => {
  return (
    <div>
      <img src={articleImg} alt="img" />
      <div>
        <h3>{articleNumber}</h3>
        <p>{articleTitle}</p>
        <p>{articleSummary}</p>
      </div>
    </div>
  );
};

export default ArticleSummary;
