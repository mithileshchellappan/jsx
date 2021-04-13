//import react & react dom libs

import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from './CommentDetail';
import faker from 'faker';

//create react component
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author = {faker.name.firstName()} comment="hello"/>
      <CommentDetail author="LIn" comment="from the pther side"/>
    </div>
  );
};
//take react comp and show on screen
ReactDOM.render(<App />, document.querySelector("#root"));
