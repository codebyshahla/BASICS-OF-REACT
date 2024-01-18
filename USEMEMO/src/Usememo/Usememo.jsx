import React, { useState, useMemo } from 'react';

const ExpensiveComputationComponent = () => {
  const [count, setCount] = useState(0);

  // useMemo takes a function and an array of dependencies
  const expensiveResult = useMemo(() => {
    // This is the expensive computation we want to memoize
    console.log('Executing expensive computation...');
    return count * 2;
  }, [count]); // The dependency array, 'count' in this case

  return (
    <div>
      <p>Count: {count}</p>
      <p>Expensive Result: {expensiveResult}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};

export default ExpensiveComputationComponent;
