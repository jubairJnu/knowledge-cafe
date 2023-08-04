import React from 'react';
import './question.css'

const Questionaries = () => {
    return (
       <div className="question">
        <div className="one">
          <h3>What are the difference between props and title?</h3>
          <p>
          Props are used to pass data from a parent component to a child component, while state is used to manage data within a component itself. Props are read-only and cannot be modified, while state is mutable and can be updated using setState
          </p>
        </div>
        <div className="two">
          <h3>How does useState performs?</h3>
          <p>In simple terms, useState is a hook in React that allows functional components to have state. It works by returning an array with two values: the current state value and a function to update the state value. The first value in the array is the current state value, and the second value is a function that can be used to update the state value. The initial state value can be passed to useState as an argument. Whenever the state is updated, the component re-renders to reflect the new state value.</p>
        </div>

        <div className="three">
          <h3>What are the performance of useEffect except data loading?</h3>
          <p>useEffect in React can do more than just loading data. In simple terms, useEffect is a hook that allows you to execute code in response to changes in props or state, or when the component is mounted or unmounted. It is a flexible tool that can be used for a wide range of tasks, not just for loading data from an API.</p>
        </div>

        <div className="four">
          <h3>How does react work?</h3>
          <p>React works by creating a Virtual DOM, updating it when the state or props of a component change, and then reconciling the new Virtual DOM with the previous one to update the actual DOM. This process allows React to efficiently update the UI and keep it in sync with the state of the application.</p>
        </div>
       </div>
    );
};

export default Questionaries;