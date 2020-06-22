import React from 'react';
import { shallow } from 'enzyme';

import { AddCategory } from '../../components';

describe('Tests AddCategory component', () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test('Should display correctly', () => {
    const section = wrapper.find('section');
    const fontAwesomeIcon = wrapper.find('FontAwesomeIcon');
    const { iconName } = fontAwesomeIcon.prop('icon');

    expect(wrapper).toMatchSnapshot();
    expect(section.prop('id')).toBe('search');
    expect(section.prop('children').length).toBe(2);
    expect(iconName).toBe('search');
  });

  test('Should change the text box', () => {
    const input = wrapper.find('input');
    const value = 'Dragon Ball';

    input.simulate('change', { target: { value } });
    const currentValue = wrapper.find('input').prop('value');

    expect(currentValue).toBe(value);
  });

  test('Should not call setCategories or setValue with the submit event', () => {
    wrapper.find('form').simulate('submit', { preventDefault(){} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test('Should set value in "", setCategories must be called once and as a function', () => {
    const input = wrapper.find('input');
    const value = 'Dragon Ball';

    input.simulate('change', { target: { value } });
    wrapper.find('form').simulate('submit', { preventDefault(){} });
    const currentValue = wrapper.find('input').prop('value');

    expect(currentValue).toBe('');
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    //que sea evaluado con alguna funcion
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
  });
});

