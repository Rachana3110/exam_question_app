import React from "react";
import QuestionBlock from "./QuestionBlock";

const Content = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form submitted");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h3>Multiple Choice Questions</h3>
        <QuestionBlock />
      </div>
    </form>
  );
};

export default Content;
