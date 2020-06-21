import React from 'react';
import { shallow } from 'enzyme';

import { getGifs } from '../../helpers';

describe('Tests getGifs with Fetch', () => {
  test('Should return a length of 15', async () => {
    const gifs = await getGifs('Dragon Ball');
    expect(gifs.length).toBe(15);
  });

  test('Should return a length of 0', async () => {
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0);
  });

  test('Should not have " GIF" text string in the title', async () => {
    const gifs = await getGifs('Dragon Ball');
    const allTitle = gifs.reduce((acc, gif) => `${acc} ${gif.title}`, '');

    expect(allTitle.includes(' GIF')).not.toBe(true);
  });
});

