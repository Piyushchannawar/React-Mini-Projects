import React from "react";
import './Question.css'
import Accordian from "./Accordian";


const Question = ({ data }) => {
  return (
    <div className="questions-container">
      <h1>Interview Questions</h1>
      <div className="accordions-container">
        {data.map((item) => {
          return <Accordian item={item} />;
        })}
      </div>
    </div>
  );
};

export default Question;