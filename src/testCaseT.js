import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { sinon } from 'sinon';

describe("app component ",()=>{
    it('App Component should ocntain h1',()=>{
        const wrapper = shallow(<App/>);
        expect(wrapper.contains(<h1>Welcome</h1>)).to.equal(true);
    })
});

describe('testCase',() => {
    it('renders without crashing',()=>{
        const div = document.createElement('div');
        ReactDOM.render(<App/>,div);

    });
})

describe('App Component',() => {
    it('App Component should contain h1', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.contains(<h1>Welcome</h1>)).to.equal(true);

    });
     it('h1 should contain welcome', () => {
       const wrapper = shallow(<App/>);
        expect(wrapper.find(('h1').text()).to.equal("Welcome"));

    });
});
