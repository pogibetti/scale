import { newE2EPage } from '@stencil/core/testing';

describe('t-radio-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<t-radio-button>default</t-radio-button>');
    const element = await page.find('t-radio-button');
    expect(element).toHaveClass('hydrated');
  });
});
