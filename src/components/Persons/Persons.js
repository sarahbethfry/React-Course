import React, { Component } from "react";

import Person from "./Person/Person";

class Persons extends Component {
  render() {
    console.log("[Persons.js] rendering...");
    return this.props.persons.map((p, i) => {
      return (
        <Person
          click={() => this.props.deleted(i)}
          name={p.name}
          age={p.age}
          key={p.id}
          change={(event) => this.props.changed(event, p.id)}
        />
      );
    });
  }
}

export default Persons;
