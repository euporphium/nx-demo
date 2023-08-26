import { render } from '@testing-library/react';

import CacheTest from './page';

describe('CacheTest', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CacheTest />);
    expect(baseElement).toBeTruthy();
  });
});
