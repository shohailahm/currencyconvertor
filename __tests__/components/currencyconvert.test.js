import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
// Smart components

// Component to be tested
import ConvertCont from '../../src/Containers/convertContainer';

describe('<ConvertCont />', () => {
    describe('render()', () => {
      test('renders the component', () => {
        const wrapper = shallow(<ConvertCont />);
        const component = wrapper.dive();
  
        expect(toJson(component)).toMatchSnapshot();
      });
    });
  });
  

