import React, { Component } from "react";
// import FormInLine from "./FormInLine";

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
      <tr key={index}>
        <td>{row.status > 0 ? (<label>{row.name}</label>) : (<input type="text" className="form-control" value={row.name} onChange={x.handleChange}/>)}</td>
        <td>{row.status > 0 ? (<label>{row.job}</label>) : (<input type="text" className="form-control" value={row.job} onChange={x.handleChange}/>)}</td>
        <td>{row.status > 0 ? (
            <div>
                <button className="btn btn-danger" onClick={() => x.removeCharacter(index)}>Delete</button> &nbsp;
                <button className="btn btn-info" onClick={() => x.editCharacter(index, -1)}>Edit</button>
            </div>) : (
            <div>
                <button className="btn btn-secondary" onClick={() => x.editCharacter(index, 1)}>Cancel</button> &nbsp;
                <button className="btn btn-success" onClick={() => x.updateCharacter(index)}>Save</button>
            </div>)}
        </td>
      </tr>
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
      editCharacter,
      saveCharacter
    } = this.props;

    return (
      <table className="table table-bordered">
        <TableHeader />
        <TableBody
          characterDataa={characterData}
          removeCharacter={removeCharacter}
          editCharacter={editCharacter}
          saveCharacter={saveCharacter}
          handleChange = {this.handleChange}
        />
      </table>
    );
  }
}

export default Table;
