import React from "react";
import _ from "underscore";
import axios from 'axios';

axios.defaults.baseURL = process.env.URL
function getParams(branchName) {
  return axios.get(`/trees/${branchName}`)
  .then(() => {
    console.log('hi')
  })
}

function TreeMap(props) {
  //create JSX for the list item of the current value
  var value = <li key={Math.floor(Math.random() * 1000)} onClick={() => getParams(props.tree.value)}>{props.tree.value}</li>;
  var children;
  //if there are children, create another level of the list, map through, and recurse
  if (props.tree.children.length > 0) {
    children = (
      <ul>
        {props.tree.children.map((branch, index) => {
          return <TreeMap key={index} tree={branch}/>
        })}
      </ul>
    );
  }
  //return the list item and the tree
  return (
    <div>
      {value}
      {children ? children : ""}
    </div>
  );
}

export default TreeMap;