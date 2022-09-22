import React from "react";
import Tree from '../Tree.js'
import TreeMap from './TreeMap.jsx'

function App() {
  const newTree = new Tree('amoeba')
  newTree.addChild('virus')
  newTree.addChild('bacteria')
  newTree.children[1].addChild('algae')
  var bacteria = newTree.getChild('bacteria')
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