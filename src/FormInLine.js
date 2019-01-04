import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            job: '',
            status: 1
        }

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, job } = this.state;

        return (
            <div className="container">
                <hr/>
                <br/>
                <form>
                    <tr>
                    <td><input type="text" className="form-control" name="name" value={name} onChange={this.handleChange}></input></td>
                    <td><input type="text" className="form-control" name="job" value={job} onChange={this.handleChange}></input></td>
                    <td><input type="button" className="btn btn-primary" value="Submit" onClick={this.submitForm}/></td>
                    </tr>
                </ form>
            </div>
        );
    }
}
