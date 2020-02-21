/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  InputTypes,
} from './components/input/input';

export namespace Components {
  interface TAlert {
    /**
    * (optional) Alert class
    */
    'customClass'?: string;
    /**
    * (optional) Alert title
    */
    'headline': string;
    /**
    * (optional) Alert icon
    */
    'icon'?: string;
    /**
    * Alert method: open()
    */
    'open': () => Promise<void>;
    /**
    * (optional) Alert opened
    */
    'opened': boolean;
    /**
    * (optional) Alert size
    */
    'size'?: string;
    /**
    * (optional) Alert theme
    */
    'theme'?: string;
    /**
    * (optional) Alert timeout
    */
    'timeout'?: boolean | number;
    /**
    * (optional) Alert variant
    */
    'variant'?: string;
  }
  interface TBadge {
    /**
    * (optional) Badge class
    */
    'customClass'?: string;
    /**
    * (optional) Badge link
    */
    'link'?: string;
    /**
    * (optional) Badge pill
    */
    'pill'?: boolean;
    /**
    * (optional) Badge size
    */
    'size'?: string;
    /**
    * (optional) Badge variant
    */
    'variant'?: string;
  }
  interface TButton {
    /**
    * (optional) Deselected button
    */
    'deselected'?: boolean;
    /**
    * Button method: disable()
    */
    'disable': () => Promise<void>;
    /**
    * (optional) Disabled button
    */
    'disabled'?: boolean;
    /**
    * Button method: enable()
    */
    'enable': () => Promise<void>;
    /**
    * (optional) Button size
    */
    'size'?: string;
    'styles'?: object;
    /**
    * (optional) Button variant
    */
    'variant'?: string;
  }
  interface TCard {
    /**
    * (optional) Card class
    */
    'customClass'?: string;
    /**
    * (optional) Deselected card
    */
    'deselected'?: boolean;
    /**
    * (optional) Disabled card
    */
    'disabled'?: boolean;
    /**
    * (optional) Card image at the top
    */
    'imageTop'?: string;
    /**
    * (optional) Card image alternative at the top
    */
    'imageTopAlt'?: string;
    /**
    * (optional) Card size
    */
    'size'?: string;
    /**
    * (optional) Card theme
    */
    'theme'?: string;
    /**
    * (optional) Card variant
    */
    'variant'?: string;
  }
  interface TCarousel {
    /**
    * (optional) carousel display direction
    */
    'vertical'?: boolean;
  }
  interface TDivider {
    /**
    * (optional) Divider class
    */
    'customClass'?: string;
    /**
    * (optional) Divider size
    */
    'size'?: string;
    /**
    * (optional) Divider theme
    */
    'theme'?: string;
    /**
    * (optional) Divider vertical
    */
    'vertical'?: boolean;
  }
  interface TIcon {
    /**
    * (optional) Tag class
    */
    'customClass'?: string;
    'name': string;
    'path': string;
    /**
    * (optional) Tag theme
    */
    'theme'?: string;
  }
  interface TInput {
    /**
    * (optional) Input text class
    */
    'customClass'?: string;
    /**
    * (optional) Input text error message
    */
    'errorMessage': string;
    /**
    * (optional) Input name
    */
    'name'?: string;
    /**
    * (optional) Input text theme
    */
    'theme'?: string;
    /**
    * (optional) Input type
    */
    'type'?: InputTypes;
    /**
    * (optional) Input text value
    */
    'value': string;
  }
  interface TInputError {
    /**
    * (optional) Input text class
    */
    'customClass'?: string;
    /**
    * (optional) Input text theme
    */
    'theme'?: string;
  }
  interface TInputGroup {
    /**
    * (optional) Input text class
    */
    'customClass'?: string;
    /**
    * (optional) Input text theme
    */
    'theme'?: string;
  }
  interface TInputLabel {
    /**
    * (optional) Input text class
    */
    'customClass'?: string;
    /**
    * (optional) Input text theme
    */
    'theme'?: string;
  }
  interface TLink {
    /**
    * (optional) Link class
    */
    'customClass'?: string;
    /**
    * (optional) Disabled link
    */
    'disabled'?: boolean;
    /**
    * (optional) Link href
    */
    'href'?: string;
    /**
    * (optional) Link open a new tag
    */
    'openNewTab'?: boolean;
    /**
    * (optional) Link underline
    */
    'underline'?: boolean;
    /**
    * (optional) Link variant
    */
    'variant'?: string;
  }
  interface TModal {
    /**
    * Modal method: onCloseModal()
    */
    'close': () => Promise<void>;
    /**
    * (optional) Modal class
    */
    'customClass'?: string;
    /**
    * Modal method: open()
    */
    'open': () => Promise<void>;
    /**
    * (required) Modal opened
    */
    'opened'?: boolean;
    /**
    * (optional) Modal size
    */
    'size'?: string;
    /**
    * (optional) Modal theme
    */
    'theme'?: string;
    /**
    * (optional) Modal variant
    */
    'variant'?: string;
  }
  interface TProgressBar {
    /**
    * (optional) Progress bar class
    */
    'customClass'?: string;
    /**
    * (required) Progress bar percentage
    */
    'percentage': number;
    /**
    * (optional) Progress bar percentage text
    */
    'showText'?: boolean;
    /**
    * (optional) Progress bar stroke width
    */
    'strokeWidth'?: number;
    /**
    * (optional) Progress text display inside bar
    */
    'textInside'?: boolean;
    /**
    * (optional) Progress bar variant
    */
    'variant'?: string;
  }
  interface TSlider {
    /**
    * (optional) Slider class
    */
    'customClass'?: string;
    /**
    * (optional) Slider display value
    */
    'label': boolean;
    /**
    * (optional) Slider range max value
    */
    'max'?: number;
    /**
    * (optional) Slider range start value
    */
    'min'?: number;
    /**
    * (optional) Slider step
    */
    'step': number;
    /**
    * (optional) Slider binding value
    */
    'value': number;
  }
  interface TSwitch {
    /**
    * (optional) Active switch
    */
    'active'?: boolean;
    /**
    * (optional) Switch class
    */
    'customClass'?: string;
    /**
    * (optional) Disabled switch
    */
    'disabled'?: boolean;
    /**
    * (optional) Switch theme
    */
    'theme'?: string;
  }
  interface TTag {
    /**
    * (optional) Tag class
    */
    'customClass'?: string;
    /**
    * (optional) Tag on an <a> element
    */
    'link'?: string;
    /**
    * (optional) Tag pill
    */
    'pill'?: boolean;
    /**
    * (optional) Tag theme
    */
    'theme'?: string;
    /**
    * (optional) Tag variant
    */
    'variant'?: string;
  }
  interface TText {
    /**
    * (optional) Tag class
    */
    'customClass'?: string;
    /**
    * (optional) Tag theme
    */
    'theme'?: string;
  }
  interface TToast {
    /**
    * (optional) Animated toast
    */
    'animated'?: boolean;
    /**
    * (optional) Toast autohide time
    */
    'autoHide'?: boolean | number;
    /**
    * (optional) Toast class
    */
    'customClass'?: string;
    /**
    * (optional) Toast fade duration
    */
    'fadeDuration'?: number;
    /**
    * Toast method: open()
    */
    'open': () => Promise<void>;
    /**
    * (optional) Toast opened
    */
    'opened'?: boolean;
    /**
    * (optional) Toast position right
    */
    'positionRight'?: number;
    /**
    * (optional) Toast position at the top
    */
    'positionTop'?: number;
    /**
    * (optional) Toast size
    */
    'size'?: string;
    /**
    * (optional) Toast theme
    */
    'theme'?: string;
    /**
    * (optional) Toast time
    */
    'time'?: number;
    /**
    * (optional) Toast variant
    */
    'variant'?: string;
  }
}

