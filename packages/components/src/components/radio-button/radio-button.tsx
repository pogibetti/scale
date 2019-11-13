import { Component, h, Prop } from '@stencil/core';
import { CssClassMap } from '../../utils/utils';
import classNames from 'classnames';

@Component({
  tag: 't-radio-button',
  styleUrl: 'radio-button.css',
  shadow: true,
})
export class RadioButton {
  /**  radio-button value */
  @Prop() public value: string | number | boolean;
  /** (optional) radio-button disabled */
  @Prop() public disabled?: boolean = false;
  /** (optional) radio-button selected */
  @Prop() public selected?: boolean = false;

  public render() {
    return (
      <div class={this.getCssClassMap()}>
        <slot />
      </div>
    );
  }

  private getCssClassMap(): CssClassMap {
    return classNames(
      'radio-button',
      this.disabled && `radio-button--disabled`,
      this.selected && 'radio-button--selected'
    );
  }
}
