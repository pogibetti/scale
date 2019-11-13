import { newSpecPage } from '@stencil/core/testing';
import { InputRadio } from './input-radio';

describe('RadioButton', () => {
  let element;
  beforeEach(async () => {
    element = new InputRadio();
  });

  it('should match snapshot', async () => {
    const page = await newSpecPage({
      components: [InputRadio],
      html: `<t-radio-button>default</t-radio-button>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should have class disabled ', () => {
    element.disabled = true;
    expect(element.getCssClassMap()).toContain('radio-button--disabled');
  });
});
