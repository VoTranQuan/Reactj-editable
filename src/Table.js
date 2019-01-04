import React, { Component } from "react";
import TableLine from "./TableLine";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>#</th>
      </tr>
    </thead>
  );
};


const TableBody = x => {
  const row = x.characterDataa.map((row, index) => {
    return (
      <TableLine 
        singleRow={row} 
        updateCharacter={x.updateCharacter}
        key = {index}
        index = {index}
        removeCharacter ={x.removeCharacter} 
        updateStatus = {x.updateStatus}/>
    );
  });

  return <tbody>{row}</tbody>;
};

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            job: '',
            status: 1
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = event => {
        console.log(event.target.job);
        this.setState({name: event.target.name, job: event.target.job});
    }

  render() {
    const {
      characterData,
      removeCharacter,
      updateStatus,
      saveCharacter,
      updateCharacter
    } = this.props;

    return (
      <table className="table table-bordered">
        <TableHeader />
        <TableBody
          characterDataa={characterData}
          removeCharacter={removeCharacter}
          updateStatus={updateStatus}
          saveCharacter={saveCharacter}
          handleChange = {this.handleChange}
          updateCharacter = {updateCharacter}
        />
      </table>
    );
  }
}

export default Table;
