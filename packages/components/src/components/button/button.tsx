import { Component, Prop, h, Method, Host } from '@stencil/core';
import preset from 'jss-preset-default'
import jss from 'jss'
import _ from 'lodash'

jss.setup(preset())

const styles = {
  button: {
    outline: 'none',
    background: 'var(--button-custom-background)',
    fontSize: 16,
    transition: 'all .3s ease-in-out',
    '&:hover': {
      background: 'blue'
    }
  }
}

@Component({
  tag: 't-button',
  shadow: true,
})
export class Button {
  /** (optional) Button class */
  @Prop() public customClass?: string = '';
  /** (optional) Button size */
  @Prop() public size?: string = '';
  /** (optional) Button theme */
  @Prop() public theme?: string = '';
  /** (optional) Button variant */
  @Prop() public variant?: string = '';
  /** (optional) Disabled button */
  @Prop() public disabled?: boolean = false;
  /** (optional) Deselected button */
  @Prop() public deselected?: boolean = false;
  @Prop() public styles?: any = {};

  /** Button method: disable()  */
  @Method()
  public async disable() {
    this.disabled = true;
  }

  /** Button method: enable()  */
  @Method()
  public async enable() {
    this.disabled = false;
  }

  public render() {
    const stylesheet = jss.createStyleSheet(this.result());
    return (
      <Host>
        <style>
          {stylesheet.toString()}
        </style>
        <button class={stylesheet.classes.button} disabled={this.disabled}>
          <slot />
        </button>
      </Host>
    );
  }

  private result = () => _.merge(
    {},
    styles,
    this.styles
  );
}