declare global {


  interface HTMLTAlertElement extends Components.TAlert, HTMLStencilElement {}
  var HTMLTAlertElement: {
    prototype: HTMLTAlertElement;
    new (): HTMLTAlertElement;
  };

  interface HTMLTBadgeElement extends Components.TBadge, HTMLStencilElement {}
  var HTMLTBadgeElement: {
    prototype: HTMLTBadgeElement;
    new (): HTMLTBadgeElement;
  };

  interface HTMLTButtonElement extends Components.TButton, HTMLStencilElement {}
  var HTMLTButtonElement: {
    prototype: HTMLTButtonElement;
    new (): HTMLTButtonElement;
  };

  interface HTMLTCardElement extends Components.TCard, HTMLStencilElement {}
  var HTMLTCardElement: {
    prototype: HTMLTCardElement;
    new (): HTMLTCardElement;
  };

  interface HTMLTCarouselElement extends Components.TCarousel, HTMLStencilElement {}
  var HTMLTCarouselElement: {
    prototype: HTMLTCarouselElement;
    new (): HTMLTCarouselElement;
  };

  interface HTMLTDividerElement extends Components.TDivider, HTMLStencilElement {}
  var HTMLTDividerElement: {
    prototype: HTMLTDividerElement;
    new (): HTMLTDividerElement;
  };

  interface HTMLTIconElement extends Components.TIcon, HTMLStencilElement {}
  var HTMLTIconElement: {
    prototype: HTMLTIconElement;
    new (): HTMLTIconElement;
  };

  interface HTMLTInputElement extends Components.TInput, HTMLStencilElement {}
  var HTMLTInputElement: {
    prototype: HTMLTInputElement;
    new (): HTMLTInputElement;
  };

  interface HTMLTInputErrorElement extends Components.TInputError, HTMLStencilElement {}
  var HTMLTInputErrorElement: {
    prototype: HTMLTInputErrorElement;
    new (): HTMLTInputErrorElement;
  };

  interface HTMLTInputGroupElement extends Components.TInputGroup, HTMLStencilElement {}
  var HTMLTInputGroupElement: {
    prototype: HTMLTInputGroupElement;
    new (): HTMLTInputGroupElement;
  };

  interface HTMLTInputLabelElement extends Components.TInputLabel, HTMLStencilElement {}
  var HTMLTInputLabelElement: {
    prototype: HTMLTInputLabelElement;
    new (): HTMLTInputLabelElement;
  };

  interface HTMLTLinkElement extends Components.TLink, HTMLStencilElement {}
  var HTMLTLinkElement: {
    prototype: HTMLTLinkElement;
    new (): HTMLTLinkElement;
  };

  interface HTMLTModalElement extends Components.TModal, HTMLStencilElement {}
  var HTMLTModalElement: {
    prototype: HTMLTModalElement;
    new (): HTMLTModalElement;
  };

  interface HTMLTProgressBarElement extends Components.TProgressBar, HTMLStencilElement {}
  var HTMLTProgressBarElement: {
    prototype: HTMLTProgressBarElement;
    new (): HTMLTProgressBarElement;
  };

  interface HTMLTSliderElement extends Components.TSlider, HTMLStencilElement {}
  var HTMLTSliderElement: {
    prototype: HTMLTSliderElement;
    new (): HTMLTSliderElement;
  };

  interface HTMLTSwitchElement extends Components.TSwitch, HTMLStencilElement {}
  var HTMLTSwitchElement: {
    prototype: HTMLTSwitchElement;
    new (): HTMLTSwitchElement;
  };

  interface HTMLTTagElement extends Components.TTag, HTMLStencilElement {}
  var HTMLTTagElement: {
    prototype: HTMLTTagElement;
    new (): HTMLTTagElement;
  };

  interface HTMLTTextElement extends Components.TText, HTMLStencilElement {}
  var HTMLTTextElement: {
    prototype: HTMLTTextElement;
    new (): HTMLTTextElement;
  };

  interface HTMLTToastElement extends Components.TToast, HTMLStencilElement {}
  var HTMLTToastElement: {
    prototype: HTMLTToastElement;
    new (): HTMLTToastElement;
  };
  interface HTMLElementTagNameMap {
    't-alert': HTMLTAlertElement;
    't-badge': HTMLTBadgeElement;
    't-button': HTMLTButtonElement;
    't-card': HTMLTCardElement;
    't-carousel': HTMLTCarouselElement;
    't-divider': HTMLTDividerElement;
    't-icon': HTMLTIconElement;
    't-input': HTMLTInputElement;
    't-input-error': HTMLTInputErrorElement;
    't-input-group': HTMLTInputGroupElement;
    't-input-label': HTMLTInputLabelElement;
    't-link': HTMLTLinkElement;
    't-modal': HTMLTModalElement;
    't-progress-bar': HTMLTProgressBarElement;
    't-slider': HTMLTSliderElement;
    't-switch': HTMLTSwitchElement;
    't-tag': HTMLTTagElement;
    't-text': HTMLTTextElement;
    't-toast': HTMLTToastElement;
  }
}

