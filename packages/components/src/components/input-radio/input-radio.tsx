import { Component, h, Prop, State } from '@stencil/core';
import { CssClassMap } from '../../utils/utils';
import classNames from 'classnames';

@Component({
  tag: 't-input-radio',
  styleUrl: 'input-radio.css',
  shadow: true,
})
export class InputRadio {
  /**  input-radio value */
  @Prop() public value: string | number;
  /** (optional) input-radio disabled */
  @Prop() public disabled?: boolean = false;
  /** (optional) input-radio selected */
  @Prop() public selected?: boolean = false;

  @State() private checked: boolean;

  public render() {
    return (
      <div class={this.getCssClassMap()} aria-checked={this.checked}>
        <span class="radio__input" onClick={this.handleClick}>
          <input
            class="radio__original"
            type="radio"
            checked={this.checked}
            value={this.value}
          />
        </span>
        <span>
          <slot />
        </span>
      </div>
    );
  }

  private getCssClassMap(): CssClassMap {
    return classNames(
      'input-radio',
      this.disabled && `input-radio--disabled`,
      this.selected && 'input-radio--selected'
    );
  }
  private handleClick = () => {
    this.checked = !this.checked;
  };
}
