import { Component, Prop, h, Method, Host } from '@stencil/core';
import { StyleSheet } from 'jss';
import classNames from 'classnames';
import { CssClassMap, theme } from '../../utils/utils';
import { CssInJs } from '../../utils/decorators/css-in-js';
import Base from '../../utils/base-interface';

const { colors } = theme();

const defaultStyles = {
  button: {
    position: 'relative',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    verticalAlign: 'middle',
    textAlign: 'center',
    cursor: 'pointer',
    userSelect: 'none',
    color: '#fff',
    background: colors.primary,
    border: '1px solid #000',
    padding: '0.25rem 1rem',
    lineHeight: '2rem',
    transition: 'all 0.2s ease-in-out',
    fontSize: '1rem',
    '&:hover, &.active': {
      color: '#fff',
      background: '#000',
      borderColor: '#000',
      transition: 'all 0.2s ease-in-out',
      textDecoration: 'none',
    },
    '&:not(.tabbing):focus': {
      outline: 0,
    },
    '&--disabled, &--disabled:hover': {
      background: '#fff',
      border: '1px solid #000',
      color: '#000',
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
};

@Component({
  tag: 't-button',
  shadow: true,
})
export class Button implements Base {
  /** (optional) Button size */
  @Prop() size?: string = '';
  /** (optional) Button variant */
  @Prop() variant?: string = '';
  /** (optional) Disabled button */
  @Prop() disabled?: boolean = false;
  /** (optional) Deselected button */
  @Prop() deselected?: boolean = false;
  /** (optional) Injected jss styles */
  @Prop() styles?: StyleSheet;
  /** decorator Jss stylesheet */
  @CssInJs('Button', defaultStyles) stylesheet: StyleSheet;

  /** Button method: componentWillLoad()  */
  componentWillLoad() {}

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
