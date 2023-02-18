import React from "react";

const NewHighlight = ({highlightHead,highlightSummary}) =>  {
    return (
        <div className="my-5">
        <a href="#" className="font-semibold text-lg text-offWhite hover:text-orange transition duration-150" alt="text">{highlightHead}</a>
        <p className="text-sm mt-2 text-darkGrayishBlue ">{highlightSummary}</p>
      </div>
    )
} 

export default NewHighlight