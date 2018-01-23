import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import Filters from './Filters';
import PuppyAddForm from './PuppyAddForm';
import PuppiesList from './PuppiesList';
import Puppy from './Puppy';

describe('All tests', () => {
  beforeEach(function() {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve([])
      })
    );
  });

  it('Renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<App />, div);
  });

  it('Renders App without crashing', () => {
    shallow(<App />);
  });

  it('Renders Filters without crashing', () => {
    const props = {
      currentFilter: 'ALL',
      onChangeFilterHandler: () => {}
    };

    shallow(<Filters {...props} />);
  });

  it('Renders PuppyAddForm without crashing', () => {
    const props = { onClickSaveHandler: () => {} };

    shallow(<PuppyAddForm {...props} />);
  });

  it('Renders PuppiesList without crashing', () => {
    const props = {
      puppies: [],
      onClickAdoptHandler: () => {},
      onClickDeleteHandler: () => {}
    };

    shallow(<PuppiesList {...props} />);
  });

  it('Renders Puppy without crashing', () => {
    const props = {
      id: 1,
      name: '',
      type: '',
      adopted: true,
      onClickAdoptHandler: () => {},
      onClickDeleteHandler: () => {}
    };

    shallow(<Puppy {...props} />);
  });
});
