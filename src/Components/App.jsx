import React, {useState} from "react";
import Tree from '../Tree.js'
import TreeMap from './TreeMap.jsx'

function App() {
  const [newTree, updateTree] = useState(new Tree('amoeba'))
  const [initialState, changeState] = useState(true);
  if (initialState) {
    newTree.addChild('virus')
    newTree.addChild('bacteria')
    newTree.children[1].addChild('algae')
    var bacteria = newTree.getChild('bacteria')
  }

  return (
    <div>
      <h1>Testing!</h1>
      <ul>
      <TreeMap tree={newTree} updateTree={updateTree} changeState={changeState}/>
      </ul>
    </div>
  )
}

export default App;