import React  from 'react';
import { findByTestAttr , checkProps } from '../../../Utils/index';
import SharedButton from './button.component';
import { shallow } from 'enzyme';

describe('Shared Button', () => {
    describe('Check Proptypes', () => {
        it('Should Not throw a warning', () => {
            const expectedProps = {
                buttonText: 'Example Button Text',
                emitEvent: () => {

                }
            };
            const propsError = checkProps(SharedButton, expectedProps);
            expect(propsError).toBeUndefined();
        })
    })

    describe('Should render a button', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                buttonText: 'Example Button Text',
                emitEvent: () => {

                }
            };
            wrapper = shallow(<SharedButton {...props}/>);
        })
        it('It should render a button', () => {
            const button = findByTestAttr(wrapper, 'buttonComponent');
            expect(button.length).toBe(1);
        });
    })
});