import { newSpecPage } from '@stencil/core/testing';
import { Pagination } from './pagination';

describe('Pagination', () => {
  let element;
  beforeEach(async () => {
    element = new Pagination();
  });

  it('should match snapshot', async () => {
    const page = await newSpecPage({
      components: [Pagination],
      html: `<t-pagination>Label</t-pagination>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should handle a custom css class', () => {
    element.customClass = 'custom';
    expect(element.getCssClassMap()).toContain('custom');
  });

  it('should handle theme css class', () => {
    element.theme = 'default';
    expect(element.getCssClassMap()).toContain('pagination--theme-default');
  });

  it('should have a default css class', () => {
    expect(element.getCssClassMap()).toContain('pagination');
  });
});
