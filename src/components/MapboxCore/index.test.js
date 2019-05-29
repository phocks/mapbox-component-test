import React from 'react';
import renderer from 'react-test-renderer';

import MapboxCore from '.';

describe('MapboxCore', () => {
  test('It renders', () => {
    const component = renderer.create(<MapboxCore />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
