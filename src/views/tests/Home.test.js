import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Home from '../home/components/Home';
import Header from '../home/components/Header';

configure({ adapter: new Adapter() });

describe('<Home/>',()=>{

    it('renders the <Header/>',()=>{
       let wrapper = shallow(<Home/>);
       expect(wrapper.find(Header).exists()).toBeTruthy();
    });

});