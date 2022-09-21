import React from "react";
import Tree from '../Tree.js'
import TreeMap from './TreeMap.js'

function App() {
  var leafCount = 0;
  const newTree = new Tree('amoeba')
  newTree.addChild('virus')
  newTree.addChild('bacteria')
  newTree.children[1].addChild('algae')
  return (
    <div>
      <h1>Testing!</h1>
      <ul>
      <TreeMap tree={newTree}/>
      </ul>
    </div>
  )
}

export default App;