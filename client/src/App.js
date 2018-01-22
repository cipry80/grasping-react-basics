import React, { Component } from 'react';
import PuppiesList from './PuppiesList';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      puppies: []
    };
  }

  componentDidMount = () =>
    fetch(`/puppies`)
      .then(res => res.json())
      .then(res => this.setState(() => ({ puppies: res.slice(0) })));

  _constructPuppiesList = () => (
    <PuppiesList
      onClickAdoptHandler={this._onClickAdoptHandler}
      puppies={this.state.puppies}
    />
  );

  _onClickAdoptHandler = puppyId => {
    const puppy = this.state.puppies.find(puppy => puppy.id === puppyId);
    puppy.adopted = !puppy.adopted;

    fetch(`/puppies/${puppyId}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(puppy)
    })
      .then(() => fetch(`/puppies`))
      .then(res => res.json())
      .then(res => this.setState(() => ({ puppies: res.slice(0) })));
  };

  render() {
    if (!this.state.puppies.length) {
      return null;
    }

    return (
      <div className="puppies-app u-pa-double">
        <header className="puppies-app__header u-fx u-fx-align-center u-fx-justify-center u-mb-double">
          <h2>Puppy Adoption FTW</h2>
        </header>
        <ul className="puppies-list u-fx u-fx-space-between">
          {this._constructPuppiesList()}
        </ul>
      </div>
    );
  }
}

export default App;
