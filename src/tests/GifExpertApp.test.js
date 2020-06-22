import React from 'react';
import { shallow } from 'enzyme';

import GifExpertApp from '../GifExpertApp';

describe('Tests GifExpertApp component', () => {
  test('Should display correctly', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Should show a list of categories', () => {
    const categories = ['Dragon Ball', 'Samurai X'];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
    const currentCategories = wrapper.find('ListCategories').prop('categories');

    expect(wrapper).toMatchSnapshot();
    expect(currentCategories.length).toBe(categories.length);
  });
});

