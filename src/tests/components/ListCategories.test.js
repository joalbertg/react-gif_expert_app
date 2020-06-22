import React from 'react';
import { shallow } from 'enzyme';

import { ListCategories } from '../../components';

describe('Tests ListCategories component', () => {
  test('Should display correctly', () => {
    const wrapper = shallow(<ListCategories />);
    const h3 = wrapper.find('h3').text();
    const gifGrids = wrapper.find('GifGrid');

    expect(wrapper).toMatchSnapshot();
    expect(h3).toBe('There are no categories to display.');
    expect(gifGrids).toEqual({});
    expect(gifGrids.exists()).toBe(false);
  });

  test('Should have an array of categories with 2 items', () => {
    const categories = ['Dragon Ball', 'Samurai X'];
    const wrapper = shallow(<ListCategories categories={categories}/>);
    const gifGrids = wrapper.find('GifGrid');
    const currentCategories = gifGrids.map(gifGrid => gifGrid.prop('category'));

    expect(wrapper).toMatchSnapshot();
    expect(gifGrids).toBeTruthy();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
    expect(currentCategories).toEqual(categories);
  })
});