declare namespace LocalJSX {
  interface TAlert {
    /**
    * (optional) Alert class
    */
    'customClass'?: string;
    /**
    * (optional) Alert title
    */
    'headline'?: string;
    /**
    * (optional) Alert icon
    */
    'icon'?: string;
    /**
    * (optional) Alert opened
    */
    'opened'?: boolean;
    /**
    * (optional) Alert size
    */
    'size'?: string;
    /**
    * (optional) Alert theme
    */
    'theme'?: string;
    /**
    * (optional) Alert timeout
    */
    'timeout'?: boolean | number;
    /**
    * (optional) Alert variant
    */
    'variant'?: string;
  }
  interface TBadge {
    /**
    * (optional) Badge class
    */
    'customClass'?: string;
    /**
    * (optional) Badge link
    */
    'link'?: string;
    /**
    * (optional) Badge pill
    */
    'pill'?: boolean;
    /**
    * (optional) Badge size
    */
    'size'?: string;
    /**
    * (optional) Badge variant
    */
    'variant'?: string;
  }
  interface TButton {
    /**
    * (optional) Deselected button
    */
    'deselected'?: boolean;
    /**
    * (optional) Disabled button
    */
    'disabled'?: boolean;
    /**
    * (optional) Button size
    */
    'size'?: string;
    'styles'?: object;
    /**
    * (optional) Button variant
    */
    'variant'?: string;
  }
  interface TCard {
    /**
    * (optional) Card class
    */
    'customClass'?: string;
    /**
    * (optional) Deselected card
    */
    'deselected'?: boolean;
    /**
    * (optional) Disabled card
    */
    'disabled'?: boolean;
    /**
    * (optional) Card image at the top
    */
    'imageTop'?: string;
    /**
    * (optional) Card image alternative at the top
    */
    'imageTopAlt'?: string;
    /**
    * (optional) Card size
    */
    'size'?: string;
    /**
    * (optional) Card theme
    */
    'theme'?: string;
    /**
    * (optional) Card variant
    */
    'variant'?: string;
  }
  interface TCarousel {
    /**
    * (optional) carousel display direction
    */
    'vertical'?: boolean;
  }
  interface TDivider {
    /**
    * (optional) Divider class
    */
    'customClass'?: string;
    /**
    * (optional) Divider size
    */
    'size'?: string;
    /**
    * (optional) Divider theme
    */
    'theme'?: string;
    /**
    * (optional) Divider vertical
    */
    'vertical'?: boolean;
  }
  interface TIcon {
    /**
    * (optional) Tag class
    */
    'customClass'?: string;
    'name'?: string;
    'path'?: string;
    /**
    * (optional) Tag theme
    */
    'theme'?: string;
  }
  interface TInput {
    /**
    * (optional) Input text class
    */
    'customClass'?: string;
    /**
    * (optional) Input text error message
    */
    'errorMessage'?: string;
    /**
    * (optional) Input name
    */
    'name'?: string;
    /**
    * (optional) Input text event changed
    */
    'onChanged'?: (event: CustomEvent<string>) => void;
    /**
    * (optional) Input text theme
    */
    'theme'?: string;
    /**
    * (optional) Input type
    */
    'type'?: InputTypes;
    /**
    * (optional) Input text value
    */
    'value'?: string;
  }
  interface TInputError {
    /**
    * (optional) Input text class
    */
    'customClass'?: string;
    /**
    * (optional) Input text theme
    */
    'theme'?: string;
  }
  interface TInputGroup {
    /**
    * (optional) Input text class
    */
    'customClass'?: string;
    /**
    * (optional) Input text theme
    */
    'theme'?: string;
  }
  interface TInputLabel {
    /**
    * (optional) Input text class
    */
    'customClass'?: string;
    /**
    * (optional) Input text theme
    */
    'theme'?: string;
  }
  interface TLink {
    /**
    * (optional) Link class
    */
    'customClass'?: string;
    /**
    * (optional) Disabled link
    */
    'disabled'?: boolean;
    /**
    * (optional) Link href
    */
    'href'?: string;
    /**
    * (optional) Link open a new tag
    */
    'openNewTab'?: boolean;
    /**
    * (optional) Link underline
    */
    'underline'?: boolean;
    /**
    * (optional) Link variant
    */
    'variant'?: string;
  }
  interface TModal {
    /**
    * (optional) Modal class
    */
    'customClass'?: string;
    /**
    * (required) Modal opened
    */
    'opened'?: boolean;
    /**
    * (optional) Modal size
    */
    'size'?: string;
    /**
    * (optional) Modal theme
    */
    'theme'?: string;
    /**
    * (optional) Modal variant
    */
    'variant'?: string;
  }
  interface TProgressBar {
    /**
    * (optional) Progress bar class
    */
    'customClass'?: string;
    /**
    * (required) Progress bar percentage
    */
    'percentage'?: number;
    /**
    * (optional) Progress bar percentage text
    */
    'showText'?: boolean;
    /**
    * (optional) Progress bar stroke width
    */
    'strokeWidth'?: number;
    /**
    * (optional) Progress text display inside bar
    */
    'textInside'?: boolean;
    /**
    * (optional) Progress bar variant
    */
    'variant'?: string;
  }
  interface TSlider {
    /**
    * (optional) Slider class
    */
    'customClass'?: string;
    /**
    * (optional) Slider display value
    */
    'label'?: boolean;
    /**
    * (optional) Slider range max value
    */
    'max'?: number;
    /**
    * (optional) Slider range start value
    */
    'min'?: number;
    /**
    * (optional) Slider step
    */
    'step'?: number;
    /**
    * (optional) Slider binding value
    */
    'value'?: number;
  }
  interface TSwitch {
    /**
    * (optional) Active switch
    */
    'active'?: boolean;
    /**
    * (optional) Switch class
    */
    'customClass'?: string;
    /**
    * (optional) Disabled switch
    */
    'disabled'?: boolean;
    /**
    * (optional) Switch theme
    */
    'theme'?: string;
  }
  interface TTag {
    /**
    * (optional) Tag class
    */
    'customClass'?: string;
    /**
    * (optional) Tag on an <a> element
    */
    'link'?: string;
    /**
    * (optional) Tag pill
    */
    'pill'?: boolean;
    /**
    * (optional) Tag theme
    */
    'theme'?: string;
    /**
    * (optional) Tag variant
    */
    'variant'?: string;
  }
  interface TText {
    /**
    * (optional) Tag class
    */
    'customClass'?: string;
    /**
    * (optional) Tag theme
    */
    'theme'?: string;
  }
  interface TToast {
    /**
    * (optional) Animated toast
    */
    'animated'?: boolean;
    /**
    * (optional) Toast autohide time
    */
    'autoHide'?: boolean | number;
    /**
    * (optional) Toast class
    */
    'customClass'?: string;
    /**
    * (optional) Toast fade duration
    */
    'fadeDuration'?: number;
    /**
    * (optional) Toast opened
    */
    'opened'?: boolean;
    /**
    * (optional) Toast position right
    */
    'positionRight'?: number;
    /**
    * (optional) Toast position at the top
    */
    'positionTop'?: number;
    /**
    * (optional) Toast size
    */
    'size'?: string;
    /**
    * (optional) Toast theme
    */
    'theme'?: string;
    /**
    * (optional) Toast time
    */
    'time'?: number;
    /**
    * (optional) Toast variant
    */
    'variant'?: string;
  }

