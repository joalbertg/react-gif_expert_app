import React from 'react';
import { shallow } from 'enzyme';

import { GifGrid } from '../../components';
import { useFetchGifs } from '../../hooks/useFetchGifs';
// con esto hacemos mock del customHook
jest.mock('../../hooks/useFetchGifs');

describe('Tests GifGrid component', () => {
  const category = 'Dragon Ball';

  test('Should display correctly', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Should show items when loading gifs with useFetchGifs', () => {
    const gifs = [{
      id: 'ABC123',
      url: 'https://localhost:3000/something.gif',
      title: 'something'
    },
    {
      id: '123ABC',
      url: 'https://localhost:3000/something_v2.gif',
      title: 'something_v2'
    }];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });

    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });
});
