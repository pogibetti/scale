import { Component, Prop, h, Element, Host } from '@stencil/core';
import { StyleSheet } from 'jss';
import { CssClassMap } from '../../utils/utils';
import classNames from 'classnames';
import Base from '../../utils/base-interface';
import { CssInJs } from '../../utils/decorators/css-in-js';

const defaultStyles = {
  card: {
    boxSizing: 'border-box',
    overflow: 'hidden',
    color: '#333',
    background: '#fff',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '4px',
    width: '400px',
    maxWidth: '550px',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.12)',
  },
  card__body: {
    padding: '1rem',
  },
  card__header: {
    padding: '0.5rem 1rem',
    borderBottom: '1px solid, #dfdfdf',
    background: '#eee',
    fontSize: '0.8rem',
    '&::slotted(*)': {
      margin: 0,
    },
  },
  card__footer: {
    padding: '0.5rem 1rem',
    borderTop: '1px solid #dfdfdf',
    background: '#eee',
    fontSize: '0.8rem',
    '&::slotted(*)': {
      margin: 0,
    },
  },
  'card__img-top': {},
};

@Component({
  tag: 't-card',
  shadow: true,
})
export class Card implements Base {
  @Element() hostElement: HTMLElement;
  /** (optional) Card class */
  @Prop() customClass?: string = '';
  /** (optional) Card size */
  @Prop() size?: string = '';
  /** (optional) Card theme */
  @Prop() theme?: string = '';
  /** (optional) Card variant */
  @Prop() variant?: string = '';
  /** (optional) Disabled card */
  @Prop() disabled?: boolean = false;
  /** (optional) Deselected card */
  @Prop() deselected?: boolean = false;
  /** (optional) Card image at the top */
  @Prop() imageTop?: string;
  /** (optional) Card image alternative at the top */
  @Prop() imageTopAlt?: string = '';

  /** (optional) Injected jss styles */
  @Prop() styles?: StyleSheet;
  /** decorator Jss stylesheet */
  @CssInJs('Card', defaultStyles) stylesheet: StyleSheet;

  hasSlotHeader: boolean;
  hasSlotFooter: boolean;

  componentWillLoad() {
    this.hasSlotHeader = !!this.hostElement.querySelector('[slot="header"]');
    this.hasSlotFooter = !!this.hostElement.querySelector('[slot="footer"]');
  }

  render() {
    const { classes } = this.stylesheet;
    return (
      <Host>
        <div class={this.getCssClassMap()}>
          {this.hasSlotHeader && (
            <div class={classes.card__header}>
              <slot name="header" />
            </div>
          )}
          {this.imageTop && (
            <img
              class={classes['card__img-top']}
              src={this.imageTop}
              alt={this.imageTopAlt}
            />
          )}
          <div class={classes.card__body}>
            <slot />
          </div>
          {this.hasSlotFooter && (
            <div class={classes.card__footer}>
              <slot name="footer" />
            </div>
          )}
        </div>
      </Host>
    );
  }

  getCssClassMap(): CssClassMap {
    const { classes } = this.stylesheet;
    return classNames(
      classes.card,
      this.customClass && this.customClass,
      this.size && `${classes.card}--size-${this.size}`,
      this.theme && `${classes.card}--theme-${this.theme}`,
      this.variant && `${classes.card}--variant-${this.variant}`,
      this.disabled && `${classes.card}--disabled`,
      this.deselected && `${classes.card}--deselected`
    );
  }
}
