import React, { useState } from "react";

import parse from "html-react-parser"

const ReadMore = ({ content }) => {
  const text = content;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? parse(text.slice(0, 500)) : parse(text)}
      {text.length > 500 &&
        <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "Lees meer" : " Lees minder"}
        </span>
      }
    </p>
  );
};

export default ReadMore