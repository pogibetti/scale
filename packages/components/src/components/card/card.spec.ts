import { newSpecPage } from '@stencil/core/testing';
import { Card } from './card';
import jss from 'jss';
import cardStyles from './card.styles';

describe('Card', () => {
  let element;
  beforeEach(async () => {
    element = new Card();
    element.stylesheet = jss.createStyleSheet(cardStyles as any);
  });

  it('should match snapshot', async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<t-card>Label</t-card>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should match snapshot with header slot', async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `
			<t-card>
				<h3 slot="header">Header content</h3>
				A title
			</t-card>
			`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should match snapshot with footer slot', async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `
			<t-card>
				<h3 slot="footer">Footer content</h3>
				A title
			</t-card>
			`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should match snapshot with image', async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<t-card image-top="http://placehold.it/400x300">A title</t-card>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should have a default css class', () => {
    expect(element.getCssClassMap()).toBe(element.stylesheet.classes.card);
  });

  it('should handle size css class', () => {
    element.size = 'small';
    expect(element.getCssClassMap()).toContain(
      `${element.stylesheet.classes.card}--size-small`
    );
  });

  it('should handle variant css class', () => {
    element.variant = 'primary';
    expect(element.getCssClassMap()).toContain(
      `${element.stylesheet.classes.card}--variant-primary`
    );
  });

  it('should handle disabled css class', () => {
    element.disabled = true;
    expect(element.getCssClassMap()).toContain(
      `${element.stylesheet.classes.card}--disabled`
    );
  });

  it('should handle deselected css class', () => {
    element.deselected = true;
    expect(element.getCssClassMap()).toContain(
      `${element.stylesheet.classes.card}--deselected`
    );
  });
});
