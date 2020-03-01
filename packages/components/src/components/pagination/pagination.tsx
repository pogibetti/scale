import { Component, h, Prop } from '@stencil/core';
import { CssClassMap } from '../../utils/utils';
import classNames from 'classnames';

@Component({
  tag: 't-pagination',
  styleUrl: 'pagination.css',
  shadow: true,
})
export class Pagination {
  /** (optional) Tag class */
  @Prop() public customClass?: string = '';
  /** (optional) Tag theme */
  @Prop() public theme?: string = '';
  @Prop() public pagesArray = [];

  public render() {
    return (
      <div class={this.getCssClassMap()}>
        <ul class="fillup">
          {this.pagesArray.map(index => (
            <li key={index}>
              <a href="#">home</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  private getCssClassMap(): CssClassMap {
    return classNames(
      'pagination',
      this.customClass && this.customClass,
      this.theme && `pagination--theme-${this.theme}`
    );
  }
}