  interface IntrinsicElements {
    't-alert': TAlert;
    't-badge': TBadge;
    't-button': TButton;
    't-card': TCard;
    't-carousel': TCarousel;
    't-divider': TDivider;
    't-icon': TIcon;
    't-input': TInput;
    't-input-error': TInputError;
    't-input-group': TInputGroup;
    't-input-label': TInputLabel;
    't-link': TLink;
    't-modal': TModal;
    't-progress-bar': TProgressBar;
    't-slider': TSlider;
    't-switch': TSwitch;
    't-tag': TTag;
    't-text': TText;
    't-toast': TToast;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      't-alert': LocalJSX.TAlert & JSXBase.HTMLAttributes<HTMLTAlertElement>;
      't-badge': LocalJSX.TBadge & JSXBase.HTMLAttributes<HTMLTBadgeElement>;
      't-button': LocalJSX.TButton & JSXBase.HTMLAttributes<HTMLTButtonElement>;
      't-card': LocalJSX.TCard & JSXBase.HTMLAttributes<HTMLTCardElement>;
      't-carousel': LocalJSX.TCarousel & JSXBase.HTMLAttributes<HTMLTCarouselElement>;
      't-divider': LocalJSX.TDivider & JSXBase.HTMLAttributes<HTMLTDividerElement>;
      't-icon': LocalJSX.TIcon & JSXBase.HTMLAttributes<HTMLTIconElement>;
      't-input': LocalJSX.TInput & JSXBase.HTMLAttributes<HTMLTInputElement>;
      't-input-error': LocalJSX.TInputError & JSXBase.HTMLAttributes<HTMLTInputErrorElement>;
      't-input-group': LocalJSX.TInputGroup & JSXBase.HTMLAttributes<HTMLTInputGroupElement>;
      't-input-label': LocalJSX.TInputLabel & JSXBase.HTMLAttributes<HTMLTInputLabelElement>;
      't-link': LocalJSX.TLink & JSXBase.HTMLAttributes<HTMLTLinkElement>;
      't-modal': LocalJSX.TModal & JSXBase.HTMLAttributes<HTMLTModalElement>;
      't-progress-bar': LocalJSX.TProgressBar & JSXBase.HTMLAttributes<HTMLTProgressBarElement>;
      't-slider': LocalJSX.TSlider & JSXBase.HTMLAttributes<HTMLTSliderElement>;
      't-switch': LocalJSX.TSwitch & JSXBase.HTMLAttributes<HTMLTSwitchElement>;
      't-tag': LocalJSX.TTag & JSXBase.HTMLAttributes<HTMLTTagElement>;
      't-text': LocalJSX.TText & JSXBase.HTMLAttributes<HTMLTTextElement>;
      't-toast': LocalJSX.TToast & JSXBase.HTMLAttributes<HTMLTToastElement>;
    }
  }
}


