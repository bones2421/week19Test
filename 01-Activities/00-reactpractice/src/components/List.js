import React from "react";

const List = props => (
  <ul className="list-group">
    {props.groceries.map((ele, i) => 
      <li key={ele.id} className="list-group-item">{
        ele.name}
      </li>
    )}
  </ul>
);

export default List;
