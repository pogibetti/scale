import { Component, Prop, h, Listen, Element, Method } from '@stencil/core';

import { CssClassMap } from '../../utils/utils';
import classNames from 'classnames';
import { HTMLStencilElement } from '@stencil/core/internal';

@Component({
  tag: 't-bar',
  styleUrl: 'bar.css',
  shadow: true,
})
export class Bar {
  @Element() public el: HTMLStencilElement;
  /** (optional) Bar size */
  @Prop() public size?: string = '';
  /** (optional) Bar theme */
  @Prop() public theme?: string = '';
  /** (optional) Bar variant */
  @Prop() public variant?: string = '';
  @Prop({ reflectToAttr: true }) public open?: boolean = false;

  private hideSlots: boolean = false;

  @Listen('scroll', { target: 'window' })
  public handleScroll(scrollEvent) {
    const scrollPos = scrollEvent.path[1].scrollY;
    if (scrollPos > 100) {
      this.hideSlots = true;
      console.log('scroll true', this.hideSlots);
    } else {
      this.hideSlots = false;
      console.log('scroll false', this.hideSlots);
    }
  }

  @Method()
  public async openBar() {
    this.open = true;
  }

  public render() {
    if (!this.open) {
      return null;
    }

    return (
      <bar class={this.getCssClassMap()}>
        <div class="bar__body">
          {!!this.hideSlots && (
            <div class="bar__slots">
              <slot name="logo" />
              <slot name="claim" />
            </div>
          )}
        </div>
      </bar>
    );
  }

  private getCssClassMap(): CssClassMap {
    return classNames(
      'bar',
      this.size && `bar--size-${this.size}`,
      this.theme && `bar--theme-${this.theme}`,
      this.variant && `bar--variant-${this.variant}`
    );
  }
}
