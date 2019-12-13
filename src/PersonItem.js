import React from "react";

const PersonItem = ({ person, onPersonSelected }) => {
  return (
    <div onClick={() => onPersonSelected(person)}>
      {person.id} {person.name} <button>{person.status}</button>
    </div>
  );
};

export default PersonItem;
