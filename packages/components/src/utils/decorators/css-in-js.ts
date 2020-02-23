import { Host, getElement } from '@stencil/core';
import { VNode, ComponentInterface } from '@stencil/core/dist/declarations';
import jss, { StyleSheet } from 'jss';
import preset from 'jss-preset-default';
import { combineStyles, theme } from '../utils';
jss.setup(preset());

const supportsConstructibleStylesheets = (() => {
  try {
    return !!new CSSStyleSheet();
  } catch (e) {
    return false;
  }
})();

declare type CssInJsDecorator = (
  target: ComponentInterface,
  propertyKey: string
) => void;

export function CssInJs(
  styles: object,
  opts: ConstructibleStyleOptions = {}
): CssInJsDecorator {
  return (target: ComponentInterface, propertyKey: string) => {
    if (!opts.cacheKeyProperty) {
      opts.cacheKeyProperty = propertyKey;
    }

    const { componentWillLoad, render } = target;
    if (!componentWillLoad) {
      // tslint:disable-next-line: no-console
      console.warn(
        `ConstructibleStyle requires you to have a \`componentWillLoad\` lifecycle method in \`${target.constructor.name}\`. Failure to add this function may cause ConstructibleStyle to fail due to StencilJS build optimizations.`
      );
    }

    if (supportsConstructibleStylesheets) {
      target.componentWillLoad = function() {
        const withDefaultTheme = combineStyles(styles, theme().Button);
        const withThemeOverrides = this.theme
          ? combineStyles(withDefaultTheme, this.theme.Button)
          : withDefaultTheme;
        const cssText: StyleSheet = jss.createStyleSheet(
          combineStyles(withThemeOverrides, this.styles)
        );
        const willLoadResult =
          componentWillLoad && componentWillLoad.call(this);
        const host = getElement(this);
        const root = (host.shadowRoot || host) as any;
        this[propertyKey] = cssText as StyleSheet;
        root.adoptedStyleSheets = [
          ...(root.adoptedStyleSheets || []),
          getOrCreateStylesheet(this, target, cssText, opts),
        ];

        return willLoadResult;
      };
    } else {
      target.render = function() {
        const cssText =
          typeof this[propertyKey] === 'function'
            ? this[propertyKey]()
            : this[propertyKey];
        let renderedNode: VNode = render.call(this);

        if (isHost(renderedNode)) {
          appendStyleToHost(renderedNode, target.constructor.name, cssText);
        } else {
          renderedNode = (`<Host>${renderedNode}</Host>` as unknown) as VNode;

          if (!('attachShadow' in HTMLElement.prototype)) {
            appendStyleToHost(renderedNode, target.constructor.name, cssText);
          } else {
            if (!target.__constructableStyle) {
              const style = document.createElement('style');
              style.setAttribute('type', 'text/css');
              style.setAttribute(
                'constructible-style',
                target.constructor.name
              );
              style.innerHTML = cssText;
              target.__constructableStyle = style;
              document.head.appendChild(style);
            }
          }
        }

        return renderedNode;
      };
    }
  };
}

function appendStyleToHost(node, targetName, cssText) {
  (getHostChildren(node) || []).push(
    `<style type="text/css" constructible-style=${targetName}>${cssText}</style>`
  );
}

function getOrCreateStylesheet(
  instance: ComponentInterface,
  target: ComponentInterface,
  cssText: StyleSheet,
  opts: ConstructibleStyleOptions
): CSSStyleSheet {
  if (!target.__constructableStyle) {
    target.__constructableStyle = {};
  }

  const key = instance[opts.cacheKeyProperty];

  if (!target.__constructableStyle[key]) {
    target.__constructableStyle[key] = new CSSStyleSheet();
    target.__constructableStyle[key].replace(cssText.toString());
  }

  return target.__constructableStyle[key];
}

function isHost(node): boolean {
  for (const prop in node) {
    if (node.hasOwnProperty(prop)) {
      if (node[prop] === Host) {
        return true;
      }
    }
  }
  return false;
}

function getHostChildren(node): string[] {
  for (const prop in node) {
    if (node.hasOwnProperty(prop)) {
      if (Array.isArray(node[prop])) {
        return node[prop];
      }
    }
  }
}

export interface ConstructibleStyleOptions {
  cacheKeyProperty?: string;
}
