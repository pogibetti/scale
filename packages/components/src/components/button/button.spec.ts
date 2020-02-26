import { newSpecPage } from '@stencil/core/testing';
import { Button } from './button';
import jss from 'jss';
import styles from './button.styles';

describe('Button', () => {
  let element;
  beforeEach(async () => {
    element = new Button();
    element.stylesheet = jss.createStyleSheet(styles as any);
  });

  it('should match snapshot', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<t-button>Label</t-button>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should disable the button', () => {
    expect(element.disabled).toBe(false);
    element.disable();
    expect(element.disabled).toBe(true);
  });

  it('should enable the button', () => {
    element.disable();
    expect(element.disabled).toBe(true);
    element.enable();
    expect(element.disabled).toBe(false);
  });

  it('should handle size css class', () => {
    element.size = 'small';
    expect(element.getCssClassMap()).toContain(
      `${element.stylesheet.classes.button}--size-small`
    );
  });

  it('should handle variant css class', () => {
    element.variant = 'primary';
    expect(element.getCssClassMap()).toContain(
      `${element.stylesheet.classes.button}--variant-primary`
    );
  });

  it('should handle disabled css class', () => {
    element.disabled = true;
    expect(element.getCssClassMap()).toContain(
      `${element.stylesheet.classes.button}--disabled`
    );
  });

  it('should handle deselected css class', () => {
    element.deselected = true;
    expect(element.getCssClassMap()).toContain(
      `${element.stylesheet.classes.button}--deselected`
    );
  });
});
