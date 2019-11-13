import { newSpecPage } from '@stencil/core/testing';
import { RadioButton } from './radio-button';

describe('RadioButton', () => {
  let element;
  beforeEach(async () => {
    element = new RadioButton();
  });

  it('should match snapshot', async () => {
    const page = await newSpecPage({
      components: [RadioButton],
      html: `<t-radio-button>default</t-radio-button>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should have class disabled ', () => {
    element.disabled = true;
    expect(element.getCssClassMap()).toContain('radio-button--disabled');
  });
});
