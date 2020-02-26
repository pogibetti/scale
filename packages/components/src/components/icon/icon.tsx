import { Component, Prop, h, Host } from '@stencil/core';
import { CssClassMap } from '../../utils/utils';
import classNames from 'classnames';
import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

const styles = {
  icon: {
    background: 'red',
  },
};

@Component({
  tag: 't-icon',
  styleUrl: 'icon.css',
})
export class Icon {
  /** (optional) Tag class */
  @Prop() public customClass?: string = '';
  @Prop() public name: string;
  @Prop() public path: string;

  stylesheet: any;

  componentWillLoad() {
    this.stylesheet = jss.createStyleSheet(styles);
  }

  public render() {
    return (
      <Host>
        <style>{this.stylesheet.toString()}</style>
        <svg
          class={this.getCssClassMap()}
          width="24"
          height="24"
          viewBox="0 0 26 26"
        >
          <path d={this.path} stroke="black" fill="transparent" />
        </svg>
      </Host>
    );
  }

  private getCssClassMap(): CssClassMap {
    return classNames(
      this.stylesheet.classes.icon,
      this.name && this.name,
      this.customClass && this.customClass
    );
  }
}
