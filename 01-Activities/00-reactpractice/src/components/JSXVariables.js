import React from "react";

var name = "Ryan";
var thoughts = ["cool", "crazy how awesome components work", "hard at first, but flippin sweet and easy once done."]

const JSXVariables = () => (
  <div className="main-container">
    <div className="container">
      <div className="jumbotron">
        <h1>Hi! My name is {name}</h1>
        <h2>My name has {name.length} letters</h2>
        <h2>I think React {thoughts[0]}, {thoughts[1]}, {thoughts[2]}.</h2>
      </div>
    </div>
  </div>
);

export default JSXVariables;
