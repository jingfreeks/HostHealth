import React from 'react';
import {render} from '@testing-library/react-native';
import Popularlist from '../popularlist';

describe('Popular List Template Component', () => {
  it('Should work as expected to get snapshot', () => {
    const all = render(
      <Popularlist
        data={[
          {
            image:
              'https://img.freepik.com/free-photo/modern-tokyo-street-background_23-2149394948.jpg?w=996&t=st=1691132416~exp=1691133016~hmac=ee53d564abdbe32689b1a997ac989046fba50feb0f76dd84f912d8bea1a1121b',
            city: 'San Francisco',
            state: 'California',
            matches: '15',
            salary: '$2,659',
          },
        ]}
      />,
    );
    expect(all.toJSON()).toMatchSnapshot();
  });
});
