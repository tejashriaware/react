// People.tsx

import React from 'react';

interface Person {
  name: string;
  country: string;
}

interface PeopleProps {
  people: Person[];
}

const People: React.FC<PeopleProps> = ({ people }) => {
  return (
    <div>
      <h2>People List</h2>
      <ul>
        {people.map((person, index) => (
          <li key={index}>
            <strong>Name:</strong> {person.name}, <strong>Country:</strong> {person.country}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default People;
