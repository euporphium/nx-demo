import { render } from '@testing-library/react';

import CacheTest from './page';

describe('CacheTest', () => {
  it.skip('should render successfully', () => {
    const { baseElement } = render(<CacheTest />);
    expect(baseElement).toBeTruthy();
  });
});
