import React from 'react';
import ReactDOM from 'react-dom';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';
import Home from './views/home/components/Home';

configure({ adapter: new Adapter() });

describe('App', ()=>{

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders Home component', ()=>{
    let wrapper = shallow(<App />);
    expect(wrapper.find(Home).exists()).toBe(true);
  });

});
