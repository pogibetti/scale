import { Component, Prop, h, Element } from '@stencil/core';
import { CssClassMap } from '../../utils/utils';
import classNames from 'classnames';

@Component({
  tag: 't-breadcrumb',
  styleUrls: ['breadcrumb.css'],
  shadow: true,
})
export class Carousel {
  @Element() public hostElement: HTMLElement;
  @Prop() public customClass?: string = '';

  public render() {
    return <div class={this.getCssClassMap()}></div>;
  }

  private getCssClassMap(): CssClassMap {
    return classNames('breadcrumb', this.customClass && this.customClass);
  }
}
