import { Component, Prop, h, Method, Host } from '@stencil/core';
import { StyleSheet } from 'jss';
import classNames from 'classnames';
import { CssClassMap } from '../../utils/utils';
import { CssInJs } from '../../utils/decorators/css-in-js';
import Base from '../../utils/base-interface';
import defaultStyles from './button.styles';

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

  /** method: componentWillLoad()  */
  componentWillLoad() {}

  /** method: disable()  */
  @Method()
  async disable() {
    this.disabled = true;
  }

  /** method: enable()  */
  @Method()
  async enable() {
    this.disabled = false;
  }

  render() {
    return (
      <Host>
        <style>{this.stylesheet.toString()}</style>
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
