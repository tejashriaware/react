// App.tsx

import React from 'react';
import People from './People';

const App: React.FC = () => {
  const peopleData = [
    { name: 'John Doe', country: 'USA' },
    { name: 'Jane Doe', country: 'Canada' },
    { name: 'Bob Smith', country: 'UK' },
    // Add more people as needed
  ];

  return (
    <div>
      <h1>React People App</h1>
      <People people={peopleData} />
    </div>
  );
};

export default App;
