import React, { Component } from 'react';

class TableLine extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: this.props.singleRow.name,
            job: this.props.singleRow.job,
            status: -1
        }

        this.state = this.initialState;
    }

    handleChange = event => {

        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    submitForm = (index) => {
        console.log(this.state);
        this.props.updateCharacter(index, this.state.name, this.state.job);
        // this.setState(this.initialState);
    }

    _updateStatus = (index, value) => {
        this.setState({name: this.props.singleRow.name, job: this.props.singleRow.job, status: -1});
        this.props.updateStatus(index, value);
    }

    render() {
        const { singleRow, index, removeCharacter, updateStatus } = this.props;

        return (
            <tr>
                <td>{singleRow.status > 0 ? (<label>{singleRow.name}</label>) : (<input type="text" className="form-control" name="name" defaultValue ={singleRow.name || null} onChange={this.handleChange}></input>)}</td>
                <td>{singleRow.status > 0 ? (<label>{singleRow.job}</label>) : (<input type="text" className="form-control" name="job" defaultValue ={singleRow.job || null} onChange={this.handleChange}></input>)}</td>
                <td>{singleRow.status < 0 ? (
                    <div>
                    <input type="button" className="btn btn-primary" value="Submit" onClick={() => this.submitForm(index)} />
                    &nbsp;
                    <input type="button" className="btn btn-default" value="Cancel" onClick={() => updateStatus(index, 1)} />
                    </div>) : (

                    <div>
                        <button className="btn btn-primary" onClick={() => this._updateStatus(index, -1)}>Edit</button>
                         &nbsp;
                        <button className="btn btn-danger" onClick={() => removeCharacter(index)}>Delete</button>
                    </div>

                )} </td>
            </tr>
        );
    }
}

export default TableLine;
