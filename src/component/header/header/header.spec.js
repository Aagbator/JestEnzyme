import React from 'react';
import { shallow } from 'enzyme';
import Header from './header.component';
import { findByTestAttr } from '../../../Utils/index';

const setUp = (props={}) => {
    const component = shallow(<Header {...props} />);
    return component
}


describe('Header Component', () => {
    let component;
    beforeEach(() => {
         component = setUp();
    });

    it('It should render without errors', () => {
        const wrapper = findByTestAttr(component, 'headerComponent');
        expect(wrapper.length).toBe(1);
    });

    it('Should render a logo', () => {
        const logo = findByTestAttr(component, 'logo-img');
        expect(logo.length).toBe(1);
    })
})