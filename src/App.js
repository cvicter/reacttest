import React from "react";
import PeopleList from "./PeopleList";

const people = [
  { id: 1, name: "Claudio", status: "Processar" },
  { id: 2, name: "Diovana", status: "Processar" }
];
class App extends React.Component {
  state = {
    people: people,
    selectedPerson: null
  };

  onPersonSelected = person => {
    console.log(person);
    person.status = "PROCESSANDO";
    this.setState({ selectedPerson: person }, () => {
      console.log(this.state.selectedPerson);
      setTimeout(() => {
        this.onProcess(this.state.selectedPerson);
      }, 2000);
    });
  };

  onProcess = person => {
    person.status = "DONE";
    setTimeout(() => {
      this.setState({ selectedPerson: person }, () => {
        console.log(this.state.selectedPerson);
      });
    }, 3000);
  };

  render() {
    return (
      <div>
        <PeopleList
          people={this.state.people}
          onPersonSelected={this.onPersonSelected}
        />
      </div>
    );
  }
}

export default App;
