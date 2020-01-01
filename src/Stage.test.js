import React from 'react';
import ReactDOM from 'react-dom';
import Stage from './Stage'
import renderer from 'react-test-renderer';


describe('Stage Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <Stage 
        cards={[
          {id: 1, name: 'Yosef', avatar: 'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1'},
          {id: 2, name: 'Scott', avatar: 'https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1' }
         ]}
      />, 
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(
      <Stage 
        header='List 1'
        cards={[
          {id: 1, name: 'Yosef', avatar: 'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1'},
          {id: 2, name: 'Scott', avatar: 'https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1'}
         ]}
      />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
});