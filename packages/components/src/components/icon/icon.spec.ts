import { newSpecPage } from '@stencil/core/testing';
import { Icon } from './icon';
import jss from 'jss';

describe('Icon', () => {
  let element;
  beforeEach(async () => {
    element = new Icon();
    element.stylesheet = jss.createStyleSheet({
      icon: {
        background: 'red',
      },
    });
  });

  it('should match snapshot', async () => {
    const page = await newSpecPage({
      components: [Icon],
      html: `<t-icon path="d 10 10">Label</t-icon>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should handle a custom css class', () => {
    element.customClass = 'custom';
    expect(element.getCssClassMap()).toContain('custom');
  });

  it('should have a default css class', () => {
    expect(element.getCssClassMap()).toContain('icon');
  });
});
