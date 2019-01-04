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
        console.log(event.target);
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
                    <div className="form-control border-0 col-md-6 offset-3">
                    <label>Name</label>
                    <input type="text" className="form-control" name="name" value={name} onChange={this.handleChange}></input>
                    </div>
                    <div className="form-control border-0 col-md-6 offset-3">
                    <label>Job</label>
                    <input type="text" className="form-control" name="job" value={job} onChange={this.handleChange}></input>
                    </div>
                    <div className="form-check col-md-6 offset-3">
                    <input type="button" className="btn btn-primary" value="Submit" onClick={this.submitForm}/>
                    </div>
                </ form>
            </div>
        );
    }
}

export default Form;