import { newE2EPage } from '@stencil/core/testing';

describe('t-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<t-bar />');
    const element = await page.find('t-bar');
    expect(element).toHaveClass('hydrated');
  });
});
