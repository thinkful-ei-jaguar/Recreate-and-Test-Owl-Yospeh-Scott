import React from 'react';
import ReactDOM from 'react-dom';
import List from './List'
import renderer from 'react-test-renderer';


describe('participantList Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <List 
        header='List 1'
        cards={[
          {id: 1, title: 'Raindrops', content: 'jdnsda'},
          {id: 2, title: 'Whiskers', content: 'hjkshfs'}
         ]}
      />, 
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<List 
        header='List 1'
        cards={[
          {id: 1, title: 'Raindrops', content: 'jdnsda'},
          {id: 2, title: 'Whiskers', content: 'hjkshfs'}
         ]}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
});