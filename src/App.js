import React, { useState } from 'react';
import './App.css';

function TreeNode({ value, onClick, isSelected, children }) {
  return (
    <div className="node">
      <button 
        className={`btn ${isSelected ? 'btn-primary' : 'btn-secondary'}`} 
        onClick={onClick}
      >
        {value}
      </button>
      <div className="children">
        {children}
      </div>
    </div>
  );
}

function App() {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleButtonClick = (value) => {
    setSelectedValues([...selectedValues, value]);
  };

  const preorderTraversal = (node) => {
    if (!node) return;
    const value = node.props.value;
    if (selectedValues.includes(value)) {
      console.log(value); // Output the value
    }
    React.Children.forEach(node.props.children, child => {
      preorderTraversal(child);
    });
  };

  const inorderTraversal = (node) => {
    if (!node) return;
    if (node.props.children) {
      inorderTraversal(node.props.children[0]); // Left child
    }
    const value = node.props.value;
    if (selectedValues.includes(value)) {
      console.log(value); // Output the value
    }
    if (node.props.children) {
      inorderTraversal(node.props.children[1]); // Right child
    }
  };
  

  const postorderTraversal = (node) => {
    if (!node) return;
    if (node.props.children) {
      postorderTraversal(node.props.children[0]); // Left child
      postorderTraversal(node.props.children[1]); // Right child
    }
    const value = node.props.value;
    if (selectedValues.includes(value)) {
      console.log(value); // Output the value
    }
  };

  const rootNode = (
    <TreeNode 
      value={'root'} 
      isSelected={selectedValues.includes('root')} 
      onClick={() => handleButtonClick('root')}
    >
      <TreeNode 
        value={'EEE_dept'} 
        isSelected={selectedValues.includes('EEE_dept')} 
        onClick={() => handleButtonClick('EEE_dept')}
      >
        <TreeNode 
          value={'ECE'} 
          isSelected={selectedValues.includes('ECE')} 
          onClick={() => handleButtonClick('ECE')}
        >
          <TreeNode 
            value={'Computer Networks'} 
            isSelected={selectedValues.includes('Computer Networks')} 
            onClick={() => handleButtonClick('Computer Networks')}
          />
          <TreeNode 
            value={'Signal Sysytem'} 
            isSelected={selectedValues.includes('Signal Sysytem')} 
            onClick={() => handleButtonClick('Signal Sysytem')}
          />
        </TreeNode>
        <TreeNode 
          value={'EEE'} 
          isSelected={selectedValues.includes('EEE')} 
          onClick={() => handleButtonClick('EEE')}
        >
          <TreeNode 
            value={'Power Electronics'} 
            isSelected={selectedValues.includes('Power Electronics')} 
            onClick={() => handleButtonClick('Power Electronics')}
          />
          <TreeNode 
            value={'Electrical Machines'} 
            isSelected={selectedValues.includes('Electrical Machines')} 
            onClick={() => handleButtonClick('Electrical Machines')}
          />
        </TreeNode>
      </TreeNode>
      <TreeNode 
        value={'CSE_dept'} 
        isSelected={selectedValues.includes('CSE_dept')} 
        onClick={() => handleButtonClick('CSE_dept')}
      >
        <TreeNode 
          value={'CSE'} 
          isSelected={selectedValues.includes('CSE')} 
          onClick={() => handleButtonClick('CSE')}
        >
          <TreeNode 
            value={'DSA'} 
            isSelected={selectedValues.includes('DSA')} 
            onClick={() => handleButtonClick('DSA')}
          />
          <TreeNode 
            value={'OS'} 
            isSelected={selectedValues.includes('OS')} 
            onClick={() => handleButtonClick('OS')}
          />
        </TreeNode>
        <TreeNode 
          value={'MNC'} 
          isSelected={selectedValues.includes('MNC')} 
          onClick={() => handleButtonClick('MNC')}
        >
          <TreeNode 
            value={'Trading'} 
            isSelected={selectedValues.includes('Trading')} 
            onClick={() => handleButtonClick('Trading')}
          />
          <TreeNode 
            value={'Statistics'} 
            isSelected={selectedValues.includes('Statistics')} 
            onClick={() => handleButtonClick('Statistics')}
          />
        </TreeNode>
      </TreeNode>
    </TreeNode>
  );

  return (
    <div>
    <div className="tree">
      {rootNode}
      <div>Selected values: {selectedValues.join(', ')}</div>
      
    </div>
    <button className={'btn-primary'} style={{paddingLeft:'100px',paddingTop:'50px'}} onClick={() => preorderTraversal(rootNode)}>Preorder</button>
    <button className={'btn-primary'} style={{paddingLeft:'100px',paddingTop:'50px'}} onClick={() => inorderTraversal(rootNode)}>Inorder</button>
    <button className={'btn-primary'} style={{paddingLeft:'100px',paddingTop:'50px'}} onClick={() => postorderTraversal(rootNode)}>Postorder</button>
    </div>
  );
}

export default App;
