import React from "react";
import PersonItem from "./PersonItem";

const PeopleList = ({ people, onPersonSelected }) => {
  const renderedList = people.map(person => {
    return (
      <PersonItem
        key={person.id}
        onPersonSelected={onPersonSelected}
        person={person}
      />
    );
  });

  return <div>{renderedList}</div>;
};

export default PeopleList;
