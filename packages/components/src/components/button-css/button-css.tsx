import { Component, h } from '@stencil/core';

@Component({
  tag: 'scale-button-css',
  shadow: false,
  styleUrl: 'button-css.css'
})
export class ButtonCSS {
  
  render() {
    return (
      <button class="button-css">
        <slot />
      </button>
    );
  }
}
