import React, { useState } from "react";
import { data } from "../../data";
import Footer from "../Footer";

const QuestionBlock = () => {
  const [changedData, setChangedData] = useState([]);
  const handleChange = (event) => {
    setChangedData(event.target.value);
    console.log(changedData)
  };
  return (
    <div>
      <div>
        {data.questions.map((data, key) => {
          return (
            <div key={key}>
              {data.question}
              {data.questionoption.map((question, key) => {
                return (
                  <div key={key} onChange={handleChange}>
                    <input type={data.questiontype} />
                    <label>{question.optionvalue}</label>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <Footer data={changedData}/>
    </div>
  );
};

export default QuestionBlock;
