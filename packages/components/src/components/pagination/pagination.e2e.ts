import { newE2EPage } from '@stencil/core/testing';

describe('t-pagination', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<t-pagination>this is a tag</t-pagination>');
    const element = await page.find('t-pagination');
    expect(element).toHaveClass('hydrated');
  });
});
