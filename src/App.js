import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import update from 'immutability-helper';

class App extends Component {
    state = {
        characters: [
            {
                'name': 'Quan',
                'job': 'Janitor',
                'status': 1
            },
            {
                'name': 'Mac',
                'job': 'Bouncer',                
                'status': 1
            },
            {
                'name': 'Dee',
                'job': 'Aspring actress',
                'status': 1
            },
            {
                'name': 'Dennis',
                'job': 'Bartender',
                'status': 1
            }
        ]
    };

    removeCharacter = x => {
        const { characters } = this.state;
        this.setState({
            characters: characters.filter((character, i) => {
                return i !== x;
            })
        })
    }

    editCharacter = (index, value) => {
        var charac = this.state.characters;
        console.log(index);

        var updateCmd = update(charac[index], {status: {$set: value}});
        var newCharacters = update(charac, { $splice: [[index,1, updateCmd]] });

       this.setState({
           characters: newCharacters
       })        
    }

    handleSubmit = character => {
        this.setState({
            characters: [...this.state.characters, character]
        });
    }

    render() {
        const { characters } = this.state;

        return (
            <div className="container">
                <h1>Hello Qz</h1>
                <Table characterData={characters}
                    removeCharacter={this.removeCharacter}
                    editCharacter = {this.editCharacter}
                />
                <Form handleSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

export default App;