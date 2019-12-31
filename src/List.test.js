import React from 'react';
import ReactDOM from 'react-dom';
import List from './List'
import renderer from 'react-test-renderer';


describe('List Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <List 
        cards={[
          {id: 1, name: 'Yosef', avatar: 'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1', inSession: true, onStage: true },
          {id: 2, name: 'Scott', avatar: 'https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1', inSession: false, onStage: true }
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