import { shallow } from 'enzyme';
import { renderHook } from '@testing-library/react-hooks';

import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Tests useFetchGifs file', () => {
  test('Should return init state', async () => {
    //const resp = renderHook(() => useFetchGifs('Dragon Ball'));
    //console.log(resp);
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Dragon Ball'));
    const { data, loading } = result.current;
    //console.log(data, loading);

    //Así funciona la libreria, ya que desmonta los hooks
    //por cada prueba
    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test('Should return an array of gifs, and the loading must be false', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Dragon Ball'));
    await waitForNextUpdate();

    const { data, loading } = result.current;

    expect(data.length).toBe(15);
    expect(loading).toBe(false);
  });
});
