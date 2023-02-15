import React from "react";

const NewHighlight = ({highlightHead,highlightSummary}) =>  {
    return (
        <div>
        <h3>{highlightHead}</h3>
        <p>{highlightSummary}</p>
      </div>
    )
} 

export default NewHighlight