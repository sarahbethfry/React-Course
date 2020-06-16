import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }
  state = {
    person: [
      { id: 1, name: "sarah", age: 31 },
      { id: 2, name: "petr", age: 38 },
      { id: 3, name: "thomas", age: 2 },
    ],
    showPersons: false,
    showCockpit: true,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return console.log(state);
  }

  componentDidMount() {
    console.log("[App.js] didMount");
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.person];
    persons.splice(personIndex, 1);
    this.setState({ person: persons });
  };

  changeNameHandler = (event, personId) => {
    const personIndex = this.state.person.findIndex((p) => {
      return p.id === personId;
    });

    const person = {
      ...this.state.person[personIndex],
    };

    person.name = event.target.value;
    const persons = [...this.state.person];
    persons[personIndex] = person;

    this.setState({
      person: persons,
    });
  };
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  render() {
    console.log("[App.js] render");
    return (
      <div className={classes.App}>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            person={this.state.person}
            clicked={this.togglePersonsHandler}
          ></Cockpit>
        ) : null}
        {this.state.showPersons ? (
          <Persons
            persons={this.state.person}
            deleted={this.deletePersonHandler}
            changed={this.changeNameHandler}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
