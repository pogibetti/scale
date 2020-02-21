import { Component, Prop, h, Method, Host } from '@stencil/core';
import { ConstructibleStyle } from 'stencil-constructible-style';
import jss from 'jss';
import { combineStyles } from '../../utils/utils';
import { CssClassMap } from '../../utils/utils';
import classNames from 'classnames';
import BaseInterface from './base-interface'
import { CssInJs } from '../../utils/decoraters/css-in-js';


const styles: object = {
  button: {
    position: 'relative',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: '0',
    verticalAlign: 'middle',
    textAlign: 'center',
    cursor: 'pointer',
    userSelect: 'none',
    color: 'var(--button-color, #000)',
    background: 'var(--button-background-color, #fff)',
    border: 'var(--button-border, 1px solid #000)',
    borderColor: 'var(--button-border-color, #000)',
    borderRadius: 'var(--button-border-radius, 0)',
    padding: 'var(--button-padding, 0.25rem 1rem)',
    boxShadow: 'var(--button-box-shadow, none)',
    lineHeight: 'var(--button-line-height, 2rem)',
    fontFamily: 'var(--button-font-family, unset)',
    fontSize: 'var(--button-font-size, unset)',
    fontWeight: 'var(--button-font-weight, 400)',
    textTransform: 'var(--button-text-transform, initial)',
    letterSpacing: 'var(--button-letter-spacing, 0)',
    transition: 'var(--button-transition, all 0.2s ease-in-out)',
    '&:before': {
      width: 'var(--button-letter-spacing, 0)',
      content: "''",
      display: 'block',
      height: '100%',
    },
    '&:hover, &.active': {
      color: 'var(--button-hover-color, #fff)',
      background: 'var(--button-hover-background-color, #000)',
      border: 'var(--button-hover-border, 1px solid #000)',
      borderColor: 'var(--button-hover-border-color, #000)',
      borderRadius: 'var(--button-hover-border-radius, 0)',
      boxShadow: 'var(--button-hover-box-shadow, none)',
      lineHeight: 'var(--button-hover-line-height, 2rem)',
      fontSize: 'var(--button-hover-font-size, unset)',
      fontWeight: 'var(--button-hover-font-weight, 400)',
      transition: 'var(--button-hover-transition, all 0.2s ease-in-out)',
      textDecoration: 'none',
    },
    '&:not(.tabbing):focus': {
      outline: '0',
    },
    '&--disabled, &--disabled:hover': {
      background:
        'var(--button-disabled-background-color, var(--button-background-color, #fff))',
      border:
        'var(--button-disabled-border, var(--button-border, 1px solid #000))',
      color: 'var(--button-disabled-color, var(--button-color, #000))',
      opacity: '0.5',
      cursor: 'not-allowed',
    },
  },
};

@Component({
  tag: 't-button',
  shadow: true,
})
export class Button implements BaseInterface {
  /** (optional) Button size */
  @Prop() size?: string = '';
  /** (optional) Button variant */
  @Prop() variant?: string = '';
  /** (optional) Disabled button */
  @Prop() disabled?: boolean = false;
  /** (optional) Deselected button */
  @Prop() deselected?: boolean = false;
  @Prop() styles?: object = {};

  @CssInJs({ color: 'red' }) x = ''

  theme: any = typeof this.styles === 'object' ? this.styles : JSON.parse(this.styles);
  stylesheet: any = jss.createStyleSheet(combineStyles(styles, this.theme));
  @ConstructibleStyle() style = this.stylesheet.toString();
  componentWillLoad() {

  }

  /** Button method: disable()  */
  @Method()
  async disable() {
    this.disabled = true;
  }

  /** Button method: enable()  */
  @Method()
  async enable() {
    this.disabled = false;
  }

  render() {
    return (
      <Host>
        <button class={this.getCssClassMap()} disabled={this.disabled}>
          <slot />
        </button>
      </Host>
    );
  }

  getCssClassMap(): CssClassMap {
    const { classes } = this.stylesheet;
    return classNames(
      classes.button,
      this.size && `${classes.button}--size-${this.size}`,
      this.variant && `${classes.button}--variant-${this.variant}`,
      this.disabled && `${classes.button}--disabled`,
      this.deselected && `${classes.button}--deselected`
    );
  }
}
