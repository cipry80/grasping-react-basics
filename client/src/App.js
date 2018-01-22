import React, { Component } from 'react';
import Filters from './Filters';
import PuppiesList from './PuppiesList';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      puppies: [],
      filteredPuppies: [],
      currentFilter: 'ALL'
    };
  }

  componentDidMount = () =>
    fetch(`/puppies`)
      .then(res => res.json())
      .then(res =>
        this.setState(() => ({
          puppies: res.slice(0),
          filteredPuppies: res.slice(0)
        }))
      );

  _onChangeFilterHandler = e => {
    const newFilter = e.target.value;
    let filteredPuppies = [];

    switch (newFilter) {
      case 'ALL':
        filteredPuppies = this.state.puppies.slice(0);
        break;
      case 'ADOPTED':
        filteredPuppies = this.state.puppies.filter(puppy => puppy.adopted);
        break;
      case 'NOT_ADOPTED':
        filteredPuppies = this.state.puppies.filter(puppy => !puppy.adopted);
        break;
      default:
        filteredPuppies = this.state.puppies.slice(0);
        break;
    }

    this.setState(() => ({
      filteredPuppies,
      currentFilter: newFilter
    }));
  };

  _constructPuppiesList = () => (
    <PuppiesList
      onClickAdoptHandler={this._onClickAdoptHandler}
      puppies={this.state.filteredPuppies}
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
      .then(res =>
        this.setState(() => ({
          puppies: res.slice(0),
          filteredPuppies: res.slice(0)
        }))
      );
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
        <Filters
          currentFilter={this.state.currentFilter}
          onChangeFilterHandler={this._onChangeFilterHandler}
        />
        <ul className="puppies-list u-fx u-fx-space-between">
          {this._constructPuppiesList()}
        </ul>
      </div>
    );
  }
}

export default App;
