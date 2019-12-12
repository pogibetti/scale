import { Component, Prop, h, Listen } from '@stencil/core';
import { CssClassMap } from '../../utils/utils';
import classNames from 'classnames';

@Component({
  tag: 't-input-radio',
  styleUrls: ['input-radio.css'],
  shadow: true,
})
export class Radio {
  @Prop() value: string | number;
  @Prop() disabled?: boolean;
  @Prop() checked?: boolean;

  /*   @Listen('onChange', { capture: true })
  onChange = e => {
    const checked = e.target.checked;

    if (checked) {
      if (this.onChange) {
        this.onChange(this.value);
      }
    }

    this.checked = checked;
  };
 */
  handleClick = () => {
    console.log('before', this.checked);

    this.checked = true;
    console.log(this.checked);
  };

  /*   getChecked(props: Object): boolean {
    return Boolean(this.checked);
  } */

  render() {
    return (
      <div className="input-radio">
        <span
          class={`input-radio-inner ${this.getCssClassMap()}`}
          onClick={this.handleClick}
        ></span>
        <input
          type="radio"
          className="input-radio-original"
          checked={this.checked}
          disabled={this.disabled}
          onChange={this.onChange}
        />
        <label className="radio-input-label">
          <slot />
        </label>
      </div>
    );
  }

  private getCssClassMap(): CssClassMap {
    return classNames(
      this.checked && `input-radio-inner-${this.checked}`,
      this.disabled && `input-radio-inner-${this.disabled}`
    );
  }
}
