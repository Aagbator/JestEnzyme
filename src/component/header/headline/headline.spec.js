import React from 'react';
import { shallow } from 'enzyme';
import Headline from './headline.component';

import { findByTestAttr, checkProps } from '../../../Utils/index';

const setUp = (props={}) => {
    const component = shallow(<Headline {...props}/>);
    return component;
}

describe('Headline component', () => {

    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                header: 'Test Header',
                desc: 'Test Desc',
                tempArr: [{
                    fName: 'Test fName',
                    lName: 'Test lName',
                    email: 'testemail@gmail.com',
                    age: 34,
                    onlineStatus: false
                }]
            };

            const propsErr = checkProps(Headline, expectedProps);
            expect(propsErr).toBeUndefined();
        })
    })

    describe('Have props', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: 'Test Desc'
            }
            wrapper = setUp(props)
        });

        it('Should render without errors', () => {
            const component = findByTestAttr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(1);
        });

        it('Should render a Hi', () => {
            const h1 = findByTestAttr(wrapper, 'header');
            expect(h1.length).toBe(1);
        });

        it('Should render a description', () => {
            const desc = findByTestAttr(wrapper, 'desc');
            expect(desc.length).toBe(1);
        });
    })

    describe('Have no props', () => {

        let wrapper;
        beforeEach(() => {
            wrapper = setUp()
        });

        it('Should not render', () => {
            const component = findByTestAttr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(0);
        })
    })

})
