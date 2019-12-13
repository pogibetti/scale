import { newSpecPage } from '@stencil/core/testing';
import { Bar } from './bar';

describe('Bar', () => {
  let element;
  beforeEach(async () => {
    element = new Bar();
  });

  it('should match snapshot', async () => {
    const page = await newSpecPage({
      components: [Bar],
      html: `<t-bar/>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should handle size css class', () => {
    element.size = 'small';
    expect(element.getCssClassMap()).toContain('bar--size-small');
  });

  it('should handle theme css class', () => {
    element.theme = 'default';
    expect(element.getCssClassMap()).toContain('bar--theme-default');
  });

  it('should handle variant css class', () => {
    element.variant = 'primary';
    expect(element.getCssClassMap()).toContain('bar--variant-primary');
  });
});
