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

  // private showSlots: boolean;

  // public componentDidLoad() {
  //   this.showSlots = !!this.el.querySelector('[slot="logo"]');
  // }

  @Listen('scroll', { target: 'window' })
  public handleScroll() {
    // console.log('scrolled', e);
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
          <slot name="logo" />
          <slot name="claim" />
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
