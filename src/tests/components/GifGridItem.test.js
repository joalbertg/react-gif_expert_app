import React from 'react';
import { shallow } from 'enzyme';

import GifGridItem from '../../components/GifGridItem';

describe('Tests GifGridItem component', () => {
  const url = 'https://localhost:8080/something.gif';
  const title = 'something';

  let wrapper = shallow(<GifGridItem url={url} title={title} />);

  beforeEach(() => {
    wrapper = shallow(<GifGridItem url={url} title={title} />);
  });

  test('Should display correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('Tests className attribute', () => {
    test('Should have card in className', () => {
      const text = wrapper.find('div').prop('className');
      expect(text.includes('card')).toBe(true);
    });

    test('Should have animate__animated and animate__fadeIn in className', () => {
      const text = wrapper.find('.card').prop('className');
      expect(text.includes('animate__animated')).toBe(true);
      expect(text.includes('animate__fadeIn')).toBe(true);
    });
  });

  describe('Tests url attribute', () => {
    const text = wrapper.find('.card img').prop('src');

    test('Should have a sub-string with https:// text', () => {
      expect(text.includes('https://')).toBe(true);
    });

    test('Should have a something with .gif', () => {
      expect(text.includes('.gif')).toBe(true);
    });

    test('Should have a alt with something text', () => {
      const text = wrapper.find('.card img').prop('alt');
      expect(text).toBe(title);
    });
  });

  test('Should have a title with something text', () => {
    const text = wrapper.find('.card p').text();
    expect(text).toBe(title);
  });
});


